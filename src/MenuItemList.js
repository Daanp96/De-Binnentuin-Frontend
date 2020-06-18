import React from "react";
import MenuItem from "./MenuItem";
import {Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";

class MenuItemList extends React.Component {
  onClic = () => {

    console.log("hey");
    this.props.onClick();

  }


    render(){

        const items = this.props.itemList.map((item, index) =>
             <React.Fragment key={index}>
               <Link to="/edit" onClick={() => this.props.onClick(item.id)}>
                    <MenuItem

                        id={item.id}
                        naam={item.naam}
                        beschrijving={item.beschrijving}
                        categorie={item.categorie}
                        prijs={item.prijs}
                        aantalVerkocht={item.aantalVerkocht}
                    />
                  </Link>
                </React.Fragment>
        );

        return(


            <section className="menu_list">
              {items}
            </section>

        );
    }
}

export default MenuItemList;
