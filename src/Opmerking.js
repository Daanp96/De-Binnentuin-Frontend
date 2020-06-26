import React from 'react';
import axios from "axios";
import './sass/App.scss';

class Opmerking extends React.Component{

  state = {opmerking: "", text: ""};

  onSearch = event =>{
    this.setState({opmerking: event.target.value});
    console.log(this.state.opmerking);
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
        <form onSubmit={(event) => this.makeApiCallPatch(event)}>
          <input className="" type="text" placeholder="Opmerkingen..." onChange={this.onSearch} />
          <input className="" type="submit" name="button" value = "Submit" />
        </form>
      </section>
    )
  }
}

export default Opmerking;
