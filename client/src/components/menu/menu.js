import React from 'react';
import "./menu.css"
import Imagem from "./Biblia.jpg"
import { Link } from 'react-router-dom'

export default function Menu() {

    return (
        <menu>
            <hr></hr>
            <ul className="menu-ul">

                <Link className='li-vamos' to="/">
                    <li >
                        INÍCIO
                    </li>

                </Link>

                <Link className='li-vamos' to="/biblianvi">
                    <li className='li-vamos'>
                        LEITURA DA BÍBLIA
                    </li>
                </Link>
                <Link className="li-vamos" to="/biblianvi/pesquisa">
                    <li className='li-vamos' >
                        VERSÍCULOS DO DIA
                    </li>
                </Link>

                <Link className='li-vamos' to="/harpacrista">
                    <li className='li-vamos' >
                        HINOS DA HARPA
                </li>
                </Link>

            </ul>
            <img className="menu-imagem" src={Imagem} alt="Nosso caminho" />
        </menu>

    )

}