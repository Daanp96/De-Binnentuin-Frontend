import React from 'react';

import Openingsbord from './Openingsbord';


class OpeningsbordSection extends React.Component{


    onClick = (tekst) =>{
      console.log(tekst);
    }


    render(){
      return(
        <section class="Openingsborden">
          <Openingsbord naam="binnentuin" open={false} onClick={this.onClick}/>
          <Openingsbord naam="Roof" open={true} onClick={this.onClick}/>
        </section>
      )
    }
}

export default OpeningsbordSection;
