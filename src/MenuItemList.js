import React from "react";
import MenuItem from "./MenuItem";
import Sort from "./Sort";

class MenuItemList extends React.Component {

    getSort = () => {
        const BASE_URL = `http://127.0.0.1:8000/api/menu/sort`;
        axios.get(BASE_URL).then(res => {
            console.log(res.data);
        });
    }

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
