import React from 'react';

class Timeslot extends React.Component{
  constructor(){
    super()
    this.state =  {start: "", end: "", key: ""}
  }



  componentDidMount(){
      this.setState({start: this.props.start});
      this.setState({end: this.props.end});
      this.setState({key: this.props.index});
  }


  onStartChange = (event) => {
    this.setState({start: event.target.value})
}
onEndChange = (event) => {
  this.setState({end: event.target.value})
}

  render(){
    return(
    <section className="timeslot">
      <input type="time" defaultValue={this.props.start} name="timestart[]" onChange={(event) =>this.props.onStart(event.target.value, this.state.key)}/>
      <p> - </p>
      <input type="time" defaultValue={this.props.end} name="timestop[]" onChange={(event) =>this.props.onEnd(event.target.value, this.state.key)}/>
    </section>


  )
  }

}


export default Timeslot;
