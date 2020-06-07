import React from 'react';

class Timeslot extends React.Component{
  inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
}

  render(){
    return(
    <section className="timeslot">
      <input type="time" value={this.props.start} onChange={(event) =>this.inputChangedHandler(event)}/>
      <p> - </p>
      <input type="time" value={this.props.end} onChange={(event) =>this.inputChangedHandler(event)}/>
    </section>


  )
  }

}


export default Timeslot;
