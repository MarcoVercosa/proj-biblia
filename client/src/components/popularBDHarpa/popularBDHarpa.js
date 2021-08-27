
import { React, useState, useEffect } from 'react';
import axios from "axios"
import "./populaBDHARPA.css"



export default function PopularBDHarpa() {
    const [livro, setLivro] = useState()
    const [conteudo, setConteudo] = useState()

    const [temp, setTemp] = useState(false)


    useEffect(() => {


    }, [])


    async function GetAPIFAKE(livro, conteudo) {
        const resultado = await axios.post("http://192.168.0.6:9000/cadastracuriosidades", {
            livro: livro,
            conteudo: conteudo,
        })
        return resultado


        // const resultado = await axios.get("http://192.168.0.6:9000/cadastracuriosidades")


    }

    async function Chama(data) {
        // data.preventDefault()
        const dados = await GetAPIFAKE(livro, conteudo)
        console.log(dados)

    }



    if (!temp) {
        return (
            <form onSubmit={(envia) => { Chama(envia) }}>

                <label>Livro</label>
                <input className="caixa"
                    value={livro}
                    onChange={(recebe) => { setLivro(recebe.target.value) }}
                ></input>
                <br />


                <label>conteudo</label>
                <input className="caixa"
                    value={conteudo}
                    onChange={(recebe) => {
                        setConteudo(recebe.target.value)

                    }}
                ></input>
                <br />



                <button className="botaoo" >CADASTRA</button>

            </form>
        )
    }

    return (
        <>
            <form onSubmit={(envia) => { Chama(envia) }}>

                <label>Livro</label>
                <input
                    value={livro}
                    onChange={(recebe) => { setLivro(recebe.target.value) }}
                ></input>
                <br />


                <label>conteudo</label>
                <input
                    value={conteudo}
                    onChange={(recebe) => {
                        setConteudo(recebe.target.value)

                    }}
                ></input>
                <br />



                <button >CADASTRA</button>

            </form>


            {temp.map((recebe) => {
                return (
                    <p>{recebe}</p>
                )
            })}
        </>





    )


}


