import React from "react";
import "./sass/TafelCard.scss";
import axios from "axios";

class TafelCard extends React.Component{

  checkTableAvailable = () =>{
    let tafelid = 1;
    let date = "/31/01/2020";
    const BASE_URL = "http://localhost:8000/api/timeslots/tafel/";
    console.log(BASE_URL  + tafelid + date);
    axios.get(BASE_URL  + tafelid + date).then(res=>console.log(res.data));
  }

  render(){
    return(
      <section className="tafelcard">
        <article className="tafelcard__infoContainer">
          <p className="tafelcard__infoContainer__text tafelcard__infoContainer__text--label">Tafelnr</p>
          <p className="tafelcard__infoContainer__text">{this.props.tafelNummer}</p>
        </article>
        <article className="tafelcard__infoContainer">
          <p className="tafelcard__infoContainer__text tafelcard__infoContainer__text--label">Aantal plekken</p>
          <p className="tafelcard__infoContainer__text">{this.props.maxAantalPersonen}</p>
        </article>
        <button className="tafelcard__continue" onClick={this.checkTableAvailable}>></button>
      </section>
    );
  }
}

export default TafelCard;
