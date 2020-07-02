import React from "react";
import MenuItem from "./MenuItem";
import {
  Link
} from "react-router-dom";
import Sort from './Sort';


class MenuItemList extends React.Component {

    render(){

        // Loop door de itemList heen om elk item een component te maken.
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
                {/* Stuur de getSort functie en sortClass CSS door */}
                <Sort handleSubmit={this.props.getSort} sortClass={this.props.sortClass}/>
                {items}
                <Link to = "/opmerking">
                  <button className = {this.props.buttonClass +' menu_list__checkout'}>Checkout</button>
                </Link>
            </section>

        );
    }
}

export default MenuItemList;
