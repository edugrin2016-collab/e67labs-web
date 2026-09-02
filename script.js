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

const quoteForm = document.getElementById('quoteForm');
const quoteFormNote = document.getElementById('quoteFormNote');

if (quoteForm) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('q-nombre').value.trim();
    const apellido = document.getElementById('q-apellido').value.trim();
    const direccion = document.getElementById('q-direccion').value.trim();
    const contacto = document.getElementById('q-contacto').value.trim();

    const subject = encodeURIComponent(`Pedido de cotización - ${nombre} ${apellido}`);
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nApellido: ${apellido}\nDirección: ${direccion || '-'}\nContacto: ${contacto}`
    );

    window.location.href = `mailto:contacto@e67labs.com?subject=${subject}&body=${body}`;
    quoteFormNote.textContent = 'Abriendo tu cliente de correo...';
  });
}
