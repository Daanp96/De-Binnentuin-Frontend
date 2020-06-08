import React from "react";
import "./sass/Allergeen.scss";

const Allergeen = (props) =>{
  return(
    <section className="allergeen-icoon">
      <img className="allergeen-icoon__img" src={"./allergenenIMG/" + props.allergy + ".png"} alt={props.allergy + " allergy warning"}/>
    </section>
  );
}

export default Allergeen;
