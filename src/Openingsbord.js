import React from 'react';

import axios from 'axios';

class Openingsbord extends React.Component{
    state = {open: "", token: "", image_link: "images/open.png"}

    //onclick event dat checkt of het restaurant atm open/dicht is en geeft de verandering mee aan een put statement
    onClick = (naam, geopend,token) =>{
      if(geopend === 1){
        geopend = 0;
      }
      else {  geopend = 1;  }
        axios({
          method:'put',
          url: 'http://localhost:8000/api/admin/change',
          data: {name:naam, isOpen:geopend},
        }).then(this.setState({open: geopend})
        );
      }

    componentDidMount(){
      this.loadApi();
    }

    //haalt de open/dicht statement van de api
    loadApi = () => {
      axios.get('http://localhost:8000/api/admin/' + this.props.naam).then(res =>{
        this.setState({open: res.data[0].isOpen});
      });
    }


    render(){

      return(
        <section className="Openingsbord">
          <h2> {this.props.naam || 'restaurant'} </h2>
          <figure className="Openingsbord__figure">
            <img src={this.state.open ? 'images/open.png' : 'images/closed-sign.png'} alt="Restaruant open" />
          </figure>
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
