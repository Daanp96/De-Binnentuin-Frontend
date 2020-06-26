import React from 'react';
import "./sass/Menuitem.scss";

class LogInKnoppen extends React.Component{

  render(){
    return(
        <section>
          <button className="" type="button" name="button">Log in</button>
          <button className="" type="button" name="button">Betaal zonder in te loggen</button>
        </section>
    );
  }
}

export default LogInKnoppen;
