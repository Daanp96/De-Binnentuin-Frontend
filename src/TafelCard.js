import React from "react";
import "./sass/TafelCard.scss";

const TafelCard = (props) =>{

  return(
    <section className="tafelcard">
      <article className="tafelcard__infoContainer">
        <p className="tafelcard__infoContainer__text tafelcard__infoContainer__text--label">Tafelnr</p>
        <p className="tafelcard__infoContainer__text">{props.tafelNummer}</p>
      </article>
      <article className="tafelcard__infoContainer">
        <p className="tafelcard__infoContainer__text tafelcard__infoContainer__text--label">Aantal plekken</p>
        <p className="tafelcard__infoContainer__text">{props.maxAantalPersonen}</p>
      </article>
    </section>
  );
}

export default TafelCard;
