const botao = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const finalizacao = document.getElementById("finalizacao");

botao.addEventListener("click", function () {

    const textoNota1 = document.getElementById("nota1").value;
    const textoNota2 = document.getElementById("nota2").value;
    const textoNota3 = document.getElementById("nota3").value;

    try {

        if (textoNota1.trim() === "" || textoNota2.trim() === "" || textoNota3.trim() === "") {
            throw new Error("Preencha as três notas.");
        }

        const nota1 = Number(textoNota1);
        const nota2 = Number(textoNota2);
        const nota3 = Number(textoNota3);

        if (!Number.isFinite(nota1) || !Number.isFinite(nota2) || !Number.isFinite(nota3)) {
            throw new Error("Informe apenas números válidos.");
        }

        if (nota1 < 0 || nota1 > 10 ||
            nota2 < 0 || nota2 > 10 ||
            nota3 < 0 || nota3 > 10) {
            throw new Error("As notas devem estar entre 0 e 10.");
        }

        const media = (nota1 + nota2 + nota3) / 3;
        let situacao = "";

        if (media >= 7) {
            situacao = "Aprovado";
        } else if (media >= 5) {
            situacao = "Recuperação";
        } else {
            situacao = "Reprovado";
        }

        const mediaFormatada = media.toFixed(2).replace(".", ",");

        resultado.textContent = "Média: " + mediaFormatada + " | Situação: " + situacao;

    } catch (erro) {

        resultado.textContent = "Erro: " + erro.message;

    } finally {

        finalizacao.textContent = "Verificação finalizada.";

    }
});