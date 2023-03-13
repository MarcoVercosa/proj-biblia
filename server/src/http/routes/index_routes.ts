require('dotenv').config()
import swaggerUi from "swagger-ui-express"
import { Request, Response, NextFunction } from "express";
const express = require("express")
let router = express()
const cors = require('cors');

import { RotasHinoHarpa } from "./rotas/rota_biblia_hinoharpa";
import { RotaCuriosidades } from "./rotas/rota_biblia_curiosidades";
import { RotasBibliaConteudo } from "./rotas/rota_Biblia_Conteudo";
import { OpenAI } from "./rotas/rotaIA";
import SwaggerDocs from "../../doc/swagger.json"
import { Logger } from "../../services/logs/createLogs";



router.use((req: Request, res: Response, next: NextFunction) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", "GET,HEAD,POST");
    res.header("Access-Control-Allow-Headers", "Content-Type,Accept");
    router.use(cors());
    next();
});
router.use("/curiosidades", RotaCuriosidades)
router.use("/mais", RotasBibliaConteudo)
router.use("/hinoharpa", RotasHinoHarpa)
router.use("/ai", OpenAI)



if (process.env.NODE_ENV === "development") {
    Logger.http("Swagger ON")
    router.use("/api-documentation", swaggerUi.serve, swaggerUi.setup(SwaggerDocs))
} else {
    Logger.http("Swagger OFF")
}

export { router }
