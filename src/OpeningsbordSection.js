 import React from 'react';

import Openingsbord from './Openingsbord';


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
