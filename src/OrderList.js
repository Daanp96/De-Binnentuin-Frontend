import React from 'react';

import axios from "axios";

//Import van eigen elementen
import Order from './Order';

class OrderList extends React.Component{
  state = {  orders: [] }

  render(){

    //check de api op orders
    axios.get('http://localhost:8000/orders').then(res =>{
      const orders = res.data;
      this.setState({orders});

    })
    // pakt elk item en doet hem bij de bestellijst
      let bestellijst = [];
  for(const [order, value] of this.state.orders.entries()){
    bestellijst.push( {amount: this.state.orders[order].Aantal, item: this.state.orders[order].MenuItem_id} )
  }
    //Return functie
    return(
      <section class="orderlist">
        <Order table="5" orders={bestellijst} />
      </section>
    )
  }
}


export default OrderList;
