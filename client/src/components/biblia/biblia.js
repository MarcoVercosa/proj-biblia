import React from 'react';
import { useState } from 'react';
import "./biblia.css"
import SearchAppBar from "../../components/header/header"
import Menu from "../../components/menu/menu"
import DialogSelect from "./selectTestamento"
import Footer from "../../components/footer/footer"

import Carrosel from "./carrosel"


export default function Biblia() {


    const [idadeLivro, setIdadeLivro] = useState("")
    const [mostraSelectAntigo, setMostraSelectAntigo] = useState(false)
    const [mostraSelectNovo, setMostraSelectNovo] = useState(false)

    function AtivaSelect(recebe, livro) {
        if (livro === "ANTIGO TESTAMENTO") {
            setMostraSelectAntigo(true)
            setMostraSelectNovo(false)
            setIdadeLivro(livro)
        } else {
            setMostraSelectAntigo(false)
            setMostraSelectNovo(true)
            setIdadeLivro(livro)
        }
        // setIdadeLivro(livro)
        // setDialogSelect(true)
    }

    function DesativaSelect() {
        // setDialogSelect(false)
    }

    return (
        <>
            <SearchAppBar />
            <Menu />
            <main className="biblia-main" >
                <div className="biblia-div-um">
                    <div className="biblia-div-velho" onClick={(recebe, livro = "ANTIGO TESTAMENTO") => { AtivaSelect(recebe, livro) }}>
                        <span><i class="fas fa-scroll fa-4x biblia-icone"></i></span><p >ANTIGO TESTAMENTO</p>

                    </div>
                    <div className="biblia-div-novo" onClick={(recebe, livro = "NOVO TESTAMENTO") => { AtivaSelect(recebe, livro) }}>
                        <span><i class="fas fa-cross fa-4x biblia-icone"></i></span> <p >NOVO TESTAMENTO</p>

                    </div>

                </div>

            </main>
            <div className="biblia-div-select">
                {mostraSelectAntigo && <DialogSelect idadeLivro={idadeLivro} DesativaSelect={DesativaSelect} />}
                {/* Envia a idade livro para o compeonente saber qual testamento buscar e a funcaçao DesativaSelect() para caso der o cancel chama a func para fechar novamente o componente*/}
                {/* se dialogSelect for true, renderize o compopente  DialogSelect*/}
            </div>

            <div className="biblia-div-select">
                {mostraSelectNovo && <DialogSelect idadeLivro={idadeLivro} />}
                {/* Envia a idade livro para o compeonente saber qual testamento buscar e a funcaçao DesativaSelect() para caso der o cancel chama a func para fechar novamente o componente*/}
                {/* se dialogSelect for true, renderize o compopente  DialogSelect*/}
            </div>


            <Carrosel idadeLivro={idadeLivro} />
            <Footer />
        </>


    )

}