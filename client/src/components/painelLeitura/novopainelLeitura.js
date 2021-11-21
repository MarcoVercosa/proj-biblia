import { React, useState, useEffect } from 'react';

import SearchAppBar from "../header/header"
import Footer from "../../components/footer/footer"
import PainelMenuLateral from "../../components/painelMenuLateral/painelMenuLateral"
import GetAPI from "../../fetch/api"



export default function NovoPainelLeitura(props){
    console.log(props)
    return (
        <>
        <SearchAppBar/>
        <h1>Bem vindo ao novo painel de leitura</h1>
        <h1></h1>
        <Footer/>
        </>
    )

}