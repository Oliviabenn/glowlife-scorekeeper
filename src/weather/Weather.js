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
            <h2>Current conditions</h2>
            <div>
                 <h3>Temp: {data?.main?.temp}°F</h3>
                 <img src="./images/weather_logo2.png" width={100} height={100} alt='weather logo'/>
                 <h3>Wind: {data?.wind?.speed} mph</h3>
            </div>
        </div>
    )
}

export default Weather;