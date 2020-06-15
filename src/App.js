import React from 'react';
// import logo from './logo.svg';
import './sass/App.scss';

import LocationButton from "./LocationButton";
import TafelCard from "./TafelCard";

import axios from "axios";

class App extends React.Component {
  state = {locatie: ""}

  tafels;

  makeApiCall = locatie =>{
    const BASE_URL = "http://localhost:8000/api/";
    axios.get(BASE_URL + locatie + "/tafels").then(res =>{
      this.tafels = res.data.map(x =>
      <TafelCard key={res.data[res.data.indexOf(x)].tafelnummer}
      tafelNummer={res.data[res.data.indexOf(x)].tafelnummer}
      maxAantalPersonen={res.data[res.data.indexOf(x)].maxAantalMensen}
      tafelId={res.data[res.data.indexOf(x)].id}/>);

      this.setState({locatie:locatie});
    })
  }


  render(){
    return (
      <main className="main">
        <section className="main__locationContainer">
          <LocationButton locatie="binnentuin" onClick={this.makeApiCall}/>
          <LocationButton locatie="dakterras" onClick={this.makeApiCall}/>
        </section>

        {this.tafels}
      </main>
    );
  }
}

export default App;
