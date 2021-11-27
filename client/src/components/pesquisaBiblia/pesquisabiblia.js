import { React, useState, useEffect } from 'react';
// import { Link } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"// o hash faz funcionar os links âncoras
import LinearIndeterminate from "../../components/progresso/progresso"
import SearchAppBar from "../header/header"
import GetApi from "../../fetch/api"
import "./pesquisabiblia.css"
import PainelMenuLateral from "../../components/painelMenuLateral/painelMenuLateral"
import Footer from "../../components/footer/footer"

export default function PesquisaBiblia(props) {

    const [barraProgresso, setBarraProgresso] = useState(true)
    const [erroBusca, setErroBusca] = useState(false)
    const [palavraPesquisada, setPalavraPesquisada] = useState(props.match.params.palavrapesquisabiblia)//palavra pesquisada URL
    const [dadosPesquisa, setDadosPesquisa] = useState(false) //dados recebidos do get
    const [dadosPesquisaPaginacao, setDadosPesquisaPaginacao] = useState()//divide para paginação
    const [paginaAvanca, setPaginaAvanca] = useState(4)
    const [paginaVolta, setPaginaVolta] = useState(0)



    useEffect(async () => {
        //console.log("Params " + props.match.params.palavrapesquisabiblia)
        const palavraPesquisadaSemAcento = palavraPesquisada.normalize("NFD").replace(/[\u0300-\u036f]/g, "") //retira acentos
        const resultado = await GetApi(`biblianvi/pesquisa/${palavraPesquisadaSemAcento.toLowerCase()}`)
        if (resultado.data.length < 1) {
            setErroBusca(true) //Ativa o erro
            setBarraProgresso(false)
        } else {
            setDadosPesquisaPaginacao([{ tamanho: resultado.data.length, paginacao: resultado.data.slice(paginaVolta, paginaAvanca), saberQuePagina: 1 }])
            setDadosPesquisa(resultado)
            setBarraProgresso(false)
            setErroBusca(false)

        }
    }, [])

    MaisPesquisa()

    async function MaisPesquisa() {
        if (palavraPesquisada != props.match.params.palavrapesquisabiblia) {//quando uma nova pesquisa é feita a url altera mas o useefect não carrega, para saber se houve nova pesquisa comparamos os dois
            //console.log("NOVA PESQUISA COM A PALAVRA: " + props.match.params.palavrapesquisabiblia)
            setPalavraPesquisada(props.match.params.palavrapesquisabiblia)
            const palavraPesquisadaSemAcento = props.match.params.palavrapesquisabiblia.normalize("NFD").replace(/[\u0300-\u036f]/g, "") //retira acentos
            const resultado = await GetApi(`biblianvi/pesquisa/${palavraPesquisadaSemAcento.toLowerCase()}`)
            if (resultado.data.length < 1) { //se não vier nenhum dado
                setErroBusca(true) //ativa o return do de erro
                setBarraProgresso(false) //desativa o return da barra de progresso
            } else {
                setDadosPesquisaPaginacao([{ tamanho: resultado.data.length, paginacao: resultado.data.slice(paginaVolta, paginaAvanca), saberQuePagina: 1 }])
                setDadosPesquisa(resultado)  //ativa o return dos dados recebidos
                setBarraProgresso(false)  //desativa o return da barra de progresso
                setErroBusca(false)  //desativa o return do erro 
            }
        }
    }

    function Paginacao(evento, direcao) {
        if (direcao === "avanca" & paginaAvanca < dadosPesquisaPaginacao[0].tamanho) {//se vier da solicição avançar e o pedido para avançar seja menor que o tamanho total
            setDadosPesquisaPaginacao([{ tamanho: dadosPesquisa.data.length, paginacao: dadosPesquisa.data.slice(paginaVolta + 4, paginaAvanca + 4), saberQuePagina: dadosPesquisaPaginacao[0].saberQuePagina + 1 }])
            setPaginaAvanca(paginaAvanca + 4)
            setPaginaVolta(paginaVolta + 4)

        }

        if (direcao === "voltar" & paginaVolta > 0) {
            setDadosPesquisaPaginacao([{ tamanho: dadosPesquisa.data.length, paginacao: dadosPesquisa.data.slice(paginaVolta - 4, paginaAvanca - 4), saberQuePagina: dadosPesquisaPaginacao[0].saberQuePagina - 1 }])
            setPaginaAvanca(paginaAvanca - 4)
            setPaginaVolta(paginaVolta - 4)
        } else {
            return
        }
    }


    if (barraProgresso) {
        return (
            <>
                <SearchAppBar />
                <LinearIndeterminate />
                <Footer />
            </>)
    }
    if (erroBusca) {
        return (
            <>
                <SearchAppBar />
                <article className="pesquisabibia-article">
                    <div className="pesquisabibia-article-div-erro">
                        <h2> <spam><i class="far fa-frown fa-4x"></i></spam>Desculpe, não encontramos a palavra ***{props.match.params.palavrapesquisabiblia}*** que você solicitou .</h2>
                    </div>
                    <PainelMenuLateral />
                </article >
                <Footer />
            </>
        )
    }

    return (
        <>
            <SearchAppBar />
            <div className="pesquisabibia-article-div-palavra">
                <h3><i class="fas fa-search fa-3x"></i> ** {props.match.params.palavrapesquisabiblia} **</h3>
            </div>
            <article id="inicio" className="pesquisabibia-article">

                <div className="pesquisabibia-article-div-um">
                    {dadosPesquisaPaginacao[0].paginacao.map((recebe) => {
                        return (
                            <>
                                {recebe.capituloVersiculoConteudo.map((dados) => {
                                    return (
                                        <>
                                            {/* <p>Capitulo: {dados.capituloLivro}</p> */}
                                            {dados.conteudo.map((envia, index) => {
                                                return (
                                                    <>
                                                        <div className="pesquisabibia-article-div-dois">
                                                            <p key={index}>Palavra: {envia.conteudo}</p>
                                                            <Link to={`/biblianvi/painelleitura/${recebe.idadeTestamento}/${recebe.livro}/${dados.capituloLivro}/${envia.versiculo}#${envia.versiculo}`} >
                                                                {/* o #indica que o versiculo após ele será um link ancora*/}
                                                                <p key={index + 1}>{recebe.livro} - {dados.capituloLivro} : {envia.versiculo}</p>
                                                            </Link>
                                                        </div>
                                                    </>
                                                )
                                            })}
                                        </>
                                    )
                                })}
                            </>
                        )
                    })}
                </div>
            </article>

            <PainelMenuLateral />

            <div className="pesquisabibia-article-div-paginas">

                <ul className="pesquisabibia-article-div-paginas-li-ul">
                    <a href="#inicio" ><li className="pesquisabibia-article-div-paginas-li-left"
                        onClick={(recebe, voltar = "voltar") => { Paginacao(recebe, voltar) }}>
                        <span><i className="fas fa-arrow-circle-left sm"></i></span>
                        Voltar
                    </li>
                    </a>

                    <li> Página {dadosPesquisaPaginacao[0].saberQuePagina} de {dadosPesquisaPaginacao[0].tamanho % 4 === 0 ? dadosPesquisaPaginacao[0].tamanho / 4 : Math.floor(dadosPesquisaPaginacao[0].tamanho / 4 + 1)}</li>
                    {/* A paginção é feita de 4 em 4 a arraiyz dentro do obj recebeido pelo backend. Se o tamanho total dividido por 4  não sobrar nada, então divida por 4 senão divida por 4 pegue o primeiro numero e some mais 1*/}
                    <a href="#inicio" > <li className="pesquisabibia-article-div-paginas-li-right"
                        onClick={(recebe, avanca = "avanca") => { Paginacao(recebe, avanca) }}>
                        Avançar<span><i className="fas fa-arrow-circle-right sm"></i></span>
                    </li>
                    </a>
                </ul>

            </div>



            <Footer />



        </>

    )

}