import React from "react";

const MenuItem = props => {
    return(
        <section>
            <p>Naam: {props.naam}</p>
            <p>Beschrijving: {props.beschrijving}</p>
            <p>Categorie: {props.categorie}</p>
            <p>Prijs: {props.prijs}</p>
            <p>Aantal verkocht: {props.aantalVerkocht}</p>
        </section>
    );
}

export default MenuItem;