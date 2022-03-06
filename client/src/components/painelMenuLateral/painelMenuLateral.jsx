import React from 'react';
import { HashLink as Link } from "react-router-hash-link"// o hash faz funcionar os links âncoras
import HomeInicioImage from "../../assets/home.jpg"
import LeituraBibliaImage  from "../../assets/bible.jpg"
import HinoHarpaImage from "../../assets/song.jpg"
import SobreImage from "../../assets/info.jpg"
import "./painelMenuLateral.css"

export default function PainelMenuLateral() {

    return (
        <menu className="painelleitura-menu">

                <div className="painelleitura_container">

                    <Link className='li-vamos' to="/">
                        <div className='div-home menu_lateral'> 
                            <div className='div-menu-image'>   
                                <img className="home-image image" src={HomeInicioImage} alt="Nosso caminho" />    
                            </div>
                            <div className='div-menu-palavra'>   
                                <p>INÍCIO</p>
                            </div>  
                        </div>


                    </Link>

                    <Link className='li-vamos' to="/biblia">
                        <div className='div-leitura menu_lateral'> 
                            <div className='div-menu-image'>  
                                <img className="home-leitura image" src={LeituraBibliaImage} alt="Nosso caminho" />    
                            </div>
                            <div className='div-menu-palavra'>    
                                <p>LEITURA DA BÍBLIA</p>
                            </div>  
                        </div>

                    </Link>

                    <Link className='li-vamos' to="/harpacrista">
                    <div className='div-hino menu_lateral'> 
                            <div className='div-menu-image'>    
                                <img className="home-hino image" src={HinoHarpaImage} alt="Nosso caminho" />    
                            </div>
                            <div className='div-menu-palavra'>    
                                <p>HINOS DA HARPA</p>
                            </div>  
                        </div>
                    </Link>
                    <Link to="/sobre">
                    <div className='div-sobre menu_lateral'> 
                            <div className='div-menu-image'>    
                                <img className="home-sobre image" src={SobreImage} alt="Nosso caminho" />    
                            </div>
                            <div className='div-menu-palavra'>    
                                <p>SOBRE</p>
                            </div>  
                        </div>
                    </Link>
                </div>

            

        </menu>
    )



}