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
      console.log(res);
      this.setState({rekening: (this.state.rekening + this.state.prijs)});
    }).catch(error => {
   console.log(error.response)
    });
  }

  makeApiCallRekening = event =>{
    const BASE_URL = 'http://127.0.0.1:8000/api/users/'
    axios.get( BASE_URL + '2').then(res =>{
      console.log(res);
        this.setState({rekening: res.data.rekeningNummer});
  });
}

componentDidMount = () =>{
  this.makeApiCallRekening();
}

  makeApiCall = event =>{
    event.preventDefault();
    const BASE_URL = 'http://127.0.0.1:8000/api/bestellingen/'
    axios.get( BASE_URL + '2').then(res =>{
      console.log(res);
      if (this.state.login == "true") {
        this.setState({prijs: (res.data.prijsVoledigeBestelling/10) * 9});
      }else {
        this.setState({prijs: res.data.prijsVoledigeBestelling});
      }
    });
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
