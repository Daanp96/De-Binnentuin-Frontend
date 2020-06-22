import React from 'react';

import Openingsbord from './Openingsbord';
import axios from 'axios';

//import Http from './Http';


class OpeningsbordSection extends React.Component{
    render(){
      return(
        <section className="Openingsborden">
          <Openingsbord naam="binnentuin" />
          <Openingsbord naam="dakterras" />
        </section>
      )
    }
}

export default OpeningsbordSection;
