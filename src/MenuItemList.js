import React from "react";
import MenuItem from "./MenuItem";
import Sort from "./Sort";
import axios from "axios";

class MenuItemList extends React.Component {

    render(){

        const items = this.props.itemList.map((item, index) =>
            <MenuItem
                key={index}
                item={item}
                addFunction = {this.props.addFunction}
                removeFunction = {this.props.removeFunction}
            />
        );

        return(
            <section className="menu_list">
                <Sort handleSubmit={this.props.getSort}/>
                {items}
            </section>
        );
    }
}

export default MenuItemList;
