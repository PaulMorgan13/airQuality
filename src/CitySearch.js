import React, {useState} from "react"; 

export default function CitySearch({getAirQuality}) {
    
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        const formattedCity = inputValue.replace(/ /g, '-')
        getAirQuality(formattedCity)

    }

    return(
            <form onSubmit={handleSearch}>

              <input type="text" placeholder="enter city ...." onChange={handleInputChange}>

              </input> 

              <button type="submit">
                Search
              </button> 
            </form>


    )


    }
