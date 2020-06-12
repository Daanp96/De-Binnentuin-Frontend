import React from 'react';

class Timeslot extends React.Component{
  state = {start: "", end: ""}


  onStartChange = (event) => {
    this.setState({start: event.target.value})
}
onEndChange = (event) => {
  this.setState({end: event.target.value})
}

  render(){
    return(
    <section className="timeslot">
      <input type="time" defaultValue={this.props.start} onChange={(event) =>this.onStartChange(event)}/>
      <p> - </p>
      <input type="time" defaultValue={this.props.end} onChange={(event) =>this.onEndChange(event)}/>
    </section>


  )
  }

}


export default Timeslot;
