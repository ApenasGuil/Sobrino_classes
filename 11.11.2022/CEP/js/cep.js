"use strict";

const cep = document.getElementById("cep");
const btnPesquisar = document.getElementById("btnPesquisar");
const saida = document.getElementById("saida");

function getCEP() {
    return Number(cep.value);
}

function buscarDadosCEP() {
    saida.textContent = getCEP();
}

btnPesquisar.addEventListener("click", buscarDadosCEP);