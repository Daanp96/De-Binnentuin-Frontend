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
import SidewaysMenuButtonShopping from './SidewaysMenuButtonShopping';

import Opmerking from "./Opmerking";
import Korting from "./Korting";

import LoginPage from "./js/pages/LoginPage";

import RegisterPage from "./js/pages/RegisterPage";
import UserPage from "./js/pages/UserPage";

import OrderList from './OrderList';
import TimeslotList from './TimeslotList';
import OpeningsbordSection from './OpeningsbordSection';
import AdminMenuOverview from './AdminMenuOverview';
import AdminMenuItemEdit from './AdminMenuItemEdit';
import AdminMenuItemCreate from './AdminMenuItemCreate';
import AdminMenuItemList from './AdminMenuItemList';

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
      restaurant: 1
  }

  tafels;

  fetchPage(){
    const Base_URL = "http://127.0.0.1:8000";
    axios.get(Base_URL + "/landing").then(res => {
       this.setState({
           locatie: this.state.locatie,
           time: res.data[0] + "-" + res.data[1],
           isOpen1: this.state.isOpen,
           isOpen2: this.state.isOpen2,
           itemList: this.state.itemList,
           categoryList: this.state.categoryList,
           shoppingcart: this.state.shoppingcart,
           popup: this.state.popup,
           restaurant: this.state.restaurant
       });
     });
   }

  getMenu = (submenu) => {
    if(submenu === "Shopping Cart"){
      this.setState({
          locatie: this.state.locatie,
          time: this.state.time,
          isOpen1: this.state.isOpen,
          isOpen2: this.state.isOpen2,
          itemList: this.state.shoppingcart,
          categoryList: this.state.categoryList,
          shoppingcart: this.state.shoppingcart,
          popup: this.state.popup,
          restaurant: this.state.restaurant
      });
    }else{
    const BASE_URL = `http://127.0.0.1:8000/api/menu/${this.state.restaurant}/${submenu}`;
      axios.get(BASE_URL).then(res => {
          this.setState({
              locatie: this.state.locatie,
              time: this.state.time,
              isOpen1: this.state.isOpen,
              isOpen2: this.state.isOpen2,
              itemList: res.data,
              categoryList: this.state.categoryList,
              shoppingcart: this.state.shoppingcart,
              popup: this.state.popup,
              restaurant: this.state.restaurant
          });
      });
    }
  }

  getCatergories = () => {
    const BASE_URL = `http://127.0.0.1:8000/api/menu/${this.state.restaurant}/categories`;
    axios.get(BASE_URL).then(res => {
        this.setState({
            locatie: this.state.locatie,
            time: this.state.time,
            isOpen1: this.state.isOpen,
            isOpen2: this.state.isOpen2,
            itemList: this.state.itemList,
            categoryList: res.data,
            shoppingcart: this.state.shoppingcart,
            popup: this.state.popup,
            restaurant: this.state.restaurant
        });
    });
  }


  addToShopping = (item) => {
    let newCart;
    newCart = this.state.shoppingcart;
    newCart.push(item);
    this.setState({
        locatie: this.state.locatie,
        time: this.state.time,
        isOpen1: this.state.isOpen,
        isOpen2: this.state.isOpen2,
        itemList: this.state.itemList,
        categoryList: this.state.categoryList,
        shoppingcart: newCart,
        popup: true,
        restaurant: this.state.restaurant
    });
    this.forceUpdate();
    setTimeout(()=>{this.setState({
        locatie: this.state.locatie,
        time: this.state.time,
        isOpen1: this.state.isOpen,
        isOpen2: this.state.isOpen2,
        itemList: this.state.itemList,
        categoryList: this.state.categoryList,
        shoppingcart: this.state.shoppingcart,
        popup: false,
        restaurant: this.state.restaurant
    })}, 1000);
  }

  removeFromShopping = (item) => {
    //check of er iets is om te verwijderen
    let newCart;
    if(this.state.shoppingcart[0] != null){
      newCart = this.state.shoppingcart;
      newCart.splice(newCart.indexOf(item),1);
        this.setState({
            locatie: this.state.locatie,
            time: this.state.time,
            isOpen1: this.state.isOpen,
            isOpen2: this.state.isOpen2,
            itemList: this.state.itemList,
            categoryList: this.state.categoryList,
            shoppingcart: newCart,
            popup: this.state.popup,
            restaurant: this.state.restaurant
        });
    }
  }

  //event de item naam veranderd voor het aanpassen van het item in de menu pagina's
  onItemClick = (naam) => {
    this.setState({item_naam: naam});
  }

  //event voor update van open/dicht
  onRestaurantClick = (restaurant) => {
    this.setState({restaurant: restaurant});
  }

  //event dat een menu item van de restaurant_menu verwijderd
  onItemDelete = (id, restaurant) => {
    axios({
      method:"DELETE",
      url: 'http://localhost:8000/api/admin/restaurant_item/delete',
      data: {restaurant: restaurant, item_id: id}
    })
    window.location.reload();
  }

  componentDidMount = () =>{
      this.getMenu("All");
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
          locatie: locatie,
          time: this.state.time,
          isOpen1: this.state.isOpen,
          isOpen2: this.state.isOpen2,
          itemList: this.state.itemList,
          categoryList: this.state.categoryList,
          shoppingcart: this.state.shoppingcart,
          popup: this.state.popup,
          restaurant: this.state.restaurant
      });
    });
  }


  render(){
    let classNameForPopup = "popuptext";
    if (this.state.popup === true){
      classNameForPopup += " show";
    }


    return (
      <article className="App">
        <main className="main">
          <Router>
            <Header/>
            <Route path="/reserveren">
              <section className="main__location">
                <h2 className="main__location__text">Kies uw locatie</h2>
                <section className="main__location__locationContainer">
                  <LocationButton locatie="binnentuin" onClick={this.makeApiCall}/>
                  <LocationButton locatie="dakterras" onClick={this.makeApiCall}/>
                </section>
              </section>
              {this.tafels}
            </Route>
            <Route path="/submenu">
              <section className="submenu">
                <SidewaysMenu function={this.getMenu} categoryList ={this.state.categoryList}/>
                <SidewaysMenuButtonShopping name ="Shopping Cart" cart={this.state.shoppingcart} function ={() => this.getMenu("Shopping Cart")}><span id="addToShoppingPopup" className={classNameForPopup}>+1</span></SidewaysMenuButtonShopping>
              </section>
            <MenuItemList addFunction={this.addToShopping} removeFunction={this.removeFromShopping} itemList={this.state.itemList} />
            </Route>
            <Route path="/opmerking">
              <Opmerking/>
              <Korting/>
            </Route>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={RegisterPage} />
            <Route path="/user" component={UserPage} />


              <Route path="/adminmenu">
                <SidewaysMenu function={this.getMenu} categoryList ={this.state.categoryList}/>
                <AdminMenuItemList function={this.getMenu} onClick={this.onItemClick} restaurant={this.state.restaurant} onDelete={this.onItemDelete} itemList={this.state.itemList} />
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
                <section className="tijden_section">
                  <Link to='/admin' className='orderlist__a'>
                    <button>
                       &#8592; Terug
                    </button>
                  </Link>
                  <OpeningsbordSection />
                  <TimeslotList />
                </section>
              </Route>

              <Route path="/home">
                <Maincontent/>
                <Opening img1Src ="./images/open-sign.png" imgName1 ="De Binnentuin is open" img2Src ="./images/closed-sign.png" imgName2 ="Het dakterras is dicht" time={this.state.time}/>
                <Weather/>
              </Route>
          </Router>
        </main>
      </article>
    );
  }
}




export default App;
