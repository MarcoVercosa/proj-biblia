import { useScrollTrigger } from '@material-ui/core';
import { React, useState, useEffect } from 'react';
import LinearIndeterminate from "../../components/progresso/progresso"
import SearchAppBar from "../header/header"
import GetApi from "../../fetch/api"

export default function PesquisaBiblia(props) {

    const [dadosPesquisa, setDadosPesquisa] = useState(false)

    useEffect(async () => {
        console.log("Params " + props.match.params.palavrapesquisabiblia)
        const resultado = await GetApi(`biblianvi/pesquisa/${props.match.params.palavrapesquisabiblia}`)

        setDadosPesquisa(resultado)
        console.log(dadosPesquisa)




    }, [])

    if (!dadosPesquisa) {
        return (
            <>
                <SearchAppBar />
                <LinearIndeterminate />
            </>)
    }
    return (
        <>
            {dadosPesquisa.data.map((recebe) => {
                return (
                    <p>LIVRO: {recebe[0].livro}</p>
                )
            })}
            < h1 > retorno</h1 >
        </>
    )

}