"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliaLivrosRepository = void 0;
const conexao_1 = require("../../../infrabd/conexao");
class BibliaLivrosRepository {
    BuscaLivros(testamento_id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM biblias13v.livros WHERE livro_testamento_id=${testamento_id}`;
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
exports.BibliaLivrosRepository = BibliaLivrosRepository;
