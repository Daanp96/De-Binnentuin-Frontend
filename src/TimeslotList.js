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
              <button onClick={() => this.handleClick()} >+</button>
      </section>
    )
  }

}

export default TimeslotList;
