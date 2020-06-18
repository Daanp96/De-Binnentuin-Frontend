import React from 'react';

import OrderList from './OrderList';
import TimeslotList from './TimeslotList';
import OpeningsbordSection from './OpeningsbordSection';
import AdminMenuOverview from './AdminMenuOverview';
import AdminMenu from './AdminMenu';
import AdminMenuItemEdit from './AdminMenuItemEdit';
import SidewaysMenu from './SidewaysMenu';
import MenuItemList from './MenuItemList';


import {Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";
import axios from 'axios';



class Admin extends React.Component{
  state = {
    itemList: [],
    categoryList: [],
    restaurant: 1
}

getMenu = (submenu) => {
  const BASE_URL = `http://127.0.0.1:8000/api/menu/${this.state.restaurant}/${submenu}`;
    axios.get(BASE_URL).then(res => {
        this.setState({
            itemList: res.data
        });
    });
}

getCatergories = () => {
  const BASE_URL = `http://127.0.0.1:8000/api/menu/${this.state.restaurant}/categories`;
  axios.get(BASE_URL).then(res => {
      this.setState({
          categoryList: res.data
      });
  });
}

onClick = (id, event) => {
  console.log("test");
}

componentDidMount = () =>{
    this.getMenu("all");
    this.getCatergories();
}
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <p>De Binnentuin</p>
        </header>
        <Router>
          <Switch>
          <Route path="/menu">
            <SidewaysMenu function={this.getMenu} categoryList ={this.state.categoryList}/>
            <MenuItemList onClic={() => this.onClick} itemList={this.state.itemList} />
          </Route>
          <Route path="/edit">
            <AdminMenuItemEdit />
          </Route>

          </Switch>
        </Router>
      </div>
    )
  }

}

export default Admin;
