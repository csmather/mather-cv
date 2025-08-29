document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) e.target.classList.add('is-visible');
  }, { threshold: 0.15 });
  els.forEach(el => obs.observe(el));
});
