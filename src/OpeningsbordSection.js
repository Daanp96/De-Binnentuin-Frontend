import React from 'react';

import Openingsbord from './Openingsbord';
import axios from 'axios';


class OpeningsbordSection extends React.Component{


    onClick = (tekst) =>{
      console.log(tekst);
      axios.put('http://localhost:8000/admin/binnentuin/change', { name:"binnentuin", isOpen:0, menu_number:1}, {withCredentials: true});


    // axios.defaults.headers.patch['X-CSRF-Token'] = response.data._csrf;
    // axios.patch('http://localhost:8000/admin/binnentuin/change',
    //  { name:"binnentuin", isOpen:0, menu_number:1, _method: 'patch'},
    //  { headers: { 'X-Requested-With': 'XMLHttpRequest'}}).then((response) => {
      //    console.log(response);
        //});

    }


    render(){
      return(
        <section className="Openingsborden">
          <Openingsbord naam="binnentuin" open={false} onClick={this.onClick}/>
          <Openingsbord naam="dakterras" open={true} onClick={this.onClick}/>
        </section>
      )
    }
}

export default OpeningsbordSection;
