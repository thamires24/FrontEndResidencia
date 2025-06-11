 const somar = (a, b) => a + b;

 const calcular = (a, b, callback) => {
    return callback(a, b);
 };

    const resultado = calcular(15, 25, somar);
    console.log(resultado); 

    setInterval(() => {
        console.log('Java Script');
    }, 3000);