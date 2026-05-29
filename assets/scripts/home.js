
const painel = document.querySelector("h2");


//sinais
const apagar = document.getElementById("apagar");
const raiz = document.getElementById("raiz");
const soma = document.getElementById("soma");
const menos = document.getElementById("menos");
const porcentagem = document.getElementById("porcentagem");
const divido = document.getElementById("divido");
const ponto = document.getElementById("ponto");
const resultado = document.getElementById("resultado");

//numeros
const zero = document.getElementById("0");
const um = document.getElementById("1");
const dois = document.getElementById("2");
const tres = document.getElementById("3");
const quatro = document.getElementById("4");
const cinco = document.getElementById("5");
const seis = document.getElementById("6");
const sete = document.getElementById("7");
const oito = document.getElementById("8");
const nove = document.getElementById("9");
const btn_numeros = document.querySelectorAll(".btn-numbers");
const btn_numeros2 = document.querySelectorAll(".btn-numbers2");


btn_numeros.forEach(botao => {

    botao.addEventListener("click", () => {

        painel.innerHTML += botao.innerHTML
    })
});

btn_numeros2.forEach(botao => {
    botao.addEventListener("click", () => {

        painel.innerHTML += botao.innerHTML
    })
});

apagar.addEventListener("click", () => {
    painel.innerHTML = painel.innerHTML.slice(0, -1);
});

resultado.addEventListener("click", () => {
    conta = painel.innerHTML;
    let number;
    let number2;

    if (conta.includes("+")) {

        let part = conta.split("+")

        number = Number(part[0])
        number2 = Number(part[1])

        painel.innerHTML = number + number2;
    } else if (conta.includes("-")) {
        let part = conta.split("-")

        number = Number(part[0])
        number2 = Number(part[1])

        painel.innerHTML = number - number2;
    } else if (conta.includes("x")) {
        let part = conta.split("x")

        number = Number(part[0])
        number2 = Number(part[1])

        painel.innerHTML = number * number2;
    } else if (conta.includes("÷")) {
        let part = conta.split("÷")

        number = Number(part[0])
        number2 = Number(part[1])

        painel.innerHTML = number / number2;

    } else if (conta.includes("%")) {
        let part = conta.split("%")

        number = Number(part[0])
        number2 = Number(part[1])

        painel.innerHTML = (number * number2) / 100;

    } else if (conta.includes("√")) {
        let part = conta.split("√")

        number = Number(part[0])

        painel.innerHTML = number ** (1 / 2);
    }
});