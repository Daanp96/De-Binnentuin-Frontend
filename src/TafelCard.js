import React from "react";
import "./sass/TafelCard.scss";
import axios from "axios";

class TafelCard extends React.Component{
  state = {day: "", month:"", year:""};

  timeslots;

  componentDidMount(){
    let today = new Date();
    let currentDate = {day:"", month:"", year:""};

    if (today.getDate() < 10){
      currentDate.day = "0" + today.getDate().toString();
    }
    else{
      currentDate.day = today.getDate().toString();
    }

    if ((today.getMonth()+1) < 10){
      currentDate.month = "0" + (today.getMonth()+1).toString();
    }else{
      currentDate.day = (today.getMonth()+1).toString();
    }

    currentDate.year = (today.getYear()+1900).toString();


    this.setState({day:currentDate.day, month:currentDate.month, year:currentDate.year});

    let dateInputs = document.getElementsByClassName("js--date");
    for (let i = 0; i < dateInputs.length; i++) {
      dateInputs[i].value = currentDate.year + "-" + currentDate.month + "-" + currentDate.day;
    }
  }

  openDropdown = (event) =>{
    let dropdown = event.target.parentNode.parentNode.childNodes[1];
    let buttonText = event.target.childNodes[0];

    if (dropdown.classList.contains("tafelcard__dropdown--open")) {
      for (let i = 0; i < dropdown.childNodes.length; i++) {
        dropdown.childNodes[i].style.display = "none";
      }
    }else{
      for (let i = 0; i < dropdown.childNodes.length; i++) {
        dropdown.childNodes[i].style.display = "block";
      }
    }

    buttonText.classList.toggle("tafelcard__head__continue__text--selected");
    dropdown.classList.toggle("tafelcard__dropdown--open");

    this.updateTimeslots(this.state.day, this.state.month, this.state.year);
  }

  selectedDate = (event) =>{
    let dateInput = event.target.value.split("-");

    if (dateInput.length === 3) {
      let formattedDateInput = {day:dateInput[2],month:dateInput[1],year:dateInput[0]};

      this.updateTimeslots(formattedDateInput.day, formattedDateInput.month, formattedDateInput.year, this.props.tafelId);
    }
  }

  updateTimeslots = (day, month, year, tableId) =>{
    const BASE_URL = "http://localhost:8000/api/timeslots/";
    let takenTimeslots = [];
    let availableTimeslots = [];

    axios.get(BASE_URL + "tafel/" + this.props.tafelId + "/" + day + "/" + month + "/" + year).then(res=>{
      res.data.map(timeslot =>{takenTimeslots.push(timeslot.timeslots_id)});

      axios.get(BASE_URL).then(res=>{
        res.data.map(timeslot =>{
          if (takenTimeslots.indexOf(timeslot.id) === -1) {
            availableTimeslots.push(timeslot);
          }
        })

        this.timeslots = availableTimeslots.map(timeslot =><option key={timeslot.TimeStart + timeslot.TimeStop}>{timeslot.TimeStart} - {timeslot.TimeStop}</option>);
        this.forceUpdate();
      });
    });

  }

  render(){
    return(
      <section className="tafelcard">
        <section className="tafelcard__head">
          <article className="tafelcard__head__infoContainer">
            <p className="tafelcard__head__infoContainer__text tafelcard__head__infoContainer__text--label">Tafelnr</p>
            <p className="tafelcard__head__infoContainer__text">{this.props.tafelNummer}</p>
          </article>
          <article className="tafelcard__head__infoContainer">
            <p className="tafelcard__head__infoContainer__text tafelcard__head__infoContainer__text--label">Aantal plekken</p>
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
            <button name="submit" className="tafelcard__dropdown__inputContainer__input tafelcard__dropdown__submit">reserveer</button>
          </section>

        </section>
      </section>
    );
  }
}

export default TafelCard;
