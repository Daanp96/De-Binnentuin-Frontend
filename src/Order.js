import React from 'react';

class Order extends React.Component{
  render(){
      const elements = ['one', 'two', 'three'];
      let shoppingCart = [
      {id: 35, item: 'jumper', color: 'red', size: 'medium', price: 20},
      {id: 42, item: 'shirt', color: 'blue', size: 'medium', price: 15},
      {id: 71, item: 'socks', color: 'black', size: 'all', price: 5},
      ]
  const items = []

  //een voorbeeld van een for loop
  /*  index hier is een naam
  for(const [index, value] of elements.entries()){
    items.push(<li key={value}>{value}</li>)
  } */

  return(
    <section class="order">
      <h2 class="order__table"> Table {this.props.table || 0} </h2>
      <h3 class="order__time"> 12:00 - 13:00 </h3>
      <ul class="order__list">
        {this.props.orders.map((order, index) =>{
          return <li className="order__list__item" key={order.item}>{order.amount}x {order.item}</li>
        })}
      </ul>
    </section>
  );
}
}

export default Order;
