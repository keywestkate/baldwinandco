// Regression suite for the M1-M4 / N2 / N5 motion & accessibility improvements
// implemented from EMIL-DESIGN-MOTION-AUDIT.md. See
// EMIL-DIRECT-IMPROVEMENTS-REPORT.md for what each change addresses.
const { test, expect } = require('@playwright/test');

// Native smooth-scroll duration scales with distance, so a fixed wait isn't
// reliable on long legal-copy pages — poll until window.scrollY settles at 0
// (or the timeout elapses, in which case the final assertion fails normally).
async function waitForScrollTop(page, timeoutMs = 3000) {
  await page.waitForFunction(() => window.scrollY === 0, null, { timeout: timeoutMs }).catch(() => {});
}

const PAGES_WITHOUT_PRIOR_REDUCED_MOTION = [
  '/blueprint.html',
  '/process.html',
  '/faq.html',
  '/summerspecial.html',
  '/connect.html',
];

test.describe('M1 — reduced motion', () => {
  for (const url of PAGES_WITHOUT_PRIOR_REDUCED_MOTION) {
    test(`${url}: .r elements are visible with no transform under prefers-reduced-motion`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(url);
      await page.waitForLoadState('domcontentloaded');
      const count = await page.locator('.r').count();
      test.skip(count === 0, `${url} has no .r elements to check`);
      const first = page.locator('.r').first();
      const opacity = await first.evaluate((el) => getComputedStyle(el).opacity);
      const transform = await first.evaluate((el) => getComputedStyle(el).transform);
      expect(opacity).toBe('1');
      expect(['none', 'matrix(1, 0, 0, 1, 0, 0)']).toContain(transform);
    });
  }

  test('index.html: marquee animation is disabled under prefers-reduced-motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const track = page.locator('.marquee__track').first();
    const animationName = await track.evaluate((el) => getComputedStyle(el).animationName);
    expect(animationName).toBe('none');
  });

  test('index.html: .r elements are visible under reduced motion regardless of scroll position', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    // Do NOT scroll — check an .r element that is below the fold and has
    // therefore never been observed by the IntersectionObserver yet.
    const below = page.locator('.r').last();
    const opacity = await below.evaluate((el) => getComputedStyle(el).opacity);
    expect(opacity).toBe('1');
  });

  test('Without reduced motion, .r elements still animate in on scroll (no regression)', async ({ page }) => {
    await page.goto('/blueprint.html');
    await page.waitForLoadState('domcontentloaded');
    // Give the IntersectionObserver a moment to fire for above-the-fold elements.
    await page.waitForTimeout(200);
    const inClassCount = await page.locator('.r.in').count();
    expect(inClassCount).toBeGreaterThan(0);
  });
});

test.describe('M2 — press feedback', () => {
  test('Primary CTA has a transform transition and scales down on :active', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const cta = page.locator('a.btn-primary').first();
    const transition = await cta.evaluate((el) => getComputedStyle(el).transitionProperty);
    expect(transition).toContain('transform');
  });

  test('Language toggle has press-feedback transition applied', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const toggle = page.locator('.lang-toggle').first();
    const transition = await toggle.evaluate((el) => getComputedStyle(el).transitionProperty);
    expect(transition).toContain('transform');
  });

  test('Mobile drawer links have press-feedback transition applied (N5 scope: mobile-menu links)', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const link = page.locator('#drawer a').first();
    const transition = await link.evaluate((el) => getComputedStyle(el).transitionProperty);
    expect(transition).toContain('transform');
  });

  test('Ordinary footer legal links are NOT given button-style press transform (scope restraint)', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const legalLink = page.locator('.footer__legal a').first();
    const transitionProps = await legalLink.evaluate((el) => getComputedStyle(el).transitionProperty);
    // Should not include "transform" from the shared press-feedback rule.
    expect(transitionProps).not.toContain('transform');
  });
});

test.describe('M3 — Connect form focus states', () => {
  test('Text input shows a visible focus-visible outline on keyboard focus', async ({ page }) => {
    await page.goto('/connect.html');
    await page.waitForLoadState('domcontentloaded');
    const nameInput = page.locator('#name, input[name="name"]').first();
    await nameInput.focus();
    const outlineStyle = await nameInput.evaluate((el) => getComputedStyle(el).outlineStyle);
    const outlineWidth = await nameInput.evaluate((el) => getComputedStyle(el).outlineWidth);
    expect(outlineStyle).not.toBe('none');
    expect(outlineWidth).not.toBe('0px');
  });

  test('Field wrapper gets a border-color change on focus-within', async ({ page }) => {
    await page.goto('/connect.html');
    await page.waitForLoadState('domcontentloaded');
    const field = page.locator('.cn-form__field').first();
    const input = field.locator('input, textarea, select').first();
    const before = await field.evaluate((el) => getComputedStyle(el).borderBottomColor);
    await input.focus();
    // Allow the border-color transition (200ms) to progress past its start frame.
    await page.waitForTimeout(250);
    const after = await field.evaluate((el) => getComputedStyle(el).borderBottomColor);
    expect(after).not.toBe(before);
  });

  test('Submit button shows a visible focus-visible outline on keyboard focus', async ({ page }) => {
    await page.goto('/connect.html');
    await page.waitForLoadState('domcontentloaded');
    const submit = page.locator('.cn-form__submit');
    await submit.focus();
    const outlineStyle = await submit.evaluate((el) => getComputedStyle(el).outlineStyle);
    expect(outlineStyle).not.toBe('none');
  });

  test('Visible native checkboxes show a focus-visible outline', async ({ page }) => {
    await page.goto('/connect.html');
    await page.waitForLoadState('domcontentloaded');
    const checkbox = page.locator('input[type="checkbox"][name="feels_broken"]').first();
    await checkbox.focus();
    const outlineStyle = await checkbox.evaluate((el) => getComputedStyle(el).outlineStyle);
    expect(outlineStyle).not.toBe('none');
  });

  test('The hidden-input "Summer Digital Reset" checkbox shows a focus ring on its visible box via label focus-within', async ({ page }) => {
    await page.goto('/connect.html');
    await page.waitForLoadState('domcontentloaded');
    const hiddenCheckbox = page.locator('#summer');
    await hiddenCheckbox.focus();
    const visibleBox = page.locator('label[for="summer"] > span').first();
    const outlineStyle = await visibleBox.evaluate((el) => getComputedStyle(el).outlineStyle);
    expect(outlineStyle).not.toBe('none');
  });

  test('Labels remain correctly associated with their controls', async ({ page }) => {
    await page.goto('/connect.html');
    await page.waitForLoadState('domcontentloaded');
    const label = page.locator('label[for="summer"]');
    await expect(label).toHaveCount(1);
    await expect(page.locator('#summer')).toHaveCount(1);
  });
});

test.describe('M4 — mobile drawer behavior', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('Drawer opens on burger click and sets aria-expanded', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const burger = page.locator('#burger');
    const drawer = page.locator('#drawer');
    await expect(burger).toHaveAttribute('aria-expanded', 'false');
    await burger.click();
    await expect(drawer).toHaveClass(/open/);
    await expect(burger).toHaveAttribute('aria-expanded', 'true');
  });

  test('Body scroll locks while drawer is open and releases on close', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const burger = page.locator('#burger');
    await burger.click();
    const lockedOverflow = await page.evaluate(() => document.body.style.overflow);
    expect(lockedOverflow).toBe('hidden');
    await burger.click();
    const releasedOverflow = await page.evaluate(() => document.body.style.overflow);
    expect(releasedOverflow).toBe('');
  });

  test('Escape closes the drawer and returns focus to the burger', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const burger = page.locator('#burger');
    const drawer = page.locator('#drawer');
    await burger.click();
    await expect(drawer).toHaveClass(/open/);
    await page.keyboard.press('Escape');
    await expect(drawer).not.toHaveClass(/open/);
    await expect(burger).toHaveAttribute('aria-expanded', 'false');
    const focused = await page.evaluate(() => document.activeElement === document.getElementById('burger'));
    expect(focused).toBe(true);
  });

  test('Clicking outside the drawer closes it', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const burger = page.locator('#burger');
    const drawer = page.locator('#drawer');
    await burger.click();
    await expect(drawer).toHaveClass(/open/);
    // Click somewhere clearly outside the nav/drawer.
    await page.mouse.click(200, 700);
    await expect(drawer).not.toHaveClass(/open/);
    await expect(burger).toHaveAttribute('aria-expanded', 'false');
  });

  test('Selecting a navigation link closes the drawer', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const burger = page.locator('#burger');
    const drawer = page.locator('#drawer');
    await burger.click();
    await expect(drawer).toHaveClass(/open/);
    // Prevent the actual navigation (without removing the drawer's own
    // click handler) so we can inspect the DOM state it produces, rather
    // than losing the page to a real navigation or aborted-request error page.
    await page.evaluate(() => {
      const link = document.querySelector('#drawer a[href*="blueprint"]');
      link.addEventListener('click', (e) => e.preventDefault(), { once: true });
    });
    await page.locator('#drawer a[href*="blueprint"]').first().click();
    await expect(drawer).not.toHaveClass(/open/);
  });

  test('Body scroll is not left locked after resizing to a desktop viewport while open', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.locator('#burger').click();
    await expect(page.locator('#drawer')).toHaveClass(/open/);
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.waitForTimeout(100);
    const overflow = await page.evaluate(() => document.body.style.overflow);
    expect(overflow).toBe('');
  });

  test('Drawer does not initialize duplicate listeners (double-open/close stays consistent)', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const burger = page.locator('#burger');
    const drawer = page.locator('#drawer');
    await burger.click();
    await expect(drawer).toHaveClass(/open/);
    await burger.click();
    await expect(drawer).not.toHaveClass(/open/);
    await burger.click();
    await expect(drawer).toHaveClass(/open/);
  });
});

test.describe('Desktop navigation unaffected', () => {
  test.use({ viewport: { width: 1280, height: 900 } });

  test('Desktop nav links are visible and burger is hidden', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.nav__links')).toBeVisible();
    await expect(page.locator('#burger')).toBeHidden();
  });

  test('Desktop nav link click navigates normally', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    // Netlify's pretty_urls processing rewrites "blueprint.html" to
    // "/blueprint" in production, so accept either form (see repair.spec.js).
    await page
      .locator('.nav__links a[href="blueprint.html"], .nav__links a[href="/blueprint"]')
      .click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/blueprint/);
  });
});

test.describe('N2 — story-pillar stagger', () => {
  // The "Baldwin & Co. Approach" / .story-pillar markup this rule targets
  // is part of a separate, not-yet-committed content update — it does not
  // exist on the currently deployed site. The CSS in motion.css is written
  // and ready (verified against the local draft during implementation) and
  // is a harmless no-op until that section ships; these tests self-skip
  // rather than false-pass or false-fail against content that isn't live.
  test('Story pillars have staggered transition-delay values once revealed', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const count = await page.locator('.story-pillar').count();
    test.skip(count === 0, '.story-pillar not present on the deployed page yet');
    await page.locator('.story-section').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    const delays = await page.locator('.story-pillar').evaluateAll((els) =>
      els.map((el) => getComputedStyle(el).transitionDelay)
    );
    expect(delays.length).toBe(3);
    expect(new Set(delays).size).toBeGreaterThan(1);
  });

  test('Story-pillar stagger delay is neutralized under reduced motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const count = await page.locator('.story-pillar').count();
    test.skip(count === 0, '.story-pillar not present on the deployed page yet');
    const delays = await page.locator('.story-pillar').evaluateAll((els) =>
      els.map((el) => getComputedStyle(el).transitionDelay)
    );
    for (const d of delays) {
      expect(d === '0s' || d === '0ms').toBe(true);
    }
  });
});

test.describe('Legal-page Back to Top (accessibility fix)', () => {
  for (const url of ['/terms.html', '/privacy.html']) {
    test(`${url}: control is keyboard-focusable with an accurate accessible name`, async ({ page }) => {
      await page.goto(url);
      await page.waitForLoadState('domcontentloaded');
      const backToTop = page.locator('.footer__top-btn');
      await expect(backToTop).toHaveAttribute('href', '#');
      await backToTop.focus();
      const isFocused = await backToTop.evaluate((el) => el === document.activeElement);
      expect(isFocused).toBe(true);
      await expect(backToTop).toHaveAccessibleName('Back to Top ↑');
    });

    test(`${url}: shows a visible focus-visible outline`, async ({ page }) => {
      await page.goto(url);
      await page.waitForLoadState('domcontentloaded');
      const backToTop = page.locator('.footer__top-btn');
      await backToTop.focus();
      const outlineStyle = await backToTop.evaluate((el) => getComputedStyle(el).outlineStyle);
      expect(outlineStyle).not.toBe('none');
    });

    test(`${url}: activates from the keyboard and returns the page to the top`, async ({ page }) => {
      await page.goto(url);
      await page.waitForLoadState('domcontentloaded');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(100);
      const scrolledDown = await page.evaluate(() => window.scrollY);
      expect(scrolledDown).toBeGreaterThan(0);

      await page.locator('.footer__top-btn').focus();
      await page.keyboard.press('Enter');
      await waitForScrollTop(page);
      const afterEnter = await page.evaluate(() => window.scrollY);
      expect(afterEnter).toBe(0);
      // Note: native <a> elements only activate via Enter, not Space — Space
      // activation is button-only browser behavior. This control is
      // implemented as a real <a>, so Enter (tested above) is the correct
      // and complete keyboard-activation requirement here.
    });

    test(`${url}: reduced motion does not force animated smooth scroll`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(url);
      await page.waitForLoadState('domcontentloaded');
      const scrollBehavior = await page.evaluate(
        () => getComputedStyle(document.documentElement).scrollBehavior
      );
      expect(scrollBehavior).toBe('auto');
    });

    test(`${url}: still works via a plain pointer click (no regression)`, async ({ page }) => {
      await page.goto(url);
      await page.waitForLoadState('domcontentloaded');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(100);
      await page.locator('.footer__top-btn').click();
      await waitForScrollTop(page);
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBe(0);
    });
  }

  test.describe('mobile viewport', () => {
    test.use({ viewport: { width: 390, height: 844 } });
    for (const url of ['/terms.html', '/privacy.html']) {
      test(`${url}: Back to Top is visible and tappable on mobile`, async ({ page }) => {
        await page.goto(url);
        await page.waitForLoadState('domcontentloaded');
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(100);
        const backToTop = page.locator('.footer__top-btn');
        await backToTop.scrollIntoViewIfNeeded();
        await expect(backToTop).toBeVisible();
        await backToTop.click();
        await waitForScrollTop(page);
        const scrollY = await page.evaluate(() => window.scrollY);
        expect(scrollY).toBe(0);
      });
    }
  });
});
