import React from 'react';

import OrderList from './OrderList';
import TimeslotList from './TimeslotList';
import OpeningsbordSection from './OpeningsbordSection';
import AdminMenuOverview from './AdminMenuOverview';
import AdminMenu from './AdminMenu';


class Admin extends React.Component{
  render(){
    return(
      <section class="AdminMenuSection">
      <AdminMenu />
      </section>
    )
  }

}

export default Admin;
