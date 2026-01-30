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

const form = document.getElementById("contactForm");
const errorBox = document.getElementById("formError");

if (form && errorBox) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    errorBox.textContent = "";

    if (!name || !email || !message) {
      errorBox.textContent = "All fields are required";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorBox.textContent = "Please enter a valid email";
      return;
    }

    form.reset();
    errorBox.textContent = "Message sent successfully!";
    errorBox.style.color = "green";
  });
}
