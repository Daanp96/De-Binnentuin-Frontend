import React from 'react';
import './sass/App.scss';

class Opmerking extends React.Component{

  state = {opmerking: "", text: ""};

  onSearch = event =>{
    this.setState({opmerking: event.target.value});
  }

  render(){
    return(
      <section className='opmerkingen'>
        <form className='opmerkingen__form' onSubmit={(event) => this.props.opmerkingToevoegen(event, this.state.opmerking)}>
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
