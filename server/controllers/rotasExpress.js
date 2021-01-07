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
            }
        })
        res.json(armazena)
    })


    app.get("/antigotesta/:livro/:capitulo", (req, res) => { //LISTAR conform o livro e capitulo fornecidos
        console.log("BUSCOU /antigotesta/:livro/:capitulo ")
        console.log(req.params.livro)
        console.log(req.params.capitulo)

        // if (parseInt(req.params.capitulo) == 1) { //ATENÇÃO: ESSE IF É PARA QUANDO O CAPITULO FOR IGUAL A 1 ALÉM DE BUSCAR O CAPÍTULO PEDIDO
        //     //IRÁ BUSCAR TAMBÉM O ULTIMO CAPÍTULO DO LIVRO ANTERIOR PARA NÃO CRASHAR A APLICAÇÃO
        //     console.log(" no if Index")
        //     const dataAntigo = require("./antigoTestamento.json")
        //     let armazena = []
        // const armazenaIndexLivroAnterior = dataAntigo.findIndex(({ name }) => //ENCONTRE O INDICE DA ARRAY CORRESPONDENET AO LIVRO SOLICITADO
        //     name == req.params.livro
        // )
        // livro = dataAntigo[armazenaIndexLivroAnterior - 1].name
        // tamanhoCapitulo = dataAntigo[armazenaIndexLivroAnterior - 1].chapters.length //SERÁ MENOS UM PARA ACHAR O LIVRO ANTERIOR, POIS CONTA A PARTIR DO ZERO
        // livroAnterior = [tamanhoCapitulo, dataAntigo[armazenaIndexLivroAnterior - 1].chapters[tamanhoCapitulo - 1], livro] //MENOS UM TAMBÉM, PARA ACHAR O ulTIMO CAPITULO DO LIVRO ANTERIOR, POIS CONTA A PARTIR DO ZERO

        // dataAntigo.map((recebe) => {
        //     if (recebe.name == req.params.livro) {
        //         // armazena = [...recebe.chapters[parseInt(req.params.capitulo) - 1], recebe.chapters.length, ...armazena]//menos um pq como array conta a partir do zero...
        //         const capitulos = recebe.chapters[parseInt(req.params.capitulo) - 1]
        //         armazena = [recebe.chapters.length, capitulos, recebe.name, { livroAnterior }]
        //         // armazena = [armazena, recebe.chapters.length]
        //     }
        // })
        // console.log("primeiro/ultimo capítulo")
        // res.json(armazena)



        let armazena = []
        const dataAntigo = require("./antigoTestamento.json")
        dataAntigo.map((recebe) => {
            if (recebe.name == req.params.livro) {
                armazena = recebe.chapters[parseInt(req.params.capitulo) - 1]//menos um pq como array conta a partir do zero...
                armazena = [recebe.chapters.length, armazena, recebe.name]
            }
        })

        res.json(armazena)

    })

    //============

    // #NOVO TESTAMENTO -**********************************

    //============

    app.get("/buscalivronovotesta", (req, res) => { //fornece somente os livros (COMPONENTE selectTestamento)
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

    app.get("/novotesta/:livro/:capitulo", (req, res) => { //LISTA conforme o livro e capitulo fornecidos
        console.log("BUSCOU /novotesta/:livro/:capitulo ")
        console.log(req.params.livro)
        console.log(req.params.capitulo)

        const dataNovo = require("./novoTestamento.json")
        let armazena = []

        dataNovo.map((recebe) => {

            if (recebe.name == req.params.livro) {
                armazena = recebe.chapters[parseInt(req.params.capitulo) - 1]
                armazena = [recebe.chapters.length, armazena]
            }
        })
        res.json(armazena)
    })




    // =========== HINO HARPA  ===========


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


    app.get("/buscatitulopornumero/:id", (req, res) => { //retorna letra do hino conforme o numero solicitado

        console.log("Solicitado retorno da LETRA via número Harpa Cristã ")
        const numeroHarpa = parseInt(req.params.id)
        AlteraDadosBD.BuscaHinoPorNumero(numeroHarpa, res)

    })


    app.get("/buscatituloporpalavra/:id", (req, res) => {//busque o numero e hino dado a palavra fornecida
        const buscaTitulo = req.params.id
        console.log("Solicitado busca de título via palavra Harpa Cristã")
        AlteraDadosBD.BuscaHinoPorPalavra(buscaTitulo, res)

    })


    // =========== CURIOSIDADES =================


    app.get("/buscacuriosidade/:id", (req, res) => {//busca curiosidades dado o nome do livro

        const palavra = req.params.id
        console.log("/buscacuriosidade " + req.params.id)

        AlteraDadosBD.BuscaCuriosidade(palavra, res)

    })


    app.post("/cadastracuriosidades", (req, res) => {

        const atendimento = req.body
        const resultado = AlteraDadosBD.AdicionaCuriosidades(atendimento, res)
        console.log("Solicitado post de CURIOSIDADES")
        res.json(resultado)

    })


    // =========== Pesquisa Biblia por palavra =================

    app.get("/biblianvi/pesquisa/:palavrapesquisabiblia", (req, res) => {

        const dataNovo = require("./novoTestamento.json")
        const dataAntigo = require("./antigoTestamento.json")
        const todosLivros = [dataAntigo, dataNovo]

        var TotalMate = Busca(todosLivros)

        console.log("   buscou na biblia pela palavra: " + req.params.palavrapesquisabiblia)

        function Busca(recebe) {
            var total = ""
            for (var i = 0; i < recebe.length; i++) {//para cada testamento, faça
                recebe[i].map((envia, index) => {//no testamento x vai fazer loop em todos os livros
                    const terra = req.params.palavrapesquisabiblia //pegue  a palavra da pesquisa recebida
                    var totalTemp = [ //cria o obj
                        { livro: envia.name }, //receberá o nome do livro da rodada
                        { capituloVersiculoConteudo: BuscaFilter(envia.chapters, terra) } //cap, versic, e conteudo  via função enviando capitulo do livro da rodada map e a palavra pesquisada

                    ]
                    total = [...total, totalTemp]
                })
            }
            // console.log(total)
            return total
        }


        function BuscaFilter(dados, terra) { //dados = todos capitulos do livro da rodada, terra= palavra pesquisada
            var armazena = []

            dados.map((capitulo, index) => { //capitulo = todos versiculos do capitulo da rodada
                var capituloLivro = index + 1 //capitulo apreoveita o index
                var versiculo = ""
                var conteudo = []

                for (var i = 0; i < capitulo.length; i++) { //enquanto houver versiculos, faça

                    if (capitulo[i].includes(terra)) {//se houver a palavra no versiculo, será verdadeiro
                        versiculo = i + 1 //sempre mais um , pois começa pelo zero
                        // data = capitulo[i]
                        conteudo = [...conteudo, { versiculo, conteudo: capitulo[i] }] // conteudo vai receber ele mesmo como array, e como obj: versiculo e o conteudo que sera o conteudo do versiculo
                    }
                }
                if (conteudo.length >= 1) { //se o conteudo for diferente de zero, significa que houve dados encontrados
                    armazena = [...armazena, { capituloLivro, conteudo }]
                } else {//senão mantenha o valor da armazena
                    armazena = armazena
                }

            })
            // console.log(armazena)
            return armazena

        }




        res.json(TotalMate)





    })





    app.get("/biblianvi/pesquisa", (req, res) => { //afim de trazer all books

        const dataNovo = require("./novoTestamento.json")
        const dataAntigo = require("./antigoTestamento.json")
        const todosLivros = [dataAntigo, dataNovo]

        res.json(todosLivros)

    })


}





