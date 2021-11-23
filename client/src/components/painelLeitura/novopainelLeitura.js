import { React, useState, useEffect } from "react";

import SearchAppBar from "../header/header"
import Footer from "../../components/footer/footer"
import PainelMenuLateral from "../../components/painelMenuLateral/painelMenuLateral"
import GetAPI from "../../fetch/api"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "./novopainelLeitura.css"


export default function NovoPainelLeitura({match}){
    const [conteudo, setConteudo] = useState(undefined)
    const [optionComponent, setOptionComponent] = useState()

    useEffect(async()=>{
        //assim que a página é carregada, buscana api o conteudo do capitulo, dado os parâmetros abaixo
        const {data}  = await GetAPI(`mais/buscaconteudo/${match.params.versao_id}/${match.params.testamento_id}/${match.params.livro_id}/${match.params.capitulo}`)
        console.log(data)

        //cria o componente options para renderizar as opçoes para poder selecionar o desejado
        let options = []
        for(let i = 1; i <= data.quantidadecapitulo[0].capitulo; i ++){
            options.push(<option key={i} value={i}>{i}</option>)
        }
        setOptionComponent(options)
        setConteudo(data)
    },[])

    async function AvancaCapitulo(){
        if(Number(match.params.capitulo) > conteudo?.quantidadecapitulo[0].capitulo){
            alert("Fim dos capitulos deste livro")
            return
        }
        const {data} = await GetAPI(`mais/buscaconteudo/${match.params.versao_id}/${match.params.testamento_id}/${match.params.livro_id}/${Number(match.params.capitulo) + 1}`)
        console.log(data)
        match.params.capitulo = Number(match.params.capitulo) + 1
        setConteudo(data)
    }

    return (
        <>
            <SearchAppBar/>
            <main className="painel-leitura-main">
                <div className="painel-leitura-main-div">
                    <div className="painel-leitura-main-div-div">
                        <h2> {conteudo?.nomeLivro[0]?.livro_nome}: {match.params.capitulo} - '{conteudo?.nomeLivro[0]?.livro_abreviado}'</h2>
                        {
                            conteudo && conteudo.conteudo.map((dado, index)=>{
                                return (                                
                                    <p className="painel-leitura-main-div-p" key={index }><spam>{index +1 + " - "}</spam> {dado.conteudo} </p>                                
                                )   
                            })
                        }
                    </div>
                    <div className="painel-leitura-main-div-setas">
                        <div className="painel-leitura-main-div-setas-esquerda">
                            <ArrowBackIcon style={{ fontSize: 70, color:"green" }} />
                            <div className="painel-leitura-main-div-setas-esquerda-conteudo">
                                {conteudo?.nomeLivro[0].livro_nome} - {Number(match.params.capitulo) - 1}
                            </div>
                        </div>
                        
                        <div className="painel-leitura-main-div-select">
                            <select value={match.params.capitulo}>
                                {optionComponent}
                            </select>
                        </div>
                        <div className="painel-leitura-main-div-setas-direita-conteudo"
                                style={{display: Number(match.params.capitulo) == conteudo?.quantidadecapitulo[0].capitulo ? "none" :  "flex"}}
                            onClick={() => {AvancaCapitulo()}}
                        >
                            {conteudo?.nomeLivro[0].livro_nome} - {Number(match.params.capitulo) + 1}
                            <div className="painel-leitura-main-div-setas-direita">
                                <ArrowForwardIcon style={{ fontSize: 70, color:"green"}}  />
                            </div>
                        </div>
                        
 
                    </div>

                </div>
            </main>
            <Footer/>
        </>
    )

}