import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet';

import axios from "axios";

export class RegisterPage extends React.Component {

  Register = () => {
     axios.post('http://127.0.0.1:8000/api/auth/signup', {
       name: document.getElementById("username").value,
       email: document.getElementById("email").value,
       password: document.getElementById("password").value,
       password_confirmation: document.getElementById("confirm-password").value,
       rekeningNummer: document.getElementById("rekeningnummer").value,
       adres: document.getElementById("postcode").value + " " + document.getElementById("huisnummer").value,
     headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
     })
     .then(function (response) {
       console.log(response.data.message);
       var status = response.data.message;
       console.log(status);
       window.location.replace('http://localhost:3000/opmerking');
     })
     .catch(function (error) {
       console.log(error);
       alert("Not possible to register, try again!");
     });
  };

  render() {
    return (
      <div>
        <Helmet>
          <style>{'body { background-color: white; background-repeat: no-repeat;}'}</style>
        </Helmet>
        <section className="user-container">

        <label className="user-container__subject"><b>Gebruikersnaam</b>
        <input type="text" placeholder="Vul gebruikersnaam in" id="username" className="user-container__fields" name="uname" required />
        </label>

        <label className="user-container__subject"><b>Email</b>
        <input type="text" placeholder="Vul email in" id="email" className="user-container__fields" name="email" required />
        </label>

        <label className="user-container__subject"><b>Wachtwoord</b>
        <input type="text" placeholder="Vul wachtwoord in" id="password" className="user-container__fields" name="psw" required />
        </label>

        <label className="user-container__subject"><b>Bevestig wachtwoord</b>
        <input type="password" placeholder="Bevestig wachtwoord" id="confirm-password" className="user-container__fields" name="confirm-psw" required />
        </label>

        <label className="user-container__subject"><b>Rekeningnummer</b>
        <input type="password" placeholder="Vul rekeningnummer in" id="rekeningnummer" className="user-container__fields" name="iban" required />
        </label>

        <label className="user-container__subject"><b>Postcode</b>
        <input type="text" placeholder="Vul postcode in" id="postcode" className="user-container__fields" name="postcode" required />
        </label>

        <label className="user-container__subject"><b>Huisnummer</b>
        <input type="text" placeholder="Vul huisnummer in" id="huisnummer" className="user-container__fields" name="huisnummer" required />
        </label>

        <button type="submit" onClick={this.Register} className="user-container__send"><b>Registreer</b></button>

        </section>
      </div>
    );
  }
}

export default RegisterPage;
