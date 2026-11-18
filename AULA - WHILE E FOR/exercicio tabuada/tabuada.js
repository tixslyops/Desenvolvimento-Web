const botao = document.getElementById("escolher");

const resultado = document.getElementById("resultado");

botao.addEventListener("click", function() {
    const numeros = document.getElementById("numeros").value;

    resultado.innerHTML = "";
    if (numeros === "") {
        resultado.textContent = "Selecione um número!";
    } else {
        for (let i = 1; i <= 10; i++) {

            const item = document.createElement("p");

            item.textContent = `${numeros} x ${i} = ${numeros * i}`;

            resultado.appendChild(item);
        }
    }

});