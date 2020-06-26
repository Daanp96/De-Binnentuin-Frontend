import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet';
import "../../sass/App.scss";
import axios from "axios";

export class RegisterPage extends React.Component {
/*hier word geregiestreerd welke taal voorkeur heeft en er word door gegaan naar
 de volgende pagina*/
  Register = () => {
     // var combineAddress = document.getElementById("postcode").value + " " + document.getElementById("huisnummer").value;
     // console.log(combineAddress);
     // console.log(document.getElementById("username").value);

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
       alert(status);
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
        <div className="login-container">

        <label><b>Gebruikersnaam</b>
        <input type="text" placeholder="Vul gebruikersnaam in" id="username" name="uname" required />
        </label>

        <label><b>Email</b>
        <input type="text" placeholder="Vul email in" id="email" name="email" required />
        </label>

        <label><b>Wachtwoord</b>
        <input type="text" placeholder="Vul wachtwoord in" id="password" name="psw" required />
        </label>

        <label><b>Bevestig wachtwoord</b>
        <input type="password" placeholder="Bevestig wachtwoord" id="confirm-password" name="confirm-psw" required />
        </label>

        <label><b>Rekeningnummer</b>
        <input type="password" placeholder="Vul rekeningnummer in" id="rekeningnummer" name="iban" required />
        </label>

        <label><b>Postcode</b>
        <input type="text" placeholder="Vul postcode in" id="postcode" name="postcode" required />
        </label>

        <label><b>Huisnummer</b>
        <input type="text" placeholder="Vul huisnummer in" id="huisnummer" name="huisnummer" required />
        </label>

        <button type="submit" onClick={this.Register}>Registreer</button>

        </div>
      </div>
    );
  }
}

export default RegisterPage;
