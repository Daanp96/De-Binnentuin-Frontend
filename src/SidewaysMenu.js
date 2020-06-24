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
            <SidewaysMenuButton name ='All' function ={this.props.function}/>
            <SidewaysMenuButton name ="Chefs special" function ={this.props.function}/>
            <SidewaysMenuButton name ="Best selling" function ={this.props.function}/>
            {buttons}
            <SidewaysMenuButton name ="Shopping Cart" function ={this.props.function}/>
        </article>
    );
  }
}
  export default SidewaysMenu;
