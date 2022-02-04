import React from 'react';
import './home.css';
import Header from "../../components/header/header"
import Menu from "../../components/menuSuperior/menuSuperior"

import ArticleHome from "../../components/articleHome/articleHome"
import Footer from "../../components/footer/footer"


function Home() {
  return (
    
    <div className="App">

      <Header />
      <Menu isTheHome={true}/>
      <ArticleHome />
      <Footer />


    </div>
  );
}

export default Home;
