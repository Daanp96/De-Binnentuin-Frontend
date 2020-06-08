import React from 'react';
import './sass/App.scss';
import Weather from "./Weather";

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>De Binnentuin</p>
        </header>
        <Weather/>
      </div>
    );
  }
}

export default App;
