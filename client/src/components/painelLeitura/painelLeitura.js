import { React, useState, useEffect } from 'react';

import SearchAppBar from "../header/header"
import LinearIndeterminate from "../../components/progresso/progresso"
import Footer from "../../components/footer/footer"
import PainelMenuLateral from "../../components/painelMenuLateral/painelMenuLateral"
import GetAPI from "../../fetch/api"
import "./painelLeitura.css"

export default function PainelLeitura(props) { //recebe via url 3 Parametros: props.match.idade,  props.match.params.livro  props.match.params.capitulo
        const [idade, setIdade] = useState() //recebe do async a idade do livro, novo ou antigo
        const [paramsLivro, SetParamsLivro] = useState(props.match.params.livro)//recebe o param livro quando o componente é aberto
        const [paramscapitulo, SetParamsCapitulo] = useState(props.match.params.capitulo) //recebe o param capitulo quando o componente é aberto
        const [paramsVersiculo, setParamsVersiculo] = useState(props.match.params.versiculo)
        const [capitulos, setCapitulos] = useState(false) //é alterado com o effect quando o site é carregado e pela func NavegaPagina que é chamadoa por avançar e voltar pagina
        const [indiceCapitulos, setIndiceCapitulos] = useState([]) //usado para listar os capitulos os botoes avanças e voltar
        const [curiosidades, setCuriosidades] = useState(false)
        const [erroBusca, setErroBusca] = useState(false)
        const [carregando, setCarregando] = useState(true)


        const ErroAoBuscar = () => {
                return (
                        <>
                                <SearchAppBar />

                                <article className="erro-article">
                                        <div className="erro-article-div">
                                                <spam><i class="fas fa-exclamation-triangle fa-5x"></i></spam>
                                                <h1>Desculpe, mas a pesquisa não retornou informação.</h1>
                                        </div>
                                </article>
                                <PainelMenuLateral />
                                <Footer />
                        </>
                )
        }


        useEffect(async () => {//quando carrgada o componente, ja carrega com o livro e capitulo recebido pelo params

                if (props.match.params.idade === "antigo") {
                        // armazenaIdadeLivro = "buscalivroantigotesta"
                        setIdade("antigotesta")
                        var recebe = await GetAPI(`antigotesta/${paramsLivro}/${paramscapitulo}`) // recebe = obj versiculos do capitulo + quantidade de capitulos do livro
                        if (recebe.data[1] < 1 || recebe.data[0] < 1 || recebe.data < 1) {//se não retornar versiculo, capituos ou nada
                                setErroBusca(true) //ative o componente true
                                setCarregando(false) //desative o carregando
                                return
                        }
                        setCapitulos(recebe)
                        setCarregando(false)

                } else {
                        // armazenaIdadeLivro = "buscalivronovotesta"
                        setIdade("novotesta")
                        var recebe = await GetAPI(`novotesta/${paramsLivro}/${paramscapitulo}`)
                        if (recebe.data[1] < 1 || recebe.data[0] < 1 || recebe.data < 1) {
                                setErroBusca(true)
                                setCarregando(false)
                                return
                        }
                        setCapitulos(recebe)
                        setCarregando(false)
                }

                var temp = []
                for (var i = 1; i <= recebe.data[0]; i++) {
                        temp.push(<option value={i} key={i}>{i}</option>)
                }
                setIndiceCapitulos(temp)
                BuscaCuriosodades(paramsLivro)

                if (paramsVersiculo != "m") {
                        var mudaCorVersiculoSolicitado = document.getElementById(paramsVersiculo)
                        mudaCorVersiculoSolicitado.style.color = "Red"
                }
                //identifica o versiculo solicitado (se vier) e como cada paragrafo tem o id do versiculo, altera a cor

        }, [])

        async function NavegaPagina(recebe, livro, capitulo) {//funcao para navegar entre os capitulos e livros chamada avanças e voltar páginas
                if (capitulo === 0) {
                        return
                }
                const navega = await GetAPI(`${idade}/${livro}/${capitulo}`)
                if (capitulo > navega.data[0]) {
                        return
                }
                SetParamsLivro(livro)
                SetParamsCapitulo(capitulo)
                setCapitulos(navega)
                var mudaCorVersiculoSolicitado = document.getElementById(paramsVersiculo)
                console.log(typeof (mudaCorVersiculoSolicitado))
                // console.log(mudaCorVersiculoSolicitado.hasOwnProperty("className"))
                if (paramsVersiculo != "m" & mudaCorVersiculoSolicitado != null) {

                        mudaCorVersiculoSolicitado.style.color = "Black"
                }       //Para evitar que ao avançar de página  o versiculo da url continue vermelho

        }

        async function BuscaCuriosodades(recebeLivro) {
                const resultado = await GetAPI(`buscacuriosidade/${recebeLivro}`)
                setCuriosidades(resultado)
                console.log(resultado)
        }


        if (carregando) {//ICONE DE CARREGAR ENQUANTO NÃO TRAS AS INFOD
                return (
                        <>
                                <SearchAppBar />
                                <LinearIndeterminate />
                                <Footer />
                        </>
                )
        }

        if (erroBusca) {
                return (
                        <ErroAoBuscar />
                )
        }



        return (
                <>
                        <SearchAppBar />
                        <menu className="painelleiturabiblia-menu" id="inicio">
                                <article className="painelleitura-article">

                                        <div className="painelleitura-article-div">
                                                <h3 className="painelleitura-article-h3">{paramsLivro} - {paramscapitulo}</h3>
                                                {capitulos.data[1].map((recebe, index) => {
                                                        return (
                                                                <p id={index + 1} className="painelleitura-article-paragrafo" key={index}><spam >{index + 1}</spam> - {recebe}</p>)
                                                })}

                                        </div>
                                </article>
                                <PainelMenuLateral />
                                <article className="painelleitura-article-paginacao">
                                        <ul className="painelleitura-article-ul" >

                                                <a href="#inicio">   <li
                                                        className="painelleitura-article-li" onClick={(recebe, livro = paramsLivro, capitulo = parseInt(paramscapitulo) - 1) => {
                                                                NavegaPagina(recebe, livro, capitulo)
                                                        }}>
                                                        <span><i className="fas fa-arrow-circle-left fa-sm"></i></span>  {paramsLivro} -   {parseInt(paramscapitulo) - 1 === 0 ? parseInt(paramscapitulo) : parseInt(paramscapitulo) - 1}
                                                </li > </a>


                                                <li className="painelleitura-article-li" >

                                                        <label  >CAPÍTULO</label>


                                                        <select className="painelleitura-article-select"
                                                                value={parseInt(paramscapitulo)}
                                                                onChange={(recebe, livro = paramsLivro, capitulo = "") => {
                                                                        NavegaPagina(recebe, livro, capitulo = recebe.target.value)
                                                                }}>
                                                                {indiceCapitulos}
                                                        </select>

                                                </li>

                                                <a className="ancora" href="#inicio">   <li className="painelleitura-article-li" onClick={(recebe, livro = paramsLivro, capitulo = parseInt(paramscapitulo) + 1) => {
                                                        NavegaPagina(recebe, livro, capitulo)
                                                }}>
                                                        {paramsLivro} -  {parseInt(paramscapitulo) + 1 > capitulos.data[0] ? parseInt(paramscapitulo) : parseInt(paramscapitulo) + 1}  <span><i className="fas fa-arrow-circle-right fa-sm"></i></span>
                                                        {/* Se capitulo +1 for maior que quantodade de capitulos existente então vai continuar com o valor atual, se não incrementa mais 1*/}
                                                </li > </a>

                                        </ul>
                                </article>



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




                        </menu>

                        <Footer />
                </>
        )


}