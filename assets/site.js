// Karoo Kombuis concept — small, dependency-free enhancements.
(function () {
  document.documentElement.classList.remove('no-js');

  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      }
    });
  }

  // Scroll reveal
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  // Click-to-load map (keeps first paint fast; no third-party requests until asked)
  document.querySelectorAll('[data-map-load]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var box = btn.closest('.map');
      var q = encodeURIComponent(box.getAttribute('data-query'));
      var f = document.createElement('iframe');
      f.src = 'https://www.google.com/maps?q=' + q + '&output=embed';
      f.title = 'Map: ' + box.getAttribute('data-query');
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      box.innerHTML = '';
      box.appendChild(f);
    });
  });

  // Reservation form (concept): no backend yet, so explain what the live version does.
  document.querySelectorAll('form[data-concept-booking]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var s = form.querySelector('.form-status');
      s.textContent = 'Concept preview: in the live site this request goes straight to the Karoo Kombuis inbox and WhatsApp, and the guest gets an instant confirmation. Nothing was sent.';
      s.classList.add('show');
      s.focus();
    });
  });

  // Insight Forge enquiry: compose an email to Stiaan.
  document.querySelectorAll('form[data-forge-enquiry]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var d = new FormData(form);
      var body = 'Name: ' + (d.get('name') || '') +
        '\nPhone: ' + (d.get('phone') || '') +
        '\n\n' + (d.get('message') || '');
      window.location.href = 'mailto:iamstiaan@gmail.com?subject=' +
        encodeURIComponent('Karoo Kombuis website concept') +
        '&body=' + encodeURIComponent(body);
    });
  });

  // Preselect an experience when arriving from a package CTA (?experience=...)
  var exp = new URLSearchParams(location.search).get('experience');
  var sel = document.getElementById('c-exp');
  if (exp && sel && Array.prototype.some.call(sel.options, function (o) { return o.value === exp; })) sel.value = exp;

  var y = document.querySelectorAll('[data-year]');
  y.forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
