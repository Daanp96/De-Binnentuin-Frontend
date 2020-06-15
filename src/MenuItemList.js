import React from "react";
import MenuItem from "./MenuItem";

class MenuItemList extends React.Component {
    render(){

        const items = this.props.itemList.map((item, index) =>
            <MenuItem
                key={index}
                naam={item.naam}
                beschrijving={item.beschrijving}
                categorie={item.categorie}
                prijs={item.prijs}
                aantalVerkocht={item.aantalVerkocht}
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
