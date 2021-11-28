import { React } from "react"
import SearchAppBar from "../header/header"
import PainelMenuLateral from "../../components/painelMenuLateral/painelMenuLateral"
import Footer from "../../components/footer/footer"
import "./paginaErro.css"

export default function PaginaErro() {

    return (
        <>
            <SearchAppBar />

            <article className="erro-article">
                <div className="erro-article-div">
                    <spam><i class="fas fa-exclamation-triangle fa-5x"></i></spam>
                    <h1>Desculpe, página não encontrada!</h1>
                </div>
                <div className="erro-article-div-div">
                    <PainelMenuLateral />
                </div>
            </article>
 
            
            <Footer />
        </>

    )

}