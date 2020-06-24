import React from "react";
import "./sass/Menuitem.scss";

class MenuItem extends React.Component{

  addItem = () =>{
    this.props.addFunction(this.props.item);
  }

  removeItem = () =>{
    this.props.removeFunction(this.props.item);
  }

  render(){
    return(
        <section className="menu_list__item">
          <h2 className="menu_list__item__title">{this.props.item.naam}</h2>
          <p className="menu_list__item__description">{this.props.item.beschrijving}</p>
          <p className="menu_list__item__price">€{this.props.item.prijs}</p>
          <button className="menu_list__item__cart" onClick={this.addItem}>Add this item</button>
          <button className="menu_list__item__cart" onClick={this.removeItem}>Remove this item</button>
        </section>
    );
  }
}

export default MenuItem;
