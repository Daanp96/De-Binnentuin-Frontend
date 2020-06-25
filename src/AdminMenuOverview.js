import React from 'react';
import {Link} from "react-router-dom";

const AdminMenuOverview = (props) =>{

  return(
    <section className="AdminMenuSection">
      <Link to="/menu" onClick={() => props.event(1)}>
        <button className="AdminMenuSection__button">Binnentuin Menu Edit</button>
      </Link>
      <Link to="/menu" onClick={() => props.event(2)}>
        <button className="AdminMenuSection__button">Roof Menu Edit</button>
      </Link>
      <Link to="/bestellingen">
        <button className="AdminMenuSection__button">Koks scherm</button>
      </Link>
      <Link to="/tijden">
        <button className="AdminMenuSection__button">Restaurant tijden</button>
      </Link>

    </section>
  )
}

export default AdminMenuOverview;
