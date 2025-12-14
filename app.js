/* GeefGas – app.js (COMPLETE)
   - Mobiel menu toggle
   - Jaar automatisch invullen (als #year bestaat)
*/

document.addEventListener("DOMContentLoaded", () => {
  // Year (optional)
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile menu
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");

  if (btn && menu) {
    const closeMenu = () => {
      menu.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
      menu.removeAttribute("hidden");
      btn.setAttribute("aria-expanded", "true");
    };

    btn.addEventListener("click", () => {
      const isClosed = menu.hasAttribute("hidden");
      if (isClosed) openMenu();
      else closeMenu();
    });

    // Close when clicking a link in the menu
    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", closeMenu);
    });

    // Close when tapping outside menu area (mobile UX)
    document.addEventListener("click", (e) => {
      if (menu.hasAttribute("hidden")) return;
      const clickedInsideMenu = menu.contains(e.target);
      const clickedButton = btn.contains(e.target);
      if (!clickedInsideMenu && !clickedButton) closeMenu();
    });

    // Close on ESC key (desktop)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }
});
