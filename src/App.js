import React from 'react';
// import logo from './logo.svg';
import './sass/main.css';

import Admin from './Admin';


function App() {
  return (
    <html>
      <head>
        <meta name="csrf-token" content="{{ csrf_token() }}" />
      </head>
    <div className="App">
      <header className="App-header">
        <Admin />

      </header>
    </div>
    </html>
  );
}

export default App;
