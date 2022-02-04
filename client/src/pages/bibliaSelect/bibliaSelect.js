import React, { useEffect } from "react";
import "./bibliaSelect.css";
import Header from "../../components/header/header";
import MenuSuperior from "../../components/menuSuperior/menuSuperior";
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
      <Header />
      <MenuSuperior />

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