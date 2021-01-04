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

    // #NOVO TESTAMENTO -**********************************

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


    // #HINO HARPA - **********************************


    //busca somente o numero de todos os hinos
    app.get("/buscanumeroharpa", (req, res) => {

        console.log("Solicitado retorno dos numeros dos cântico Harpa Cristã")
        AlteraDadosBD.ListaNumeroHino(res)
    })

    // app.post("/cadastraharpa", (req, res) => {

    //     const atendimento = req.body
    //     const resultado = AlteraDadosBD.Adiciona(atendimento, res)
    //     console.log("SOLICITADO POST DE DADOS")
    //     res.json("COringao" + resultado)
    // })


    app.get("/buscatitulopornumero/:id", (req, res) => {

        console.log("Solicitado retorno da LETRA via número Harpa Cristã ")
        const numeroHarpa = parseInt(req.params.id)
        AlteraDadosBD.BuscaHinoPorNumero(numeroHarpa, res)

    })


    app.get("/buscatituloporpalavra/:id", (req, res) => {
        const buscaTitulo = req.params.id
        console.log("Solicitado busca de título via palavra Harpa Cristã")
        AlteraDadosBD.BuscaHinoPorPalavra(buscaTitulo, res)

    })


}