let exame = false;

console.log(exame ? "Positivo" : "Negativo");

// média nota superior a 70 bom - acima de 90 ótimo - abaixo de 70 reprovado

let nota = 70;
//o uso contínuo do ternário substitui o uso do if else
console.log(nota > 90 ? "Ótimo" : nota >= 70 ? "Bom" : "Reprovado");