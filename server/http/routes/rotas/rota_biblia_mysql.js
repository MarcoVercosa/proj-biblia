// const AlteraDadosBD = require("../../../infrabd/Hino_e_Harpa")
const Busca_Biblia_BD = require("../../../infrabd/biblia_bd")

let Busca_Dados = new Busca_Biblia_BD()

const Rota_Biblia_Mysql = require("express").Router()

Rota_Biblia_Mysql.get("/buscaversao", async (req, res) => {

    let resultado = await Busca_Dados.BuscaVersaoBiblia()
    console.log("resultado")
    res.send(resultado)
})

Rota_Biblia_Mysql.get("/buscalivros", async (req, res) => {

    let resultado = await Busca_Dados.BuscaLivros()
    console.log("resultado")
    res.send(resultado)
})


module.exports = Rota_Biblia_Mysql