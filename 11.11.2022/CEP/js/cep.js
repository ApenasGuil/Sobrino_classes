"use strict";

const cep = document.getElementById("cep");
const btnPesquisar = document.getElementById("btnPesquisar");
const saida = document.getElementById("saida");

function getCEP() {
    return Number(cep.value);
}

function buscarDadosCEP() {
    let urlCEP = `https://viacep.com.br/ws/${getCEP()}/json/`;
    saida.textContent = urlCEP;
}

btnPesquisar.addEventListener("click", buscarDadosCEP);