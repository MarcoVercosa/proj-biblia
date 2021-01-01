const express = require("express") // lib para tornar o site/server online
const consign = require("consign") // lib para importar/exportar módulos
const bodyParser = require("body-parser") //lib para fazer o site/sistem entender os tipos de dados dos posts
const cors = require('cors');


module.exports = () => { //cria e exporta o módulo (módulo contem as rotas pegas do controllers) importado pelo index.js

    const app = express()

    app.use((req, res, next) => {
        //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
        res.header("Access-Control-Allow-Origin", "*");
        //Quais são os métodos que a conexão pode realizar na API
        res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
        app.use(cors());
        next();
    });

    app.use(bodyParser.urlencoded({ extended: true })) //usa o app com a bliblioteca express, add funcoes da lib bodyParser e o tipo de dado 
    //    (urlencoded... pode ser json se quiser, depende dos dados que o postaman vai enviar) e extended true para ativar
    app.use(bodyParser.json())

    consign() //linhas 38 e 39 instrucao.txt
        .include('./controllers') //inclui os módulos do controllers
        .into(app) //coloque dentro  do App
    //passa para o app todos o módulos criados  dentro da pasta controllers
    console.log("CustomExpress")
    return app
}