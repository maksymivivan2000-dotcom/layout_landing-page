const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const menu = document.getElementById('menu');


if (menuButton && closeButton && menu) {

  menuButton.addEventListener('click', () => {
    menu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });


  closeButton.addEventListener('click', () => {
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
  });

  const menuLinks = document.querySelectorAll('.menu_link');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
}
