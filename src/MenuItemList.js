import React from "react";
import MenuItem from "./MenuItem";
import {Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";

class MenuItemList extends React.Component {
  onClick = (id, event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(id);

  }


    render(){

        const items = this.props.itemList.map((item, index) =>
             <React.Fragment key={index}>
                <Link onClick={(event) => this.props.onClic("hey", event)} to={{
                    pathname: "/edit",
                  state: {id: item.id } }} >
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
