import { React, useState, useEffect } from "react";

import SearchAppBar from "../header/header"
import DialogSelect from "../biblia/Select/select"
import LinearProgress from '@material-ui/core/LinearProgress';
import Menu from "../menu/menu"
import Footer from "../../components/footer/footer"
import GetAPI from "../../fetch/api"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import "./novopainelLeitura.css"


export default function NovoPainelLeitura({match}){
    const [conteudo, setConteudo] = useState(false)
    const [optionComponent, setOptionComponent] = useState()
    const [curiosidades, setCuriosidades] = useState(false)

    useEffect(async()=>{
        //assim que a página é carregada, busca na api o conteudo do capitulo, dado os parâmetros abaixo
        const {data}  = await GetAPI(`mais/buscaconteudo/${match.params.versao_id}/${match.params.testamento_id}/${match.params.livro_id}/${match.params.capitulo}`)
        console.log(data)
        //Se identificar alguma falha - < 1 se não encontrar nada no BD, sqlMessage se o BD der algum erro 
        if(data.conteudo?.length < 1 || data.sqlMessage){
            setConteudo(data)
            return
        }
        //cria o componente options para renderizar as opçoes para poder selecionar o desejado
        let options = []
        for(let i = 1; i <= data.quantidadecapitulo[0].capitulo; i ++){
            options.push(<option key={i} value={i}>{i}</option>)
        }
        setOptionComponent(options)
        setConteudo(data)
        BuscaCuriosodades(data.nomeLivro[0].livro_nome)

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    },[match.params.capitulo])
    //quando usa o menu a direita para selecionar outro livro, versao usanod o componente select...
    //ele irá atualizar também o capitulo na url que é o match.params.capitulo. Se ele mudar, o useEfetc irá carregar o conteudo

    async function AvancaCapitulo(){
        const {data} = await GetAPI(`mais/buscaconteudo/${match.params.versao_id}/${match.params.testamento_id}/${match.params.livro_id}/${Number(match.params.capitulo) + 1}`)
        match.params.capitulo = Number(match.params.capitulo) + 1
        setConteudo(data)
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    async function RetornaCapitulo(){
        const {data} = await GetAPI(`mais/buscaconteudo/${match.params.versao_id}/${match.params.testamento_id}/${match.params.livro_id}/${Number(match.params.capitulo) - 1}`)
        match.params.capitulo = Number(match.params.capitulo) - 1
        setConteudo(data)
        window.scroll({
            top: 60,
            left: 0,
            behavior: 'smooth'
        });
    }

    async function SelectOption(capituloSelecionado){
        const {data} = await GetAPI(`mais/buscaconteudo/${match.params.versao_id}/${match.params.testamento_id}/${match.params.livro_id}/${capituloSelecionado}`)
        match.params.capitulo = capituloSelecionado
        setConteudo(data)
        window.scroll({
            top: 60,
            left: 0,
            behavior: 'smooth'
        });
    }

    async function BuscaCuriosodades(recebeLivro) {
        const resultado = await GetAPI(`buscacuriosidade/${recebeLivro}`)
        setCuriosidades(resultado)
    }  

    if(conteudo?.sqlMessage || conteudo?.conteudo?.length < 1){
        return (
            <h1>Página não encontrada</h1>
        )
    }
    if(!conteudo){
        return (
        <div >
            <LinearProgress />
            <LinearProgress color="secondary" />
        </div>
        )
    }
    
    return (
        <>
            <SearchAppBar/>
            <main className="painel-leitura-main">
                <div className="painel-leitura-main-div">
                    <Menu/>
                    <div className="painel-leitura-main-div-div">
                        <div className="painel-leitura-main-div-div-descricao">
                            <h2> {conteudo?.nomeLivro[0]?.livro_nome}: {match.params.capitulo} - '{conteudo?.nomeLivro[0]?.livro_abreviado}'</h2>
                            <p >{conteudo?.nomeVersao[0]?.versao_nome}</p>
                        </div>
                        
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
                            <select value={match.params.capitulo}
                                onChange={(data) => {SelectOption(data.target.value)}}
                            >
                                {optionComponent}
                            </select>
                        </div>
                        <div className="painel-leitura-main-div-setas-direita-conteudo">
                            <Button
                                style={{fontSize:"17px", fontFamily:"Garamond", fontStyle:"italic", borderRadius:"20px"}}
                                // desativa o botão se o numero do capitulo para avançar  for maior q o ultimo capitulo do livro
                                disabled={Number(match.params.capitulo) == conteudo?.quantidadecapitulo[0].capitulo ? true :  false}
                                onClick={() => {AvancaCapitulo()}}
                                variant="contained"
                            >
                                                                      {/* se match.params.capitulo == ao ultimo capitulo, permaneça o ultimo capitulo, senão add mais um */}
                                {conteudo?.nomeLivro[0]?.livro_nome} - {Number(match.params.capitulo) == conteudo?.quantidadecapitulo[0].capitulo ? Number(match.params.capitulo) :  Number(match.params.capitulo) + 1}
                                <ArrowForwardIcon style={{ fontSize: 50, color:"black" }}/>
                            </Button>                            
                        </div>                    
                    </div>
                    
                    <article className="painelleitura-article-article">
                        {curiosidades && curiosidades.data.map((recebe, index) => {
                            return (
                                <div key={index} className="painelleitura-article-article-div" >
                                    <span  ><i className="fas fa-search fa-3x"></i></span>
                                    <h3 className="painelleitura-article-article-div-p-um">Curiosidades</h3>
                                    <p className="painelleitura-article-article-div-p-dois">{recebe.conteudo}</p>
                                </div>
                            )
                        })}
                    </article>    


                </div>
                <aside>
                    <div className="aside-select">
                        <DialogSelect tituloBotao="Navegar pela história"/>
                    </div>
                </aside>
            </main>
            
            <Footer/>
        </>
    )

}