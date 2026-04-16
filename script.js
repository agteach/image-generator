const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileBreakpoint = window.matchMedia("(max-width: 768px)");

if (menuToggle && mobileMenu) {
  const setMenuState = (isOpen) => {
    mobileMenu.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  };

  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    setMenuState(!mobileMenu.classList.contains("menu-open"));
  });
  document.addEventListener("click", (event) => {
    if (
      !menuToggle.contains(event.target) &&
      !mobileMenu.contains(event.target)
    ) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });

  mobileBreakpoint.addEventListener("change", (event) => {
    if (!event.matches) {
      setMenuState(false);
    }
  });
}
