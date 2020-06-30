import React from "react";
import "./sass/Menuitem.scss";

class ShoppingCartItem extends React.Component{

  render(){
    return(
        <section className="menu_list__item">
          <h2 className="menu_list__item__title">{this.props.item.naam}</h2>
          <p className="menu_list__item__description">{this.props.item.beschrijving}</p>
          <p className="menu_list__item__price">€{this.props.item.prijs.toFixed(2)}</p>
        </section>
    );
  }
}

export default ShoppingCartItem;
