import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Biblia from "./components/biblia/biblia"
import PainelLeitura from "./components/painelLeitura/painelLeitura"
import HinoHarpa from "./components/hinoHarpa/hinoHarpa"
import PesquisaBiblia from "./components/pesquisaBiblia/pesquisabiblia"
import Sobre from "./components/sobre/sobre"
import './index.css';
import App from './App';


import PopularBDHarpa from "./components/popularBDHarpa/popularBDHarpa"


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/biblianvi" exact={true} component={Biblia} />
      <Route path="/biblianvi/painelleitura/:idade/:livro/:capitulo/:versiculo" component={PainelLeitura} />{/* recebe 3 parametros */}
      <Route path="/harpacrista" component={HinoHarpa} />
      {/* <Route path="/populaharpa" component={PopularBDHarpa} /> */}
      <Route path="/biblianvi/pesquisa/:palavrapesquisabiblia" component={PesquisaBiblia} />
      <Route path="/sobre" component={Sobre} ></Route>

    </Switch>
  </ BrowserRouter>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

