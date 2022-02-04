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
exports.BibliaConteudoRepository = void 0;
const conexao_1 = require("../../../infrabd/conexao");
class BibliaConteudoRepository {
    BuscaConteudo(versao_id, livro_id, testamento_id, capitulo) {
        return __awaiter(this, void 0, void 0, function* () {
            const promessa1 = new Promise((resolve, reject) => {
                //busca os versículos do capitulo, dado a versao o identificador do livro e o capitulo
                const sql = `SELECT conteudo FROM  biblias13v.versiculos WHERE versao_id=${versao_id} AND livro_id=${livro_id} AND capitulo=${capitulo} `;
                conexao_1.conectaBD.query(sql, (erro, resultado) => {
                    if (erro) {
                        reject(erro);
                    }
                    else {
                        resolve(resultado);
                    }
                });
            });
            const promessa2 = new Promise((resolve, reject) => {
                //query busca nome do livro e seu nome abreviado, dado o numero do testamento e o id do livro
                const sql = `SELECT livro_nome, livro_abreviado FROM biblias13v.livros WHERE livro_testamento_id=${testamento_id} AND livro_id=${livro_id}`;
                conexao_1.conectaBD.query(sql, (erro, resultado) => {
                    if (erro) {
                        reject(erro);
                    }
                    else {
                        resolve(resultado);
                    }
                });
            });
            const promessa3 = new Promise((resolve, reject) => {
                const sql_buscaQuantidadeCapitulos = `SELECT capitulo FROM biblias13v.versiculos WHERE livro_id=${livro_id} AND versao_id=${versao_id} ORDER BY capitulo DESC LIMIT 1`;
                //Query busca q tabela inteira de capitulos dado o nome do livro e retorna somente o ultimo valor, que é o mais alto, permitindo saber quantos capitulos o livro tem
                conexao_1.conectaBD.query(sql_buscaQuantidadeCapitulos, (erro, resultado) => {
                    if (erro) {
                        reject(erro);
                    }
                    else {
                        resolve(resultado);
                    }
                });
            });
            const promessa4 = new Promise((resolve, reject) => {
                //query retorna a versao do Livro
                const sql_busvaNomeVersao = `SELECT versao_nome FROM biblias13v.versoes WHERE versao_id=${versao_id}`;
                conexao_1.conectaBD.query(sql_busvaNomeVersao, (erro, resultado) => {
                    if (erro) {
                        reject(erro);
                    }
                    else {
                        resolve(resultado);
                    }
                });
            });
            try {
                yield Promise.all([promessa1, promessa2, promessa3, promessa4]);
                let retorno = { conteudo: yield promessa1, nomeLivro: yield promessa2, quantidadecapitulo: yield promessa3, nomeVersao: yield promessa4, capituloAtual: capitulo };
                return retorno;
            }
            catch (erro) {
                // console.log(erro)
                return erro;
            }
        });
    }
}
exports.BibliaConteudoRepository = BibliaConteudoRepository;
