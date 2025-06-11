

var array = [0, 1, 2, 3, 4, 5
];

//dois comportamentos especiais do JavaScript
//Funções Callback
//JavaScript aceita função como parâmetro

array.forEach((item)=> {
        console.log(item + 10);
})
//forEach não tem retorno

//map retorna outro array
const array2 = new Array(
array.map((item)=> {
    return item + 1;
})
);

console.log(`Array 1: ${array}, Array 2: ${array2}`)


//reduce
//tbm tem um retorno que pode ser um map, um array, um objeto
//serve como um acumulador
const somatorio = array.reduce( (acumulador, item) => {
    return acumulador + item;
}, 0);

console.log(somatorio);

const resultado = array.reduce((acumulador, item) => {
    acumulador.push(item + 1);
    return acumulador;
}, []);

console.log("Reduce: ", resultado);

//filter
//retorna um resultado esperando uma expressão que seja treu ou false



//find
// tbm espera uma espressão true ou false, mas só retorna um dos objetos