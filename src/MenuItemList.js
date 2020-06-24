import React from "react";
import MenuItem from "./MenuItem";

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
                {items}
            </section>
        );
    }
}

export default MenuItemList;
