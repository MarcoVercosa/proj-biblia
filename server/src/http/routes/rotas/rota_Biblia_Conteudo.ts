import { Request, Response } from "express"

const LiberaOrigemRegistraLog = require("./midware/checkorigem")
//MIDWARE CHECA E PERMITE SE A ORIGEM SOLICITANTE É O SITE VIDADAFONTE.COM.BR E SE A SOLICITAÇÃO É GET   

const RotasBibliaConteudo = require("express").Router()

import { bibliaVersaoController } from "../../../useCases/biblia/bibliaVersao"
import { bibliaTestamentoController } from "../../../useCases/biblia/bibliaTestamento/index"
import { bibliaLivrosController } from "../../../useCases/biblia/bibliaLivros/index"
import { bibliaCapitulosController } from "../../../useCases/biblia/bibliaCapitulos/index"
import { bibliaConteudoController } from "../../../useCases/biblia/bibliaConteudo/index"
import { bibliaBuscaPorPalavraController } from "../../../useCases/biblia/bibliaBuscaPorPlavra/index"

RotasBibliaConteudo.get("/buscaversao", LiberaOrigemRegistraLog, async (request: Request, response: Response) => {
    //busca versões disponíveis da biblia
    bibliaVersaoController.Handle(response)
})

RotasBibliaConteudo.get("/buscatestamento", LiberaOrigemRegistraLog, async (request: Request, response: Response) => {
    //busca os testamentos
    bibliaTestamentoController.Handle(response)
})

RotasBibliaConteudo.get("/buscalivros/:testamento_id", LiberaOrigemRegistraLog, async (request: Request, response: Response) => {
    //busca os livros de acordo com o testamento solicitado
    bibliaLivrosController.Handle(request, response)
})

RotasBibliaConteudo.get("/buscacapitulo/:versao_id/:livro_id", LiberaOrigemRegistraLog, async (request: Request, response: Response) => {
    //busca os capitulos, conforme a versao e o livro
    bibliaCapitulosController.Handle(request, response)
})

RotasBibliaConteudo.get("/buscaconteudo/:versao_id/:testamento_id/:livro_id/:capitulo", LiberaOrigemRegistraLog, async (request: Request, response: Response) => {
    //busca o conteudo,conforme a versao , testamento, livro e o capitulo 
    bibliaConteudoController.Handle(request, response)
})

RotasBibliaConteudo.get("/pesquisa/:palavra", LiberaOrigemRegistraLog, async (request: Request, response: Response) => {
    //busca  os versiculos conforme a palavra solicitada
    bibliaBuscaPorPalavraController.Handle(request, response)
})

export { RotasBibliaConteudo }