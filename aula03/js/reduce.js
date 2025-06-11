const pedidos = [
    {num: 123, status:"enviado", total: 5000},
    {num:456, status: "entregue", total: 6000},
    {num:789, status: "entregue", total: 1000},
    {num: 101, status: "aguardando pagamento", total: 2500},
]
// JSON(java script object notation)
// JSON é um formato de troca de dados leve e fácil de ler e escrever para humanos e fácil de analisar e gerar para máquinas.


//todo reduce tem que ter dois parametros, o primeiro é o acumulador e o segundo é o valor atual
const totalGeral = pedidos.reduce((soma, pedido)=> soma + pedido.total, 0);

//!== comparação diferente de
const totalFiltro = pedidos.filter((pedido)=> pedido.status !== "aguardando pagamento").reduce((soma, pedido)=> soma + pedido.total, 0);
console.log(totalFiltro);
 