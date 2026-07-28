# Direct Motion & Accessibility Improvements — Implementation Report

Implements M1–M4, N2, and N5 from `EMIL-DESIGN-MOTION-AUDIT.md`, plus one additional accessibility fix approved before deployment: the legal-page "Back to Top" controls. Applied `/emil-design-eng` principles throughout (restrained `:active` scale, `:focus-visible`-only rings, reduced-motion means gentler not zero, short stagger delays, transitions over keyframes for interruptible UI).

Not implemented, per scope: N1 (hero entrance) and M5 (testimonial crossfade) — both still need a visual prototype first, as specified.

**Status: implemented and validated locally; deployment to preview and production is covered later in this document once both pass.**

---

## 1. Every file changed

| File | Type | What changed |
|---|---|---|
| `motion.css` | **New** | Shared stylesheet: motion tokens, press feedback (M2/N5), focus-visible rules (M3), N2 story-pillar stagger, consolidated reduced-motion rules (M1) |
| `nav-drawer.js` | **New** | Shared drawer behavior: scroll lock, Escape, click-outside, close-on-nav-link, focus return, `aria-expanded`, duplicate-init guard (M4) |
| `tests/motion-improvements.spec.js` | **New** | Playwright tests covering M1–M4, N2 (self-skipping until its content ships — see §7), a desktop-regression check, and the legal-page Back to Top fix |
| `index.html` | Modified | Linked `motion.css`/`nav-drawer.js`; removed local burger listener (now shared); removed local duplicate reduced-motion block (now consolidated in `motion.css`) |
| `blueprint.html` | Modified | Linked shared files; removed local burger listener |
| `process.html` | Modified | Linked shared files; removed local burger listener |
| `faq.html` | Modified | Linked shared files; removed local burger listener |
| `summerspecial.html` | Modified | Linked shared files; removed local burger listener |
| `connect.html` | Modified | Linked shared files; removed local burger listener |
| `terms.html` | Modified | Linked shared files; removed local burger listener (was the file's only script); replaced the `<span onclick>` Back to Top control with a semantic `<a href="#">` |
| `privacy.html` | Modified | Linked shared files; removed local burger listener (was the file's only script); replaced the `<span onclick>` Back to Top control with a semantic `<a href="#">` |
| `website-package.html` | Modified | Linked shared files; removed **only** the burger sub-block from its script — its distinct reduced-motion JS, hero-split animations, and the in-progress "Try me" callout were left completely untouched |

**Not touched, as required:** `lang.js`, all prices/offer names/EN·ES copy, canonical tags, JSON-LD, Open Graph metadata, contact-form field options, `tests/repair.spec.js` (only run, never edited), `bigpine/index.html`, `New-Look-July-13/`, the unfinished "Try me" callout code inside `website-package.html`.

---

## 2. Reduced-motion behavior added (M1)

Single source of truth, consolidated into `motion.css`, loaded on all 9 pages:

```css
@media (prefers-reduced-motion: reduce) {
  .r { opacity: 1 !important; transform: none !important; transition: none !important; }
  .story-pillar:nth-of-type(1).in, ... { transition-delay: 0ms !important; }
  .marquee__track { animation: none !important; }
  html { scroll-behavior: auto !important; }
  /* press-feedback :active transforms neutralized too — see §3 */
}
```

- Extended to the 7 pages that previously had no reduced-motion handling at all: blueprint, process, faq, summerspecial, connect, terms, privacy.
- `index.html`'s own local duplicate of this exact rule was removed and replaced with a comment pointing to `motion.css`, per the "avoid duplicating conflicting rules" requirement.
- `website-package.html`'s reduced-motion handling is **structurally different** (JS-driven — it adds `.in` immediately via `prefersReduced` check rather than relying purely on CSS) and is entangled with its own hero-split `@keyframes` system and the untouchable "Try me" callout. It was **left completely untouched** rather than consolidated — `motion.css`'s rule still applies there too, redundantly but harmlessly, so the page gets the same guarantee without any risk to its existing code.
- `.r` elements are guaranteed visible via `opacity: 1 !important` on the base `.r` selector (not `.r.in`), so a reduced-motion visitor sees content immediately regardless of scroll position or whether the page's `IntersectionObserver` has fired yet — verified by a dedicated test that checks a below-the-fold `.r` element without ever scrolling to it.
- `scroll-behavior: smooth` (previously unconditional on all 9 pages) is now overridden to `auto` under reduced motion.

## 3. Press-feedback treatment added (M2, N5)

Restrained `:active` feedback, 120ms, applied via `motion.css` to: `.btn-primary`, `.btn-outline`, `.btn-outline--white`, `.btn`, `.founder__btn`, `.nav__summer`, `.lang-toggle`, `.cn-form__submit`, `.footer__connect`, `.faq-contact-btn`, `.compare-btn`, and mobile-drawer links (`.nav__drawer a`).

```css
.btn-primary:active, .btn-outline:active, ... {
  transform: scale(0.98);
}
.nav__burger:active {
  opacity: 0.6; /* scale would visually distort the three bars */
}
```

- Ordinary inline text links (footer legal links, desktop `.nav__links a`, body copy) were deliberately **excluded** — verified by a dedicated test asserting `.footer__legal a` does not receive the shared transform transition.
- N5 (language-toggle feedback) is covered by including `.lang-toggle` in the same shared rule rather than as a separate implementation.
- Neutralized to `transform: none` under reduced motion (opacity/color feedback is retained; only the movement is removed, per Emil's "gentler, not zero" guidance).

**One implementation detail worth flagging:** the shared rule initially had no visible effect because `motion.css` was linked *before* each page's own `<style>` block, so the page's own (weaker) `transition` declaration on the same selectors won the cascade by source order at equal specificity. Fixed by moving the `<link>`/`<script>` tags to load immediately before `</head>`, after each page's own styles — confirmed by a test that checks the computed `transition-property` actually includes `transform`.

## 4. Form focus-state treatment (M3)

```css
a:focus-visible, button:focus-visible, input:focus-visible,
select:focus-visible, textarea:focus-visible, [tabindex]:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 2px;
}
.cn-form__field:focus-within { border-color: var(--gold); }
```

- Covers every text input, email, phone, textarea, select, and the submit button on the Connect form via the generic `:focus-visible` rule, plus a `:focus-within` border-color shift on the field wrapper as a second, reinforcing signal (the fields are borderless/underline-style, so outline alone was judged not strong enough against the actual background).
- The 5 native "what feels broken" checkboxes are covered by the same generic rule (they're visible, not hidden).
- The one non-generic case: the "$999 Summer Digital Reset" interest checkbox uses a visually hidden native input (`opacity:0`) with a custom box drawn via an adjacent `<span>`. An outline on the input itself would be invisible (opacity:0 hides outlines too), so it gets a dedicated rule targeting the visible box instead:
  ```css
  label[for="summer"]:focus-within > span:first-child {
    outline: 2px solid var(--gold);
  }
  ```
- Uses `:focus-visible`/`:focus-within` exclusively — mouse/touch interaction never shows a ring, only keyboard and other non-pointer focus does.
- No form fields, labels, options, `name`/`id` attributes, or submission behavior were changed. Verified with a test asserting `label[for="summer"]` and `#summer` both still exist and are still paired.
- Colors reused: `var(--gold)` (`#b89a6a`), confirmed identical across all 9 pages' own `:root` before relying on it.

## 5. Mobile-menu behavior changes (M4)

New shared `nav-drawer.js`, replacing the identical-but-incomplete burger listener that was previously copy-pasted across all 9 pages:

| Behavior | Before | After |
|---|---|---|
| Body scroll while open | Unlocked — page scrolled behind the menu | `document.body.style.overflow = 'hidden'` while open, released on any close path |
| Escape key | No handling | Closes drawer, returns focus to the burger button |
| Click outside | No handling | Closes drawer (capture-phase listener, correctly ignores the same click that opens it) |
| Close on nav-link selection | Handled per-page already | Preserved, now shared |
| Focus restoration | None | Burger regains focus after Escape or its own toggle-close; **not** forced after a click-outside close, since the user's click already indicates where they meant to direct focus (matches standard disclosure/popover conventions — e.g. Radix Dialog's outside-click behavior) |
| `aria-expanded` | Set, but inconsistent quoting across files (`open` vs `'false'`) | Consistent, always a string `'true'`/`'false'` |
| `aria-controls` | Missing | Added: `burger` now points to `drawer`'s id |
| Keyboard focusability while closed | Drawer links were still `Tab`-reachable even while visually clipped by `max-height:0; overflow:hidden` | Drawer is set `inert` while closed (feature-detected via `'inert' in drawer`, no-op if unsupported) so its links are unreachable until opened |
| Viewport resize/rotate while open | Could leave scroll locked if resized past the mobile breakpoint | `matchMedia('(min-width: 801px)')` listener force-closes and unlocks |
| Back/forward navigation (bfcache) | Could restore a page with scroll still locked | `pageshow` listener releases the lock if the drawer isn't marked open |
| Duplicate initialization | N/A (no shared script existed) | Guarded via a `data-nav-drawer-init` attribute on the burger button |

Navigation destinations, drawer copy, and the language toggle were not touched. `website-package.html` got the identical shared behavior via the same script — only its local burger sub-block was removed; everything else in that file (including the Try-me callout) is untouched.

**Semantics decision:** the drawer was *not* given `role="dialog"`/`aria-modal="true"`. That implies full modal semantics (focus trapping, blocking interaction with the rest of the page) which this implementation doesn't provide and wasn't asked to. Instead: `aria-controls` + `aria-expanded` on the trigger (standard disclosure-button pattern) and `inert` on the drawer while closed (removes it from the accessibility tree and tab order without claiming modal behavior it doesn't have). This is a deliberate, restrained choice, flagged here in case a true focus-trapping modal pattern is wanted later.

## 6. Shared motion tokens created (§6 of the audit)

```css
:root {
  --motion-ease-out: cubic-bezier(.16, 1, .3, 1);
  --motion-ease-in-out: cubic-bezier(.77, 0, .175, 1);
  --motion-duration-press: 120ms;
  --motion-duration-fast: 200ms;
  --motion-duration-reveal: 800ms;
}
```

Scoped exactly to what this implementation touches (press feedback, focus transitions) — not a sitewide rewrite of the ~180 pre-existing hover transitions the audit catalogued under I1. Those are unchanged.

## 7. N2 implemented as specified

Story-pillar stagger ("Story First / Clarity Second / A Home for All of It"), exactly as the audit recommended:

```css
.story-pillar:nth-of-type(1).in { transition-delay: 0ms; }
.story-pillar:nth-of-type(2).in { transition-delay: 80ms; }
.story-pillar:nth-of-type(3).in { transition-delay: 160ms; }
```

No JS changes needed — pure CSS addition on top of the existing `.r`/`.in` mechanism. Neutralized under reduced motion.

**Important correction, found during preview deployment testing:** the `.story-pillar` / `.story-section` markup ("The Baldwin & Co. Approach") that this rule targets **does not exist on the currently deployed site**. It only exists in the separate, unfinished, not-yet-committed hero/story content rewrite sitting in the working tree (the same draft this task explicitly excludes — see the "Try me" / unrelated-work restrictions). During initial local implementation I verified this rule against that draft content, which was present in my working directory at the time, and mistakenly reported it as "verified live" — it wasn't verified against the actual deployed site, because the deployed site doesn't have this section yet.

**Net effect:** the CSS in `motion.css` is correct, harmless, and forward-compatible — it will activate automatically with zero further changes once that content is committed and deployed — but it currently has zero visible effect on production, because there's nothing on the live page for it to apply to. The corresponding tests now correctly self-skip (`test.skip`) when `.story-pillar` isn't present, rather than false-passing or false-failing against content that isn't live, matching the same pattern already used for `summerspecial.html`'s unused `.r` class.

## 8. Accessibility improvements (A1–A6 coverage)

| Audit item | Status |
|---|---|
| A1 — reduced-motion missing on 7/9 pages | **Fixed** — §2 above |
| A2 — no focus state on Connect form | **Fixed** — §4 above |
| A3 — zero `:active` feedback sitewide | **Fixed** — §3 above |
| A4 — unconditional `scroll-behavior: smooth` | **Fixed** — gated under reduced motion in `motion.css` |
| A5 — only one page had a `:focus-visible` style (FAQ accordion) | **Improved** — sitewide generic `:focus-visible` rule now covers every interactive element by default; the FAQ page's own existing `.faq-btn:focus-visible` rule is untouched and still takes precedence for that specific button (more specific selector) |
| A6 — mobile drawer had no focus trap/Escape, and (newly discovered while implementing M4) drawer links were keyboard-focusable while visually hidden | **Fixed** — §5 above, including the `inert` fix for the newly-surfaced focusability gap |
| Legal-page Back to Top keyboard-inaccessibility (flagged in §12 of this report, approved for fix before deployment) | **Fixed** — see §8a below |

---

## 8a. Legal-page "Back to Top" fix

`terms.html` and `privacy.html` had a `<span class="footer__top-btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">Back to Top ↑</span>` — a `<span>` is not natively focusable or keyboard-operable, so this control was invisible to keyboard users despite being fully visible and clickable for mouse/touch users.

**Fix:** replaced with a semantic anchor, matching the pattern the other 7 pages already use for the same control:

```html
<a href="#" class="footer__top-btn">Back to Top ↑</a>
```

Why this approach over a `<button type="button">` with a JS handler:
- The task's own preference order lists a plain anchor as correct "if no JavaScript is necessary" — and none is. `href="#"` natively navigates to the top of the document; no `onclick`, no inline handler, no new script needed.
- It matches the existing implementation on the other 7 pages exactly (`index.html`, `blueprint.html`, etc. all already use `<a href="#" class="footer__top-btn">`), so this is a consistency fix, not a new pattern.
- `scroll-behavior: smooth` (already set on `html` for these two pages) provides the animated scroll; `motion.css`'s existing reduced-motion rule (`html { scroll-behavior: auto !important }` under `prefers-reduced-motion: reduce`) — now loaded on these two pages as part of M1 — automatically satisfies "avoid animated scroll when reduced motion is requested" with no additional code.
- `:focus-visible` styling comes for free from `motion.css`'s sitewide generic rule (§4) — no page-specific CSS needed.
- Zero inline event handlers, per the requirement.

**Preserved:** visual appearance (identical CSS class, identical text and arrow glyph), scroll destination and behavior, and all surrounding footer/legal content — only the single element's tag name and its `onclick` attribute changed.

Not translated via `data-i18n` (matching these two pages' existing pattern — `terms.html`/`privacy.html` don't participate in the EN/ES system, unchanged from before this fix).

---

## 9. Tests added or updated

`tests/motion-improvements.spec.js` — new tests across desktop and mobile projects, covering:

1. Reduced-motion content stays visible (5 pages individually + index.html at an unscrolled position)
2. Reduced-motion neutralizes marquee (`animationName: 'none'`)
3. No-reduced-motion regression check (`.r.in` still appears normally)
4. Connect form controls show `:focus-visible` styling (text input, submit button, native checkbox, the hidden-input custom checkbox via its visible box, labels-still-associated)
5. Mobile drawer opens, sets `aria-expanded`
6. Body scroll locks while open, releases on close
7. Escape closes the drawer and returns focus to the trigger
8. Clicking outside closes the drawer
9. Selecting a menu link closes the drawer (tested by preventing the actual navigation so the resulting DOM state can be inspected, rather than losing the page to a real navigation)
10. No stuck scroll-lock after resizing to desktop while open
11. No duplicate-listener drift across repeated open/close cycles
12. Desktop nav unaffected (links visible, burger hidden, navigation still works)
13. N2 stagger present with motion, neutralized under reduced motion
14. Press-feedback transition present on buttons/toggle/drawer links, and deliberately absent on ordinary footer legal links (scope-restraint check)
15. Legal-page Back to Top: keyboard-focusable with an accurate accessible name, visible `:focus-visible` outline, activates via Enter and returns `window.scrollY` to `0`, reduced motion forces `scroll-behavior: auto` (not smooth), still works via plain pointer click, and remains visible/tappable on mobile — each checked on both `terms.html` and `privacy.html`

`tests/repair.spec.js` (the existing production-repair suite) was **run, not edited** — confirms pricing, offer-naming, metadata, and language-persistence behavior all still pass unchanged after this implementation.

---

## 10. Full validation results

```
$ node scripts/check-duplicate-keys.js
check-duplicate-keys: OK — 213 unique keys, no duplicates.

$ npx eslint lang.js scripts/check-duplicate-keys.js tests/repair.spec.js tests/motion-improvements.spec.js playwright.config.js nav-drawer.js
(no output — 0 errors, 0 warnings)

$ python3 -c "HTML sanity parse of all 9 pages"
index.html OK, blueprint.html OK, process.html OK, faq.html OK,
summerspecial.html OK, website-package.html OK, connect.html OK,
terms.html OK, privacy.html OK — ALL OK

$ npx playwright test   (desktop-chrome + mobile-chrome)
108 passed, 6 skipped (~25s)
```

Breakdown: 32 original production-repair tests × 2 viewports = 64, plus motion/accessibility and legal-page tests across both projects → 108 total passing.

6 skips, all expected and informational (never a false-pass or false-fail against content that isn't present):
- 2× (one per viewport): `summerspecial.html` defines the `.r` CSS class but doesn't apply it to any element in its markup (a pre-existing quirk noted in the original audit's dead-code observations, not something introduced by this change).
- 4× (two tests × two viewports): the N2 story-pillar tests — see the correction in §7 above. The `.story-pillar` markup they check isn't present on the currently deployed site (it belongs to a separate, unfinished content update), so these self-skip rather than false-passing.

**Confirmed per Step 2's checklist:**
- All 32 original production-repair tests pass unchanged (verified both individually and within the full run)
- All motion-improvement tests pass, including the new legal-page Back to Top tests
- Pricing remains $5,000 for Complete Brand Identity and Website Strategy & Design (`blueprint.html:371,391`)
- "$999 Summer Digital Reset" naming unchanged (13 matches in `lang.js`, consistent with the prior repair)
- Language persistence (Spanish↔English across navigation) still passes
- `lang.js`: 213 unique keys, 0 duplicates
- No production-repair files (`lang.js`, pricing, offer names, metadata, canonical tags, JSON-LD, contact-form options) were touched by this work

No production code outside the approved scope was touched; `git status` confirms `bigpine/index.html` and `New-Look-July-13/` carry only their pre-existing, pre-session diffs.

---

## 11. Screenshots / visual notes

- **Mobile drawer, open** (390×844, iPhone-width viewport): all 7 nav items visible, language toggle ("VER EN ESPAÑOL") retained in its usual position, hero content correctly dimmed/scrollable behind — confirms drawer open state and body-scroll-lock don't break layout.
- **Connect form, keyboard focus on "Your Name"** (1280×900 desktop): a clear gold 2px outline is visible around the focused field, offset from the field's own underline border — confirms M3's fix is visibly working, not just present in computed styles.
- **Desktop nav, unaffected**: full horizontal nav bar (Home / Blueprint / Process / FAQ / Website Package / Summer Digital Reset / Contact / language toggle) renders exactly as before, burger hidden — confirms M4's changes didn't alter desktop presentation.

(Screenshots captured during this session; not embedded in this markdown file — available in the session's temp output if needed for review.)

---

## 12. Issues that remain unresolved / open questions

1. **`website-package.html`'s reduced-motion handling is now technically duplicated** (its own JS-driven approach plus `motion.css`'s CSS-only rule both apply, redundantly but harmlessly). Not fixed, by design — untangling it risked touching Try-me-adjacent code. If/when the Try-me work is finalized and committed, this would be a good time to properly consolidate that page's reduced-motion logic into the shared approach too.
2. **`role`/semantics on the drawer** is a deliberate middle-ground choice (disclosure pattern, not a true modal) — flagged in §5 in case a stricter modal/focus-trap pattern is actually wanted; that would be a larger behavioral change than what was in scope here.
3. ~~The `footer__top-btn` "Back to Top" control is a `<span onclick>`...~~ — **Resolved.** See §8a: replaced with a semantic `<a href="#">` on both `terms.html` and `privacy.html`, matching the pattern already used on the other 7 pages.
4. **N1 (hero entrance) and M5 (testimonial crossfade)** remain unimplemented, as instructed — both still need a visual prototype before any code is written.
5. **N2's target markup (`.story-pillar`) isn't live yet** — see the correction in §7. The CSS is shipped and ready; nothing further is needed from this task, but there's nothing to visually verify on the current site until the separate "Baldwin & Co. Approach" content update is committed and deployed.

Deployment results (commit hash, preview URL, production result, live test results) are recorded in the final deployment report delivered alongside this document.
