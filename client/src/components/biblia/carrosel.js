import React from 'react';
import { useState } from 'react';
import "./carrosel.css"
import Zero from "./zero.jpg"
import Um from "./um.jpg"
import Dois from "./dois.png"



export default function Carrosel(props) {

    const imagem =
        [
            Zero,
            Um,
            Dois,
        ]




    if (props.idadeLivro === "ANTIGO TESTAMENTO") {
        return (
            <div className="carrosel-div">
                <img className="imagem-carrosel" src={imagem[0]} />
            </div>
        )
    }

    if (props.idadeLivro === "NOVO TESTAMENTO") {
        return (
            <div className="carrosel-div">
                <img className="imagem-carrosel" src={imagem[1]} />
            </div>
        )
    }

    else {
        return (
            <div className="carrosel-div">
                <img className="imagem-carrosel" src={imagem[2]} />
            </div>
        )
    }


}