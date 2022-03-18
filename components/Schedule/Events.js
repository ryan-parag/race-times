import React from 'react'
import { Empty } from '@components/DataStates'
import Event from '@components/Schedule/Event'
import { motion } from 'framer-motion'

const Events = ({ data, filter, season }) => {

  const upcoming = data.filter((item) => !item.completed)
  const past = data.filter((item) => item.completed)

  const filterData = () => {
    if(filter === 'Upcoming') {
      return upcoming
    } else if(filter === 'Completed') {
      return past
    } else {
      return data
    }
  }

  const filtered = filterData()

  return(
    <>
      {
        filtered.length > 0 ? (
          filtered.map((item,i ) => (
            <motion.div
              className="opacity-0 top-4 relative"
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 0.3, delay: 0.1*i }}
              key={i}
            >
              <Event key={item.race} event={item}/>
            </motion.div>
          ))
        )
        :
        (
          <Empty>
            <span className="text-sm">There are no {filter.toLowerCase()} events for the {season} season</span>
          </Empty>
        )
      }
    </>
  )
}

export default Events