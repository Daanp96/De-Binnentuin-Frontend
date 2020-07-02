import React from "react";
import "./sass/LocationButton.scss"

const LocationButton = (props) =>{
  let img;
  //image different source depending on props.locatie for location
  if(props.locatie === "binnentuin" || props.locatie === "dakterras"){
    img = <img className="location__locationButton__img" src={"./" + props.locatie + ".png"} alt={"afbeelding binnen knop om naar " + props.locatie + " te gaan"}/>
  }

  const onLocatieClick = event =>{
    //run api 1 level higher in App.js
    props.onClick(event.target.getAttribute("locatie"));

    //get dropdown element
    let dropdown = event.target.parentNode.childNodes[1];

    //get all locationbuttons
    let locationButtons = document.getElementsByClassName("location");
    //loop through all locationButtons
    for (let i = 0; i < locationButtons.length; i++) {
      //if locationbutton doesnt match up with own location === other location button
      if (locationButtons[i].childNodes[0].getAttribute("locatie") !== props.locatie) {
        //save element to var
        let other_dropdown = locationButtons[i].childNodes[1];
        //only toggle other dropdown state if they dont have the same dropdown state (so it never opens both at the start)
        if ((other_dropdown.classList.contains("location__dropdown--open") !== dropdown.classList.contains("location__dropdown--open"))) {
          //toggle other dropdown open/closed
          other_dropdown.classList.remove("location__dropdown--open");

          //give text display none/block depending on if other dropdown is open or closed
          if (other_dropdown.classList.contains("location__dropdown--open")) {
            other_dropdown.childNodes[0].style.display = "block";
          }else{
            other_dropdown.childNodes[0].style.display = "none";
          }
        }
      }
    }

    //toggle open class on selected dropdown
    dropdown.classList.add("location__dropdown--open");

    //give text display none/block depending on if dropdown is open or closed
    if (dropdown.classList.contains("location__dropdown--open")) {
      dropdown.childNodes[0].style.display = "block";
    }else{
      dropdown.childNodes[0].style.display = "none";
    }
  }

  return(
    <section className="location">
      <button className="location__locationButton" onClick={onLocatieClick} locatie={props.locatie}>
          {/* geen figure want het geeft problemen bij het laden van de pagina */ }
          {img}

        <p className="location__locationButton__text">{props.locatie}</p>
      </button>
      <section className="location__dropdown">
        <p className="location__dropdown__text">geselecteerd</p>
      </section>
    </section>
  );
}

export default LocationButton;
