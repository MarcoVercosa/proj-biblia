import React from 'react';
import './App.css';
import SearchAppBar from "./components/header/header"
import Menu from "./components/menu/menu"

import Article from "./components/article/article"
import Footer from "./components/footer/footer"


function App() {
  return (
    
    <div className="App">

      <SearchAppBar />
      <Menu />
      <Article />
      <Footer />


    </div>
  );
}

export default App;
