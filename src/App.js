import React from 'react';
// import logo from './logo.svg';
import './sass/main.css';
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
  state = {time: "", isOpen1: "true" , isOpen2: "false"}

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

  render(){
    return (
      <article className="App">
        <header className="App-header">
          <Router>
            <Route path="/">
              <h1>
                De Binnentuin
              </h1>
              <Maincontent/>
              <Opening img1Src ="./images/open-sign.png" imgName1 ="De Binnentuin is open" img2Src ="./images/closed-sign.png" imgName2 ="Het dakterras is dicht" time={this.state.time}/>
              <Weather/>
            </Route>
          </Router>
        </header>
      </article>
    );
  }

}



export default App;
