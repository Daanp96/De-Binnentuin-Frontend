import React from "react";
import "./sass/TafelCard.scss";
import axios from "axios";
import {
  Link
} from "react-router-dom";

class TafelCard extends React.Component{
  state = {day: "", month:"", year:""};

  timeslots;
  //upon mount > run
  //get current date and insert this into the date picker (because defaultvalue doesnt work and value makes immutable)
  componentDidMount(){
    //get date
    let today = new Date();
    let currentDate = {day:"", month:"", year:""};

    //if day date < 10 add a 0,
    //otherwise add nothing
    //push to currentDate object
    if (today.getDate() < 10){
      currentDate.day = "0" + today.getDate().toString();
    }
    else{
      currentDate.day = today.getDate().toString();
    }

    //if month date < 10 add a 0,
    //otherwise add nothing
    //push to currentDate object
    if ((today.getMonth()+1) < 10){
      currentDate.month = "0" + (today.getMonth()+1).toString();
    }else{
      currentDate.month = (today.getMonth()+1).toString();
    }

    //push to currentDate object
    currentDate.year = (today.getYear()+1900).toString();

    //set state to current data
    this.setState({day:currentDate.day, month:currentDate.month, year:currentDate.year});

    //set all dateinputs to current date
    //not the most efficient way to do it but oh well
    let dateInputs = document.getElementsByClassName("js--date");
    for (let i = 0; i < dateInputs.length; i++) {
      dateInputs[i].value = currentDate.year + "-" + currentDate.month + "-" + currentDate.day;
    }
  }

  //function for opening dropdown
  openDropdown = (event) =>{
    //get dropdown element and text within button
    let dropdown = event.target.parentNode.parentNode.childNodes[1];
    let buttonText = event.target.childNodes[0];

    //set all elements within dropdown to hidden/block depending upon state of dropdown
    if (dropdown.classList.contains("tafelcard__dropdown--open")) {
      for (let i = 0; i < dropdown.childNodes.length; i++) {
        dropdown.childNodes[i].style.display = "none";
      }
    }else{
      for (let i = 0; i < dropdown.childNodes.length; i++) {
        dropdown.childNodes[i].style.display = "block";
      }
    }

    //rotate arrow within button downwards
    buttonText.classList.toggle("tafelcard__head__continue__text--selected");
    //open dropdown by adding class > increasing height
    dropdown.classList.toggle("tafelcard__dropdown--open");

    //run updateTimeslots with date to get timeslots for that day
    this.updateTimeslots(this.state.day, this.state.month, this.state.year);
  }

  //runs if date input is blurred/deselected
  selectedDate = (event) =>{
    //get input and split for seperate day/month/year
    let dateInput = event.target.value.split("-");

    //only run if a complete date has been entered
    //problem is likely solved with normalizing current date upon mounting,
    //however never hurts to keep it in in case of user error
    if (dateInput.length === 3) {
      //format date in object
      let formattedDateInput = {day:dateInput[2],month:dateInput[1],year:dateInput[0]};
      //get timeslots for that day
      this.updateTimeslots(formattedDateInput.day, formattedDateInput.month, formattedDateInput.year, this.props.tafelId);
    }
  }

  //run to fetch and parse timeslots for given day in parameters
  updateTimeslots = (day, month, year, tableId) =>{
    //api url
    const BASE_URL = "http://localhost:8000/api/timeslots/";
    //2 arrays
    //takenTimeslots > these will be pushed with timeslot-ID's which have been taken for said day
    //availableTimeslots > these will be pushed with timeslot-ID's which are not in array takenTimeSlots
    let takenTimeslots = [];
    let availableTimeslots = [];

    //get timeslots which are already taken from api
    axios.get(BASE_URL + "tafel/" + this.props.tafelId + "/" + day + "/" + month + "/" + year).then(res=>{
      //push ID's from timeslots to takenTimeSlots array
      res.data.map(timeslot =>{ return takenTimeslots.push(timeslot.timeslots_id)});

      //get all timeslots from api
      axios.get(BASE_URL).then(res=>{
        res.data.map(timeslot =>{
          //if any current timeslot is NOT in array takenTimeSlots > it is available so we push it to array availableTimeslots
          if (takenTimeslots.indexOf(timeslot.id) === -1) {
             availableTimeslots.push(timeslot);
          }
          return null;
        })

        //convert availableTimeslots to an array with <option> tags by taking start-time and stop-time data from timeslot
        this.timeslots = availableTimeslots.map(timeslot =><option key={timeslot.TimeStart + timeslot.TimeStop}>{timeslot.TimeStart} - {timeslot.TimeStop}</option>);
        //force class update upon timeslot update
        this.forceUpdate();
      });
    });

  }

  render(){
    return(
      <section className="tafelcard">
        <section className="tafelcard__head">
          <article className="tafelcard__head__infoContainer">
            <p className="tafelcard__head__infoContainer__text tafelcard__head__infoContainer__text--label">SectieNr</p>
            <p className="tafelcard__head__infoContainer__text">{this.props.tafelNummer}</p>
          </article>
          <article className="tafelcard__head__infoContainer">
            <p className="tafelcard__head__infoContainer__text tafelcard__head__infoContainer__text--label">{this.props.tafelPersonenTekst}</p>
            <p className="tafelcard__head__infoContainer__text">{this.props.maxAantalPersonen}</p>
          </article>
          <button className="tafelcard__head__continue" onClick={this.openDropdown}>
            <p className="tafelcard__head__continue__text">></p><
          /button>
        </section>
        <section className="tafelcard__dropdown">
          <section className="tafelcard__dropdown__inputContainer" style={{display:"none"}}>
            <label  className="tafelcard__dropdown__inputContainer__label" htmlFor="datum">Kies uw datum</label>
            <input  className="tafelcard__dropdown__inputContainer__input js--date" name="datum" type="date" onBlur={this.selectedDate}/>
          </section>
          <section className="tafelcard__dropdown__inputContainer" style={{display:"none"}}>
            <label  className="tafelcard__dropdown__inputContainer__label" htmlFor="tijden">Kies uw tijd</label>
            <select  className="tafelcard__dropdown__inputContainer__input" name="tijden">
              {this.timeslots}
            </select>
          </section>
          <section className="tafelcard__dropdown__inputContainer" style={{display:"none"}}>
            <label className="tafelcard__dropdown__inputContainer__label" htmlFor="submit">Reserveer</label>
            <Link to="/menu"><button name="submit" className="tafelcard__dropdown__inputContainer__input tafelcard__dropdown__submit">reserveer</button></Link>
          </section>

        </section>
      </section>
    );
  }
}

export default TafelCard;
