import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";


class AdminMenuItemEdit extends React.Component{

  constructor(props){
    super(props);
    this.state = {naam: "", prijs: "", beschrijving: "Tekst", categorie: "", id:"", special:""}
  }

  componentDidMount(){
    //console.log(this.props);
    axios.get('http://127.0.0.1:8000/api/admin/menuitem/' + this.props.naam).then(res =>{
      this.setState({
        naam: res.data.naam,
        prijs: res.data.prijs,
        beschrijving: res.data.beschrijving,
        categorie: res.data.categorie,
        id: res.data.id,
        special: res.data.chefSpecial

      })

      if(this.state.special == 1){
        this.setState({special: true});
      }
      else{
          this.setState({special: false});
      }
            console.log(this.state);

    });

  }

  //events voor de input veranderingen
  handleChangeBeschrijving(event){
   this.setState({beschrijving: event.target.value});
  }
  handleChangePrijs(event){
       this.setState({prijs: event.target.value});
  }
  handleChangeNaam(event){
       this.setState({naam: event.target.value});
  }
  handleChangeCategorie(event){
       this.setState({categorie: event.target.value});
  }
  handleChangeSpecial(event){
    console.log(event.target.checked);
     this.setState({special: event.target.checked});
  }

  //verstuurd de form naar de api en de api update de gegevens vervolgens
  handleSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state);
    axios({
      method:'put',
      url: 'http://localhost:8000/api/admin/menuitem/update',
      data: {id: this.state.id, naam:this.state.naam, beschrijving:this.state.beschrijving, prijs:this.state.prijs, categorie:this.state.categorie, special:this.state.special},
    });
  }

  render(){
    return (
      <section className = "MenuEditBox">
        <Link to="/menu" className="MenuEditBox__link">
          <button className="Terugknop">
             &#8592; Terug
          </button>
        </Link>
        <h2> {this.state.naam} aanpassen </h2>
        <form className="MenuEditBox__Form" onSubmit={this.handleSubmit}>
          <label >
            Naam:
            <input type="text" id="naam" name="naam" defaultValue={this.state.naam}  onChange={(event) => this.handleChangeNaam(event)}/>
           </label>
          <label >
            Prijs:
            <input type="number" id="prijs" name="prijs" defaultValue={this.state.prijs} step="0.01"  onChange={(event) => this.handleChangePrijs(event)}/>
          </label>

          <label >
            Beschrijving:
            <textarea id="beschrijving" name="beschrijving" value={this.state.beschrijving} onChange={(event) => this.handleChangeBeschrijving(event)}></textarea>
         </label>

          <label >
            Categorie:
          <input type="text" id="categorie" name="categorie" defaultValue={this.state.categorie}  onChange={(event) => this.handleChangeCategorie(event)}/>
        </label>
        <label>
          Chef's special:
          <input type="checkbox" id="special" name="special" checked={this.state.special} onChange={(event) => this.handleChangeSpecial(event)}/>
        </label>

        <input className='MenuEditBox__Form__submit' type="submit" value="Veranderen"/>

        </form>
      </section>
    )
  }

}

export default AdminMenuItemEdit;
