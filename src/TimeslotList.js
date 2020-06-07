import React from 'react';

import Timeslot from './Timeslot';
import axios from 'axios';

class TimeslotList extends React.Component{
  constructor(){
    super()
    this.state = { timeslots: []}
  }



  componentDidMount(){
    axios.get('http://localhost:8000/timeslots').then(res =>{
      this.setState({timeslots: res.data});
    })
  }

  render(){
    return(
      <section>

      <form>
        <label> Tijd </label>
          {this.state.timeslots.map((timeslot, index) =>{
            return <Timeslot key={index} start={timeslot.TimeStart} end={timeslot.TimeStop}/>
          })}
        <input type="submit" value="Submit"/>
      </form>
      </section>
    )
  }

}

export default TimeslotList;
