const RotasHinoHarpa = require("express").Router()
const AlteraDadosBD = require("../../../infrabd/curiosidade_harpa_bd")

const LiberaOrigemRegistraLog = require("./midware/checkorigem")

// =========== HINO HARPA  ===========


//busca somente o numero de todos os hinos
RotasHinoHarpa.get("/buscanumeroharpa", LiberaOrigemRegistraLog, (req, res) => {

    //console.log("Solicitado retorno dos numeros dos cântico Harpa Cristã")
    AlteraDadosBD.ListaNumeroHino(res)
})


RotasHinoHarpa.get("/buscatitulopornumero/:id", LiberaOrigemRegistraLog, (req, res) => { //retorna letra do hino conforme o numero solicitado

    //console.log("Solicitado retorno da LETRA via número Harpa Cristã ")
    const numeroHarpa = parseInt(req.params.id)
    AlteraDadosBD.BuscaHinoPorNumero(numeroHarpa, res)

})


RotasHinoHarpa.get("/buscatituloporpalavra/:id", LiberaOrigemRegistraLog, (req, res) => {//busque o numero e hino dado a palavra fornecida
    const buscaTitulo = req.params.id
    //console.log("Solicitado busca de título via palavra Harpa Cristã")
    AlteraDadosBD.BuscaHinoPorPalavra(buscaTitulo, res)

})

module.exports = RotasHinoHarpa