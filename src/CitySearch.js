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
            <form className="mb-4"  onSubmit={handleSearch}>

              <input className="form-control" type="text" placeholder="enter city ...." onChange={handleInputChange}>

              </input> 

              <button className="btn btn-primary mt-3" type="submit">
                Search
              </button> 
            </form>


    )


    }
