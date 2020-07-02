import React from "react";
import "./sass/Allergeen.scss";

const Allergeen = (props) =>{
  let source;
  let classes;
  if (props.line === "true") {
    source = "./allergenenIMG/" + props.allergy + "_line.png";
    classes = "allergeen-icoon-container__icoon";
  }else {
    source = "./allergenenIMG/" + props.allergy + ".png";
    classes = "allergeen-icoon-container__icoon allergeen-icoon-container__icoon--colored";
  }

  return(
    <section className="allergeen-icoon-container">
      <section className={classes}>
        <figure>
          <img className="allergeen-icoon-container__icoon__img" src={source} alt={props.allergy + " allergy warning"}/>
        </figure>
    </section>
      <p className="allergeen-icoon-container__text">{"contains " + props.allergy}</p>
    </section>

  );
}

export default Allergeen;
