import React from "react";
import axios from "axios";

class Weather extends React.Component {
    state = {celcius: ""};

    getWeather = () => {
        const BASE_URL = "http://api.weatherstack.com/current?access_key=142c8b18923c2540592d3f6b8ae80974&query=52.163660,4.492393";
        axios.get(BASE_URL).then(res => {
            this.setState({ celcius: res.current.temperature}, () => console.log(res.current.temperature))
        });
    }

    

    render(){
        return(
            <section>
                <p>{this.state.celcius || "Geen weer bekend"}</p>
            </section>
        );
    }
}

export default Weather;