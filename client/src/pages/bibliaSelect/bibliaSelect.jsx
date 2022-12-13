import React, { useEffect } from "react";
import "./bibliaSelect.css";
import Header from "../../components/header/header";
import MenuSuperior from "../../components/menuSuperior/menuSuperior";
import DialogSelect from "../../components/biblia/Select/select"
import Footer from "../../components/footer/footer";
import HEAD from "../../components/headHelmet/head";


export default function BibliaSelect() {

  useEffect(() => {
    window.scroll({
      top: 200,
      left: 0,
      behavior: 'smooth'
    });
  }, [])


  return (
    <>
      <Header />
      <HEAD title="Vida da fonte - Selecione sua leitura" description="Vida da fonte - Selecione sua leitura" url="http://vidadafonte.com.br/biblia" keyWord={"Fonte de Vida - Leitura"} />
      <MenuSuperior />

      <main
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "60px",
          minHeight: "40vh",
        }}
      >
        <div style={{ marginTop: "25px", marginBottom: "150px" }}>
          <DialogSelect tituloBotao="INICIAR LEITURA" />
        </div>
      </main>
      <Footer />

    </>
  );
}