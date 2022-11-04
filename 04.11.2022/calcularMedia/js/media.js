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

function calcularMedia(p1=0, p2=0) {
    let media = (p1+2*p2)/3;
    return media.toFixed(2); //Limita as casas decimais
    // return ((p1+2*p2)/3).toFixed(2); //Compartado
};

function onClick() {
    saida.textContent = calcularMedia(getP1(), getP2());
};

btnCalcular.addEventListener("click", onClick);