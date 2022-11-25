import './App.css';
import { useState } from 'react';


function App() {
  const apiKey = "0e0fc87f95ad0c667bdd54d2aa2aa067";
  const{weatherData, setWeatherData}= useState([{}]);
  const {city, setCity} = useState("");
  const getWeather = (event) => {
    if(event.key = "enter") // le .key désigne la touche qui va être utilisée pour déclencher l'evenement
    fetch 
  }
  return ( <div>
    <input 
    type="text" 
    placeholder='Enter a city' 
    onChange={event => setCity.target.value}>

    </input>
 </div>)

 
}

export default App;
