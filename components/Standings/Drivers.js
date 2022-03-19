import React from 'react'
import Driver from '@components/Standings/Driver'
import { motion } from 'framer-motion'

const Drivers = ({ data }) => {
  return(
    <table className="w-full">
      <tbody>
        {
          data.list.map((item, i) => (
            <motion.tr
              className="opacity-0"
              animate={{ opacity: 1 }}
              transition={{ duration: 0.12, delay: 0.05*i }}
              key={data.position}
            >
              <Driver data={item} key={i} />
            </motion.tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Drivers