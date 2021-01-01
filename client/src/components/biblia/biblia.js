import React from 'react';
import { useState } from 'react';
import "./biblia.css"
import SearchAppBar from "../../components/header/header"
import Menu from "../../components/menu/menu"
import DialogSelect from "./selectTestamento"
import Footer from "../../components/footer/footer"
import Carrosel from "./carrosel"


export default function Biblia() {

    const [dialogSelect, setDialogSelect] = useState(false)
    const [idadeLivro, setIdadeLivro] = useState("")

    function AtivaSelect(recebe, livro) {

        setDialogSelect(true)
        setIdadeLivro(livro)

    }

    return (
        <>
            <SearchAppBar />
            <Menu />
            <main className="biblia-main">
                <div className="biblia-div-um">
                    <div className="biblia-div-velho">
                        <p onClick={(recebe, livro = "ANTIGO TESTAMENTO") => { AtivaSelect(recebe, livro) }}>ANTIGO TESTAMENTO</p>
                    </div>
                    <div className="biblia-div-novo">
                        <p onClick={(recebe, livro = "NOVO TESTAMENTO") => { AtivaSelect(recebe, livro) }}>NOVO TESTAMENTO</p>
                    </div>

                </div>

            </main>
            <div className="biblia-div-select">
                {dialogSelect && <DialogSelect idadeLivro={idadeLivro} />}
                {/* se dialogSelect for true, renderize o compopente  DialogSelect*/}
            </div>
            <Carrosel idadeLivro={idadeLivro} />
            <Footer />
        </>


    )

}