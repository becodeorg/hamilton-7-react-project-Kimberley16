import React, {useEffect, useState} from 'react'
import './App.css'
function App() {
    const apiKey = '0e0fc87f95ad0c667bdd54d2aa2aa067'
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])
    const [days, setDays] = useState([])

    const getWeather = (event) => {
        if (event.key == "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`).then(
                response => response.json()
            ).then(
                data => {
                    setWeatherData(data)
                    setCity("")
                }
            )
        }
        if (event.key == "Enter") {
            fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`).then(
                response => response.json()
            ).then(
                data => {
                    setLat(data[0].lat)
                    setLon(data[0].lon)
                }
            )
        }
    }
    // useEffect(() => {
    //     fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`).then(
    //             response => response.json()
    //         ).then(
                
    //         )
    // })

    return (
        <div className='container'>
            <input 
            className='input' 
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}
            placeholder='Enter city... '
            />

            {typeof weatherData.main === 'undefined' ? (
                <div>
                    <p>Please enter a city</p>
                </div>
            ): (
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

    )
}

export default App