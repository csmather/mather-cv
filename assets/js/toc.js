/* Scroll-spy + responsive open state for the homepage table of contents. */
(function () {
  var toc = document.querySelector('.toc');
  if (!toc) return;

  var groups = Array.prototype.slice.call(toc.querySelectorAll('.toc-group'));
  var targets = Array.prototype.slice
    .call(toc.querySelectorAll('a[href^="#"]'))
    .map(function (a) {
      return {
        link: a,
        group: a.closest('.toc-group'),
        el: document.getElementById(decodeURIComponent(a.hash.slice(1)))
      };
    })
    .filter(function (t) {
      return t.el;
    });

  function update() {
    var y = window.scrollY + 100; // "has this heading passed the top?"
    var active = targets[0];
    targets.forEach(function (t) {
      if (t.el.getBoundingClientRect().top + window.scrollY <= y) active = t;
    });
    targets.forEach(function (t) {
      t.link.classList.toggle('current', t === active);
    });
    groups.forEach(function (g) {
      g.classList.toggle('active', !!active && g === active.group);
    });
  }

  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();

  // Open as a rail on desktop, collapsed as a drawer on mobile; a tap on any
  // link closes the drawer behind you.
  var mq = matchMedia('(min-width: 76rem)');
  function sync() {
    toc.open = mq.matches;
  }
  mq.addEventListener('change', sync);
  sync();
  toc.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (!mq.matches) toc.open = false;
    });
  });
})();
