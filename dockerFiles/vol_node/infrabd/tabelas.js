class Tabelas {
    init(conexao) {//recebe o obj das confs do BD
        console.log("Checkagem de tabelas iniciada")
        this.conexao = conexao

        this.criarAtendimentos()

    }

    criarAtendimentos() {
        console.log("INICIADO CHECKAGEM DAS TABELAS")
        const sql = "CREATE TABLE IF NOT EXISTS louvores(id int NOT NULL AUTO_INCREMENT, numero int(50) NOT NULL, titulo varchar(100), letra varchar(5000) NOT NULL, PRIMARY KEY(ID) )"

        this.conexao.query(sql, (erro) => {

            if (erro) {
                console.log(erro)
            } else {
                console.log("Tabela Atendimentos criada/ja existe com sucesso.")
            }

        })

    }


}

module.exports = new Tabelas