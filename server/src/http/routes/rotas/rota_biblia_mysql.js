const Busca_Biblia_BD = require("../../../infrabd/biblia_bd")
const LiberaOrigemRegistraLog = require("./midware/checkorigem")
//MIDWARE CHECA E PERMITE SE A ORIGEM SOLICITANTE É O SITE VIDADAFONTE.COM.BR E SE A SOLICITAÇÃO É GET   

let Busca_Dados = new Busca_Biblia_BD()

const Rota_Biblia_Mysql = require("express").Router()

Rota_Biblia_Mysql.get("/buscaversao", LiberaOrigemRegistraLog, async (req, res) => {

    let resultado = await Busca_Dados.BuscaVersaoBiblia()
    console.log("resultado")
    res.send(resultado)
})

Rota_Biblia_Mysql.get("/buscatestamento", LiberaOrigemRegistraLog, async (req, res) => {

    let resultado = await Busca_Dados.BuscaTestamento()
    res.send(resultado)
})

Rota_Biblia_Mysql.get("/buscalivros/:testamento_id",  LiberaOrigemRegistraLog, async (req, res) => {

    let resultado = await Busca_Dados.BuscaLivros(req.params.testamento_id)
    console.log("resultado")
    res.send(resultado)
})

Rota_Biblia_Mysql.get("/buscacapitulo/:versao_id/:livro_id", LiberaOrigemRegistraLog, async(req, res)=> {

    let resultado = await Busca_Dados.BuscaCapitulo(req.params.versao_id, req.params.livro_id)
    res.send(resultado)

})

Rota_Biblia_Mysql.get("/buscaconteudo/:versao_id/:testamento_id/:livro_id/:capitulo", LiberaOrigemRegistraLog, async (req, res) => {

    let resultado = await Busca_Dados.BuscaConteudo(req.params.versao_id,req.params.testamento_id, req.params.livro_id, req.params.capitulo)
    console.log("Busca conteudo")
    res.send(resultado)
})

Rota_Biblia_Mysql.get("/pesquisa/:palavra", LiberaOrigemRegistraLog, async (req, res)=> {

    let resultado = await Busca_Dados.PesquisaPorPalavra(req.params.palavra)
    res.send(resultado)
})




module.exports = Rota_Biblia_Mysql