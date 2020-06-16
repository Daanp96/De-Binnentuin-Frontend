import React from 'react';
import axios from "axios";
import './sass/App.scss';

class Rekening extends React.Component{

  render(){
    return(
      <section>
        <button className="" type="button" name="button" onClick={() => this.makeApiCallUsers(1)}>log in voor Plnt</button>
        <button className="" type="button" name="button" onClick={() => this.makeApiCallUsers(2)}>log in not Plnt</button>
        <button className="" type="button" name="button" onClick={this.makeApiCall}>Show Prijs</button>
        <p>{this.state.prijs}</p>
      </section>
    )
  }
}



export default Rekening;
