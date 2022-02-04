"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliaTestamentoRepository = void 0;
const conexao_1 = require("../../../infrabd/conexao");
class BibliaTestamentoRepository {
    BuscaTestamento() {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM biblia13v.testamentos";
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
exports.BibliaTestamentoRepository = BibliaTestamentoRepository;
