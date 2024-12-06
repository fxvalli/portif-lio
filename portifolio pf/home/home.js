// Seleciona o botão de alternância de tema
const themeToggleButton = document.querySelector('.theme-toggle');

// Função para alternar o tema
function toggleTheme() {
  // Verifica se o corpo da página tem a classe 'dark-theme'
  if (document.body.classList.contains('dark-theme')) {
    // Se o tema escuro estiver ativo, remove a classe
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light'); // Armazena a preferência de tema
  } else {
    // Caso contrário, adiciona a classe 'dark-theme'
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark'); // Armazena a preferência de tema
  }
}

// Verifica o tema armazenado no localStorage e aplica o tema salvo
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

// Event listener para o botão de alternância de tema
themeToggleButton.addEventListener('click', toggleTheme);

// Carrega o tema salvo ao carregar a página
loadTheme();
