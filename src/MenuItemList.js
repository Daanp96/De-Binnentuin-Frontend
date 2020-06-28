import React from "react";
import MenuItem from "./MenuItem";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class MenuItemList extends React.Component {

    render(){

        const items = this.props.itemList.map((item, index) =>
            <MenuItem
                key={index}
                item={item}
                addFunction = {this.props.addFunction}
                removeFunction = {this.props.removeFunction}
                buttonClass = {this.props.buttonClass}
            />
        );

        return(
            <section className="menu_list">
                {items}
                <Link to = "/opmerking"><button className = {this.props.buttonClass}>Checkout</button></Link>
            </section>

        );
    }
}

export default MenuItemList;
