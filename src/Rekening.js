import React from 'react';
import axios from "axios";
import './sass/App.scss';

class Rekening extends React.Component{

  state = {prijs: "", login: "false", rekening: ""};

  makeApiCallPatch = event =>{
    event.preventDefault();
    const BASE_URL = 'http://127.0.0.1:8000/api/users/'
    axios.put( BASE_URL + '2/update',{
      prijs: this.state.rekening + this.state.prijs
    }).then(res =>{

      this.setState({rekening: (this.state.rekening + this.state.prijs)});
    }).catch(error => {

    });
  }

componentDidMount = () =>{
  this.makeApiCallRekening();
}

  render(){
    return(
      <section>
        <button className="" type="button" name="button" onClick={this.makeApiCall}>Show Prijs</button>
        <p>{this.state.prijs}</p>
        <button className= "" type = "button" onClick={this.makeApiCallPatch}>Naar rekening</button>
        <p>{this.state.rekening}</p>
      </section>
    )
  }
}



export default Rekening;
