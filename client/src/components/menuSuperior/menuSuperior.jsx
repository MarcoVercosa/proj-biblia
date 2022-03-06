import React from 'react';
import "./menuSuperior.css"
import Imagem from "../../assets/BibliaHome.jpg"
import { HashLink as Link } from "react-router-hash-link"// o hash faz funcionar os links âncoras

export default function MenuSuperior() {
    
    return (
        <menu className="menu-menu">
            <hr></hr>
            <ul className="menu-ul">

                <Link className='li-vamos' to="/">
                    <li >
                        INÍCIO
                    </li>

                </Link>

                <Link className='li-vamos' to="/biblia">
                    <li className='li-vamos'>
                        LEITURA DA BÍBLIA
                    </li>
                </Link>

                <Link className='li-vamos' to="/harpacrista">
                    <li className='li-vamos' >
                        HINOS DA HARPA
                </li>
                </Link>
                <Link className="li-vamos" to="/sobre">
                    <li className='li-vamos' >
                        SOBRE
                    </li>
                </Link>

            </ul>
            
                
            <img className="menu-imagem" src={Imagem} alt="Nosso caminho" />
            
            
        </menu>

    )

}
