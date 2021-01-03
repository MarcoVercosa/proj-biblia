// const Atendimento = require("../models/atendimentos")  // recebe a class Atendimento do Models
const AlteraDadosBD = require("../infrabd/alteraDados")

module.exports = (app) => {
    console.log("MÓDULO DE ROTAS CAREGADO")

    app.get("/buscalivroantigotesta", (req, res) => {//fornece somente os livros (COMPONENTE selectTestamento)
        const dataNomeLivro = require("./antigoTestamento.json")
        const dataNomeFiltrado = dataNomeLivro
        armazena = []
        dataNomeFiltrado.map((recebe) => {
            armazena.push(recebe.name)
        })
        console.log("BUSCOU /buscalivroantigotesta")
        res.json(armazena)
    })

    app.get("/antigotesta/:livro/:capitulo", (req, res) => { //LISTAR dados
        console.log("BUSCOU /antigotesta/:livro/:capitulo ")
        console.log(req.params.livro)
        console.log(req.params.capitulo)

        const dataAntigo = require("./antigoTestamento.json")
        let armazena = []

        dataAntigo.map((recebe) => {

            if (recebe.name == req.params.livro) {
                armazena = recebe.chapters[parseInt(req.params.capitulo) - 1]
                armazena = [recebe.chapters.length, armazena]
            }
        })
        res.json(armazena)
    })



    app.get("/buscacapituloantigotesta:id", (req, res) => {//fornece somente os capítulos dado o livro que vem no parametro ID
        console.log("/buscacapituloantigotesta:id")
        console.log(req.params)
        const dataNomeCapitulo = require("./antigoTestamento.json")
        const dataNomeCapituloFiltrado = dataNomeCapitulo
        armazena = []
        dataNomeCapituloFiltrado.map((recebe, index) => {
            if (recebe.name == req.params.id) {
                for (i = 1; i <= recebe.chapters.length; i++) {
                    armazena.push(i)
                    //para cada rodada se achar o nome do livro igual o parametro da url
                    //faça um loop nos capitulos e monte a quantidade de capitulos
                }

                // armazena.push(recebe.chapters)

            }
        })
        res.json(armazena)

    })

    // #NOVO TESTA -**********************************

    app.get("/novotesta/:livro/:capitulo", (req, res) => { //LISTAR dados
        console.log("BUSCOU /novotesta/:livro/:capitulo ")
        console.log(req.params.livro)
        console.log(req.params.capitulo)

        const dataAntigo = require("./novoTestamento.json")
        let armazena = []

        dataAntigo.map((recebe) => {

            if (recebe.name == req.params.livro) {
                armazena = recebe.chapters[parseInt(req.params.capitulo) - 1]
                armazena = [recebe.chapters.length, armazena]
            }
        })
        res.json(armazena)
    })



    app.get("/buscalivronovotesta", (req, res) => { //ADD dados.  POST Usuário envia dados (ex: formulário) e o server o recebe
        const dataNomeLivro = require("./novoTestamento.json")
        const dataNomeFiltrado = dataNomeLivro
        armazena = []
        dataNomeFiltrado.map((recebe) => {
            armazena.push(recebe.name)
        })
        console.log("BUSCOU /buscalivroantigotesta")
        res.json(armazena)
    })

    app.get("/buscacapitulonovotesta:id", (req, res) => {//fornece somente os capítulos dado o livro que vem no parametro ID
        console.log("/buscacapitulonovotesta:id")
        console.log(req.params)
        const dataNomeCapitulo = require("./novoTestamento.json")
        const dataNomeCapituloFiltrado = dataNomeCapitulo
        armazena = []
        dataNomeCapituloFiltrado.map((recebe, index) => {
            if (recebe.name == req.params.id) {
                for (i = 1; i <= recebe.chapters.length; i++) {
                    armazena.push(i)
                    //para cada rodada se achar o nome do livro igual o parametro da url
                    //faça um loop nos capitulos e monte a quantidade de capitulos
                }

            }
        })
        res.json(armazena)
    })


    //TEMP ------------------------------------

    app.get("/buscalivroantigotestatemp", (req, res) => {//fornece somente os livros (COMPONENTE selectTestamento)
        const dataNomeLivro = require("./antigoTestamento.json")
        const dataNomeFiltrado = dataNomeLivro

        res.json(dataNomeFiltrado)
    })





    app.get("/cadastraharpa", (req, res) => {

        console.log("Solicitado cadastro de cântico Harpa Cristã")
        AlteraDadosBD.Lista(res)
    })

    app.post("/cadastraharpa", (req, res) => {

        const atendimento = req.body
        const resultado = AlteraDadosBD.Adiciona(atendimento, res)
        console.log("SOLICITADO POST DE DADOS")
        res.json("COringao" + resultado)
    })















    app.get("/atendimentos/:id", (req, res) => { //PESQUISA dados. na url quando colocamos /atendimentos/numero qualquer, ele recebe o numero no parametro req  
        console.log(req.params)
        const id = parseInt(req.params.id) //converte para numero, pq o id recebido pelo navegador é em string, e o id no bd é numero
        Atendimento.buscaPorId(id, res)
        //res.send("OK")
    })

    app.patch("/atendimentos/:id", (req, res) => {

        const id = parseInt(req.params.id)
        const valores = req.body
        Atendimento.altera(id, valores, res)

    })

    app.delete("/atendimentos/:id", (req, res) => {

        const id = parseInt(req.params.id)
        Atendimento.deleta(id, res)
    })





}