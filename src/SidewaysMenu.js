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
            <SidewaysMenuButton name ='all' function ={this.props.function}/>
            {buttons}
        </article>
    );
  }
}
  export default SidewaysMenu;
