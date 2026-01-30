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
     ACCORDION
     ========================================= */
  function initAccordion() {
    var accordions = document.querySelectorAll('.accordion');
    if (!accordions.length) return;

    if (window.IS24 && IS24.Accordion && typeof IS24.Accordion.init === 'function') {
      accordions.forEach(function (el) {
        var dl = el.querySelector('dl.accordion');
        if (dl && dl.id) {
          IS24.Accordion.init(dl.id);
        }
      });
    }
  }

  onReady(function () {
    initCounterAnimated();
    initAccordion();
  });
})();
