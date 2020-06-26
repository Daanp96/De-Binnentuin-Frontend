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
       alert(status);
     })
     .catch(function (error) {
       console.log(error);
       alert("Not possible to login, try again!");
     });
  };

  render() {
    return (
      <div>
        <Helmet>
          <style>{'body { background-color: white; background-repeat: no-repeat;}'}</style>
        </Helmet>
        <section className="login-container">

          <label><b>Email</b>
          <input type="text" placeholder="Vul email in" id="email" name="email" required />
          </label>

          <label><b>Wachtwoord</b>
          <input type="password" placeholder="Vul wachtwoord in" id="password" name="psw" required />
          </label>

          <label><b>Herinner mij?</b>
          <input type="checkbox" checked="checked" name="remember" />
          </label>

        <button type="submit" onClick={this.loginReq}>Log in</button>

        </section>
      </div>
    );
  }
}

export default LoginPage;
