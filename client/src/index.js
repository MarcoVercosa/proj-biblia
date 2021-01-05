import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Biblia from "./components/biblia/biblia"
import PainelLeitura from "./components/painelLeitura/painelLeitura"
import HinoHarpa from "./components/hinoHarpa/hinoHarpa"
import './index.css';
import App from './App';


import PopularBDHarpa from "./components/popularBDHarpa/popularBDHarpa"


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/biblianvi" exact={true} component={Biblia} />
      <Route path="/biblianvi/painelleitura/:idade/:livro/:capitulo" component={PainelLeitura} />
      <Route path="/harpacrista" component={HinoHarpa} />
      <Route path="/populaharpa" component={PopularBDHarpa} />
      {/* recebe 3 parametros */}
    </Switch>
  </ BrowserRouter>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

