document.addEventListener("DOMContentLoaded", function () {
  const menuOpenBtn = document.querySelector("[data-menu-open]");
  const menuCloseBtn = document.querySelector("[data-menu-close]");
  const mobileMenu = document.querySelector("[data-menu]");

  if (menuOpenBtn && menuCloseBtn && mobileMenu) {
    menuOpenBtn.addEventListener("click", function () {
      mobileMenu.classList.add("is-open");
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    });

    menuCloseBtn.addEventListener("click", function () {
      mobileMenu.classList.remove("is-open");
      document.body.style.overflow = ""; // Re-enable scrolling
    });

    // Close mobile menu when clicking on a link (optional)
    const mobileMenuLinks = document.querySelectorAll(".mobile-nav-link");
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }
});
