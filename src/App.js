

import React ,{useState} from 'react';
import './App.css';

function App() {   
  const [airQualityData, setAirQualityData] = useState(null)
  const [error, setError] = useState(null)

  const getAirquality = async(city) =>{   
      try{
          const response = await fetch(`https://api.waqi.info/feed/${city}}/?token=${process.env.REACT_APP_API_TOKEN}`)
          const data = await response.json() 
          console.log(data)
        if(response.ok && data.status ==="ok" ){
          setAirQualityData(data.data) 
          setError(null)
        } 
        else {
          setError("sorry we  cannot find the city you are looking for")
          setAirQualityData(null)
        }
        } 
      catch(error){ 
        console.log("network error",error)
         setError("something went wrong")
         setAirQualityData(null) 
      }



  }




  return (
    <div>
    <h1>
      Air Quality
    </h1>  

    <CitySearch getAirquality={getAirquality} />
    </div>
  );
}

export default App;
