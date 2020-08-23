import { useState, useEffect } from 'react'
import axios from 'axios'

/*
weather[0].description
https://source.unsplash.com/featured/?{KEYWORD}
https://source.unsplash.com/1600x900/?nature,water
*/

function Weather() {
  const [weather, setWeather] = useState('')
  const [units, setUnits] = useState('C')
  const [keywords, setKeywords] = useState([])
  const [bg, setBg] = useState('')

  function titleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase()
    })
  }

  useEffect(() => {

    // Get weather data
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='

    axios.get(`${url}${process.env.CITY}&appid=${process.env.OPEN_WEATHER}&units=metric`)
    .then(function (response) {
      console.log(response.data)
      setWeather(response.data)

      // Set keywords
      setKeywords(response.data.weather[0].description.split(' '))
    })
    .then(() => {
      // Set BG Image
      const keys = keywords.join(',')
      setBg(`https://source.unsplash.com/1600x900/?${keys}`)
    })

    // Set weather units
    if (process.env.WEATHER_UNITS === 'metric') setUnits('C')
    else if (process.env.WEATHER_UNITS === 'imperial') setUnits('F')

  }, [])

  return <div className="bg-purple-400 rounded-xl px-4 py-4 relative">
    {weather !== undefined && weather.weather !== undefined && <>

    {console.log(bg)}
    {keywords.length > 0 &&
    <div className="absolute top-0 left-0 right-0 bottom-0 z-0
      w-full h-full opacity-75 bg-cover bg-center"
      style={{backgroundImage: `url(${bg})`, borderRadius: '1.5rem'}}
    ></div>
    }

    <div className="relative z-10">
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather Icon"
        className="inline-block"
      />

      <div className="inline-block text-white text-xl relative"
        style={{top: '0.3rem', marginLeft: '-0.25rem'}}>
        {titleCase(weather.weather[0].description)}
      </div>

      <div className="-mt-1 mb-12 leading-none text-white text-4xl font-light block ml-6 mt-0">
        {parseInt(weather.main.temp)} {units}
      </div>

      <div className="ml-6 mb-4 mt-8 block text-white text-xl">{process.env.CITY}</div>
    </div>
    </>}
  </div>

}

export default Weather
