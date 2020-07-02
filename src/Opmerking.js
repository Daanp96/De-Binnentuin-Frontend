import React from 'react';
import axios from "axios";
import './sass/App.scss';

class Opmerking extends React.Component{

  state = {opmerking: "", text: ""};

  onSearch = event =>{
    this.setState({opmerking: event.target.value});
    console.log(this.state.opmerking);
  }

  //functie om op de opmerking toe te voegen aan de database zodat die later weer gebruikt kan worden
  makeApiCallPatch = event =>{
    event.preventDefault();
    const BASE_URL = 'http://127.0.0.1:8000/api/bestellingen/'
    axios.put( BASE_URL + '2/update',{
      opmerking: this.state.opmerking
    }).catch(error => {
   console.log(error.response)
    });
  }

  render(){
    return(
      <section className='opmerkingen'>
        <form className='opmerkingen__form' >
          <label>
            Opmerking
          <textarea className="opmerkingen__form__textarea" type="text" placeholder="Opmerkingen..." onChange={this.onSearch} />
          </label>
          <input className="opmerkingen__form__submit" type="submit" name="button" value = "Verstuur opmerking" />
        </form>
      </section>
    )
  }
}

export default Opmerking;
