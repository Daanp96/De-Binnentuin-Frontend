import React from "react";

class SidewaysMenuButton extends React.Component {

  onClick = () =>{
    console.log(this.props.name);
    this.props.function(this.props.name);
  }

  render(){
    return(
        <section className="sidewaysMenuButtoncontainer">
            <button onClick={this.onClick} className="sidewaysMenuButtoncontainer_button" type="button">{this.props.name}</button>
        </section>
    );
  }
}

export default SidewaysMenuButton;
