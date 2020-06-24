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
            <h2>{this.props.item.naam}</h2>
            <p>{this.props.item.beschrijving}</p>
            <p>€{this.props.item.prijs}</p>
            <button onClick={this.addItem}>Add this item</button>
            <button onClick={this.removeItem}>Remove this item</button>
        </section>
    );
  }
}

export default MenuItem;
