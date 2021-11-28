const express = require("express")
let router = express()
const cors = require('cors');

const rota_biblia_hinoharpa = require ("./rotas/rota_biblia_hinoharpa")
const rota_biblia_curiosidades = require("./rotas/rota_biblia_curiosidades")
const rota_biblia_mysql = require("./rotas/rota_biblia_mysql")



router.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    router.use(cors());
    next();
});

router.use("/curiosidades", rota_biblia_curiosidades)
router.use("/mais", rota_biblia_mysql)
router.use("/hinoharpa", rota_biblia_hinoharpa)


module.exports = router
