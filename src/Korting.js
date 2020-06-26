import React from 'react';
import axios from "axios";
import "./sass/Korting.scss"
import './sass/App.scss';

class Korting extends React.Component{

  state = {login: "false", prijs: ""};

  makeApiCallUsers = invoer =>{
    const BASE_URL = 'http://127.0.0.1:8000/api/users/'
    //hier komt een get functie voor de users tabel met het basis URL en dan de invoer die je meegeeft in de route
    //dan check ik of de ingevoerde user een member is, zoja set ik de login naar true. zo niet gaat de login state naar false
    axios.get( BASE_URL + invoer).then(res =>{
      console.log(res);
      if (res.data.isMember === false) {
        this.setState({login: "false"});
      }else {
        this.setState({login: "true"});
      }
    });
  }

  makeApiCall = event =>{
    event.preventDefault();
    const BASE_URL = 'http://127.0.0.1:8000/api/bestellingen/'
    //hier is de get functie met het basis URL en daarna de 2 gehardcode zodat je de bestelling met id 2 krijgt
    //MERGE: hebt de korting calculatie gebruikt van user-story-17V2
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
      <section className="korting">
        <button className="korting__button" type="button" name="button" onClick={() => this.makeApiCallUsers(1)}>log in voor Plnt</button>
        <button className="korting__button" type="button" name="button" onClick={() => this.makeApiCallUsers(2)}>log in not Plnt</button>
        <button className="korting__button" type="button" name="button" onClick={this.makeApiCall}>Show Prijs</button>
        <p>{this.state.prijs}</p>
      </section>
    )
  }
}

export default Korting;
