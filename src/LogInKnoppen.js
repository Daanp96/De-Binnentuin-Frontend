import React from 'react';
import axios from 'axios';
import  { Redirect, Link } from 'react-router-dom'
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
      window.location.replace('http://127.0.0.1:8000/api/bestellingen/'+ this.state.prijs +'/betaalnu');
    }).catch(function (error){
      console.log(error);
    });
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
        <section className='loginKnoppen'>
          <Link to="/login"><button className="loginKnoppen__button" type="button" name="button">Log in</button></Link>
          <Link to="/signup"><button className="loginKnoppen__button" type="button" name="button">Registreer</button></Link>
          <button className="loginKnoppen__button" type="button" name="button" onClick = {this.goBetalenNuu}>Betaal zonder in te loggen</button>
        </section>
    );
  }
}

export default LogInKnoppen;
