/* GeefGas – app.js (clean) */

document.addEventListener("DOMContentLoaded", () => {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile menu (optional)
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const open = menu.hasAttribute("hidden");
    if (open) {
      menu.removeAttribute("hidden");
      btn.setAttribute("aria-expanded", "true");
    } else {
      menu.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", "false");
    }
  });

  // Close menu when clicking links
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", "false");
    });
  });
});
