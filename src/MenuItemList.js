import React from "react";
import MenuItem from "./MenuItem";
import {Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";

class MenuItemList extends React.Component {

    render(){

        const items = this.props.itemList.map((item, index) =>
             <React.Fragment key={index}>
               <Link to="/edit" onClick={() => this.props.onClick(item.naam)}>
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
              <Link to="/create">
                Add new item
              </Link>
            </section>

        );
    }
}

export default MenuItemList;
