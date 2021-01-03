import { emphasize, useScrollTrigger } from '@material-ui/core';
import { React, useState, useEffect } from 'react';
import axios from "axios"
import "./populaBDHARPA.css"



export default function PopularBDHarpa() {
    const [numero, setNumero] = useState()
    const [titulo, setTitulo] = useState()
    const [letra, setLetra] = useState()
    const [dados, setDados] = useState(false)
    const [temp, setTemp] = useState(false)


    useEffect(() => {

        var armazena
        if (dados) {

            // console.log(dados)
            // armazena = dados.data[0].letra.split("%")
            // dados.data.map((recebe) => {

            //     armazena.push(

            //         <p>{recebe.letra[2]}</p>
            //     )


            // })
        }
        // console.log(armazena[2])
        setTemp(armazena)

    }, [dados])


    async function GetAPIFAKE(livro, nome) {
        const resultado = await axios.post("http://192.168.0.6:9000/cadastraharpa", {
            numero: numero,
            titulo: titulo,
            letra: [letra]
        })

        // const resultado = await axios.get("http://192.168.0.6:9000/cadastraharpa")
        setDados(resultado)
        console.log(resultado)
        console.log(dados)
        return resultado

    }

    async function Chama(data) {
        //data.preventDefault()
        console.log("Solicitou APIFAKE")
        const recebe = await GetAPIFAKE()

    }

    if (!temp) {
        return (
            <form onSubmit={(envia) => { Chama(envia) }}>

                <label>Numero Louvor</label>
                <input className="caixa"
                    value={numero}
                    onChange={(recebe) => { setNumero(recebe.target.value) }}
                ></input>
                <br />


                <label>Título Louvor</label>
                <input className="caixa"
                    value={titulo}
                    onChange={(recebe) => {
                        setTitulo(recebe.target.value)

                    }}
                ></input>
                <br />


                <label>Letra Louvor</label>
                <input className="caixa"
                    valur={letra}
                    onChange={(recebe) => { setLetra(recebe.target.value) }}
                ></input>
                <button className="botaoo" >CADASTRA</button>

            </form>
        )
    }

    return (
        <>
            <form onSubmit={(envia) => { Chama(envia) }}>

                <label>Numero Louvor</label>
                <input
                    value={numero}
                    onChange={(recebe) => { setNumero(recebe.target.value) }}
                ></input>
                <br />


                <label>Título Louvor</label>
                <input
                    value={titulo}
                    onChange={(recebe) => {
                        setTitulo(recebe.target.value)

                    }}
                ></input>
                <br />


                <label>Letra Louvor</label>
                <input
                    valur={letra}
                    onChange={(recebe) => { setLetra(recebe.target.value) }}
                ></input>
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


