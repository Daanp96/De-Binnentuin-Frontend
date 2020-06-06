import React from 'react';

class Timeslot extends React.Component{
  render(){
    return(
    <section class="timeslot">
      <input type="time" />
      <p> - </p>
      <input type="time" />
    </section>


  )
  }

}


export default Timeslot;
