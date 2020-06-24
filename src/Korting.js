import React from 'react';
import axios from "axios";
import './sass/App.scss';

class Korting extends React.Component{

  state = {login: "false", prijs: ""};

  makeApiCallUsers = invoer =>{
    const BASE_URL = 'http://127.0.0.1:8000/api/users/'
    axios.get( BASE_URL + invoer).then(res =>{
      console.log(res);
      if (res.data.isMember == false) {
        this.setState({login: "false"});
      }else {
        this.setState({login: "true"});
      }
    });
  }

  makeApiCall = event =>{
    event.preventDefault();
    const BASE_URL = 'http://127.0.0.1:8000/api/bestellingen/'
    axios.get( BASE_URL + '2').then(res =>{
      console.log(res);
      if (this.state.login == "true") {
        this.setState({prijs: (res.data.prijsVoledigeBestelling/10) * 8.5});
      }else {
        this.setState({prijs: res.data.prijsVoledigeBestelling});
      }
    });
  }

  componentDidMount = () =>{
    this.makeApiCallUsers();
  }

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

export default Korting;
