var frutas = new Array();
let cores = [];
let cursos = ["Java", "PHP"];
let pessoas = [{ nome: "Alguém"}, {nome: "Outro Alguém"}];


cursos.push("React"); //adiciona um elemento ao vetor, inseri na posição final do vetor
cursos.push(1000);
cursos.unshift("Python"); //adiciona um elemento no início do vetor

cursos.sort(); //ordena o vetor em ordem alfabética
//cursos.reverse(); //inverte a ordem do vetor

cursos.pop(); //remove o último elemento do vetor
cursos.shift(); //remove o primeiro elemento do vetor

cursos.splice(0, 2); //remove o elemento da 1ª posição do vetor
//cursos.splice(0, 1, "JavaScript"); //remove o elemento da 1ª posição do vetor e adiciona o "JavaScript" na 1ª posição do vetor


for (let i = 0; i < cursos.length; i++) {
	console.log(cursos[i]);
}    

const livro = {
    autor: "Vinicius de Moraes",
    páginas: 100,
    titulo: "A arca de Noé",
}

console.log(livro.autor); //acessa o atributo autor do objeto livro