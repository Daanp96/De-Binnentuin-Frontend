import React from 'react';
// import logo from './logo.svg';
import './sass/main.scss';

import LocationButton from "./LocationButton";
import TafelCard from "./TafelCard";

import Maincontent from "./Maincontent.js"
import Opening from "./Opening.js"
import Weather from './Weather.js'

import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  state = {locatie: "", time: "", isOpen1: "true" , isOpen2: "false"}

  tafels;

  fetchPage(){
    const Base_URL = "http://127.0.0.1:8000";
    axios.get(Base_URL + "/landing").then(res => {
       this.setState({
          time: res.data[0] + "-" + res.data[1],
       });
    });
  }

  componentDidMount() {
    this.fetchPage();
  }

  makeApiCall = locatie =>{
    const BASE_URL = "http://localhost:8000/api/";
    axios.get(BASE_URL + locatie + "/tafels").then(res =>{
      this.tafels = res.data.map(x =>
      <TafelCard key={res.data[res.data.indexOf(x)].tafelnummer}
      tafelNummer={res.data[res.data.indexOf(x)].tafelnummer}
      maxAantalPersonen={res.data[res.data.indexOf(x)].maxAantalMensen}
      tafelId={res.data[res.data.indexOf(x)].id}/>);

      this.setState({locatie:locatie, time: "", isOpen1: "true" , isOpen2: "false"});
    })
  }


  render(){
    return (
      <article className="App">
        <header className="App-header"></header>
          <main className="main">
            <Router>
              <Route path="/">
                <h1>
                  De Binnentuin
                </h1>
                <Maincontent/>
                <Opening img1Src ="./images/open-sign.png" imgName1 ="De Binnentuin is open" img2Src ="./images/closed-sign.png" imgName2 ="Het dakterras is dicht" time={this.state.time}/>
                <Weather/>
              </Route>
              <Route path="/reserveren">
                <section className="main__location">
                  <h2 className="main__location__text">Kies uw locatie</h2>
                  <section className="main__location__locationContainer">
                    <LocationButton locatie="binnentuin" onClick={this.makeApiCall}/>
                    <LocationButton locatie="dakterras" onClick={this.makeApiCall}/>
                  </section>
                </section>
                {this.tafels}
              </Route>
            </Router>
        </main>
      </article>
    );
  }
}



export default App;
