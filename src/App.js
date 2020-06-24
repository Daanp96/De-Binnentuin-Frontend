import React from 'react';
import './sass/main.scss';
// import Weather from "./Weather";
import MenuItemList from "./MenuItemList";
import SidewaysMenu from './SidewaysMenu';
import SidewaysMenuButton from "./SidewaysMenuButton";
import axios from 'axios';

class App extends React.Component {
  state = {
      itemList: [],
      categoryList: [],
      shoppingcart: [],
      popup: false,
      restaurant: 1
  }

  getMenu = (submenu) => {
    if(submenu === "Shopping Cart"){
      this.setState({
        itemList: this.state.shoppingcart
      });
    }else{
    const BASE_URL = `http://127.0.0.1:8000/api/menu/${this.state.restaurant}/${submenu}`;
      axios.get(BASE_URL).then(res => {
          this.setState({
              itemList: res.data
          });
      });
    }
  }

  getCatergories = () => {
    const BASE_URL = `http://127.0.0.1:8000/api/menu/${this.state.restaurant}/categories`;
    axios.get(BASE_URL).then(res => {
        this.setState({
            categoryList: res.data
        });
    });
  }


  addToShopping = (item) => {
    this.setState({
      shoppingcart: [...this.state.shoppingcart, item],
      popup: true
    });
    setTimeout(()=>{this.setState({popup:false})}, 1000);
  }

  removeFromShopping = (item) => {
    //check of er iets is om te verwijderen
    let newCart;
    if(this.state.shoppingcart[0] != null){
      newCart = this.state.shoppingcart;
      newCart.splice(newCart.indexOf(item),1);
        this.setState({
          shoppingcart:newCart
        });
    }
  }

  componentDidMount = () =>{
      this.getMenu("All");
      this.getCatergories();
  }


  render(){
    let classNameForPopup = "popuptext";
    if (this.state.popup === true){
      classNameForPopup += " show";
    }
    return (
      <div className="App">
        <header className="App-header">
          <p>De Binnentuin</p>
        </header>
        <SidewaysMenu function={this.getMenu} categoryList ={this.state.categoryList}/>
        <SidewaysMenuButton name ="Shopping Cart" function ={() => this.getMenu("Shopping Cart")}><span id="addToShoppingPopup" className={classNameForPopup}>+1</span></SidewaysMenuButton>
        <MenuItemList addFunction={this.addToShopping} removeFunction={this.removeFromShopping} itemList={this.state.itemList} />
      </div>
    );
  }
}



export default App;
