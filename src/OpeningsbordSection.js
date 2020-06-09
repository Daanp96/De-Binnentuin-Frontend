import React from 'react';

import Openingsbord from './Openingsbord';
import axios from 'axios';

//import Http from './Http';


class OpeningsbordSection extends React.Component{


    onClick = (tekst) =>{

      axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

    let token = document.head.querySelector('meta[name="csrf-token"]');
     console.log(tekst);
     console.log(token);
     window.csrf_token = "{{ csrf_token() }}";
      //axios.defaults.headers.common = {    'X-Requested-With': 'XMLHttpRequest',  'X-CSRF-TOKEN': window.csrf_token};
    //  axios.defaults.headers.common['X-CSRF-TOKEN'] = ('meta[name="csrf-token"]').attr('content');
      axios.put('http://localhost:8000/admin/binnentuin/change', { name:"binnentuin", isOpen:0, menu_number:1},
      {'Access-Control-Allow-Credentials':true});


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
