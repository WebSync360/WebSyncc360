const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks = document.querySelectorAll('.mobile-link');

  function toggleMenu() {
    mobileMenu.classList.toggle('opacity-0');
    mobileMenu.classList.toggle('scale-95');
    mobileMenu.classList.toggle('pointer-events-none');
    // Prevents body scroll when menu is open
    document.body.classList.toggle('overflow-hidden');
  }

  menuBtn.addEventListener('click', toggleMenu);

  // Close menu when a link is clicked
  menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });