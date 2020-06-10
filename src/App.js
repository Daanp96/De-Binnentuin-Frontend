import React from 'react';
import './sass/App.scss';
// import Weather from "./Weather";
import MenuItemList from "./MenuItemList";

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>De Binnentuin</p>
        </header>
        <MenuItemList/>
      </div>
    );
  }
}

export default App;
