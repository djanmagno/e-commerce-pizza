import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from "./globalStyles";
import Main from "./components/Main";
import Produtos from "./components/Produtos";
import {DadosProdutos, DadosProdutos2} from "./components/Produtos/dados";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Main/>
      <Produtos header='Escolha sua Favorita' dados={DadosProdutos}/>
      <Feature/>
      <Produtos header='Doces Maravilhos para Você' dados={DadosProdutos2}/>
      <Footer/>
    </Router>
  );
}

export default App;
