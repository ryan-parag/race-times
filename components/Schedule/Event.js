import React from 'react'
import Tag from '@components/Tag'
import moment from 'moment'

export const CalendarItem = ({day, num, month, year, completed}) => {
  return(
    <div className="relative z-10 rounded-lg text-center bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-600 overflow-hidden flex flex-col w-full">
      <div className={`text-xs font-bold py-1 ${completed ? 'bg-gray-200 dark:bg-gray-600 text-mono-black-60 dark:text-mono-white-60' : 'bg-primary-500 text-white'} uppercase tracking-widest`}>{month}</div>
      <div className="text-3xl text-black dark:text-white py-1 font-bold font-mono">{num}</div>
      <div className="text-xs pb-1 text-mono-black-60 dark:text-mono-white-60">{day}</div>
    </div>
  )
}

const Event = ({ event }) => {


  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const formatDate = date => {
    let d = new Date(date)
    let year = d.getFullYear()
    const dateObj = {
      dayString: dayNames[moment(date).day()],
      numString: moment(date).date(),
      monthString: monthNames[moment(date).month()],
      yearString: year
    }
    return dateObj
  }

  const getDateTime = (time) => {
    const date = new Date(time)
    const local = date.toLocaleString()
    const formatted = moment(local).format('llll')
    return formatted
  }

  return (
    <div
      className={`py-4 px-0 opacity-0 md:px-4 mb-4 w-full md:shadow md:rounded-md border-b md:border ${event.completed ? 'opacity-50' : 'opacity-100'} border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-900 flex items-start relative`}
    >
      <div className="pr-4 w-32">
        <CalendarItem
          day={formatDate(event.date).dayString}
          num={formatDate(event.date).numString}
          month={formatDate(event.date).monthString}
          year={formatDate(event.date).yearString}
          completed={event.completed}
        />
      </div>
      {
        event.completed && (
          <div className="absolute top-4 right-4 rotate-12">
            <Tag type={'success'} size={'sm'}>Completed</Tag>
          </div>
        )
      }
      <div className="block w-full">
        {
          event.completed ? (
            <strike><h5 className="font-bold text-lg mb-1">{event.name}</h5></strike>
          )
          :
          (
            <h5 className="font-bold text-lg mb-1">{event.name}</h5>
          )
        }
        <span className="text-sm block mb-2 text-mono-black-60 dark:text-mono-white-60">{event.track} • {event.city}</span>
        <Tag type={'primary'} ghost size={'sm'}>{getDateTime(event.time)}</Tag>
      </div>
    </div>
  )
}

export default Event