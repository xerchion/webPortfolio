// Script para el menú móvil mejorado
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const mainNav = document.getElementById('mainNav');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
    });
}
if (closeMenu && mobileMenu) {
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
}
// Cerrar menú móvil al hacer clic en un enlace
if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Selector de tema claro/oscuro. El tema se aplica en <head> antes de pintar;
// aquí solo se cambia al pulsar el botón y se recuerda la elección.
const themeToggle = document.getElementById('themeToggle');

function temaActual() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function actualizarBotonTema() {
    const texto = temaActual() === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro';
    themeToggle.setAttribute('aria-label', texto);
    themeToggle.setAttribute('title', texto);
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const nuevo = temaActual() === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', nuevo);
        try {
            localStorage.setItem('portfolio.tema', nuevo);
        } catch (e) {
            // Sin almacenamiento disponible: el tema vale solo para esta página.
        }
        actualizarBotonTema();
    });
    actualizarBotonTema();
}
