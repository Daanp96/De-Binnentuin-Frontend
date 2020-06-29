import React from 'react';
import './sass/main.scss';
// import Weather from "./Weather";
import MenuItemList from "./MenuItemList";
import SidewaysMenu from './SidewaysMenu';
import axios from 'axios';

class App extends React.Component {
  state = {
      itemList: [],
      categoryList: [],
      category: "All",
      shoppingcart: [],
      restaurant: 1
  }

  getMenu = (submenu) => {
    if(submenu === "Shopping Cart"){
      this.setState({
        itemList: this.state.shoppingcart
      });
      console.log(this.state.shoppingcart);
      console.log(this.state.itemList);
    }else{
    const BASE_URL = `http://127.0.0.1:8000/api/menu/${this.state.restaurant}/${submenu}`;
      axios.get(BASE_URL).then(res => {
          this.setState({
              itemList: res.data,
              category: submenu
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
      shoppingcart: [...this.state.shoppingcart, item]
    });
  }

  removeFromShopping = (item) => {
    //check of er iets is om te verwijderen
    let newCart;
    if(this.state.shoppingcart[0] != null){
      newCart = [];
      console.log(newCart);
      this.state.shoppingcart.map((cartItem, index) => {
        if(cartItem != item){
          newCart.push(cartItem);
        }
      });
        this.setState({
          shoppingcart:[...newCart]
        });
    }

    console.log(this.state.shoppingcart);
  }

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
      this.getMenu("All");
      this.getCatergories();
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>De Binnentuin</p>
        </header>
        <SidewaysMenu function={this.getMenu} categoryList ={this.state.categoryList}/>
        <MenuItemList addFunction={this.addToShopping} removeFunction={this.removeFromShopping} itemList={this.state.itemList} getSort={this.getSort}/>
      </div>
    );
  }
}



export default App;
