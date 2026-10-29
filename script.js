// Mostrar o ano atual
document.getElementById("anoAtual").textContent = new Date().getFullYear();

// Mudar o tema
const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

// Mostrar a última visita
const visita = document.getElementById("visita");
const ultimaVisita = localStorage.getItem("ultimaVisita");

if (ultimaVisita) {
    visita.textContent = "Última visita: " +
        new Date(ultimaVisita).toLocaleString("pt-BR");
} else {
    visita.textContent = "Bem-vindo ao meu portfólio!";
}

localStorage.setItem("ultimaVisita", new Date().toISOString());

// Formulário
const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = document.getElementById("nomeContato").value;

    document.getElementById("statusContato").textContent =
        "Obrigado pelo contato, " + nome + "!";

    formulario.reset();
});