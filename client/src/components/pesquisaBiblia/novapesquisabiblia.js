import { React, useState, useEffect } from 'react';
import { HashLink as LinkAncora } from "react-router-hash-link"// o hash faz funcionar os links âncoras
import SearchAppBar from "../header/header"
import PainelMenuLateral from '../painelMenuLateral/painelMenuLateral';
import Footer from '../footer/footer';
import GetAPI from '../../fetch/api';
import LinearProgress from '@material-ui/core/LinearProgress';

import "./novapesquisabiblia.css"


export default function NovaPesquisaBiblia({match}){

    const [conteudo, setConteudo] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(async()=>{

        const {data}  = await GetAPI(`mais/pesquisa/${match.params.palavrapesquisabiblia}`)
        console.log(data)
        setConteudo(data)
        setCarregando(false)

    }, [])

    if(carregando){
        return (
            <>
                <SearchAppBar/>
                    <LinearProgress/>
                <Footer/>
            </>
        )
    }

    if(conteudo.length < 1){
        return (
            <>
            <SearchAppBar />
            <article className="pesquisabibianotfound-article">
                <div className="notfound-article-article-div">
                    <div style={{textAlign: "center", marginTop:"100px"  }}>
                        <spam ><i class="far fa-frown fa-8x"></i></spam>
                    </div>                
                    <h2 style={{textAlign: "center"  }}>Desculpe, não encontramos a palavra *{match.params.palavrapesquisabiblia}* que você solicitou .</h2>
                </div>
                <div className="pesquisabibianotfound-article-div-menulateral">
                    <PainelMenuLateral />
                </div>
               
            </article >
            <Footer />
        </>
        )
    }
    
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
                                        <LinkAncora  to={`/biblianvi/painelleitura/${dados.versao_id}/${dados.livro_testamento_id}/${dados.livro_id}/${dados.capitulo}/${dados.versiculo}#${dados.versiculo}`}>
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