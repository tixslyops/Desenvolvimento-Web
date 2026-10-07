const botao = document.getElementById("Realizar pedido");

const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
    const item = document.getElementById("item").value;

    switch(item) {

        case "x-salada":
            resultado.textContent = "Pedido realizado: X-Salada";
            break;

        case "x-calabresa":
            resultado.textContent = "Pedido realizado: X-Calabresa";
            break;
        case "x-tudo":
            resultado.textContent = "Pedido realizado: X-Tudo";
            break;
        case "hot dog ao molho":
            resultado.textContent = "Pedido realizado: Hot Dog ao Molho";
            break;
        case "porcao batata individual":
            resultado.textContent = "Pedido realizado: Porção de Batata Individual";
            break;
        case "porcao batata grande":
            resultado.textContent = "Pedido realizado: Porção de Batata Grande";
            break;
        default:
            resultado.textContent = "Selecione um item do cardápio";
    }
})