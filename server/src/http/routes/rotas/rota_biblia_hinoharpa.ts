import { Request, Response } from "express";
const RotasHinoHarpa = require("express").Router()

import { LiberaOrigemRegistraLog } from "./midware/checkorigem"


import { hinoHarpaNumerosController } from "../../../useCases/hinoHarpa/hinoHarpaNumeros/index";
import { hinoHarpaTitulosController } from "../../../useCases/hinoHarpa/hinoHarpaTitulo/index"
import { hinoHarpaBuscaPorPalavraController } from "../../../useCases/hinoHarpa/hinoHarpaBuscaPorPalavra/index"


// =========== HINO HARPA  ===========


//busca somente os numeros de todos os hinos
RotasHinoHarpa.get("/buscanumeroharpa", LiberaOrigemRegistraLog, (request: Request, response: Response) => {
    //console.log("Solicitado retorno dos numeros dos cântico Harpa Cristã")
    hinoHarpaNumerosController.Handle(request, response)
})

// solicita retorno da LETRA via número Harpa Cristã
RotasHinoHarpa.get("/buscatitulopornumero/:id", LiberaOrigemRegistraLog, (request: Request, response: Response) => { //retorna letra do hino conforme o numero solicitado
    hinoHarpaTitulosController.Handle(request, response)
})


RotasHinoHarpa.get("/buscatituloporpalavra/:id", LiberaOrigemRegistraLog, (request: Request, response: Response) => {//busque o numero e hino dado a palavra fornecida
    // const buscaTitulo = request.params.id
    // //console.log("Solicitado busca de título via palavra Harpa Cristã")
    // AlteraDadosBD.BuscaHinoPorPalavra(buscaTitulo, response)

    hinoHarpaBuscaPorPalavraController.Handle(request, response)

})

export { RotasHinoHarpa }