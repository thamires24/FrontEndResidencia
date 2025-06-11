const minhaPromise = new Promise((resolve, reject) => {


    const sucesso = false;

    if (sucesso) {
        resolve('Deu certo!');
    }else {
        reject('Deu errado!');
    }
});

// Para usar a promise, usamos o método then para o sucesso e o método catch para o erro.
minhaPromise.then((resultado) => {
    console.log(resultado);
}).catch((resultado) => {
    console.log("Erro " + resultado);
});
