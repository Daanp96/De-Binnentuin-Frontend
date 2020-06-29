import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet';

import { Redirect } from 'react-router-dom'
import axios from "axios";
import background from "../../img/loginpage-background.jpg";

export class LoginPage extends React.Component {

  loginReq = () => {
     axios.post('http://127.0.0.1:8000/api/auth/login', {
     email: document.getElementById("email").value,
     password: document.getElementById("password").value,
     remember_me: true,
     headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
     })
     .then(function (response) {
       console.log(response)
       console.log(response.data.status);
       sessionStorage.setItem('token_type', response.data.token_type);
       sessionStorage.setItem('access_token', response.data.access_token);
       var status = response.data.status;
       window.location.replace('http://localhost:3000/opmerking');
     })
     .catch(function (error) {
       console.log(error);
       alert("Not possible to login, try again!");
     });
  };

  checkbox = () => {
    document.getElementById("box").click();
  }
  render() {
    return (
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
