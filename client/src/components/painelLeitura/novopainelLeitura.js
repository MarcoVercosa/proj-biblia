import { React, useState, useEffect } from "react";

import SearchAppBar from "../header/header"
import Footer from "../../components/footer/footer"
import PainelMenuLateral from "../../components/painelMenuLateral/painelMenuLateral"
import GetAPI from "../../fetch/api"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
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
        // if(Number(match.params.capitulo) > conteudo?.quantidadecapitulo[0].capitulo){
        //     alert("Fim dos capitulos deste livro")
        //     return
        // }
        const {data} = await GetAPI(`mais/buscaconteudo/${match.params.versao_id}/${match.params.testamento_id}/${match.params.livro_id}/${Number(match.params.capitulo) + 1}`)
        console.log(data)
        match.params.capitulo = Number(match.params.capitulo) + 1
        setConteudo(data)
    }
    async function RetornaCapitulo(){
        const {data} = await GetAPI(`mais/buscaconteudo/${match.params.versao_id}/${match.params.testamento_id}/${match.params.livro_id}/${Number(match.params.capitulo) - 1}`)
        console.log(data)
        match.params.capitulo = Number(match.params.capitulo) - 1
        setConteudo(data)
    }

    return (
        <>
            <SearchAppBar/>
            <main className="painel-leitura-main">
                <div className="painel-leitura-main-div">
                    <div className="painel-leitura-main-div-div">
                        <h2 style={{fontFamily:"Garamond", fontStyle:"italic" }}> {conteudo?.nomeLivro[0]?.livro_nome}: {match.params.capitulo} - '{conteudo?.nomeLivro[0]?.livro_abreviado}'</h2>
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
                            <Button 
                                style={{fontSize:"17px", fontFamily:"Garamond", fontStyle:"italic", borderRadius:"20px"}}
                                disabled={Number(match.params.capitulo) == 1 ? true :  false}
                                onClick={()=>{RetornaCapitulo()}}
                                variant="contained">
                                <ArrowBackIcon style={{ fontSize: 50, color:"black" }}/>
                                                                      {/* se match.params.capitulo == ao primeiro capitulo, permaneça o número 1, senão subtraia um */}
                                {conteudo?.nomeLivro[0]?.livro_nome} - {Number(match.params.capitulo) == 1 ? Number(match.params.capitulo) :  Number(match.params.capitulo) - 1}
                                
                            </Button>
                        </div>
                        
                        <div className="painel-leitura-main-div-select">
                            <select value={match.params.capitulo}>
                                {optionComponent}
                            </select>
                        </div>
                        <div className="painel-leitura-main-div-setas-direita-conteudo">
                            <Button
                                style={{fontSize:"17px", fontFamily:"Garamond", fontStyle:"italic", borderRadius:"20px"}}
                                // desativa o botão se o numero do capitulo para avançar  for maior q o ultimo capitulo do livro
                                disabled={Number(match.params.capitulo) == conteudo?.quantidadecapitulo[0].capitulo ? true :  false}
                                onClick={() => {AvancaCapitulo()}}
                                variant="contained">
                                                                      {/* se match.params.capitulo == ao ultimo capitulo, permaneça o ultimo capitulo, senão add mais um */}
                                {conteudo?.nomeLivro[0]?.livro_nome} - {Number(match.params.capitulo) == conteudo?.quantidadecapitulo[0].capitulo ? Number(match.params.capitulo) :  Number(match.params.capitulo) + 1}
                                <ArrowForwardIcon style={{ fontSize: 50, color:"black" }}/>
                            </Button>

                        </div>                       

                    </div>

                </div>
            </main>
            <Footer/>
        </>
    )

}