import React from 'react';

import Openingsbord from './Openingsbord';
import axios from 'axios';

//import Http from './Http';


class OpeningsbordSection extends React.Component{


    onClick = (naam, geopend) =>{
      if(geopend == 1){
        geopend = 0;
      }
      else {
        geopend = 1;
      }
     console.log(naam, geopend);
      axios.patch('http://localhost:8000/admin/change', {name:naam, isOpen:geopend},
      {'Access-Control-Allow-Headers':' X-CSRF-TOKEN'},
    )  .then(response => {
  console.log(response);})
  .catch(error => {
    console.log(error);
  });
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
