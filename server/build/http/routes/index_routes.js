"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let router = express();
const cors = require('cors');
const rota_biblia_hinoharpa_1 = require("./rotas/rota_biblia_hinoharpa");
const rota_biblia_curiosidades_1 = require("./rotas/rota_biblia_curiosidades");
const rota_Biblia_Conteudo_1 = require("./rotas/rota_Biblia_Conteudo");
router.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    router.use(cors());
    next();
});
router.use("/curiosidades", rota_biblia_curiosidades_1.RotaCuriosidades);
router.use("/mais", rota_Biblia_Conteudo_1.RotasBibliaConteudo);
router.use("/hinoharpa", rota_biblia_hinoharpa_1.RotasHinoHarpa);
module.exports = router;
