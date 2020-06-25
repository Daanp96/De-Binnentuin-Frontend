import React from "react";
import SidewaysMenuButton from "./SidewaysMenuButton";

class SidewaysMenu extends React.Component  {
  render(){
    const buttons = this.props.categoryList.map((item, index) =>
        <SidewaysMenuButton
            key={index}
            name={item}
            function={this.props.function}
        />
      );

      return(
        <article className="sidewaysMenu">
            <SidewaysMenuButton className="sidewaysMenu_button" name ='All' function ={this.props.function}/>
            <SidewaysMenuButton className="sidewaysMenu_button" name ="Chefs special" function ={this.props.function}/>
            <SidewaysMenuButton className="sidewaysMenu_button" name ="Best selling" function ={this.props.function}/>
            {buttons}
        </article>
    );
  }
}
  export default SidewaysMenu;
