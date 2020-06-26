import React from 'react';
import axios from 'axios';
import "./sass/Menuitem.scss";

class LogInKnoppen extends React.Component{

  goBetalen = event =>{
    const BASE_URL = 'http://127.0.0.1:8000/api/bestellingen/new'
    axios.post(BASE_URL, {
      shoppingcart: this.props.shoppingcart
    }).then(res =>{
      console.log(res)
    });
  }

  render(){
    return(
        <section>
          <button className="" type="button" name="button">Log in</button>
          <button className="" type="button" name="button" onClick = {this.goBetalen()}>Betaal zonder in te loggen</button>
        </section>
    );
  }
}

export default LogInKnoppen;
