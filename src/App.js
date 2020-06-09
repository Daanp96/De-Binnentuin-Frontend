import React from 'react';
import './sass/App.scss';
// import Weather from "./Weather";
import MenuItem from "./MenuItem";

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>De Binnentuin</p>
        </header>
        {/* <Weather/> */}
        <MenuItem/>
      </div>
    );
  }
}

export default App;
