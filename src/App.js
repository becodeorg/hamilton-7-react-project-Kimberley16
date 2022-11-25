import './App.css';
import { useState } from 'react';


function App() {
  const apiKey = "0e0fc87f95ad0c667bdd54d2aa2aa067";
  const{weatherData, setWeatherData}= useState([{}]);
  const {city, setCity} = useState("");
  const getWeather = (event) => {
    if(event.key = "enter") // le .key désigne la touche qui va être utilisée pour déclencher l'evenement
    fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    //pour fetch, il faut toujours entouré le lien avec des ``, sinon ça ne marche pas
    //afin de récupérer la ville qui nous intéresse, on entre ${city}
    //le $ devant une contante est pour dire que l'on récupère une donnée entrée par l'utilisateur
    .then( //signifie "après avoir appuyer sur enter, le programme doit faire quelque chose par la suite
      response=> response.json //les informations récupérées seront envoyées vers un fichier nommé response.json
    )
    then (
      data=>{setWeatherData(data) ; setCity("")}
    )
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
