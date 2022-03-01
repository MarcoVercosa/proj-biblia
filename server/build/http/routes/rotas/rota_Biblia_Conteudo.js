"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotasBibliaConteudo = void 0;
const checkorigem_1 = require("./midware/checkorigem");
//MIDWARE CHECA E PERMITE SE A ORIGEM SOLICITANTE É O SITE VIDADAFONTE.COM.BR E SE A SOLICITAÇÃO É GET   
const RotasBibliaConteudo = require("express").Router();
exports.RotasBibliaConteudo = RotasBibliaConteudo;
const bibliaVersao_1 = require("../../../useCases/biblia/bibliaVersao");
const index_1 = require("../../../useCases/biblia/bibliaTestamento/index");
const index_2 = require("../../../useCases/biblia/bibliaLivros/index");
const index_3 = require("../../../useCases/biblia/bibliaCapitulos/index");
const index_4 = require("../../../useCases/biblia/bibliaConteudo/index");
const index_5 = require("../../../useCases/biblia/bibliaBuscaPorPlavra/index");
RotasBibliaConteudo.get("/buscaversao", checkorigem_1.LiberaOrigemRegistraLog, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    //busca versões disponíveis da biblia
    bibliaVersao_1.bibliaVersaoController.Handle(response);
}));
RotasBibliaConteudo.get("/buscatestamento", checkorigem_1.LiberaOrigemRegistraLog, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    //busca os testamentos
    index_1.bibliaTestamentoController.Handle(response);
}));
RotasBibliaConteudo.get("/buscalivros/:testamento_id", checkorigem_1.LiberaOrigemRegistraLog, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    //busca os livros de acordo com o testamento solicitado
    index_2.bibliaLivrosController.Handle(request, response);
}));
RotasBibliaConteudo.get("/buscacapitulo/:versao_id/:livro_id", checkorigem_1.LiberaOrigemRegistraLog, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    //busca os capitulos, conforme a versao e o livro
    index_3.bibliaCapitulosController.Handle(request, response);
}));
RotasBibliaConteudo.get("/buscaconteudo/:versao_id/:testamento_id/:livro_id/:capitulo", checkorigem_1.LiberaOrigemRegistraLog, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    //busca o conteudo,conforme a versao , testamento, livro e o capitulo 
    index_4.bibliaConteudoController.Handle(request, response);
}));
RotasBibliaConteudo.get("/pesquisa/:palavra", checkorigem_1.LiberaOrigemRegistraLog, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    //busca  os versiculos conforme a palavra solicitada
    index_5.bibliaBuscaPorPalavraController.Handle(request, response);
}));
