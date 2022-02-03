import { Request, Response, NextFunction } from "express";
const express = require("express")
let router = express()
const cors = require('cors');

import { RotasHinoHarpa } from "./rotas/rota_biblia_hinoharpa"
import { RotaCuriosidades } from "./rotas/rota_biblia_curiosidades"
import { RotasBibliaConteudo } from "./rotas/rota_Biblia_Conteudo"



router.use((req: Request, res: Response, next: NextFunction) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    router.use(cors());
    next();
});

router.use("/curiosidades", RotaCuriosidades)
router.use("/mais", RotasBibliaConteudo)
router.use("/hinoharpa", RotasHinoHarpa)


module.exports = router
