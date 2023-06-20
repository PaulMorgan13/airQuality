import React from "react"


export default function AirQualityCard({data}){
    const {aqi, city, dominentpol, time} = data


    return( 
        <div>
            <h5>{city.name}</h5>
            <h6>Air quality Index: {aqi}</h6>
            <p>Dominant Pollutant{dominentpol}</p>
            <p>Last Update {time.s}</p>
        </div>

    )



}