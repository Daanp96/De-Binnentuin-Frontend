import React from "react";

class SidewaysMenuButtonShopping extends React.Component {

  onClick = () =>{
    this.props.function(this.props.name);
  }

  render(){
    return(
        <section className="sidewaysMenuButtoncontainer--shopping">
            <button onClick={this.onClick} className="sidewaysMenuButtoncontainer--shopping__button" type="button">
              <p>({this.props.cart.length})</p>
              <figure>
                <img src="images/cart.png" />
              </figure>
            </button>
            {this.props.children}
        </section>
    );
  }
}

export default SidewaysMenuButtonShopping;
