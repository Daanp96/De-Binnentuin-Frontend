import React from "react";
import axios from "axios";

class MenuItem extends React.Component {
    state = {
        naam: "",
        beschrijving: "",
        categorie: "",
        prijs: "",
        aantalVerkocht: ""
    };
    
    getMenu = () => {
        const BASE_URL = "http://127.0.0.1:8000/api/menu";
        axios.get(BASE_URL).then(res => {
            console.log(res);
            this.setState({
                naam: res.data[0].naam,
                beschrijving: res.data[0].beschrijving,
                categorie: res.data[0].categorie,
                prijs: res.data[0].prijs,
                aantalVerkocht: res.data[0].aantalVerkocht
            });
        });
    }

    componentDidMount = () =>{
        this.getMenu();
    }
    
    render(){
        return(
            <section>
                <p>Naam: {this.state.naam}</p>
                <p>Beschrijving: {this.state.beschrijving}</p>
                <p>Categorie: {this.state.categorie}</p>
                <p>Prijs: {this.state.prijs}</p>
                <p>Aantal verkocht: {this.state.aantalVerkocht}</p>
            </section>
        );
    }
}

export default MenuItem;