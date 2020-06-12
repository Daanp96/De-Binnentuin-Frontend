import React from 'react'

class AdminMenuItemEdit extends React.Component{

  render(){

    const handleChange = (event) => {
      console.log(event);
 };


    return (
      <section className = "MenuEditBox">
        <h2> ... aanpassen </h2>
        <form className="MenuEditBox__Form">
          <label for="naam">Naam: </label>
          <input type="text" id="naam" defaultValue="Item" />
          <label for="beschrijving">Beschrijving: </label>
          <textarea id="beschrijving"  onChange={handleChange}> </textarea>
          <label for="prijs">Prijs: </label>
          <input type="number" id="prijs" defaultValue="4.44" step="0.01"/>
          <label for="special">Prijs: </label>
          <input type="checkbox" id="special" defaultValue=""/>
        </form>
      </section>
    )
  }

}

export default AdminMenuItemEdit;
