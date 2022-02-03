import React from 'react';
import './home.css';
import SearchAppBar from "../../components/header/header"
import Menu from "../../components/menu/menu"

import Article from "../../components/article/article"
import Footer from "../../components/footer/footer"


function Home() {
  return (
    
    <div className="App">

      <SearchAppBar />
      <Menu isTheHome={true}/>
      <Article />
      <Footer />


    </div>
  );
}

export default Home;
