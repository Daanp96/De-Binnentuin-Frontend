import React from 'react';

//Import van eigen elementen
import Order from './Order';

const OrderList = () => {
  const bestellijst = [
    {amount: 2, item: 'Hamburger'},
    {amount: 3, item: 'Koffie'},
  ]

    return(
      <section class="orderlist">
      <Order table="5" orders={bestellijst}/>
      </section>
    )
}


export default OrderList;
