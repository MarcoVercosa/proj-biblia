import React from 'react';
import './home.css';
import Header from "../../components/header/header"
import Menu from "../../components/menuSuperior/menuSuperior"

import ArticleHome from "../../components/articleHome/articleHome"
import Footer from "../../components/footer/footer"
import HEAD from '../../components/headHelmet/head';


function Home() {
  return (
    
    <div className="App">
      <HEAD title="Fonte de vida - Biblia Online - Home" description = "Biblia online - 13 versões da palavra de Deus e os 524 hinos da harpa cristã disponíveis para você" url="http://vidadafonte.com.br" keyWord={ "Fonte de vida - Biblia Online - Home"}/>
      <Header />
      <Menu isTheHome={true}/>
      <ArticleHome />
      <Footer />


    </div>
  );
}

export default Home;
