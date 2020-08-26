import React from 'react';
import './sass/main.scss';

import LocationButton from "./LocationButton";
import TafelCard from "./TafelCard";

import Maincontent from "./Maincontent.js"
import Opening from "./Opening.js"
import Weather from './Weather.js'

import MenuItemList from "./MenuItemList";
import SidewaysMenu from './SidewaysMenu';
import SidewaysMenuButtonShopping from './SidewaysMenuButtonShopping';

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

import Twitter from "./Twitter";

import Header from "./Header";

import Error404 from './Error404';

import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  state = {
      timeStart: "",
      timeEnd: "",
      isOpen1: "true" ,
      isOpen2: "false",
      itemList: [],
      categoryList: [],
      category: "All",
      shoppingcart: [],
      popup: false,
      restaurant: 1,
      isShoppingcart: false,
      reserveren: false
  }

  tafels;

  fetchPage(){
    const Base_URL = "http://127.0.0.1:8000";
    axios.get(Base_URL + "/api/landing").then(res => {
       this.setState({
           timeStart: res.data[0],
           timeEnd: res.data[1],
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
              isShoppingcart: false,
              category: submenu
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

  // Stuurt een sorteer optie door, en krijgt de sorteerde items terug van de API en verwerkt die in de itemList array.
  getSort = (event, sort) => {
      event.preventDefault();
      const BASE_URL = `http://127.0.0.1:8000/api/menu/sort/${sort}/${this.state.restaurant}/${this.state.category}`;
      axios.get(BASE_URL).then(res => {
        this.setState({
          itemList: res.data
        });
    });
  }

  componentDidMount = () =>{
      this.fetchPage();
  }

  makeApiCall = locatie =>{
    const BASE_URL = "http://localhost:8000/api/";
    axios.get(BASE_URL + locatie + "/tafels").then(res =>{
      this.tafels = res.data.map(x =>
      <TafelCard key={res.data[res.data.indexOf(x)].tafelnummer}
      tafelNummer={res.data[res.data.indexOf(x)].tafelnummer}
      maxAantalPersonen={res.data[res.data.indexOf(x)].maxAantalMensen}
      tafelId={res.data[res.data.indexOf(x)].id}
      tafelNummerTekst="TafelNr"
      tafelPersonenTekst="Aantal plekken"/>);

      if(locatie === "dakterras"){
        this.setState({
            'restaurant': 2
        });
      }else if(locatie === "binnentuin"){
        this.setState({
            'restaurant': 1
        });
      }
    });
  }


  render(){
    let classNameForPopup = "popuptext";
    let classNameForButtons = "menu_list__item__cartButton menu_list__item__cart";
    let classNameForSortHide = "menulist_sort";
    if (this.state.popup === true){
      classNameForPopup += " show";
    }
    if (this.state.isShoppingcart === true) {
      classNameForButtons += " showCartButton";
      classNameForSortHide += "__hide";
    }
    let reserveren;
    if(this.state.reserveren){
      reserveren = <section><section className="main__location">
                <h2 className="main__location__text">Kies uw locatie</h2>
                <section className="main__location__locationContainer">
                  <LocationButton locatie="binnentuin" onClick={this.makeApiCall}/>
                  <LocationButton locatie="dakterras" onClick={this.makeApiCall}/>
                </section>
                </section>
                {this.tafels}
                </section>
    }else{
        reserveren = <section>
        <section className="main__location">
        <h2 className="main__location__text">Kies uw tijd om af te halen</h2>
        </section>
        <TafelCard key="0" tafelNummer="0" tafelId="0" tafelPersonenTekst="Type Bestelling" maxAantalPersonen="Afhalen"/></section>
    }
    return (
      <article className="App">
        <main className="main">
          <Router>
          <Header/>
           <Switch>
             <Route path="/twitter">
              <Twitter />
             </Route>
            <Route path="/reserveren">
              <section className="optionContainer">
                <button className="optionContainer__button" onClick={()=>{this.setState({reserveren:false})}}>Afhalen</button>
                <button className="optionContainer__button" onClick={()=>{this.setState({reserveren:true})}}>Reserveren</button>
              </section>
              {reserveren}
              </Route>
              <Route path="/menu">
                 <section className="submenu">
                  <SidewaysMenu getMenu={this.getMenu} getCatergories={this.getCatergories} categoryList ={this.state.categoryList}/>
                  <SidewaysMenuButtonShopping name ="Shopping Cart" cart={this.state.shoppingcart} function ={() => this.getMenu("Shopping Cart")}><span id="addToShoppingPopup" className={classNameForPopup}>+1</span></SidewaysMenuButtonShopping>
                  </section>
                <MenuItemList addFunction={this.addToShopping} removeFunction={this.removeFromShopping} getSort={this.getSort} sortClass={classNameForSortHide} itemList={this.state.itemList} buttonClass={classNameForButtons}/>
                </Route>
                <Route path="/opmerking">
                  <Korting tafeltimeslot = {this.state.reserveren ? 1 : 2} shoppingcart = {this.state.shoppingcart}/>
                </Route>
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={RegisterPage} />
                <Route path="/user" component={UserPage} />

                  <Route path="/adminmenu">
                    <SidewaysMenu getCatergories={this.getCatergories} getMenu={this.getMenu} categoryList ={this.state.categoryList}/>
                    <AdminMenuItemList getMenu={this.getMenu} onClick={this.onItemClick} restaurant={this.state.restaurant} onDelete={this.onItemDelete} itemList={this.state.itemList} />
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

                  <Route component={Error404} />

                <Route path="/">
                  <Maincontent/>
                  <Opening img1Src ={this.state.isOpen1} img2Src ={this.state.isOpen2} timeStart={this.state.timeStart} timeEnd={this.state.timeEnd}/>
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
