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

  componentDidMount = () =>{
      this.getMenu("all");
      this.getCatergories();
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>De Binnentuin</p>
        </header>
        <SidewaysMenu function={this.getMenu} categoryList ={this.state.categoryList}/>
        <MenuItemList itemList={this.state.itemList} />
      </div>
    );
  }
}



export default App;
