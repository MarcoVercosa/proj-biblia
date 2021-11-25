import React, { useEffect } from "react";
import "./biblia.css";
import SearchAppBar from "../../components/header/header";
import Menu from "../../components/menu/menu";
import DialogSelect from "./Select/select";
import Footer from "../../components/footer/footer";

import Carrosel from "./carrosel";

export default function Biblia() {

  useEffect(() => {
    window.scroll({
      top: 200,
      left: 0,
      behavior: 'smooth'
  });  
  },[])


  return (
    <>
      <SearchAppBar />
      <Menu />

      <main
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        <div style={{marginTop:"25px", marginBottom:"150px"}}>
          <DialogSelect tituloBotao="INICIAR LEITURA" />
        </div>
      </main>
      <Footer/>

    </>
  );
}
