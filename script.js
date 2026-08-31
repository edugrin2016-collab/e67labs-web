document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const navCta = document.querySelector('.nav-cta');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navCta.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a, .nav-cta').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navCta.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const company = document.getElementById('company').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent(`Consulta de ${name}${company ? ' - ' + company : ''}`);
  const body = encodeURIComponent(
    `Nombre: ${name}\nEmpresa: ${company || '-'}\nEmail: ${email}\n\nMensaje:\n${message}`
  );

  window.location.href = `mailto:contacto@e67labs.com?subject=${subject}&body=${body}`;
  formNote.textContent = 'Abriendo tu cliente de correo...';
});
