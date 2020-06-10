import React from 'react';
// import logo from './logo.svg';
import './sass/App.scss';

import Allergeen from "./Allergeen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          De Binnentuin
        </p>
      </header>
      <Allergeen allergy="fish" line="false"/>
    </div>
  );
}

export default App;
