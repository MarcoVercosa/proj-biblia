// const Atendimento = require("../models/atendimentos")  // recebe a class Atendimento do Models
const AlteraDadosBD = require("../../../infrabd/Hino_e_Harpa")
const RotasJson = require("express").Router()

const fs = require("fs")
// const { Router } = require("express")



// module.exports = (app) => {
console.log("MÓDULO DE ROTAS CAREGADO")
const dataNovo = require("../novoTestamento.json")
const dataAntigo = require("../antigoTestamento.json")


//MIDWARE CHECA E PERMITE SE A ORIGEM SOLICITANTE É O SITE VIDADAFONTE.COM.BR E SE A SOLICITAÇÃO É GET   
function LiberaOrigemRegistraLog(req, res, next) {
    // let dados = req.headers
    // // console.log(dados.origin)
    // // console.log(req.method)
    // console.log("+" + req.originalUrl)


    // const origem = req.headers.origin || "indefinido"

    // // if (origem.match(/:vidadafonte.com.br/) || origem.match(/localhost/) && req.method === "GET") {
    // if (origem.match(/vidadafonte.com.br/) && req.method === "GET") {
    //     //se conter :vidadafonte.com.br na origem solicitante ou localhost e for do método get
    //     now = new Date
    //     fs.appendFile("./logs.txt", `${now.getDay()}/${now.getMonth()}/${now.getFullYear()}-- ${now.getHours()}:${now.getMinutes()} => LIBERADO acesso da origem
    //      - ${req.headers.origin} com o método - ${req.method} na rota - ${req.originalUrl}\n`, (err) => {

    //         if (err) {
    //             console.log("Houve algum erro ao escrever o log" + err)
    //         }
    //     })
    //     next()
    // } else {
    //     now = new Date
    //     fs.appendFile("./logs.txt", `${now.getDay()}/${now.getMonth()}/${now.getFullYear()} -- ${now.getHours()}:${now.getMinutes()} => NEGADO acesso da origem
    //      - ${req.headers.origin} com o método - ${req.method}  na rota - ${req.originalUrl}\n`, (err) => {
    //         if (err) {
    //             console.log("Houve algum erro ao escrever o log" + err)
    //         }
    //     })
    //     res.status(403).send("Não permitido")
    // }
    next()
}





RotasJson.get("/buscalivroantigotesta", LiberaOrigemRegistraLog, (req, res) => {//fornece somente os livros (COMPONENTE selectTestamento)
    const dataAntigo = require("../antigoTestamento.json")
    const dataNomeFiltrado = dataAntigo
    armazena = []
    dataNomeFiltrado.map((recebe) => {
        armazena.push(recebe.name)
    })
    //console.log("BUSCOU /buscalivroantigotesta")
    res.json(armazena)
})


RotasJson.get("/buscacapituloantigotesta:id", LiberaOrigemRegistraLog, (req, res) => {//fornece somente os capítulos dado o livro que vem no parametro ID
    //console.log("/buscacapituloantigotesta:id")
    // console.log(req.params)
    const dataNomeCapitulo = dataAntigo
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


RotasJson.get("/antigotesta/:livro/:capitulo", LiberaOrigemRegistraLog, (req, res) => { //LISTAR conform o livro e capitulo fornecidos
    //console.log("BUSCOU /antigotesta/:livro/:capitulo ")
    //console.log(req.params.livro)
    //console.log(req.params.capitulo)
    let armazena = []
    // const dataAntigo = require("./antigoTestamento.json")
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

RotasJson.get("/buscalivronovotesta", LiberaOrigemRegistraLog, (req, res) => { //fornece somente os livros (COMPONENTE selectTestamento)

    const dataNomeFiltrado = dataNovo
    armazena = []
    dataNomeFiltrado.map((recebe) => {
        armazena.push(recebe.name)
    })
    //console.log("BUSCOU /buscalivronovotesta")
    res.json(armazena)
})

RotasJson.get("/buscacapitulonovotesta:id", LiberaOrigemRegistraLog, (req, res) => {//fornece somente os capítulos dado o livro que vem no parametro ID
    //console.log("/buscacapitulonovotesta:id")
    //console.log(req.params)

    const dataNomeCapituloFiltrado = dataNovo
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

RotasJson.get("/novotesta/:livro/:capitulo", LiberaOrigemRegistraLog, (req, res) => { //LISTA conforme o livro e capitulo fornecidos
    // console.log("BUSCOU /novotesta/:livro/:capitulo ")
    //console.log(req.params.livro)
    //console.log(req.params.capitulo)


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
RotasJson.get("/buscanumeroharpa", LiberaOrigemRegistraLog, (req, res) => {

    //console.log("Solicitado retorno dos numeros dos cântico Harpa Cristã")
    AlteraDadosBD.ListaNumeroHino(res)
})


RotasJson.get("/buscatitulopornumero/:id", LiberaOrigemRegistraLog, (req, res) => { //retorna letra do hino conforme o numero solicitado

    //console.log("Solicitado retorno da LETRA via número Harpa Cristã ")
    const numeroHarpa = parseInt(req.params.id)
    AlteraDadosBD.BuscaHinoPorNumero(numeroHarpa, res)

})


RotasJson.get("/buscatituloporpalavra/:id", LiberaOrigemRegistraLog, (req, res) => {//busque o numero e hino dado a palavra fornecida
    const buscaTitulo = req.params.id
    //console.log("Solicitado busca de título via palavra Harpa Cristã")
    AlteraDadosBD.BuscaHinoPorPalavra(buscaTitulo, res)

})


// =========== CURIOSIDADES =================


RotasJson.get("/buscacuriosidade/:id", LiberaOrigemRegistraLog, (req, res) => {//busca curiosidades dado o nome do livro

    const palavra = req.params.id
    //console.log("/buscacuriosidade " + req.params.id)

    AlteraDadosBD.BuscaCuriosidade(palavra, res)


})


// RotasJson.post("/cadastracuriosidades", (req, res) => {

//     const atendimento = req.body
//     const resultado = AlteraDadosBD.AdicionaCuriosidades(atendimento, res)
//     console.log("Solicitado post de CURIOSIDADES")
//     res.json(resultado)

// })


// =========== Pesquisa Biblia por palavra =================

RotasJson.get("/biblianvi/pesquisa/:palavrapesquisabiblia", LiberaOrigemRegistraLog, (req, res) => {


    const todosLivros = [dataAntigo, dataNovo]

    var TotalMate = Busca(todosLivros)

    //console.log("   buscou na biblia pela palavra: " + req.params.palavrapesquisabiblia)

    function Busca(recebe) {
        var total = ""

        for (var i = 0; i < recebe.length; i++) {//para cada testamento, faça
            // if (i = 0) { idadeTestamento = "antigo" } else { idadeTestamento = "novo" }
            recebe[i].map((envia, index) => {//no testamento x vai fazer loop em todos os livros
                var idadeTestamento = ""
                if (i === 0) { idadeTestamento = "antigo" } else { idadeTestamento = "novo" }


                const terra = req.params.palavrapesquisabiblia //pegue  a palavra da pesquisa recebida
                var capituloVersiculoConteudo = BuscaFilter(envia.chapters, terra)
                // console.log(BuscaDados)

                if (capituloVersiculoConteudo.length > 0) {//se a array dele iver conteúdo

                    var totalTemp = [ //cria o obj
                        { idadeTestamento, livro: envia.name, capituloVersiculoConteudo: capituloVersiculoConteudo }, //receberá o nome do livro da rodada
                        // { capituloVersiculoConteudo: BuscaFilter(envia.chapters, terra) } //cap, versic, e conteudo  via função enviando capitulo do livro da rodada map e a palavra pesquisada
                    ]
                    total = [...total, ...totalTemp]
                } else {
                    total = total
                }
            })
        }

        return total
    }


    function BuscaFilter(dados, terra) { //dados = todos capitulos do livro da rodada, terra= palavra pesquisada
        var armazena = []

        dados.map((capitulo, index) => { //capitulo = todos versiculos do capitulo da rodada
            var capituloLivro = index + 1 //capitulo apreoveita o index
            var versiculo = ""
            var conteudo = []

            for (var i = 0; i < capitulo.length; i++) { //enquanto houver versiculos, faça
                var conteudoVersiculo = capitulo[i].toLowerCase()
                conteudoVersiculo = conteudoVersiculo.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                // console.log(conteudoVersiculo)
                if (conteudoVersiculo.includes(terra)) {//se houver a palavra no versiculo, será verdadeiro
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

        return armazena
    }

    res.json(TotalMate)

})





RotasJson.get("/biblianvi/pesquisa", LiberaOrigemRegistraLog, (req, res) => { //afim de trazer all books


    const todosLivros = [dataAntigo, dataNovo]

    res.json(todosLivros)

})


// }

module.exports = RotasJson




