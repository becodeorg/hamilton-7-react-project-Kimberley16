import React, {useState} from "react";
import "./App.css";
function App() {
    const apiKey = "0e0fc87f95ad0c667bdd54d2aa2aa067";
    const [weatherData, setWeatherData] = useState([{}]);
    const [city, setCity] = useState("");
    //math.round est une fonction preexistente qui permet d'arrondir les chiffres

    const getWeather = event => {
        if (event.key === "Enter") {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`,
            )
                .then(
                    //pour fetch, il faut toujours entouré le lien avec des `, sinon ça ne marche pas
                    //afin de récupérer la ville qui nous intéresse, on entre ${city}
                    //le $ devant une contante est pour dire que l'on récupère une donnée entrée par l'utilisateur
                    //signifie "après avoir appuyer sur enter, le programme doit faire quelque chose par la suite
                    response => response.json(), //les informations récupérées seront envoyées vers un fichier nommé response.json
                    response => response.json(),
                )
                .then(data => {
                    setWeatherData(data);
                    setCity("");
                });
        }
        if (event.key === "Enter") {
            fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`,
            ).then(response => response.json());
        }
    };
    // useEffect(() => {
    //     fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`).then(
    //             response => response.json()
    //         ).then(

    //         )
    // })

    return (
        <div className={"container"}>
            <input
                className={"input"}
                onChange={e => setCity(e.target.value)}
                value={city}
                onKeyPress={getWeather}
                placeholder={"Enter city... "}
            />

            {typeof weatherData.main === "undefined" ? (
                <div>
                    <p>Please enter a city</p>
                </div>
            ) : (
                <div>
                    <div>
                        <p>{weatherData.name}</p>
                        <p>{Math.round(weatherData.main.temp)}°C</p>
                        <p>{weatherData.weather[0].main}</p>
                        <p>{weatherData.coord.lat}</p>
                        <p>{weatherData.coord.lon}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
