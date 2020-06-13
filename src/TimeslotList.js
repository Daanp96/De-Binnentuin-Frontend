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

  render(){
    return(
      <section>

      <form>
        <label> Tijd </label>
          {this.state.timeslots.map((timeslot, index) =>{
          return (
           <React.Fragment key={index}>
            <Timeslot key={index} start={timeslot.TimeStart} end={timeslot.TimeStop}/>
            <button type="button" onClick={() => this.handleDeleteClick(index)} >remove</button>
          </React.Fragment>
        )




          })}

        <input type="submit" value="Submit"/>
      </form>
      <button onClick={() => this.handleClick()} >+</button>
      </section>
    )
  }

}

export default TimeslotList;
