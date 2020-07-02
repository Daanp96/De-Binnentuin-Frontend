import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet';
import { Redirect } from 'react-router-dom'
import axios from "axios";

export class LoginPage extends React.Component {

  loginReq = () => {

        // Hier word er een GET-request gemaakt om een gebruiker in te loggen

     axios.post('http://127.0.0.1:8000/api/auth/login', {
     email: document.getElementById("email").value,
     password: document.getElementById("password").value,
     remember_me: true,
     headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
     })
     .then(function (response) {
       // Wanneer de request succesvol is word de gebruiker ingelogd en word verschillende inlogdata in sessionStorage opgeslagen. Ook gaat de gebruiker door naar Opmerking.js

       console.log(response)
       console.log(response.data.status);
       sessionStorage.setItem('token_type', response.data.token_type);
       sessionStorage.setItem('access_token', response.data.access_token);
       var status = response.data.status;
       window.location.replace('http://localhost:3000/opmerking');
     })
     .catch(function (error) {
        // Wanneer de login niet succesvol is krijgt de gebruiker een pop-up dat er iets fout is gegaan
       console.log(error);
       alert("Not possible to login!");
     });
  };

  checkbox = () => {
    document.getElementById("box").click();
  }
  render() {
    return (
              // Formulier voor het registeren van een nieuwe gebruiker
      <div>
        <Helmet>
          <style>{'body { background-color: white; background-repeat: no-repeat;}'}</style>
        </Helmet>
        <section className="user-container">

          <label className="user-container__subject"><b>Email</b>
          <input type="text" placeholder="Vul email in" id="email" className="user-container__fields" name="email" required />
          </label>

          <label className="user-container__subject"><b>Wachtwoord</b>
          <input type="password" placeholder="Vul wachtwoord in" id="password" className="user-container__fields"name="psw" required />
          </label>

        <button type="submit" className="user-container__send" onClick={this.loginReq}><b>Log in</b></button>

        </section>
      </div>
    );
  }
}

export default LoginPage;
