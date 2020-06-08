import React from 'react';

class AdminMenuItem extends React.Component{
  render(){
  return(
    <section className="menuItemCard">
      <h2>{this.props.naam || 'item'} </h2>
      <h3> €{this.props.kosten || "0,00"} </h3>
      <p> {this.props.beschrijving || "Beschrijving"} </p>
    </section>
  )
}
}

export default AdminMenuItem;
