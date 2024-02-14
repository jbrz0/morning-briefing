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
    const cityName = process.env.CITY.split(' ').join('+')

    axios.get(`${url}${cityName}&appid=${process.env.OPEN_WEATHER}&units=metric`)
    .then(function (response) {
      // console.log(response.data)
      setWeather(response.data)

      // Set keywords
      setKeywords(response.data.weather[0].description.split(' '))
    })
    .then(() => {
      // Set BG Image
      const keys = keywords.join(',')
      setBg(`https://source.unsplash.com/1600x900/?weather,${keys}`)
    })

    // Set weather units
    if (process.env.WEATHER_UNITS === 'metric') setUnits('C')
    else if (process.env.WEATHER_UNITS === 'imperial') setUnits('F')

  }, [])

  return <div className="bg-purple-400 rounded-xl px-4 py-4 relative"
    style={{border: '1px solid rgba(251, 250, 250, 0.04)', boxShadow: '0px 0px 154px 0px rgba(12, 12, 16, 0.05) inset, 40px 45px 234px 0px rgba(18, 19, 25, 0.12)'}}>
    {weather !== undefined && weather.weather !== undefined && <>

    {keywords.length > 0 &&
    <div className="absolute top-0 left-0 right-0 bottom-0 z-0
      w-full h-full opacity-75 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`, 
        borderRadius: '1.5rem',
        borderSize: '1px',
        borderStyle: 'solid',
        borderColor: 'rgba(251, 250, 250, 0.04)',
        boxShadow: '0px 0px 154px 0px rgba(12, 12, 16, 0.05) inset, 40px 45px 234px 0px rgba(18, 19, 25, 0.12)'
      }}
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
