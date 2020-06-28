import React from "react";

class SidewaysMenuButton extends React.Component {

  onClick = () =>{
    this.props.function(this.props.name);
  }

  render(){ 
    return(
        <section className="sidewaysMenuButtoncontainer">
            <button onClick={this.onClick} className="sidewaysMenuButtoncontainer_button" type="button">{this.props.name}</button>
            {this.props.children}
        </section>
    );
  }
}

export default SidewaysMenuButton;
