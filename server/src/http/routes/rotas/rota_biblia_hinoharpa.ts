import { Request, Response } from "express";
const RotasHinoHarpa = require("express").Router()

import { LiberaOrigemRegistraLog } from "../../../services/middleware/checkorigem"


import { hinoHarpaNumerosController } from "../../../useCases/hinoHarpa/hinoHarpaNumeros/index";
import { hinoHarpaTitulosController } from "../../../useCases/hinoHarpa/hinoHarpaTitulo/index"
import { hinoHarpaBuscaPorPalavraController } from "../../../useCases/hinoHarpa/hinoHarpaBuscaPorPalavra/index"
import { Logger } from "../../../services/logs/createLogs";


// =========== HINO HARPA  ===========


//busca somente os numeros de todos os hinos
RotasHinoHarpa.get("/buscanumeroharpa", LiberaOrigemRegistraLog, (request: Request, response: Response) => {
    Logger.http("Solicitado HINOHARPA na rota /buscanumeroharpa")
    hinoHarpaNumerosController.Handle(request, response)
})

// solicita retorno da LETRA via número Harpa Cristã
RotasHinoHarpa.get("/buscatitulopornumero/:id", LiberaOrigemRegistraLog, (request: Request, response: Response) => { //retorna letra do hino conforme o numero solicitado
    Logger.http("Solicitado HINOHARPA na rota /buscatitulopornumero/:id")
    hinoHarpaTitulosController.Handle(request, response)
})

RotasHinoHarpa.get("/buscatituloporpalavra/:id", LiberaOrigemRegistraLog, (request: Request, response: Response) => {//busque o numero e hino dado a palavra fornecida
    Logger.http("Solicitado HINOHARPA na rota /buscatituloporpalavra/:id")
    hinoHarpaBuscaPorPalavraController.Handle(request, response)

})

export { RotasHinoHarpa }