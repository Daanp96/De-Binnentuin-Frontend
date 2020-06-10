import React from 'react';
import './sass/App.scss';
import Weather from "./Weather";
import Opmerking from "./Opmerking";

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>De Binnentuin</p>
        </header>
        <Weather/>
        <Opmerking/>
      </div>
    );
  }
}

export default App;
