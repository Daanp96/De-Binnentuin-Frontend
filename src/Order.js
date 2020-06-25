import React from 'react';
import axios from 'axios';


class Order extends React.Component{

  opmerkingenPlaatsen = () =>{


  }


  render(){
  const item_aantallen = this.props.aantallen.split(',');

  return(
    <section className="order">
      <h2>{this.props.timestart.slice(0, -3)} - {this.props.timestop.slice(0, -3)}</h2>

      {/* loopt door de hele bestelling heen en plaats elke item in een li */}
        <ul className="order__list">
          {(this.props.items.split(',') || []).map((item, index) =>{
            return <li className="order__list__item" key={index}>{item_aantallen[index]}x  {item}</li>
          })}
        </ul>
        <div className = "order__opmerking">
          <h3>Opmerking</h3>
          <p>{this.props.opmerking}</p>
        </div>
        <button className="order__button" onClick={() => this.props.onClick(this.props.id, this.props.index)}>Klaar</button>
    </section>
  );
}
}

export default Order;
