import React from 'react';

import OrderList from './OrderList';
import TimeslotList from './TimeslotList';
import OpeningsbordSection from './OpeningsbordSection';
import AdminMenuOverview from './AdminMenuOverview';
import AdminMenu from './AdminMenu';
import AdminMenuItemEdit from './AdminMenuItemEdit';



class Admin extends React.Component{
  render(){
    return(
      <TimeslotList />
    )
  }

}

export default Admin;
