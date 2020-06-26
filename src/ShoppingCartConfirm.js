import React from "react";

class ShoppingCartConfirm extends React.Component {
    render(){

        const items = this.props.itemList.map((item, index) =>
            <MenuItem
                key={index}
                item={item}
            />
        );

        return(
            <section className="menu_list">
                {items}
            </section>

        );
    }
}

export default ShoppingCartConfirm;
