import React from 'react';

import Openingsbord from './Openingsbord';
import axios from 'axios';
import {
  Link
} from "react-router-dom";

//import Http from './Http';


class OpeningsbordSection extends React.Component{
    render(){
      return(
        <section className="Openingsborden">
          <Link to="/admin">
            <button className="Openingsborden__terug">
               &#8592; Terug
            </button>
          </Link>
          <Openingsbord naam="binnentuin" />
          <Openingsbord naam="dakterras" />
        </section>
      )
    }
}

export default OpeningsbordSection;
