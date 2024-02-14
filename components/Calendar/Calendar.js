import {useState} from 'react'
import Calendar from 'react-calendar'
import moment from 'moment'


function Cal() {

  const [value, onChange] = useState(new Date());
  const month = moment().format('MMMM')
  const year = moment().format('YYYY')

  return <div className="bg-purple-400 rounded-xl px-4 py-10 h-full"
    style={{border: '1px solid rgba(251, 250, 250, 0.04)', boxShadow: '0px 0px 154px 0px rgba(12, 12, 16, 0.05) inset, 40px 45px 234px 0px rgba(27, 43, 250, 0.12)'}}>

    <div className="overflow-hidden mx-auto mb-8 mt-4"
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
