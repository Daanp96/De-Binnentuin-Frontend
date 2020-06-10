import React from "react";
import "./sass/LocationButton.scss"

const LocationButton = (props) =>{
  let img;

  if(props.locatie === "binnentuin" || props.locatie === "dakterras"){
    img = <img clasName="locationButton__img" src={"./" + props.locatie + ".png"} alt={"afbeelding binnen knop om naar " + props.locatie + " te gaan"}/>
  }
  return(
    <button className="locationButton">
      {img}
      <p className="locationButton__text">{props.locatie}</p>
    </button>
  );
}

export default LocationButton;
