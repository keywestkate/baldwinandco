// Baldwin & Co. — shared mobile-drawer behavior (M4).
// Loaded on every page. Expects the existing #burger / #drawer markup that
// is already identical across all 9 pages. Adds: body-scroll locking while
// open, Escape-to-close, click-outside-to-close, close-on-navigation-link,
// focus restoration to the trigger, accurate aria-expanded, and protection
// against being initialized twice. Does not change nav markup, copy, or
// destinations, and does not touch the language toggle.
(function () {
  'use strict';

  function initNavDrawer() {
    var burger = document.getElementById('burger');
    var drawer = document.getElementById('drawer');
    if (!burger || !drawer) return;

    // Guard against double-initialization (e.g. this script included twice).
    if (burger.getAttribute('data-nav-drawer-init') === 'true') return;
    burger.setAttribute('data-nav-drawer-init', 'true');

    if (drawer.id) burger.setAttribute('aria-controls', drawer.id);
    burger.setAttribute('aria-expanded', 'false');

    var desktopMql = window.matchMedia ? window.matchMedia('(min-width: 801px)') : null;

    function isOpen() {
      return drawer.classList.contains('open');
    }

    function lockScroll() {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    }

    function unlockScroll() {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    function openDrawer() {
      if (isOpen()) return;
      drawer.classList.add('open');
      burger.setAttribute('aria-expanded', 'true');
      if ('inert' in drawer) drawer.inert = false;
      lockScroll();
    }

    // returnFocus: whether to move keyboard focus back to the burger button.
    // Skipped when the user is navigating away (link click) or clicked
    // elsewhere on the page (their click already indicates intended focus),
    // and used for Escape / burger-toggle closes, matching standard
    // disclosure-menu focus behavior.
    function closeDrawer(returnFocus) {
      if (!isOpen()) return;
      drawer.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      if ('inert' in drawer) drawer.inert = true;
      unlockScroll();
      if (returnFocus) burger.focus();
    }

    burger.addEventListener('click', function () {
      if (isOpen()) {
        closeDrawer(false); // burger still holds focus; nothing to restore
      } else {
        openDrawer();
      }
    });

    // Close after a valid navigation link inside the drawer is clicked.
    drawer.addEventListener('click', function (e) {
      var link = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (link) closeDrawer(false); // page is navigating away
    });

    // Escape closes and returns focus to the trigger.
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) closeDrawer(true);
    });

    // Click (or tap) outside the drawer/burger closes it. Capture phase so
    // this runs before the burger's own click handler sees the same event
    // that opens the drawer, which would otherwise immediately re-close it.
    document.addEventListener(
      'click',
      function (e) {
        if (!isOpen()) return;
        var target = e.target;
        if (drawer.contains(target) || burger.contains(target)) return;
        closeDrawer(false); // user's click already moved intent elsewhere
      },
      true
    );

    // If the viewport is resized/rotated into desktop width while open,
    // release the scroll lock so it never gets stuck.
    if (desktopMql) {
      var handleViewportChange = function (e) {
        if (e.matches && isOpen()) closeDrawer(false);
      };
      if (desktopMql.addEventListener) {
        desktopMql.addEventListener('change', handleViewportChange);
      } else if (desktopMql.addListener) {
        desktopMql.addListener(handleViewportChange); // older Safari fallback
      }
    }

    // bfcache / back-forward navigation safety: never leave scroll locked
    // if the page is restored with the drawer visually closed.
    window.addEventListener('pageshow', function () {
      if (!isOpen()) unlockScroll();
    });

    // Drawer starts closed and inert so its links aren't keyboard-focusable
    // while visually hidden (they were previously tabbable even when
    // clipped by max-height:0/overflow:hidden).
    if ('inert' in drawer) drawer.inert = true;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavDrawer);
  } else {
    initNavDrawer();
  }
})();
