import { Request, Response } from "express"

const Busca_Biblia_BD = require("../../../infrabd/biblia_bd")
const LiberaOrigemRegistraLog = require("./midware/checkorigem")
//MIDWARE CHECA E PERMITE SE A ORIGEM SOLICITANTE É O SITE VIDADAFONTE.COM.BR E SE A SOLICITAÇÃO É GET   

let Busca_Dados = new Busca_Biblia_BD()
const Rota_Biblia_Mysql = require("express").Router()

import { bibliaVersaoController } from "../../../useCases/biblia/bibliaVersao"
import { bibliaTestamentoController } from "../../../useCases/biblia/bibliaTestamento/index"
import { bibliaLivrosController } from "../../../useCases/bibliaLivros/index"

Rota_Biblia_Mysql.get("/buscaversao", LiberaOrigemRegistraLog, async (request: Request, response: Response) => {

    // let resultado = await Busca_Dados.BuscaVersaoBiblia()
    // console.log("resultado")
    // response.send(resultado)
    bibliaVersaoController.Handle(response)
})

Rota_Biblia_Mysql.get("/buscatestamento", LiberaOrigemRegistraLog, async (request: Request, response: Response) => {

    // let resultado = await Busca_Dados.BuscaTestamento()
    // response.send(resultado)
    bibliaTestamentoController.Handle(response)
})

Rota_Biblia_Mysql.get("/buscalivros/:testamento_id", LiberaOrigemRegistraLog, async (request: Request, response: Response) => {

    // let resultado = await Busca_Dados.BuscaLivros(request.params.testamento_id)
    // console.log("resultado")
    // response.send(resultado)
    bibliaLivrosController.Handle(request, response)
})

Rota_Biblia_Mysql.get("/buscacapitulo/:versao_id/:livro_id", LiberaOrigemRegistraLog, async (request: Request, response: Response) => {

    let resultado = await Busca_Dados.BuscaCapitulo(request.params.versao_id, request.params.livro_id)
    response.send(resultado)

})

Rota_Biblia_Mysql.get("/buscaconteudo/:versao_id/:testamento_id/:livro_id/:capitulo", LiberaOrigemRegistraLog, async (request: Request, response: Response) => {

    let resultado = await Busca_Dados.BuscaConteudo(request.params.versao_id, request.params.testamento_id, request.params.livro_id, request.params.capitulo)
    console.log("Busca conteudo")
    response.send(resultado)
})

Rota_Biblia_Mysql.get("/pesquisa/:palavra", LiberaOrigemRegistraLog, async (request: Request, response: Response) => {

    let resultado = await Busca_Dados.PesquisaPorPalavra(request.params.palavra)
    response.send(resultado)
})




module.exports = Rota_Biblia_Mysql