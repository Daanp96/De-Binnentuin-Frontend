import React from 'react';

import Openingsbord from './Openingsbord';
import axios from 'axios';

//import Http from './Http';


class OpeningsbordSection extends React.Component{



      /*axios.patch('http://localhost:8000/admin/change', {name:naam, isOpen:geopend},


    )  .then(response => {
  console.log(response);})
  .catch(error => {
    console.log(error);
  }); */
 


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
