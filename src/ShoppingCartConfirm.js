import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";

class ShoppingCartConfirm extends React.Component {
    render(){

      let prijs = 0;

        const items = this.props.itemList.map((item, index) =>
            <ShoppingCartItem
                key={index}
                item={item}
            />
        );

        for (let i = 0; i < this.props.itemList.length; i++) {
          prijs += this.props.itemList[i].prijs;
        }
        prijs = prijs.toFixed(2);
        return(
            <section className="menu_list">
                {items}
                <h2>Uw te betalen prijs: €{prijs}</h2>
            </section>

        );
    }
}

export default ShoppingCartConfirm;
