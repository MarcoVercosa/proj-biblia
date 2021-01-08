import { useScrollTrigger } from '@material-ui/core';
import { React, useState, useEffect } from 'react';
// import { Link } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"// o hash faz funcionar os links âncoras
import LinearIndeterminate from "../../components/progresso/progresso"
import SearchAppBar from "../header/header"
import GetApi from "../../fetch/api"
import "./pesquisabiblia.css"
import PainelMenuLateral from "../../components/painelMenuLateral/painelMenuLateral"

export default function PesquisaBiblia(props) {

    const [palavraPesquisada, setPalavraPesquisada] = useState(props.match.params.palavrapesquisabiblia)
    const [dadosPesquisa, setDadosPesquisa] = useState(false)

    useEffect(async () => {
        console.log("Params " + props.match.params.palavrapesquisabiblia)
        // setPalavraPesquisada(props.match.params.palavrapesquisabiblia)
        const resultado = await GetApi(`biblianvi/pesquisa/${palavraPesquisada}`)
        setDadosPesquisa(false)
        setDadosPesquisa(resultado)
        // console.log(resultado.data[0].capituloVersiculoConteudo[0].conteudo[0].conteudo)

    }, [])

    MaisPesquisa()

    async function MaisPesquisa() {
        if (palavraPesquisada != props.match.params.palavrapesquisabiblia) {
            console.log("NOVA PESQUISA COM A PALAVRA: " + props.match.params.palavrapesquisabiblia)
            setPalavraPesquisada(props.match.params.palavrapesquisabiblia)
            const resultado = await GetApi(`biblianvi/pesquisa/${props.match.params.palavrapesquisabiblia}`)
            setDadosPesquisa(resultado)
        }
    }


    if (!dadosPesquisa) {
        return (
            <>
                <SearchAppBar />
                <LinearIndeterminate />
            </>)
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



        </>

    )

}