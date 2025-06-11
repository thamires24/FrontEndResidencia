

function calcular(a,b) {
    return a * b;
}

console.log("O resultado é: " + calcular(10,2));

//Template Literal. utilizar craze
//Para chamar função ou declarar variavel dentro de uma string, utilizar ${}
console.log(`O resultado é: ${calcular(10,2)} fim de calculo ${2+5}`);

const numeros = [2, 5, 8, 10]
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//Função Map é um For que tem um For dentro tbm
const numerosMap = numeros.map((n) => console.log(n*2));
    console.log(numerosMap);

//ForEach espera uma função como parametro e executa essa função para cada elemento do array
//Função ForEach não retorna nada, apenas executa a função para cada elemento do array
const numerosForEach = numeros.forEach((n) => console.log(n*3));

const numerosFiltros = numeros.filter((num) => num % 2 === 0);
console.log(numerosFiltros);

//Array de nomes e retorna a primeira letra de cada nome
const nomes = ['Amanda', 'Thamires', 'Anna', 'Bernardo'];
const primeiraLetra = nomes.map((nome) => nome.charAt(0));
console.log(primeiraLetra);