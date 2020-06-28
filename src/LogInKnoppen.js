import React from 'react';
import axios from 'axios';
import "./sass/Menuitem.scss";

class LogInKnoppen extends React.Component{
state = {
  prijs: 0
}


  componentDidMount = () =>{
    this.getTotaalPrijs();
  }

  goBetalenNu = event =>{
    const BASE_URL = 'http://127.0.0.1:8000/api/bestellingen/new/true'
    console.log(this.props.shoppingcart);
    axios.post(BASE_URL, {
      shoppingcart: this.props.shoppingcart,
      totaalprijs: this.state.prijs,
      tafeltimeslot: this.props.tafeltimeslot
    }).then(function(response){
      console.log(response);
      //ga naar mollie
    }).catch(function (error){
      console.log(error);
    });
  }

  goBetalenLater = event =>{
    //post, ga dan niet naar mollie maar naar de volgende pagina
  }

  getTotaalPrijs = () => {
    let prijs = 0;
    for (let i = 0; i < this.props.shoppingcart.length; i++) {
      prijs += this.props.shoppingcart[i].prijs;
    }

    this.setState({
      prijs: prijs
    });
  }

  render(){
    return(
        <section>
          <button className="" type="button" name="button">Log in</button>
          <button className="" type="button" name="button" onClick = {this.goBetalenNu}>Betaal zonder in te loggen</button>
        </section>
    );
  }
}

export default LogInKnoppen;
