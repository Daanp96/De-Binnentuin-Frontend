import React from "react";
import axios from "axios";
import MenuItem from "./MenuItem";

class MenuItemList extends React.Component {
    state = {
        naam: "",
        beschrijving: "",
        categorie: "",
        prijs: "",
        aantalVerkocht: ""
    }
    
    getMenu = () => {
        const BASE_URL = "http://127.0.0.1:8000/api/menu";
        axios.get(BASE_URL).then(res => {
            let items = res.data;
            items.forEach(item => {
                this.setState({
                    naam: item.naam,
                    beschrijving: item.beschrijving,
                    categorie: item.categorie,
                    prijs: item.prijs,
                    aantalVerkocht: item.aantalVerkocht
                });
            });
        });
    }

    componentDidMount = () =>{
        this.getMenu();
    }
    
    render(){  

        return(
            <MenuItem 
                naam={this.state.naam}
                beschrijving={this.state.beschrijving}
                categorie={this.state.categorie}
                prijs={this.state.prijs}
                aantalVerkocht={this.state.aantalVerkocht}
            />
        );
    }
}

export default MenuItemList;