"use strict";

const cep = document.getElementById("cep");
const btnPesquisar = document.getElementById("btnPesquisar");
const saida = document.getElementById("saida");

function getCEP() {
    return Number(cep.value);
}

async function buscarDadosCEP() { // "async" garante que tudo dentro da função seja realizado de forma síncrona
    let urlCEP = `https://viacep.com.br/ws/${getCEP()}/json/`;
    const CEPBuscado = fetch(urlCEP); // retorna uma promessa
    const resposta = await CEPBuscado; // garente que há um retorno
    const dadosCEPJSON = await resposta.json(); // espera o retorno de reposta em formato JSON
    console.log(dadosCEPJSON);
    //saida.textContent = urlCEP;
}

btnPesquisar.addEventListener("click", buscarDadosCEP);