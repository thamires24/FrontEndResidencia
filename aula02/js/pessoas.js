const pessoas = [
    {nome: 'Thamires', idade: 33, cidade: 'Petrópolis'},
    {nome: 'Bernardo', idade: 11, cidade: 'Campina Grande'},
    {nome: 'Laura', idade: 15, cidade: 'Rio de Janeiro'},
    {nome: 'Lucas', idade: 20, cidade: 'São Paulo'},
    {nome: 'Anna', idade: 4, cidade: 'Petrópolis'},
    {nome: 'Carlos', idade: 18, cidade: 'Petrópolis'},
];

/*pessoas
.filter((p) => p.cidade === 'Petrópolis' && p.idade > 30)
.forEach((p) => console.log(`Nome: ${p.nome}, Idade: ${p.idade}`));*/


pessoas.filter((p) => p.nome.toLowerCase().includes("L")).forEach((p) => console.log(p.nome));