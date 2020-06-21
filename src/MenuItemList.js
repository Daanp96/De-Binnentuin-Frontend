import React from "react";
import MenuItem from "./MenuItem";
import {Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";

class MenuItemList extends React.Component {
      constructor(){
        super();
      }

      componentDidMount(){
        this.props.function('all');
      }

    render(){
        console.log(this.props.itemList);
        const items = this.props.itemList.map((item, index) =>
             <React.Fragment key={index}>
               <Link to="/edit" onClick={() => this.props.onClick(item.naam)}>
                    <MenuItem
                        index={index}
                        id={item.id}
                        naam={item.naam}
                        beschrijving={item.beschrijving}
                        categorie={item.categorie}
                        prijs={item.prijs}
                        aantalVerkocht={item.aantalVerkocht}
                    />
                  </Link>
                  <button onClick={() => this.props.onDelete(item.menuitem_id, this.props.restaurant)}>
                    Verwijder item
                  </button>
                </React.Fragment>
        );

        return(


            <section className="admin_menu_list">
              <div className="admin_menu_list__div">
                {items}
              </div>

              <Link to="/create" className="admin_menu_list__link">
                Add new item
              </Link>
            </section>

        );
    }
}

export default MenuItemList;
