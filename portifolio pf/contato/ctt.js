// A função para validar e enviar o formulário de contato
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Pega os valores dos campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Verifica se todos os campos foram preenchidos
    if (name && email && message) {
        alert("Mensagem enviada com sucesso!"); // Exibe mensagem de sucesso
        document.getElementById("contact-form").reset(); // Reseta os campos do formulário
    } else {
        alert("Por favor, preencha todos os campos."); // Exibe mensagem de erro
    }
});

// Função para alternar o menu (abrir/fechar) em telas pequenas
function toggleMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('open');
}

