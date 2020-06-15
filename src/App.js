import React from 'react';
import './sass/App.scss';
// import Weather from "./Weather";
import MenuItemList from "./MenuItemList";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


import LoginPage from "./js/pages/LoginPage";
// import Home from "./js/pages/Home";
import RegisterPage from "./js/pages/RegisterPage";
import UserPage from "./js/pages/UserPage";


const App = (props) => {
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={RegisterPage} />
          <Route path="/user" component={UserPage} />
          {/* <Route path="/" component={Home} /> */}
        </Switch>
        <MenuItemList/>

      </div>
    </Router>
  );
};

export default App;
