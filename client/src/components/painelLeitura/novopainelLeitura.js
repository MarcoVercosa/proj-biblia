import { React, useState, useEffect } from "react";

import SearchAppBar from "../header/header"
import Footer from "../../components/footer/footer"
import PainelMenuLateral from "../../components/painelMenuLateral/painelMenuLateral"
import GetAPI from "../../fetch/api"

import "./novopainelLeitura.css"



export default function NovoPainelLeitura({match}){
    const [conteudo, setConteudo] = useState(undefined)

    useEffect(async()=>{
        //assim que a página é carregada, buscana api o conteudo do capitulo, dado os parâmetros abaixo
    const {data}  = await GetAPI(`mais/buscaconteudo/${match.params.versao_id}/${match.params.testamento_id}/${match.params.livro_id}/${match.params.capitulo}`)
    console.log(data)

        setConteudo(data)
    },[])

    return (
        <>
            <SearchAppBar/>
            <main className="painel-leitura-main">
                <div className="painel-leitura-main-div">
                    <div className="painel-leitura-main-div-div">
                        <h2> {conteudo?.nomeLivro[0]?.livro_nome} - {match.params.capitulo} '{conteudo?.nomeLivro[0]?.livro_abreviado}'</h2>
                    {
                        conteudo && conteudo.conteudo.map((dado, index)=>{
                            return (                                
                                 <p className="painel-leitura-main-div-p" key={index }><spam>{index +1 + " - "}</spam> {dado.conteudo} </p>                                
                            )   
                        })
                    }
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )

}