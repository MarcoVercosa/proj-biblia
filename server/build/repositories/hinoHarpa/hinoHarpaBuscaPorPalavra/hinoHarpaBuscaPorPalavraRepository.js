"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HinoHarpaBuscaPorPalavraRepository = void 0;
const conexao_1 = require("../../../infrabd/conexao");
class HinoHarpaBuscaPorPalavraRepository {
    BuscaHinoPorPalavra(palavra) {
        const sql = `SELECT numero, titulo FROM biblia13v.louvores WHERE letra LIKE "%${palavra}%"`;
        return new Promise((resolve, reject) => {
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
exports.HinoHarpaBuscaPorPalavraRepository = HinoHarpaBuscaPorPalavraRepository;
