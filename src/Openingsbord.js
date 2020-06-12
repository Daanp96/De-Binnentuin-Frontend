import React from 'react';

import axios from 'axios';

class Openingsbord extends React.Component{
    state = {open: "", token: ""}

    componentDidMount(){
      axios.get('http://localhost:8000/admin/' + this.props.naam).then(res =>{
        this.setState({open: res.data[0].isOpen, token: res.data[1]})
        console.log(res.data);

      });
    }


    render(){
      const isOpen = this.state.open;
      let image_link;
      if(isOpen){
        image_link = 'images/open.png';
      }
      else{
        image_link = 'images/closed-sign.png';
      }
      return(
        <section>
          <h2> {this.props.naam || 'restaurant'} </h2>
          <figure>
            <img src={image_link} alt="Restaruant open" />
          </figure>
      {/*      <form onSubmit={() => this.props.onSubmit(this.props.naam)}>
            <input type="text" name="name" value={this.props.naam}/>
            <input type="number" number="isOpen" value={this.state.open}/>
            <button type="submit">Verander</button>
          </form> */}
          <button onClick={() => this.props.onClick(this.props.naam, this.state.open, this.state.token)}>Change </button>
        </section>

      )
    }
}


export default Openingsbord;
