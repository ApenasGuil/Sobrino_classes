"use strict";

const cep = document.getElementById("cep");
const btnPesquisar = document.getElementById("btnPesquisar");
const saida = document.getElementById("saida");

function getCEP() {
    return cep.value; // No uso de mask, o Number() conflita com o hífen
}

function exibirDadosCEP(obj) {
    if(!obj.erro) {
        let dadosCEP = `
            ${obj.logradouro} - 
            ${obj.bairro} - 
            ${obj.localidade}/${obj.uf}
        `;
        return dadosCEP;
    }
    return "CEP inexistente.";
}

async function buscarDadosCEP() { // "async" garante que tudo dentro da função seja realizado de forma síncrona
    let urlCEP = `https://viacep.com.br/ws/${getCEP()}/json/`;
    saida.textContent = "";
    
    try { // Tenta rodar o bloco
    const CEPBuscado = fetch(urlCEP); // retorna uma promessa
    const resposta = await CEPBuscado; // garente que há um retorno
    const dadosCEPJSON = await resposta.json(); // espera o retorno de reposta em formato JSON
    saida.textContent = exibirDadosCEP(dadosCEPJSON);
    } catch (e) { // Lida com qualquer erro que retornar
        saida.textContent = e;
    }
}

btnPesquisar.addEventListener("click", buscarDadosCEP);