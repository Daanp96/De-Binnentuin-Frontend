import React from 'react';

import axios from "axios";
import { Link } from "react-router-dom";
//Import van eigen elementen
import Order from './Order';

class OrderList extends React.Component{
  constructor(){
    super();
    this.state = {  orders: []}
  }

    componentDidMount(){
      //pakt van de api alle bestellingen die nog niet klaar zijn
      axios.get('http://localhost:8000/api/admin/kok').then(res =>{
        const lijst = res.data;;
        this.setState({orders: res.data});
        console.log(this.state.orders)
      })
    }

    //onclick event dat voor een specifieke bestelling
    //een update bij de api doet om te zeggen dat de bestelling klaar is
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

    // pakt elk item en doet hem bij de bestellijst
  let bestellijst = [];
  for(const [order, value] of this.state.orders.entries()){
    bestellijst.push( {amount: this.state.orders[order].Aantal, item: this.state.orders[order].MenuItem_id} )
  }
    //Return functie
    return(
      <section className="orderlist">
        <Link to='/admin' className='orderlist__a'>
          <button>
             &#8592; Terug
          </button>
        </Link>
        {/* voor elke bestelling in de lijst maakt hij een nieuwe Order class  */ }
        {(this.state.orders).map((order, index) =>{
          return <Order key={order.id} index={index} onClick={this.onClick} id={order.id} items={order.items} aantallen={order.aantal} timestart={order.TimeStart} timestop={order.TimeStop}/>
        })}
      </section>
    )
  }
}


export default OrderList;
