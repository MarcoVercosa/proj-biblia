"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotasHinoHarpa = void 0;
const RotasHinoHarpa = require("express").Router();
exports.RotasHinoHarpa = RotasHinoHarpa;
const checkorigem_1 = require("./midware/checkorigem");
const index_1 = require("../../../useCases/hinoHarpa/hinoHarpaNumeros/index");
const index_2 = require("../../../useCases/hinoHarpa/hinoHarpaTitulo/index");
const index_3 = require("../../../useCases/hinoHarpa/hinoHarpaBuscaPorPalavra/index");
// =========== HINO HARPA  ===========
//busca somente os numeros de todos os hinos
RotasHinoHarpa.get("/buscanumeroharpa", checkorigem_1.LiberaOrigemRegistraLog, (request, response) => {
    //console.log("Solicitado retorno dos numeros dos cântico Harpa Cristã")
    index_1.hinoHarpaNumerosController.Handle(request, response);
});
// solicita retorno da LETRA via número Harpa Cristã
RotasHinoHarpa.get("/buscatitulopornumero/:id", checkorigem_1.LiberaOrigemRegistraLog, (request, response) => {
    index_2.hinoHarpaTitulosController.Handle(request, response);
});
RotasHinoHarpa.get("/buscatituloporpalavra/:id", checkorigem_1.LiberaOrigemRegistraLog, (request, response) => {
    // const buscaTitulo = request.params.id
    // //console.log("Solicitado busca de título via palavra Harpa Cristã")
    // AlteraDadosBD.BuscaHinoPorPalavra(buscaTitulo, response)
    index_3.hinoHarpaBuscaPorPalavraController.Handle(request, response);
});
