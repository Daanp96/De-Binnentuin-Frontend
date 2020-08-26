import React from 'react';
import {
  Link
} from "react-router-dom";

import './sass/App.scss';

class Error404 extends React.Component{

  render(){
    return(
      <section className = "errorBox">
        <h2 className = "errorBox__text--top">De pagina kan helaas niet worden gevonden</h2>
        <p className = 'errorBox__text'>Excuses voor het ongemak!</p>
        <Link to = '/'>
        <button className = 'loginKnoppen__button'>Terug naar de hoofdpagina</button>
        </Link>
      </section>
    );
  }
}

export default Error404;
