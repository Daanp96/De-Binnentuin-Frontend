import React from "react";
import axios from "axios";
import "./sass/Weather.scss";

class Weather extends React.Component {
    state = {temperature: "", image: ""};

    getWeather = (event) => {
        const params = {
            access_key: "caf3e0d51caea7508e1b5b2575eaa3a1",
            query: "52.163660,4.492393"
        };
        const BASE_URL = "http://api.weatherstack.com/current";
        axios.get(BASE_URL, {params}).then(res => {
            //console.log(res.data.error);
            if(res.data.error){
                this.setState({
                    temperature: "Geen weer beschikbaar",
                    image: "img/noweather.png"
                });
            } else {
                this.setState({
                    temperature: "Het is " + res.data.current.temperature + " ºC in Leiden.",
                    image: res.data.current.weather_icons[0]
                });
            }
        });
    }

    componentDidMount = () =>{
        this.getWeather();
    }

    render(){
        return(
            <section>
                <p>{this.state.temperature}</p>
                <img className="weather" src={this.state.image} alt="weather_icon"/>
            </section>
        );
    }
}

export default Weather;
