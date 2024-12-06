const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
});
