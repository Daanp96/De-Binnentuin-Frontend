import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet';
import "../../sass/App.scss";
import axios from "axios";

export class RegisterPage extends React.Component {
/*hier word geregiestreerd welke taal voorkeur heeft en er word door gegaan naar
 de volgende pagina*/
  Register = () => {
     axios.post('http://localhost:8000/api/auth/signup', {
       name: document.getElementById("username").value,
       email: document.getElementById("email").value,
       password: document.getElementById("password").value,
       password_confirmation: document.getElementById("confirm-password").value,
     headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
     })
     .then(function (response) {
       console.log(response.data.message);
       var status = response.data.message;
       alert(status);
     })
     .catch(function (error) {
       console.log(error);

     });
  };

  render() {
    return (
      <div>
        <Helmet>
          <style>{'body { background-color: white; background-repeat: no-repeat;}'}</style>
        </Helmet>
        <div className="login-container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" id="username" name="uname" required />

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter email" id="email" name="email" required />

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" id="password" name="psw" required />

        <label for="psw"><b>Confirm password</b></label>
        <input type="password" placeholder="Confirm Password" id="confirm-password" name="confirm-psw" required />

        <button type="submit" onClick={this.Register}>Register</button>

        </div>
      </div>
    );
  }
}

export default RegisterPage;
