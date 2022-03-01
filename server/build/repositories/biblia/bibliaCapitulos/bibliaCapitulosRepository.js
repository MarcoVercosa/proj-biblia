"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliaCapitulosRepository = void 0;
const conexao_1 = require("../../../infrabd/conexao");
class BibliaCapitulosRepository {
    BuscaCapitulo(versao_id, livro_id) {
        return new Promise((resolve, reject) => {
            const sql = ` SELECT capitulo FROM  biblias13v.versiculos WHERE versao_id=${versao_id} AND livro_id=${livro_id}`;
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
exports.BibliaCapitulosRepository = BibliaCapitulosRepository;
