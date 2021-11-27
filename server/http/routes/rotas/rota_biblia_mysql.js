// const AlteraDadosBD = require("../../../infrabd/Hino_e_Harpa")
const Busca_Biblia_BD = require("../../../infrabd/biblia_bd")

let Busca_Dados = new Busca_Biblia_BD()

const Rota_Biblia_Mysql = require("express").Router()

Rota_Biblia_Mysql.get("/buscaversao", async (req, res) => {

    let resultado = await Busca_Dados.BuscaVersaoBiblia()
    console.log("resultado")
    res.send(resultado)
})

Rota_Biblia_Mysql.get("/buscatestamento", async (req, res) => {

    let resultado = await Busca_Dados.BuscaTestamento()
    res.send(resultado)
})

Rota_Biblia_Mysql.get("/buscalivros/:testamento_id", async (req, res) => {

    let resultado = await Busca_Dados.BuscaLivros(req.params.testamento_id)
    console.log("resultado")
    res.send(resultado)
})

Rota_Biblia_Mysql.get("/buscacapitulo/:versao_id/:livro_id", async(req, res)=> {

    let resultado = await Busca_Dados.BuscaCapitulo(req.params.versao_id, req.params.livro_id)
    res.send(resultado)

})

Rota_Biblia_Mysql.get("/buscaconteudo/:versao_id/:testamento_id/:livro_id/:capitulo", async (req, res) => {

    let resultado = await Busca_Dados.BuscaConteudo(req.params.versao_id,req.params.testamento_id, req.params.livro_id, req.params.capitulo)
    console.log("Busca conteudo")
    res.send(resultado)
})

Rota_Biblia_Mysql.get("/pesquisa/:palavra", async (req, res)=> {

    let resultado = await Busca_Dados.PesquisaPorPalavra(req.params.palavra)
    res.send(resultado)
})




module.exports = Rota_Biblia_Mysql