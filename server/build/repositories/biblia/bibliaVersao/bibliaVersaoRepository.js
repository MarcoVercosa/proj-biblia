"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliaVersaoRepository = void 0;
const conexao_1 = require("../../../infrabd/conexao");
class BibliaVersaoRepository {
    BuscaVersaoBiblia() {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM biblias13v.versoes;";
            conexao_1.conectaBD.query(sql, (erro, resultado) => {
                if (erro) {
                    // console.log(erro)
                    return reject(erro);
                }
                else {
                    return resolve(resultado);
                }
            });
        });
    }
}
exports.BibliaVersaoRepository = BibliaVersaoRepository;
