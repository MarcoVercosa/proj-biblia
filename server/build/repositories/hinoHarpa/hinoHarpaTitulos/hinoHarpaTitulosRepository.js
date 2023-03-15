"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HinoHarpaTitulosRepository = void 0;
const conexao_1 = require("../../../infrabd/conexao");
class HinoHarpaTitulosRepository {
    BuscaHinoPorNumero(numero) {
        const sql = `SELECT letra, titulo FROM biblias13v.louvores WHERE numero=${numero}`;
        return new Promise((resolve, reject) => {
            conexao_1.conectaBD.query(sql, (erro, resultado) => {
                if (erro) {
                    reject(erro);
                }
                else {
                    resolve(resultado);
                }
            });
        });
    }
}
exports.HinoHarpaTitulosRepository = HinoHarpaTitulosRepository;
