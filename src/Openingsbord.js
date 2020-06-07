import React from 'react';

class Openingsbord extends React.Component{

    render(){
      const isOpen = this.props.open;
      let image_link;
      if(isOpen){
        image_link = 'images/open.png';
      }
      else{
        image_link = 'images/close.png';
      }
      return(
        <section>
          <h2> {this.props.naam || 'restaurant'} </h2>
          <figure>
            <img src={image_link} alt="Restaruant open" />
          </figure>
          <button type="button" onClick={this.props.onClick}>Verander </button>
        </section>

      )
    }
}


export default Openingsbord;
