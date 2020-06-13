import React from 'react';

import axios from 'axios';

class Openingsbord extends React.Component{
    state = {open: "", token: ""}

    onClick = (naam, geopend,token) =>{

      if(geopend == 1){
        geopend = 0;
      //  this.setState({open: 0});
      }
      else {
        geopend = 1;
      //  this.setState({open: 1});
      }
     console.log(naam, geopend);


        axios({
          method:'put',
          url: 'http://localhost:8000/admin/change',
          data: {name:naam, isOpen:geopend},
        });
      }

    componentDidMount(){
      axios.get('http://localhost:8000/admin/' + this.props.naam).then(res =>{
        this.setState({open: res.data[0].isOpen, token: res.data[1]})
        console.log(res.data);

      });
    }


    render(){
      axios.get('http://localhost:8000/admin/' + this.props.naam).then(res =>{
        this.setState({open: res.data[0].isOpen})
      });
      const isOpen = this.state.open;
      let image_link;
      if(isOpen){
        image_link = 'images/open.png';
      }
      else{
        image_link = 'images/closed-sign.png';
      }
      return(
        <section className="Openingsbord">
          <h2> {this.props.naam || 'restaurant'} </h2>
          <figure className="Openingsbord__figure">
            <img src={image_link} alt="Restaruant open" />
          </figure>
      {/*      <form onSubmit={() => this.props.onSubmit(this.props.naam)}>
            <input type="text" name="name" value={this.props.naam}/>
            <input type="number" number="isOpen" value={this.state.open}/>
            <button type="submit">Verander</button>
          </form> */}
          <button className='Openingsbord__changeButton' onClick={() => this.onClick(this.props.naam, this.state.open, this.state.token)}>
            <figure className="Openingsbord__figure">
              <img src="images/circle_arrow.png" alt="Verander bord"></img>
            </figure>
         </button>
        </section>

      )
    }
}


export default Openingsbord;
