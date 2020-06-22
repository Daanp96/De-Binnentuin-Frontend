import React from 'react';

import OrderList from './OrderList';
import TimeslotList from './TimeslotList';
import OpeningsbordSection from './OpeningsbordSection';
import AdminMenuOverview from './AdminMenuOverview';

import AdminMenuItemEdit from './AdminMenuItemEdit';
import AdminMenuItemCreate from './AdminMenuItemCreate';
import SidewaysMenu from './SidewaysMenu';
import MenuItemList from './MenuItemList';


import {Switch, Route, BrowserRouter as Router, Link, Redirect} from "react-router-dom";
import axios from 'axios';



class Admin extends React.Component{
  state = {
    itemList: [],
    categoryList: [],
    restaurant: 1,
    item_naam: "",
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

//event de item naam veranderd voor het aanpassen van het item in de menu pagina's
onClick = (naam) => {
  this.setState({item_naam: naam});
}

//event voor update van open/dicht
onRestaurantClick = (restaurant) => {
  this.setState({restaurant: restaurant});
}

//event dat een menu item van de restaurant_menu verwijderd
onDelete = (id, restaurant) => {
  axios({
    method:"DELETE",
    url: 'http://localhost:8000/api/admin/restaurant_item/delete',
    data: {restaurant: restaurant, item_id: id}
  })
  window.location.reload();
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
            <MenuItemList function={this.getMenu} onClick={this.onClick} restaurant={this.state.restaurant} onDelete={this.onDelete} itemList={this.state.itemList} />
          </Route>
          <Route path="/edit">
            <AdminMenuItemEdit naam={this.state.item_naam}/>
          </Route>
          <Route path="/create">
            <AdminMenuItemCreate />
          </Route>
          <Route path="/admin">
            <AdminMenuOverview event={this.onRestaurantClick}/>
          </Route>
          <Route path="/bestellingen">
            <OrderList />
          </Route>
          <Route path="/tijden">
            <OpeningsbordSection />
            <TimeslotList />
          </Route>

          </Switch>
        </Router>
      </div>
    )
  }

}

export default Admin;
