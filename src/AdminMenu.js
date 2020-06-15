import React from 'react';
import axios from 'axios';
import AdminMenuItem from './AdminMenuItem';

class AdminMenu extends React.Component{
  constructor(){
    super()
    this.state =   {  menu: [] }
  }

  componentDidMount(){
    axios.get('http://localhost:8000/admin/menu/1').then(res =>{
      this.setState({menu: res.data});
    })

  }

  render(){

  return(
    <section>
      {this.state.menu.map((menuItem, index) =>{
        console.log(menuItem);
        return <AdminMenuItem key={index} naam={menuItem.naam} kosten={menuItem.prijs} beschrijving={menuItem.beschrijving} />
      })}
    </section>
  )
}
}

export default AdminMenu;
