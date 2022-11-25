import './App.css';
import { useState } from 'react';


function App() {
  const apiKey = "0e0fc87f95ad0c667bdd54d2aa2aa067";
  const {city, setCity} = useState("");
  return ( <div>
    <input 
    type="text" 
    placeholder='Enter a city' 
    onChange={event => setCity.target.value}>

    </input>
 </div>)

 
}

export default App;
