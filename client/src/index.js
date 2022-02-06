import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom"
// import Biblia from "./components/biblia/biblia"
// import PainelLeitura from "./components/painelLeitura/painelLeitura"
// import HinoHarpa from "./components/hinoHarpa/hinoHarpa"
// import NovaPesquisaBiblia from "./components/pesquisaBiblia/novapesquisabiblia"
// import Sobre from "./components/sobre/sobre"
// import PaginaErro from "./components/paginaErro/paginaErro"
import './index.css';
// import App from './App';



import Home from "./pages/home/home"
import BibliaSelect from "./pages/bibliaSelect/bibliaSelect"
import PainelLeitura from "./pages/painelLeitura/painelLeitura"
import HinoHarpa from "./pages/harpaCrista/hinoHarpa"
import NovaPesquisaBiblia from "./pages/painelPesquisaPorPalavra/painelPesquisaPorPalavra"
import Sobre from "./pages/sobre/sobre"
import PaginaErro from "./pages/erro/paginaErro"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/biblia" exact={true} component={BibliaSelect} />
      <Route path="/biblia/painelleitura/:versao_id/:testamento_id/:livro_id/:capitulo/:versiculo" component={PainelLeitura} />
      <Route path="/harpacrista" component={HinoHarpa} />
      <Route path="/biblia/pesquisa/:palavrapesquisabiblia" component={NovaPesquisaBiblia} />
      <Route path="/sobre" component={Sobre} ></Route>
      <Route path="*" component={PaginaErro} />

    </Switch>
  </ BrowserRouter>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

