import React from 'react';

class Order extends React.Component{

  constructor(){
    super();

  }

  componentDidMount(){



  }
  render(){

       const item_aantallen = this.props.aantallen.split(',');

           console.log(item_aantallen);
  //  console.log(this.props.lijst)
  //een voorbeeld van een for loop
  /*  index hier is een naam
  for(const [index, value] of elements.entries()){
    items.push(<li key={value}>{value}</li>)
  } */

  return(
    <section className="order">
      <h1>{this.props.timestart.slice(0, -3)} - {this.props.timestop.slice(0, -3)}</h1>

        <ul className="order__list">
          {(this.props.items.split(',') || []).map((item, index) =>{
            return <li className="order__list__item" key={index}>{item_aantallen[index]}x  {item}</li>
          })}
        </ul>

    </section>
  );
}
}

export default Order;
