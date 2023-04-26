const { useEffect, useState } = require("react")

const Weather=()=> {
  const [data, setData]= useState({});


    useEffect(()=> {

        const city= localStorage.getItem("CITY");


    fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, {
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '6fafba1395mshf523ed95a73ef73p1907f8jsne5b5c9a9e11a',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
          }
    })

    .then(res=> res.json())
    .then(res=> {
        console.log(res)
        setData(res);
    })
  
    }, [])

    return(
        <div className="weather-container">
            <h1>Weather INFO:</h1>
            <div>
                 <h3>Temp : {data?.main?.temp} F</h3>
                 <img src="./images/weather_logo.png"/>
                 <h3>Wind speed: {data?.wind?.speed}</h3>
            </div>
        </div>
    )
}

export default Weather;