import React from 'react';

import Timeslot from './Timeslot';

class TimeslotList extends React.Component{
  render(){
    return(
      <section>
      <form>
        <label> Tijd </label>
        <Timeslot />
        <Timeslot />
        <input type="submit" value="Submit"/>
      </form>
      </section>
    )
  }

}

export default TimeslotList;
