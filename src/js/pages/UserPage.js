import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet';
import "../../sass/Authentication.scss";
import axios from "axios";

export class UserPage extends React.Component {
/*hier word geregiestreerd welke taal voorkeur heeft en er word door gegaan naar
 de volgende pagina*/
  userReq = () => {

    var token_type = sessionStorage.getItem('token_type');
    var access_token = sessionStorage.getItem('access_token');

     axios.get('http://localhost:8000/api/auth/user', {
     headers: {'Authorization': token_type + ' ' + access_token},
     })
     .then(function (response) {
       console.log(response)
       // console.log(response.data.status);
       // var status = response.data.status;
       // alert(status);
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
        <div className="user-container">
          <button type="submit" onClick={this.userReq}>User</button>
          <p></p>

        </div>
      </div>
    );
  }
}

export default UserPage;
