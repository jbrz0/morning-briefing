import { useState, useEffect } from 'react'
import moment from 'moment'

const getGreetingTime = (currentTime) => {
  if (!currentTime || !currentTime.isValid()) { return 'default' }

  const splitAfternoon = 12 // 24hr time to split the afternoon
  const splitEvening = 17 // 24hr time to split the evening
  const currentHour = parseFloat(currentTime.format('HH'))

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    // Between 12 PM and 5PM
    return 'afternoon'
  } else if (currentHour >= splitEvening) {
    // Between 5PM and Midnight
    return 'night'
  }
  // Between dawn and noon
  return 'morning'
}

function Clock() {
  const [timeOfDay, setTimeOfDay] = useState('morning')

  const time = moment().format('h:mm')
  const amPm = moment().format('A')

  useEffect(() => {

    setTimeOfDay(getGreetingTime(moment()))
  }, [])

  return <div className="bg-purple-400 rounded-xl px-4 py-16 mb-6">

    <div className="flex justify-center items-center">

      <div className="mr-6">
        <div className={`${timeOfDay} w-24 h-24 rounded-full
          flex justify-center items-center`}>
          <div className="bg-purple-500 w-20 h-20
            rounded-full flex justify-center items-center">
            <span className="text-teal font-medium">{amPm}</span>
          </div>
        </div>
      </div>

      <div>
        <div className="text-4xl text-white font-light">{time}</div>
        <div className="text-gray-100 text-lg">{process.env.CITY}</div>
      </div>

    </div>

  </div>
}

export default Clock
