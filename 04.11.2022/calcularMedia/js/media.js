"use strict";

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const btnCalcular = document.getElementById("btnCalcular");
const saida = document.getElementById("saida");

function getP1() {
    return Number(p1.value); //Pega valores já convertidos
}

function getP2() {
    return Number(p2.value); //Pega valores já convertidos
}

function calcularMedia(p1 = 0, p2 = 0) {
    let media = (p1 + 2 * p2) / 3;
    return media.toFixed(2); //Limita as casas decimais
    // return ((p1+2*p2)/3).toFixed(2); //Compartado
};

function validarNota(nota) {
    return (nota >= 0 && nota <= 10) ? true : false;
};

function onClick() {
    saida.textContent = calcularMedia(getP1(), getP2());
};

function onChange() {
    if (validarNota(this.value) == false){
        this.value = "";
        this.focus();
    }
};

btnCalcular.addEventListener("click", onClick);
p1.addEventListener("change", onChange);
p2.addEventListener("change", onChange);

//p2.addEventListener("input", onChangeP2); //Chama a função a cada inserção no campo de input