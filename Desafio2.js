// Criar uma função que exibe "Olá, mundo!" no console.
function verificarChute() {
    console.log("Olá, mundo!")
}
// Criar uma função que recebe um nome como parâmetro 
// e exibe "Olá, [nome]!" no console.
let nome; 

function verificarChute() {
    let nome = document.querySelector('input').value;
    console.log(`Olá, ${nome}!`);
}

// Criar uma função que recebe um número como 
// parâmetro e retorna o dobro desse número.
let numero;

function verificarChute() {
    let numero = document.querySelector('input').value;
    console.log(`O dobro deste é ${numero} é: ${numero * 2} `);
}


// Criar uma função que recebe três números como 
// parâmetros e retorna a média deles.


function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
  let maiorNumero = encontrarMaior(15, 9);
  console.log(maiorNumero);


// Criar uma função que recebe dois números como 
// parâmetros e retorna o maior deles.

function quadrado(numero) {
    return numero * numero;
  }
  
  let resultado = quadrado(2);
  console.log(resultado); 

// Criar uma função que recebe um número como parâmetro 
// e retorna o resultado da multiplicação desse número por ele mesmo