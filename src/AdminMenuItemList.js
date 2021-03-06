import React from "react";
import AdminMenuItem from "./AdminMenuItem";
import {Link} from "react-router-dom";

class AdminMenuItemList extends React.Component {
      componentDidMount(){
        this.props.getMenu('All');
      }

    render(){

        const items = this.props.itemList.map((item, index) =>
             <React.Fragment key={index}>
               <Link to="/edit" onClick={() => this.props.onClick(item.naam)}>
                    <AdminMenuItem
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
              <Link to="/admin" className="admin_menu_list__a">
                <button className="Terugknop">
                   &#8592; Terug
                </button>
              </Link>
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

export default AdminMenuItemList;
