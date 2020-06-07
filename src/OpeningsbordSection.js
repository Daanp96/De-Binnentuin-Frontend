import React from 'react';

import Openingsbord from './Openingsbord';

class OpeningsbordSection extends React.Component{
    onClick = () =>{
      console.log("hallo");
    }

    render(){
      return(
        <section class="Openingsborden">
          <Openingsbord naam="De binnentuin" open={false} onClick={this.onClick}/>
          <Openingsbord naam="De Roof" open={true} onClick={this.onClick}/>
        </section>
      )
    }
}

export default OpeningsbordSection;
