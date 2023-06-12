

import React ,{useState} from 'react';
import './App.css';

function App() {   
  const [airQualityData, setAiraualityData] = useState(null)


  const getAirquality = async(city) =>{   
      try{
          const response = await fetch(`https://api.waqi.info/feed/${city}}/?token=${process.env.REACT_APP_API_TOKEN}`)
          const data = await response.json() 
          console.log(data)
      
        } 
      catch(error){ 
        console.log("network error",error)
          
      }



  }




  return (
    <h1>
      Hello
    </h1>
  );
}

export default App;
