// DOM - Document Object Model

// 1 - Selecionar os objetos pelo ID utilizando o documentgetelementbyid

const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");
const resImc = document.getElementById("res-imc");
const resDescricao = document.getElementById("res-descricao");

// 2 - criar funções 

function calcularImc() {
    const imc = peso.value / (altura.value * altura.value);

    resultado.classList.remove("hidden")

    resImc.textContent = imc.toFixed(2);

    if (imc < 18.5) {
        resDescricao.textContent = "você está abaixo do peso";
        return
    }
    if (imc >= 18.5 && imc <= 24.9) {
        resDescricao.textContent = "você está no peso ideal";
        return
    }
    if (imc >= 25 && imc <= 29.9) {
        resDescricao.textContent = "você está acima do peso";
        return
    }
    if (imc >= 30 && imc <= 34.9) {
        resDescricao.textContent = "você está com obesidade grau 1";
        return
    }
    if (imc >= 35 && imc <= 39.9) {
        resDescricao.textContent = "você está com obesidade grau 2";
        return
    }
    if (imc >= 40) {
        resDescricao.textContent = "você está com obesidade grau 3";
        return
    }
}

    botao.addEventListener("click", calcularImc)
