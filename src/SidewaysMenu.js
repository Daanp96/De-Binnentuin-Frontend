import React from "react";
import SidewaysMenuButton from "./SidewaysMenuButton";

class SidewaysMenu extends React.Component  {
  componentDidMount = () =>{
    this.props.getMenu('All');
    this.props.getCatergories();
  }

  render(){
    const buttons = this.props.categoryList.map((item, index) =>
        <SidewaysMenuButton
            key={index}
            name={item}
            function={this.props.getMenu}
        />
      );

      return(
        <article className="sidewaysMenu">
            <SidewaysMenuButton className="sidewaysMenu_button" name ="All" function ={this.props.getMenu}/>
            <SidewaysMenuButton className="sidewaysMenu_button" name ="Chefs special" function ={this.props.getMenu}/>
            <SidewaysMenuButton className="sidewaysMenu_button" name ="Best selling" function ={this.props.getMenu}/>
            {buttons}
        </article>
    );
  }
}
  export default SidewaysMenu;
