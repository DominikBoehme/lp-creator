/* =========================================================
   LP Creator – core-interactions.js
   Zweck:
   - Zentrale Initialisierung aller interaktiven Module
   - Kein Framework
   - Defensive Initialisierung (Module optional)
   ========================================================= */

(function () {
  function onReady(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  /* =========================================
     COUNTER ANIMATED
     ========================================= */
  function initCounterAnimated() {
    var items = document.querySelectorAll(
      '.counter-animated__item > [class^="font-heading-"], .counter-animated__item > [class*=" font-heading-"]'
    );

    if (!items.length) return;

    function startCount(el) {
      var originalText = el.textContent.trim();
      var match = originalText.match(/(\d+[.,]?\d*)/);
      if (!match) return;

      var numberPart = match[1];
      var prefix = originalText.slice(0, match.index);
      var suffix = originalText.slice(match.index + numberPart.length);

      var hasComma = numberPart.indexOf(',') !== -1;
      var cleaned = numberPart.replace(/\./g, '').replace(',', '.');
      var decimals = cleaned.indexOf('.') !== -1 ? cleaned.split('.')[1].length : 0;
      var target = parseFloat(cleaned);
      if (isNaN(target)) return;

      var duration = 1200;
      var start = null;

      function easeOut(t) {
        return t * (2 - t);
      }

      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        var value = target * easeOut(progress);

        var display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
        if (hasComma) display = display.replace('.', ',');

        el.textContent = prefix + display + suffix;

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = originalText;
        }
      }

      window.requestAnimationFrame(step);
    }

    if (!('IntersectionObserver' in window)) {
      items.forEach(startCount);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            startCount(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

/* =========================================
   Accordion (modern)
   Bestandteil von core-interactions.js
   Zweck:
   - Zuverlässiges Öffnen/Schließen über echte Höhen
   - Setzt .is-open und aria-expanded
   - Verhindert CSS-max-height-Raten
   ========================================= */

(function () {
  function initAccordion() {
    var triggers = document.querySelectorAll('.accordion__trigger');
    if (!triggers.length) return;

    triggers.forEach(function (trigger) {
      var item = trigger.closest('.accordion__item');
      var panel = item ? item.querySelector('.accordion__panel') : null;
      if (!item || !panel) return;

      // Initialzustand sicher schließen
      panel.style.maxHeight = '0px';

      trigger.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');

        if (isOpen) {
          // schließen
          panel.style.maxHeight = '0px';
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          // öffnen
          panel.style.maxHeight = panel.scrollHeight + 'px';
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  if (document.readyState !== 'loading') {
    initAccordion();
  } else {
    document.addEventListener('DOMContentLoaded', initAccordion);
  }
})();
