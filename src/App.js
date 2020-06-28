import React from 'react';
// import logo from './logo.svg';
import './sass/main.scss';

import LocationButton from "./LocationButton";
import TafelCard from "./TafelCard";

import Maincontent from "./Maincontent.js"
import Opening from "./Opening.js"
import Weather from './Weather.js'

import MenuItemList from "./MenuItemList";
import SidewaysMenu from './SidewaysMenu';
import SidewaysMenuButton from "./SidewaysMenuButton";

import Opmerking from "./Opmerking";
import Korting from "./Korting";
import LogInKnoppen from "./LogInKnoppen";

import LoginPage from "./js/pages/LoginPage";

import RegisterPage from "./js/pages/RegisterPage";
import UserPage from "./js/pages/UserPage";

import Admin from './Admin';

import Header from "./Header";

import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  state = {
      locatie: "",
      time: "",
      isOpen1: "true" ,
      isOpen2: "false",
      itemList: [],
      categoryList: [],
      shoppingcart: [],
      popup: false,
      restaurant: 1,
      isShoppingcart: false
  }

  tafels;

  fetchPage(){
    const Base_URL = "http://127.0.0.1:8000";
    axios.get(Base_URL + "/api/landing").then(res => {
       this.setState({
           time: res.data[0] + "-" + res.data[1],
           isOpen1: res.data[2],
           isOpen2: res.data[3]
       });
     });
   }

  getMenu = (submenu) => {
    if(submenu === "Shopping Cart"){
      this.setState({
          itemList: this.state.shoppingcart,
          shoppingcart: this.state.shoppingcart,
          isShoppingcart: true
      });
    }else{
    const BASE_URL = `http://127.0.0.1:8000/api/menu/${this.state.restaurant}/${submenu}`;
      axios.get(BASE_URL).then(res => {
          this.setState({
              itemList: res.data,
              isShoppingcart: false
          });
      });
    }
  }

  getCatergories = () => {
    const BASE_URL = `http://127.0.0.1:8000/api/menu/${this.state.restaurant}/categories`;
    axios.get(BASE_URL).then(res => {
        this.setState({
            categoryList: res.data,
        });
    });
  }


  addToShopping = (item) => {
    let newCart;
    newCart = this.state.shoppingcart;
    newCart.push(item);
    this.setState({
        shoppingcart: newCart,
        popup: true
    });
    this.forceUpdate();
    setTimeout(()=>{this.setState({
        popup: false
    })}, 1000);
  }

  removeFromShopping = (item) => {
    //check of er iets is om te verwijderen
    let newCart;
    if(this.state.shoppingcart[0] != null){
      newCart = this.state.shoppingcart;
      newCart.splice(newCart.indexOf(item),1);
        this.setState({
            shoppingcart: newCart
        });
    }
  }

  componentDidMount = () =>{
      this.getMenu("All");
      this.fetchPage();
      this.getCatergories();
  }

  makeApiCall = locatie =>{
    const BASE_URL = "http://localhost:8000/api/";
    axios.get(BASE_URL + locatie + "/tafels").then(res =>{
      this.tafels = res.data.map(x =>
      <TafelCard key={res.data[res.data.indexOf(x)].tafelnummer}
      tafelNummer={res.data[res.data.indexOf(x)].tafelnummer}
      maxAantalPersonen={res.data[res.data.indexOf(x)].maxAantalMensen}
      tafelId={res.data[res.data.indexOf(x)].id}/>);

      this.setState({
          locatie: locatie
      });
    });
  }


  render(){
    let classNameForPopup = "popuptext";
    let classNameForButtons = "menu_list__item__cartButton"
    if (this.state.popup === true){
      classNameForPopup += " show";
    }
    if (this.state.isShoppingcart === true) {
      classNameForButtons += " showCartButton";
    }


    return (
      <article className="App">
        <main className="main">
          <Router>
          <Header/>
            <Switch>
              <Route path="/reserveren">
                <section className="main__location">
                  <h2 className="main__location__text">Kies uw locatie</h2>
                  <section className="main__location__locationContainer">
                    <LocationButton locatie="binnentuin" onClick={this.makeApiCall}/>
                    <LocationButton locatie="dakterras" onClick={this.makeApiCall}/>
                  </section>
                  {this.tafels}
                </section>
              </Route>
              <Route path="/menu">
                  <SidewaysMenu function={this.getMenu} categoryList ={this.state.categoryList}/>
                  <SidewaysMenuButton name ="Shopping Cart" function ={() => this.getMenu("Shopping Cart")}><span id="addToShoppingPopup" className={classNameForPopup}>+1</span></SidewaysMenuButton>
                  <MenuItemList addFunction={this.addToShopping} removeFunction={this.removeFromShopping} itemList={this.state.itemList} buttonClass={classNameForButtons}/>
                </Route>
                <Route path="/opmerking">
                  <Korting shoppingcart = {this.state.shoppingcart}/>
                  <Opmerking/>
                  <LogInKnoppen shoppingcart = {this.state.shoppingcart}/>
                </Route>
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={RegisterPage} />
                <Route path="/user" component={UserPage} />

                <Route path="/Admin" component={Admin} />

                <Route path="/">
                  <Maincontent/>
                  <Opening img1Src ={this.state.isOpen1} img2Src ={this.state.isOpen2} time={this.state.time}/>
                  <Weather/>
                </Route>
            </Switch>
          </Router>
        </main>
      </article>
    );
  }
}




export default App;
