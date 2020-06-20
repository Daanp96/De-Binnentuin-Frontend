import React from 'react';

import axios from "axios";

//Import van eigen elementen
import Order from './Order';

class OrderList extends React.Component{
  constructor(){
    super();
    this.state = {  orders: []}
  }

    componentDidMount(){
      axios.get('http://localhost:8000/api/admin/kok').then(res =>{
        const lijst = res.data;;
        this.setState({orders: res.data});
        console.log(this.state.orders)
      })
    }

    onClick = (id, index) =>{
      axios({
        method: 'put',
        url: 'http://localhost:8000/api/admin/kok/update',
        data: {bestelling_id: id}
      })
      const list = this.state.orders;
      list.splice(index,1);
      this.setState({orders: list});
    }

  render(){
    //check de api op orders



    // pakt elk item en doet hem bij de bestellijst
  let bestellijst = [];
  for(const [order, value] of this.state.orders.entries()){
    bestellijst.push( {amount: this.state.orders[order].Aantal, item: this.state.orders[order].MenuItem_id} )
  }
    //Return functie
    return(
      <section className="orderlist">
        {(this.state.orders).map((order, index) =>{
          return <Order key={order.id} index={index} onClick={this.onClick} id={order.id} items={order.items} aantallen={order.aantal} timestart={order.TimeStart} timestop={order.TimeStop}/>
        })}
      </section>
    )
  }
}


export default OrderList;
