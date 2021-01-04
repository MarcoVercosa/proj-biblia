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
        const [capitulos, setCapitulos] = useState(false) //é alterado com o effect quando o site é carregado e pela func NavegaPagina que é chamadoa por avançar e voltar pagina
        const [indiceCapitulos, setIndiceCapitulos] = useState([]) //usado para listar os capitulos os botoes avanças e voltar





        useEffect(async () => {//quando carrgada o componente, ja carrega com o livro e capitulo recebido pelo params
                let armazenaIdadeLivro = ""
                if (props.match.params.idade === "antigo") {
                        armazenaIdadeLivro = "buscalivroantigotesta"
                        setIdade("antigotesta")
                        var recebe = await GetAPI(`antigotesta/${paramsLivro}/${paramscapitulo}`) // recebe = obj versiculos do capitulo + quantidade de capitulos do livro
                        setCapitulos(recebe)
                } else {
                        armazenaIdadeLivro = "buscalivronovotesta"
                        setIdade("novotesta")
                        var recebe = await GetAPI(`novotesta/${paramsLivro}/${paramscapitulo}`)
                        setCapitulos(recebe)
                }
                // const recebe = await GetAPI(`${armazenaIdadeLivro}/${paramsLivro}/${paramscapitulo}`)
                // console.log(recebe)
                // setCapitulos(recebe) // recebe = obj versiculos do capitulo + quantidade de capitulos do livro

                //assim que recebe os dados é feito um loop for no obj para listar os capitulos
                var temp = []
                for (var i = 1; i <= recebe.data[0]; i++) {
                        temp.push(<option value={i} key={i}>{i}</option>)
                }
                setIndiceCapitulos(temp)

        }, [])

        async function NavegaPagina(recebe, livro, capitulo) {//funcao para navegar entre os capitulos e livros chamada avanças e voltar páginas

                const navega = await GetAPI(`${idade}/${livro}/${capitulo}`)
                SetParamsLivro(livro)
                SetParamsCapitulo(capitulo)
                setCapitulos(navega)

                console.log("NAVEGOU")
        }


        if (!capitulos) {//ICONE DE CARREGAR ENQUANTO NÃO TRAS AS INFOD
                return (
                        <>
                                <SearchAppBar />
                                <LinearIndeterminate />
                                <Footer />
                        </>
                )
        }

        return (
                <>
                        <SearchAppBar />
                        <article className="painelleitura-article">
                                <h3 className="painelleitura-article-h3">{paramsLivro} - {paramscapitulo}</h3>
                                {capitulos.data[1].map((recebe, index) => {
                                        return (
                                                <p className="painelleitura-article-paragrafo" key={index}>{index + 1} - {recebe}</p>)
                                })}

                                <ul className="painelleitura-article-ul" >

                                        <li className="painelleitura-article-li" onClick={(recebe, livro = paramsLivro, capitulo = parseInt(paramscapitulo) - 1) => {
                                                NavegaPagina(recebe, livro, capitulo)
                                        }}>
                                                <span><i className="fas fa-arrow-circle-left fa-sm"></i></span>  {paramsLivro} - {parseInt(paramscapitulo) - 1}
                                        </li >

                                        {/* <li className="painelleitura-article-li" className="painelleitura-article-li">
                                                CAPÍTULO
                                        </li> */}
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

                                        <li className="painelleitura-article-li" onClick={(recebe, livro = paramsLivro, capitulo = parseInt(paramscapitulo) + 1) => {
                                                NavegaPagina(recebe, livro, capitulo)
                                        }}>
                                                {paramsLivro} - {parseInt(paramscapitulo) + 1} <span><i className="fas fa-arrow-circle-right fa-sm"></i></span>
                                        </li >

                                </ul>
                        </article>



                        <PainelMenuLateral />

                        <Footer />


                </>
        )


}