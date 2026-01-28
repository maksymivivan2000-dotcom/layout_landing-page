// Отримуємо елементи
const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const menu = document.getElementById('menu');

// Перевіряємо чи елементи знайдені
if (menuButton && closeButton && menu) {
  // Відкрити меню
  menuButton.addEventListener('click', () => {
    menu.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Блокуємо прокрутку
  });

  // Закрити меню
  closeButton.addEventListener('click', () => {
    menu.classList.remove('is-open');
    document.body.style.overflow = ''; // Повертаємо прокрутку
  });

  // Закрити меню при кліку на посилання в меню
  const menuLinks = document.querySelectorAll('.menu_link');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  // Закрити меню при натисканні Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
}
