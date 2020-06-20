import React from 'react';
import axios from 'axios';


class AdminMenuItemEdit extends React.Component{
  //state = {naam: "", prijs: "", beschrijving: "", categorie: ""}

  constructor(props){
    super(props);
    this.state = {naam: "",
      prijs: "",
      beschrijving: "Tekst",
      categorie: "",
      id:"",
      special:"",
      binnentuin: false,
      dakterras: false
    }
  }

  componentDidMount(){

  }

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
  handleChangeBinnen(event){
    console.log(event.target.checked);
    this.setState({binnentuin: event.target.checked});
  }
  handleChangeDakterras(event){
    console.log(event.target.checked);
    this.setState({dakterras: event.target.checked});
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state);
    axios({
      method:'post',
      url: 'http://localhost:8000/api/admin/menuitem/create',
      data: {id: this.state.id,
        naam:this.state.naam,
        beschrijving:this.state.beschrijving,
        prijs:this.state.prijs,
        categorie:this.state.categorie,
        special:this.state.special,
        binnentuin:this.state.binnentuin,
        dakterras:this.state.dakterras
      },
    });
  }

  render(){
    return (
      <section className = "MenuEditBox">
        <h2> Nieuw menu item maken </h2>
        <form className="MenuEditBox__Form" onSubmit={this.handleSubmit}>
          <label >
            Naam:
            <input required type="text" id="naam" name="naam"   onChange={(event) => this.handleChangeNaam(event)}/>
           </label>
          <label >
            Prijs:
            <input required type="number" id="prijs" name="prijs" step="0.01"  onChange={(event) => this.handleChangePrijs(event)}/>
          </label>

          <label >
            Beschrijving:
            <textarea id="beschrijving" name="beschrijving"  onChange={(event) => this.handleChangeBeschrijving(event)}></textarea>
         </label>

          <label >
            Categorie:
          <input required type="text" id="categorie" name="categorie"   onChange={(event) => this.handleChangeCategorie(event)}/>
        </label>
        <label>
          Chef's special:
          <input type="checkbox" id="special" name="special"  onChange={(event) => this.handleChangeSpecial(event)}/>
        </label>
        <label>
          Restaurant Binnentuin:
          <input type="checkbox" id="binnentuin" name="binnentuin"  onChange={(event) => this.handleChangeBinnen(event)}/>
        </label>
        <label>
          Restaurant Dakterras:
          <input className='MenuEditBox__Form__check' type="checkbox" id="dakterras" name="dakterras"  onChange={(event) => this.handleChangeDakterras(event)}/>
        </label>

        <input className='MenuEditBox__Form__submit' type="submit" value="Opslaan"/>

        </form>
      </section>
    )
  }

}

export default AdminMenuItemEdit;
