

import React ,{useState} from 'react';
import './App.css';
import CitySearch from './CitySearch';
import "bootstrap/dist/css/bootstrap.min.css"
import AirQualityCard from './AirQualityCard'; 
import Pollutantinfo from './Pollutantinfo';

function App() {   
  const [airQualityData, setAirQualityData] = useState(null)
  const [error, setError] = useState(null)

  const getAirQuality = async(city) =>{   
      try{
          const response = await fetch(`https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_API_TOKEN}`)
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
        console.error("network error:", error)
         setError("something went wrong")
         setAirQualityData(null) 
      }



  }




  return (
    <div className='container'>
    <h1 className='mt-5 mb-3'>
      Air Quality
    </h1>  

    <CitySearch getAirQuality={getAirQuality} />
    {error && (
      <div className='alert alert-danger ' role='alert'>
      {error}
      </div>

    )}
      {
        airQualityData && (
          
          //displat Air quality card && Pollutant info
          <>
          <AirQualityCard data={airQualityData}/>  

          <Pollutantinfo pollutant={airQualityData.dominentpol}/>
          </>
          
        )
      } 
    </div>
  );
}

export default App;
