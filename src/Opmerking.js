import React from 'react';
import axios from "axios";
import "./sass/Opmerking.scss";
import './sass/App.scss';

class Opmerking extends React.Component{

  state = {opmerking: "", text: ""};

  onSearch = event =>{
    this.setState({opmerking: event.target.value});
    console.log(this.state.opmerking);
  }

  onCheck = event =>{
    event.preventDefault();
    console.log("FFFF");
    this.setState({text: event.target.value});
    console.log(event);
  }

  makeApiCallPatch = event =>{
    event.preventDefault();
    const BASE_URL = 'http://127.0.0.1:8000/api/bestellingen/'
    axios.put( BASE_URL + '2/update',{
      opmerking: this.state.opmerking
    }).then(res =>{
      console.log(res);
    }).catch(error => {
   console.log(error.response)
    });
  }

  render(){
    return(
      <section>
        <form className="searchbarContainer" onSubmit={(event) => this.makeApiCallPatch(event)}>
          <input className="searchbarContainer__searchbar" type="text" placeholder="Opmerkingen..." onChange={this.onSearch} />
          <input className="searchbarContainer__submit" type="submit" name="button" value = "Submit" />
        </form>
        <p>{this.state.text}</p>
      </section>
    )
  }
}

export default Opmerking;
