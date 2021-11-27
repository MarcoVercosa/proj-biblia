import { React, useState, useEffect } from 'react';
import { HashLink as LinkAncora } from "react-router-hash-link"// o hash faz funcionar os links âncoras
import SearchAppBar from "../header/header"
import PainelMenuLateral from '../painelMenuLateral/painelMenuLateral';
import Footer from '../footer/footer';
import GetAPI from '../../fetch/api';

import "./novapesquisabiblia.css"


export default function NovaPesquisaBiblia({match}){

    const [conteudo, setConteudo] = useState(false)

    useEffect(async()=>{

        const {data}  = await GetAPI(`mais/pesquisa/${match.params.palavrapesquisabiblia}`)
        console.log(data)
        setConteudo(data)

    }, [])
    
    return (
        <>
            <SearchAppBar/>
            <article className="article-pesquisa">
                <div className="article-pesquisa-div">
                    <div  className="article-pesquisa-div-titulo">
                        <h3> "2009 - Almeida Revisada e Corrigida"</h3>
                    </div>
                    
                    { conteudo && conteudo.map((dados, index)=> {
                        return (
                                <div className="article-pesquisa-div-div">
                                    <div key={index} className="article-pesquisa-div-div-div">
                                        <p key={index}  className="article-pesquisa-div-p">
                                            {dados.conteudo}
                                        </p>
                                    </div> 
                                    <div className="article-pesquisa-div-div-livro">
                                        <LinkAncora  to={`/biblianvi/novopainelleitura/${dados.versao_id}/${dados.livro_testamento_id}/${dados.livro_id}/${dados.capitulo}/${dados.versiculo}#${dados.versiculo}`}>
                                            <p className= "article-pesquisa-div-p">{dados.livro_nome} "{dados.livro_abreviado}" - {dados.capitulo}: {dados.versiculo}</p>
                                        </LinkAncora>
                                    </div>
                                </div>
                            )
                    })}                             
                </div>
                <div className="article-pesquisa-menu-div">
                    <PainelMenuLateral/>
                </div>
            </article>
            <Footer/>
        </>
    )
}