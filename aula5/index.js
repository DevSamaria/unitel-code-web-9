// var nome = "Dimingos";

// alert(nome);

// alert("O " + nome + " e professor");

// alert("Tire a sua duvida ao " + nome);

// const pi = 3.14;

// console.log(pi)

// Tipos de Dados
// let sobrenome = 'Ndala';
// let idade = 55;
// Objectos
// let pessoa = { nome: 'Isaac', sobrenome: "Ndala", sexo: "Masculino", idade: 55 };
// console.log(typeof(pessoa));
// console.log(pessoa.nome);
// console.log('Idade: ' + pessoa.idade);
// let presente = false;
// console.log("O Isaac esta presente: " + presente);

// Soma de dois numeros
// let numero1 = 14;
// let numero2 = 45;
// let soma = numero1 + numero2;
// console.log(soma);

// Intrucoes condicionais
// let numero = prompt('Digite um numero');
// if(+numero === 0) {
//     console.log("Numero igual a zero")
// } else {
//     console.log("Nao e maior que zero!")
// }

// DOM 
// let p = document.getElementById('demo');
// p.innerHTML = "Meu paragrafo";
// h1Principal.style.color = "green";
// function soma(n1, n2) {
//     return n1 + n2;
// }
// console.log(soma(23, 4))
// console.log('O cliente pagou no total: ' + soma(50, 150))

let h1Principal = document.getElementsByTagName('h1')[0]; 
let btn = document.querySelector('#btn');

function estilizarText() {
    h1Principal.style.fontSize = "3rem";
    h1Principal.style.color = 'brown'
}

btn.onmousemove = estilizarText;

