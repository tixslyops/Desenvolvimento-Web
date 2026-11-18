const botao = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

function calcularDesconto(preco, porcentagem) {
    const valorDesconto = preco * porcentagem / 100;

    return preco - valorDesconto;
}

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL"});
}

botao.addEventListener("click", function () {
    const textoPreco = document.getElementById("preco").value;
    const textoDesconto = document.getElementById("desconto").value;
    const preco = Number(textoPreco);
    const desconto = Number(textoDesconto);

    if (textoPreco === "" || textoDesconto === "" ||
        !Number.isFinite(preco) || !Number.isFinite(desconto) ||
        preco < 0 || desconto < 0 || desconto > 100) {
            resultado.textContent = "Informe um preço válido e um desconto entre 0 e 100%.";
            return;
        }

        const precoFinal = calcularDesconto(preco, desconto);

        resultado.textContent = "Preço final: " + formatarMoeda(precoFinal);
})