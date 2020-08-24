import {useState} from 'react'
import Calendar from 'react-calendar'
import moment from 'moment'


function Cal() {

  const [value, onChange] = useState(new Date());
  const month = moment().format('MMMM')
  const year = moment().format('YYYY')

  return <div className="bg-purple-400 rounded-xl px-4 py-10 h-full">

    <div className="overflow-auto mx-auto mb-8 mt-4"
      style={{maxWidth: '330px'}}>
      <div className="text-white text-3xl font-light float-left">{month}</div>
      <div className="text-white text-3xl font-light float-right">{year}</div>
    </div>

    <Calendar
      onChange={onChange}
      value={value}
      showNavigation={false}
      onClickDay={() => console.log('clicked day')}
    />
  </div>
}

export default Cal
