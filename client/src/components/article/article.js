import React from 'react';
import "./article.css"

export default function Article() {

    return (

        <article className="artigo-article">
            <hr></hr>

            <div className="artigo-article-div-um">

                <span><i className="fas fa-bible fa-4x"> </i></span>
                <h3>Versão disponível - NVI</h3>
                <p>A Bíblia Nova Versão Internacional não foi traduzida de uma outra tradução bíblica,
                mas foi traduzida diretamente dos manuscritos dos idiomas originais hebraico,
                aramaico e grego, o que torna o conteúdo da tradução NVI mais confiável ainda.</p>
            </div>

            <div className="artigo-article-div-dois">

                <span><i className="fas fa-mouse fa-4x" ></i></span>
                <h3>Onde você estiver</h3>
                <p>O Site FONTE DE VIDA foi criado para que você possa achar de modo fácil e prático
                a palavra de Deus.
                </p>
            </div>

            <div className="artigo-article-div-tres">
                <span><i className="fas fa-mobile-alt fa-4x"></i></span>
                <h3>Fácil leitura em seu celular</h3>
                <p>O site FONTE DE VIDA foi criado não só para ser de fácil acesso em seu computador,
                mas também em seu celular. Para que você leia a palavra de Deus  em qualquer lugar.
                </p>
            </div>


        </article>

    )


}