// Dark mode toggle
const darkToggle = document.getElementById('dark-toggle');
const body = document.getElementById('appBody');
const html = document.documentElement;

// Inicializar modo oscuro igual que el resto del sitio
function updateIcon() {
  darkToggle.textContent = html.classList.contains('dark') ? '☀️' : '🌙';
}
if (localStorage.theme === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  html.classList.add('dark');
} else {
  html.classList.remove('dark');
}
updateIcon();

darkToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
  updateIcon();
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Show body after initial setup
body.classList.remove('hidden');