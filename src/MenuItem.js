import React from "react";
import "./sass/Menuitem.scss";

const MenuItem = props => {
      return(
        <section className="menu_list__item">
            <h2>{props.naam}</h2>
            <p>{props.beschrijving}</p>
            <p>€{props.prijs}</p>
        </section>
    );
}

export default MenuItem;
