import React, { useEffect } from "react";
import "./bibliaSelect.css";
import SearchAppBar from "../../components/header/header";
import Menu from "../../components/menu/menu";
import DialogSelect from "../../components/biblia/Select/select"
import Footer from "../../components/footer/footer";


export default function BibliaSelect() {

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