let saldo = 1000;
let historico = ["Abertura da conta: R$ 1.000,00"];

let selectOpcao = document.getElementById("opcao");
let opvalor = document.getElementById("valor");
let botao = document.getElementById("executar");
let divMensagem = document.getElementById("mensagem");
let opsaldo = document.getElementById("saldo");

botao.addEventListener("click", function() {
    let opEscolhida = selectOpcao.value;
    let valorNumerico = Number(opvalor.value);
    let resultado = "";
    
    switch (opEscolhida) {
        case "Consultar Saldo":
            resultado = "Seu saldo é: R$ " + saldo.toFixed(2);
            break;

        case "Depositar":
            if (valorNumerico > 0 && Number.isInteger(valorNumerico)) {
                saldo = saldo + valorNumerico;
                resultado = "Depósito de R$ " + valorNumerico.toFixed(2) + " realizado com sucesso.";
                historico.push("Depósito: +R$ " + valorNumerico.toFixed(2));
            } else {
                resultado = "Erro: Digite um número inteiro maior que zero.";
            }
            break;

        case "Sacar":
            if (valorNumerico <= 0 || !Number.isInteger(valorNumerico)) {
                resultado = "Erro: Valor inválido.";
            } else if (valorNumerico % 10 !== 0) {
                resultado = "Erro: O saque precisa ser múltiplo de 10 (notas de 100, 50, 20, 10).";
            } else if (valorNumerico > saldo) {
                resultado = "Erro: Saldo insuficiente.";
            } else {
                let resto = valorNumerico;
                let nota100 = 0;
                let nota50 = 0;
                let nota20 = 0;
                let nota10 = 0;
                
                while (resto >= 100) {
                    nota100++;
                    resto = resto - 100;
                }
                while (resto >= 50) {
                    nota50++;
                    resto = resto - 50;
                }
                while (resto >= 20) {
                    nota20++;
                    resto = resto - 20;
                }
                while (resto >= 10) {
                    nota10++;
                    resto = resto - 10;
                }

                saldo = saldo - valorNumerico;

                resultado = "Saque de R$ " + valorNumerico.toFixed(2) + " realizado!\n";
                resultado += "Notas entregues:\n";
                if (nota100 > 0) resultado += nota100 + " nota(s) de R$ 100\n";
                if (nota50 > 0) resultado += nota50 + " nota(s) de R$ 50\n";
                if (nota20 > 0) resultado += nota20 + " nota(s) de R$ 20\n";
                if (nota10 > 0) resultado += nota10 + " nota(s) de R$ 10\n";

                historico.push("Saque: -R$ " + valorNumerico.toFixed(2));
            }
            break;
            
        case "extrato":
            resultado = "EXTRATO:\n";
            for (let i = 0; i < historico.length; i++) {
                resultado += (i + 1) + ". " + historico[i] + "\n";
            }
            break;

        default:
            resultado = "Por favor, selecione uma operação válida.";
            break;
    }

    opsaldo.textContent = saldo.toFixed(2);
    divMensagem.textContent = resultado;
    opvalor.value = "";
});