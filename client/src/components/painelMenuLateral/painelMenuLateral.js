import React from 'react';
import { HashLink as Link } from "react-router-hash-link"// o hash faz funcionar os links âncoras
import "./painelMenuLateral.css"

export default function PainelMenuLateral() {

    return (
        <menu className="painelleitura-menu">

            <ul className="menu-painelleitura-ul">

                <Link className='li-vamos' to="/">
                    <li className='menu-painelleitura-li' >
                        <i className="fas fa-home fa-2x icone"></i>INÍCIO
                    </li>

                </Link>

                <Link className='li-vamos' to="/biblia">
                    <li className='menu-painelleitura-li'>
                        <i className="fas fa-bible fa-2x icone"></i> LEITURA DA BÍBLIAA
                    </li>
                </Link>

                <Link className='li-vamos' to="/harpacrista">
                    <li className='menu-painelleitura-li' >
                        <i className="fas fa-music fa-2x icone"></i>HINOS DA HARPA
                    </li>
                </Link>
                <Link to="/sobre">
                    <li className='menu-painelleitura-li' >
                        <i className="fas fa-globe fa-2x icone"></i>SOBRE
                </li>
                </Link>

            </ul>

        </menu>
    )



}