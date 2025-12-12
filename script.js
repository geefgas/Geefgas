// Tiny helper: smooth-scroll to pricing
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[data-scroll]');
  if (!a) return;
  const id = a.getAttribute('href');
  if (!id || !id.startsWith('#')) return;
  const el = document.querySelector(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({behavior:'smooth', block:'start'});
});