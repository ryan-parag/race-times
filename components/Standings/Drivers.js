import React from 'react'
import Driver from '@components/Standings/Driver'

const Drivers = ({ data }) => {
  return(
    <table className="w-full">
      <tbody>
        {
          data.list.map((item, i) => (
            <Driver data={item} key={i} />
          ))
        }
      </tbody>
    </table>
  )
}

export default Drivers