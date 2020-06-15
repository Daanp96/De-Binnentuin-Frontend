import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet';
import "../../sass/App.scss";
import axios from "axios";
import background from "../../img/loginpage-background.jpg";

export class LoginPage extends React.Component {
/*hier word geregiestreerd welke taal voorkeur heeft en er word door gegaan naar
 de volgende pagina*/
  loginReq = () => {
     axios.post('http://localhost:8000/api/auth/login', {
     email: document.getElementById("username").value,
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
        <label for="uname"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" id="username" name="uname" required />

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" id="password" name="psw" required />

        <label for="remember"><b>Remember me?</b></label>
        <input type="checkbox" checked="checked" name="remember" />

        <button type="submit" onClick={this.loginReq}>Login</button>

        </div>
      </div>
    );
  }
}

export default LoginPage;
