// Regression suite for the language/pricing/metadata repair.
// See AUDIT-REPAIR-BEFORE-STATE.md and KEYWESTKATE-CODEBASE-AUDIT.md for the
// incidents each of these guards against.
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test.describe('Pricing', () => {
  test('Blueprint page shows $5,000 for Complete Brand Identity and Website Strategy & Design, after JS fully loads', async ({ page }) => {
    await page.goto('/blueprint.html');
    await page.waitForLoadState('networkidle');
    const prices = await page.locator('.bp-phase__days').allInnerTexts();
    const dollarPrices = prices.filter(p => p.includes('$5,000'));
    expect(dollarPrices.length).toBeGreaterThanOrEqual(2);
    // spot check tag rows are the right two services
    await expect(page.locator('text=COMPLETE BRAND IDENTITY').first()).toBeVisible();
    await expect(page.locator('text=WEBSITE STRATEGY & DESIGN').first()).toBeVisible();
  });

  test('Blueprint price text is identical pre- and post- translation initialization (no JS-driven change on English load)', async ({ page }) => {
    // Intercept the very first paint by reading the raw HTML response directly (pre-JS)
    const response = await page.goto('/blueprint.html');
    const rawHtml = await response.text();
    const preJsMatches = (rawHtml.match(/Starting at \$5,000/g) || []).length;
    expect(preJsMatches).toBeGreaterThanOrEqual(2);

    await page.waitForLoadState('networkidle');
    const postJsPrices = await page.locator('.bp-phase__days').allInnerTexts();
    const postJsMatches = postJsPrices.filter(p => p.includes('$5,000')).length;
    expect(postJsMatches).toBe(preJsMatches);
  });
});

test.describe('$999 offer naming', () => {
  const CANONICAL = 'The $999 Summer Digital Reset';

  test('Homepage names the offer correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('.summer-teaser__title')).toHaveText(CANONICAL);
  });

  test('Summer sales page title and H1 name the offer correctly', async ({ page }) => {
    await page.goto('/summerspecial.html');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle(/\$999 Summer Digital Reset/);
    await expect(page.locator('h1').first()).toHaveText(CANONICAL);
  });

  test('FAQ questions name the offer correctly', async ({ page }) => {
    await page.goto('/faq.html');
    await page.waitForLoadState('networkidle');
    const questions = await page.locator('.faq-row__q').allInnerTexts();
    const summerQuestions = questions.filter(q => /summer/i.test(q));
    expect(summerQuestions.length).toBeGreaterThan(0);
    for (const q of summerQuestions) {
      expect(q).toContain('$999 Summer Digital Reset');
    }
  });

  test('Connect form dropdown and checkbox name the offer correctly', async ({ page }) => {
    await page.goto('/connect.html');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('option[value="summer_special"]')).toHaveText('The $999 Summer Digital Reset');
    const checkboxLabel = page.locator('[data-i18n="cn.summer_label_new"]');
    await expect(checkboxLabel).toHaveText('I am interested in the $999 Summer Digital Reset');
  });

  test('No page uses the retired names "Summer Website Special" or "Apply for a Website Reset"', async ({ page }) => {
    for (const url of ['/', '/blueprint.html', '/process.html', '/faq.html', '/summerspecial.html', '/connect.html']) {
      await page.goto(url);
      await page.waitForLoadState('networkidle');
      const bodyText = await page.locator('body').innerText();
      expect(bodyText).not.toContain('Summer Website Special');
      expect(bodyText).not.toContain('Apply for a Website Reset');
    }
  });
});

test.describe('Process-page CTA', () => {
  test('CTA reads "Apply for the Summer Digital Reset" after page load, with matching accessible name', async ({ page }) => {
    await page.goto('/process.html');
    await page.waitForLoadState('networkidle');
    const cta = page.locator('a[data-i18n="proc.cta_btn"]');
    await expect(cta).toHaveText('Apply for the Summer Digital Reset');
    // accessible name must match visible text (no aria-label override)
    const accessibleName = await cta.getAttribute('aria-label');
    expect(accessibleName).toBeNull();
    // Netlify's pretty_urls processing rewrites "connect.html" to "/connect"
    // in the served HTML — both are valid, correct destinations, so accept either form.
    const href = await cta.getAttribute('href');
    expect(['connect.html', '/connect']).toContain(href);
  });
});

async function navigateViaNav(page, htmlHref) {
  // Netlify's pretty_urls processing rewrites "*.html" links to extensionless
  // paths in production, so match on either form of the href.
  const extensionless = '/' + htmlHref.replace(/\.html$/, '');
  const selector = `a[href="${htmlHref}"], a[href="${extensionless}"]`;
  // On mobile viewports the primary nav is hidden behind a burger menu;
  // open it first if it's visible and click the link inside the drawer
  // specifically, since the desktop nav link stays in the DOM (hidden).
  const burger = page.locator('#burger');
  if (await burger.isVisible()) {
    await burger.click();
    await page.locator(`#drawer :is(${selector})`).first().click();
  } else {
    await page.locator(selector).first().click();
  }
}

test.describe('Language persistence', () => {
  test('Switching to Spanish and navigating to another page preserves Spanish', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.click('.lang-toggle');
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');

    await navigateViaNav(page, 'blueprint.html');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    await expect(page.locator('.lang-toggle').first()).toHaveAttribute('data-current', 'es');
  });

  test('Switching back to English and navigating preserves English', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.click('.lang-toggle'); // -> es
    await page.click('.lang-toggle'); // -> en
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');

    await navigateViaNav(page, 'process.html');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('A new browser context defaults to English', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await context.close();
  });
});

test.describe('Metadata', () => {
  const PAGES = ['/', '/blueprint.html', '/process.html', '/faq.html', '/summerspecial.html', '/website-package.html', '/connect.html', '/terms.html', '/privacy.html'];

  test('No page metadata or body text points to baldwinandco.com', async ({ page }) => {
    for (const url of PAGES) {
      await page.goto(url);
      const html = await page.content();
      expect(html).not.toContain('baldwinandco.com');
    }
  });

  test('Homepage social metadata no longer contains the obsolete "Luxury Digital Restructuring" positioning', async ({ page }) => {
    await page.goto('/');
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    const ogDesc = await page.locator('meta[property="og:description"]').getAttribute('content');
    expect(ogTitle).not.toContain('Luxury Digital Restructuring');
    expect(ogDesc).not.toContain('rebuild the digital foundation');
    const html = await page.content();
    expect(html).not.toContain('14–30 day intensives');
  });

  test('Structured data parses successfully and uses keywestkate.com', async ({ page }) => {
    await page.goto('/');
    const jsonLdText = await page.locator('script[type="application/ld+json"]').first().innerText();
    const data = JSON.parse(jsonLdText); // throws if invalid JSON
    expect(data.url).toContain('keywestkate.com');
    expect(data.url).not.toContain('baldwinandco.com');
  });

  test('Every page has a canonical link pointing to keywestkate.com', async ({ page }) => {
    for (const url of PAGES) {
      await page.goto(url);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toContain('keywestkate.com');
    }
  });
});

test.describe('Translation data integrity', () => {
  test('No duplicate translation keys in lang.js', () => {
    const src = fs.readFileSync(path.join(__dirname, '..', 'lang.js'), 'utf8');
    const start = src.indexOf('const TRANSLATIONS = {');
    const end = src.indexOf('\n};', start);
    const body = src.slice(start, end);
    const keyRe = /^\s*'([a-zA-Z0-9_.]+)':\s*\{/gm;
    const seen = new Set();
    const dupes = [];
    let m;
    while ((m = keyRe.exec(body)) !== null) {
      if (seen.has(m[1])) dupes.push(m[1]);
      seen.add(m[1]);
    }
    expect(dupes).toEqual([]);
    expect(seen.size).toBeGreaterThan(0);
  });
});
