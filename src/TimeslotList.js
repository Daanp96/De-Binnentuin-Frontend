import React from 'react';

import Timeslot from './Timeslot';
import axios from 'axios';

class TimeslotList extends React.Component{
  constructor(){
    super()
    this.state = { timeslots: []}
  }



  componentDidMount(){
    axios.get('http://localhost:8000/admin/timeslots').then(res =>{
      this.setState({timeslots: res.data});
      console.log(this.state.timeslots);
    })
  }

  handleClick(){
    //console.log('this is', this);
    var oldInput = this.state.timeslots;
    oldInput.push({TimeStop: "00:00", TimeStart:"00:00"});
    console.log(oldInput);
    this.setState({timeslots: oldInput})
  }

  handleDeleteClick(placeIndex){
    var currentState = this.state.timeslots;
    currentState.splice(placeIndex, 1);
    this.setState({timeslots: currentState});
    console.log(this.state.timeslots);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('send');
    var start = [];
    var stop = [];
    {this.state.timeslots.map((timeslot, index) =>{
          start.push(timeslot.TimeStart);
          stop.push(timeslot.TimeStop);
    })}

  {/*   axios({
      method:'put',
      url: 'http://localhost:8000/api/admin/timeslots/update',
      data: {timestart: start, timestop: stop},
    }); */}
    console.log(start);
    console.log(stop);
  }

  render(){

    const enabled = !(this.state.timeslots.length > 0);

    return(
      <section className="timeslotlist">
        <h2> Tijd</h2>
      <form className="timeslotlist__form" onSubmit={(event) => this.handleSubmit(event)}>
          {this.state.timeslots.map((timeslot, index) =>{
          return (
           <React.Fragment key={index}>
            <Timeslot key={index} start={timeslot.TimeStart} end={timeslot.TimeStop}/>
            <button type="button" className="timeslotlist__form__button" onClick={() => this.handleDeleteClick(index)} >&#10006;</button>
          </React.Fragment>
        )




          })}
          <button  className="timeslotlist__form__button--add" type="button" onClick={() => this.handleClick()} >
            <figure className="timeslotlist__form__button--add__figure">
              <img src="/images/plus.svg"></img>
            </figure>
            Nieuw Tijdslot
          </button>

        <input disabled={enabled} className='timeslotlist__form__button--submit' type="submit" value="Submit"/>
      </form>

      </section>
    )
  }

}

export default TimeslotList;
