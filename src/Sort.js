import React from "react";
import "./sass/Sort.scss";

class Sort extends React.Component {
    constructor(props){
        super(props);
        this.state = {sort: 'default'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({sort: event.target.value});
    }

    render(){
        return(
            <section className="menulist_sort">
                <form onSubmit={(event) => this.props.handleSubmit(event, this.state.sort)}>
                    <select className="menulist_sort__select" name="sort" onChange={this.handleChange}>
                        <option value="default">Niet gesorteerd</option>
                        <option value="alphabetical">Alfabet: van A naar Z</option>
                        <option value="reverse">Alfabet: van Z naar A</option>
                        <option value="high_to_low">Prijs: Hoog naar Laag</option>
                        <option value="low_to_high">Prijs: Laag naar Hoog</option>
                    </select>
                    <input className="menulist_sort__input" type="submit" value="Sorteer"/>
                </form>
            </section>
        );
    }
}

export default Sort;