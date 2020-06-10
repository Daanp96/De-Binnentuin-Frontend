import React from 'react';
import axios from "axios";
import './sass/App.scss';

class Opmerking extends React.Component{

  state = {opmerking: ""};

  onSearch = event =>{
    this.setState({opmerking: event.target.value});
    console.log(this.state.opmerking);
  }

  onCheck = event =>{
    event.preventDefault();
    console.log("FFFF");
    console.log(this.state.opmerking);
  }

  render(){
    return(
      <section>
        <form onSubmit={this.onCheck}>
          <input className="" type="text" placeholder="Opmerkingen..." onChange={this.onSearch} />
          <button className="" type="button" name="button" onClick={this.onCheck}>Submit</button>
        </form>
      </section>
    )
  }
}

export default Opmerking;
