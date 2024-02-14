import { useState, useEffect } from 'react'
import axios from 'axios'

import Head from 'next/head'
import Container from '../components/Global/Container'
import News from '../components/News/News'
import Google from '../components/Google/Google'
import Bookmarks from '../components/Bookmarks/Bookmarks'

import Clock from '../components/Clock/Clock'
import Weather from '../components/Weather/Weather'
import Calendar from '../components/Calendar/Calendar'
// import styles from '../styles/Home.module.css'
{/* <div className={styles.container}></div> */}

export default function Home() {
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


  return (
    <div>
      <Head>
        <title>Morning Briefing</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,500;1,400&display=swap" rel="stylesheet" />
      </Head>

      <img src={bg} className="fixed bg-cover z-0 w-full h-full opacity-10" style={{filter: 'blur(10px)'}} />

      <div className="main-wrapper xl:flex xl:justify-center xl:items-center xl:h-screen relative">
        <Container>
          <News />

          <div className="col-span-3 xl:col-span-2">
            <Google />
            <Bookmarks />
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 md:col-span-1">
                <Clock />
                <Weather />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Calendar />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
