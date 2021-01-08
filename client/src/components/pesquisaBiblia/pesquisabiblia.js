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
    const [palavraPesquisada, setPalavraPesquisada] = useState(props.match.params.palavrapesquisabiblia)
    const [dadosPesquisa, setDadosPesquisa] = useState(false)
    const [erroBusca, setErroBusca] = useState(false)


    useEffect(async () => {
        console.log("Params " + props.match.params.palavrapesquisabiblia)
        const palavraPesquisadaSemAcento = palavraPesquisada.normalize("NFD").replace(/[\u0300-\u036f]/g, "") //retira acentos
        const resultado = await GetApi(`biblianvi/pesquisa/${palavraPesquisadaSemAcento.toLowerCase()}`)
        if (resultado.data.length < 1) {
            setErroBusca(true)
            setBarraProgresso(false)

        } else {
            setDadosPesquisa(resultado)
            setBarraProgresso(false)
            setErroBusca(false)

        }

    }, [])

    MaisPesquisa()

    async function MaisPesquisa() {
        if (palavraPesquisada != props.match.params.palavrapesquisabiblia) {
            console.log("NOVA PESQUISA COM A PALAVRA: " + props.match.params.palavrapesquisabiblia)
            setPalavraPesquisada(props.match.params.palavrapesquisabiblia)
            const palavraPesquisadaSemAcento = props.match.params.palavrapesquisabiblia.normalize("NFD").replace(/[\u0300-\u036f]/g, "") //retira acentos
            const resultado = await GetApi(`biblianvi/pesquisa/${palavraPesquisadaSemAcento.toLowerCase()}`)
            if (resultado.data.length < 1) {
                setErroBusca(true)
                setBarraProgresso(false)
            } else {
                setDadosPesquisa(resultado)
                setBarraProgresso(false)
                setErroBusca(false)

            }
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

            <article className="pesquisabibia-article">

                <div className="pesquisabibia-article-div-um">
                    {dadosPesquisa.data.map((recebe) => {
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
                <PainelMenuLateral />
            </article>
            <Footer />



        </>

    )

}