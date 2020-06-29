import React from 'react';
import "./sass/Maincontent.scss";
import {
  Link
} from "react-router-dom";

const Maincontent = (props) => {
  return (
    <article className="main_content">
      <p className="main_content__text">
        De binnentuin en het dakterras zijn een goede plek om te ontspannen.
        Iedereen kan hier naar binnen voor een lekkere maaltijd of om iets te komen drinken.
        Als je interesse hebt, reserveer dan een plekje!
      </p>
      <figure className='main_content__figure'>
        <img className='main_content__figure__img' src='images/plnt_togeterh.png' alt='foto van dakterras en de binnentuin' />
      </figure>
      <h2 className="main_content__h2">
        We zien je graag langskomen.
      </h2>
      <Link to="/reserveren"><button className="main_content__button">Reserveer hier</button></Link>
    </article>
  );
}

  export default Maincontent;
