"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuriosidadesRepository = void 0;
const conexao_1 = require("../../infrabd/conexao");
class CuriosidadesRepository {
    constructor() { }
    BuscaCuriosidade(palavra) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT livro, conteudo FROM biblias13v.curiosidades WHERE livro LIKE "%${palavra}%"`;
            conexao_1.conectaBD.query(sql, (erro, resultado) => {
                if (erro) {
                    return reject(erro);
                }
                else {
                    return resolve(resultado);
                }
            });
        });
    }
}
exports.CuriosidadesRepository = CuriosidadesRepository;
