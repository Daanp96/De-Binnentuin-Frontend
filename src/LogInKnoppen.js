import React from 'react';
import axios from 'axios';
import  { Redirect, Link } from 'react-router-dom'
import "./sass/Menuitem.scss";

class LogInKnoppen extends React.Component{
state = {
  prijs: 0
}
  buttons;

  componentDidMount = () =>{
    this.getTotaalPrijs();
    this.checkLoggedIn();
  }

  goBetalenNu = event =>{
    const BASE_URL = 'http://127.0.0.1:8000/api/bestellingen/new/true';
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

  goBetalenLater = event =>{
    const BASE_URL = 'http://127.0.0.1:8000/api/bestellingen/new/false';
    axios.post(BASE_URL, {
      shoppingcart: this.props.shoppingcart,
      totaalprijs: this.state.prijs,
      tafeltimeslot: this.props.tafeltimeslot
    }).then(function(response){
      console.log(response);
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

  checkLoggedIn(){
    if(sessionStorage.getItem('token_type') != null){
      this.buttons = [<Link to="/twitter"><button className="loginKnoppen__button" type="button" name="button"onClick = {this.goBetalenLater}>Zet op rekening</button></Link>,
      <button className="loginKnoppen__button" type="button" name="button" onClick = {this.goBetalenNu}>Betaal nu via ideal</button>] ;
    }else{
      this.buttons = [<Link to="/login"><button className="loginKnoppen__button" type="button" name="button">Log in</button></Link>,
      <Link to="/signup"><button className="loginKnoppen__button" type="button" name="button">Registreer</button></Link>,
      <button className="loginKnoppen__button" type="button" name="button" onClick = {this.goBetalenNu}>Betaal zonder in te loggen</button>];
    }
    console.log(sessionStorage.getItem('token_type'));
  }
  render(){
    return(
        <section className='loginKnoppen'>
          {this.buttons}
        </section>
    );
  }
}

export default LogInKnoppen;
