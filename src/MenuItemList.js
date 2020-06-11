import React from "react";
import axios from "axios";
import MenuItem from "./MenuItem";

class MenuItemList extends React.Component {
    state = {
        itemList: []
    }

    getMenu = () => {
        const BASE_URL = "http://127.0.0.1:8000/api/menu";
        axios.get(BASE_URL).then(res => {
            this.setState({
                itemList: res.data
            });
        });
    }

    componentDidMount = () =>{
        this.getMenu();
    }
    
    render(){  

        const items = this.state.itemList.map((item, index) => 
            <MenuItem 
                id={index}
                naam={item.naam}
                beschrijving={item.beschrijving}
                categorie={item.categorie}
                prijs={item.prijs}
                aantalVerkocht={item.aantalVerkocht}
            />
        );

        return(
            items
        );
    }
}

export default MenuItemList;