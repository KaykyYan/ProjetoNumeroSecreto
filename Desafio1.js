// Altere o conteúdo da tag h1 com document.querySelector 
// e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('H1');
titulo.innerHTML = "Hora do Desafio";

// Crie uma função que exiba no console a mensagem 
// O botão foi clicado sempre que o botão Console for pressionado.

function verificarChute() {
    console.log("O botão foi clicado")
}

// Crie uma função que exiba um alerta com a mensagem: 
// Eu amo JS, sempre que o botão Alerta for pressionado.

function verificarChute() {
    alert("Eu amo JS")
}


// Crie uma função que é executada quando o botão prompt é clicado, 
// perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a
// mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
let cidade;

function verificarChute() {
    cidade = prompt("Digite o nome de uma cidade do Brasil?")
    alert(`Estive em ${cidade} e lembrei de você!`)
}


// Ao clicar no botão soma, peça 2 números inteiros e 
// exiba o resultado da soma em um alerta.

let numero1;
let numero2;

function verificarChute(){
    numero1 = parseInt(prompt("Digite um numero? Por favor"));
    numero2 = parseInt(prompt("Digite um segundo numero? Por favor"));
    alert(`O resultado da soma é ${numero1 + numero2}`)
}