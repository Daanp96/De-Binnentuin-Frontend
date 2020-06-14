import React from "react";
import "./sass/LocationButton.scss"

const LocationButton = (props) =>{
  let img;

  if(props.locatie === "binnentuin" || props.locatie === "dakterras"){
    img = <img className="locationButton__img" src={"./" + props.locatie + ".png"} alt={"afbeelding binnen knop om naar " + props.locatie + " te gaan"}/>
  }

  const onLocatieClick = event =>{
    props.onClick(event.target.getAttribute("locatie"));
  }

  return(
    <button className="locationButton" onClick={onLocatieClick} locatie={props.locatie}>
      {img}
      <p className="locationButton__text">{props.locatie}</p>
    </button>
  );
}

export default LocationButton;
