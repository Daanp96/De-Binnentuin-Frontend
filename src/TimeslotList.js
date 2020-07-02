import React from 'react';

import Timeslot from './Timeslot';
import axios from 'axios';

class TimeslotList extends React.Component{
  constructor(){
    super()
    this.state = { timeslots: []}
  }


//haalt de timeslots van de api
  componentDidMount(){
    axios.get('http://localhost:8000/api/admin/timeslots').then(res =>{
      this.setState({timeslots: res.data});
    })
  }

  //maakt een nieuwe timeslot aan en voegt die aan de state toe
  handleClick(){
    let oldInput = this.state.timeslots;
    oldInput.push({TimeStop: "00:00", TimeStart:"00:00"});
    this.setState({timeslots: oldInput})
  }

//verwijdert een timeslot uit de state
  handleDeleteClick(placeIndex){
    let currentState = this.state.timeslots;
    currentState.splice(placeIndex, 1);
    this.setState({timeslots: currentState});
  }

  handleSubmit(event){
    event.preventDefault();
    let start = [];
    let stop = [];
    this.state.timeslots.map((timeslot, index) =>{
          start.push(timeslot.TimeStart);
          stop.push(timeslot.TimeStop);
          return null;
    });
    // stuurt naar de api
   axios({
      method:'put',
      url: 'http://localhost:8000/api/admin/timeslots/update',
      data: {timestart: start, timestop: stop},
    });
  }

  //onclick event dat de state van één input (Timestart) veranderd
  onStartChange = (event, index) => {
    this.setState(state => {
        this.state.timeslots.map((item, j) =>{
        if(j === index){
          item.TimeStart = event;
        }
        return null;
      });
    });
  }
  //onclick event dat de state van één input (TimeStop) veranderd
  onEndChange = (event, index) => {
    this.setState(state => {
        this.state.timeslots.map((item, j) =>{
        if(j === index){
          item.TimeStop = event;
        }
          return null;
      });
    });
  }

  render(){

    const enabled = !(this.state.timeslots.length > 0);

    return(
      <section className="timeslotlist">
        <h2> Timeslots</h2>
      <form className="timeslotlist__form" onSubmit={(event) => this.handleSubmit(event)}>
          {this.state.timeslots.map((timeslot, index) =>{
          return (
           <React.Fragment key={index}>
            <Timeslot index={index} onStart={this.onStartChange} onEnd={this.onEndChange} start={timeslot.TimeStart} end={timeslot.TimeStop}/>
            <button type="button" className="timeslotlist__form__button" onClick={() => this.handleDeleteClick(index)} >&#10006;</button>
          </React.Fragment>
        )




          })}
          <button  className="timeslotlist__form__button--add" type="button" onClick={() => this.handleClick()} >
            <figure className="timeslotlist__form__button--add__figure">
              <img src="/images/plus.svg" alt="plaatje van een +"></img>
            </figure>
            Nieuw Tijdslot
          </button>

        <input disabled={enabled} className='timeslotlist__form__button--submit' type="submit" value="Opslaan"/>
      </form>

      </section>
    )
  }

}

export default TimeslotList;
