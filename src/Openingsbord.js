import React from 'react';

import axios from 'axios';

class Openingsbord extends React.Component{
    state = {open: "", token: "", image_link: "images/open.png"}

    onClick = (naam, geopend,token) =>{
      if(geopend == 1){
        geopend = 0;
      }
      else {  geopend = 1;  }
     console.log(naam, geopend);
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

    loadApi = () => {
      axios.get('http://localhost:8000/api/admin/' + this.props.naam).then(res =>{
        this.setState({open: res.data[0].isOpen});
        console.log(res.data);

      });
    }


    render(){
      if(this.state.open){
        this.state.image_link = 'images/open.png';
      }
      else{
        this.state.image_link = 'images/closed-sign.png';
      }
      return(
        <section className="Openingsbord">
          <h2> {this.props.naam || 'restaurant'} </h2>
          <figure className="Openingsbord__figure">
            <img src={this.state.image_link} alt="Restaruant open" />
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
