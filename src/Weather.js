import React from "react";
import axios from "axios";

class Weather extends React.Component {
    state = {temperature: "", image: ""};

    getWeather = (event) => {
        const params = {
            access_key: "caf3e0d51caea7508e1b5b2575eaa3a1",
            query: "52.163660,4.492393"
        };
        // const BASE_URL = "http://api.weatherstack.com/current";
        const BASE_URL = "http://api.weatherstack.com/current?access_key=caf3e0d51caea7508e1b5b2575eaa3a1&query=New%20York";
        axios.get(BASE_URL, {params}).then(res => {
            console.log(res.data.error);
            if(res.data.error){
                this.setState({
                    temperature: "Geen weer bekend",
                    image: "logo512.png"
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
                {/* <button onClick={this.getWeather}>Click Me</button> */}
                <p>{this.state.temperature}</p>
                <img src={this.state.image} alt="weather_icon"/>
            </section>
        );
    }
}

export default Weather;