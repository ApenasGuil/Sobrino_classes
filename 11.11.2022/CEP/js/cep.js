"use strict";

const cep = document.getElementById("cep");
const btnPesquisar = document.getElementById("btnPesquisar");
const saida = document.getElementById("saida");

function buscarDadosCEP() {
    saida.textContent = cep.value;
}

btnPesquisar.addEventListener("click", buscarDadosCEP);