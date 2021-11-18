const express = require("express")
const RotasJson = require("./rotas/biblia_Json")
let router = express()
const cors = require('cors');

router.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    router.use(cors());
    next();
});

router.use("/", RotasJson)
//Rotas da biblia NVI somente do formato JSON


module.exports = router
