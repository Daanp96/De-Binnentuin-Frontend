import React from 'react';
import './sass/App.scss';
// import Weather from "./Weather";
import MenuItemList from "./MenuItemList";
import axios from 'axios';

class App extends React.Component {
  state = {
      itemList: [],
      restaurant: 1
  }

  getMenu = (submenu) => {
      const BASE_URL = "http://127.0.0.1:8000/api/menu/" + this.state.restaurant +"/"+ submenu;
      axios.get(BASE_URL).then(res => {
          this.setState({
              itemList: res.data
          });
      });
  }

  componentDidMount = () =>{
      this.getMenu("all");
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>De Binnentuin</p>
        </header>
        <MenuItemList itemList={this.state.itemList} />
      </div>
    </Router>
  );
};



export default App;
