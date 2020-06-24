import React from "react";
import "./sass/Menuitem.scss";

const MenuItem = props => {
    return(
        <section className="menu_list__item">
            <h2 className="menu_list__item__title">{props.naam}</h2>
            <p className="menu_list__item__description">{props.beschrijving}</p>
            <p className="menu_list__item__price">€{props.prijs}</p>
            <button className="menu_list__item__cart">Add to cart</button>
            <button className="menu_list__item__favorite">Add to favorites</button>
        </section>
    );
}

export default MenuItem;