import React from 'react';
// import logo from './logo.svg';
import './sass/App.scss';
import LocationButton from "./LocationButton";

function App() {
  return (
    <main className="main">

      <header className="main__header">

      </header>
      <section className="main__locationContainer">
        <LocationButton locatie="binnentuin"/>
        <LocationButton locatie="dakterras"/>
      </section>
    </main>
  );
}

export default App;
