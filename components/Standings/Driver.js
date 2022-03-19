import React from 'react'
import Crown from '@components/Crown'
import Flag from '@components/Flag'
import { motion } from 'framer-motion'

const TableCell = ({place, children }) => {

  const getPlace = place => {
    switch(place) {
      case '1':
        return 'bg-yellow-100 bg-opacity-50 dark:bg-yellow-900 dark:bg-opacity-40'
        break;
      case '2':
        return 'bg-gray-0 dark:bg-gray-800 dark:bg-opacity-40'
        break;
      case '3':
        return 'bg-warning-100 bg-opacity-30 dark:bg-warning-900 dark:bg-opacity-40'
        break;
      default:
        return 'bg-transparent'
    }
  }

  return(
    <td className={`p-2 border-b text-xs md:text-base border-gray-100 dark:border-gray-600 text-mono-black-60 dark:text-mono-white-60 ${getPlace(place)}`}>
      {children}
    </td>
  )
}

const Driver = ({data}) => {
  return(
    <>
      <TableCell place={data.position}>
        {
          data.position === '1' || data.position === '2' || data.position === '3' ? (
            <Crown place={data.position}/>
          )
          :
          (
            <div className="h-6 w-6 inline-flex items-center justify-center text-xs font-bold">{data.position}</div>
          )
        }
      </TableCell>
      <TableCell place={data.position}>
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-sm md:text-base font-bold text-black dark:text-white mr-1">{data.firstName} {data.lastName}</span>
            <div className="w-5">
              <Flag nation={data.country}/>
            </div>
          </div>
          {
            data.teams.length > 0 && (
              <div className="flex items-center">
                {
                  data.teams.map(team => (
                    <span className="text-xs mr-1">{team.name}</span>
                  ))
                }
              </div>
            )
          }
        </div>
      </TableCell>
      <TableCell place={data.position}>{data.wins} Win{data.wins !== 1 ? 's' : null}</TableCell>
      <TableCell place={data.position}>{data.points} pt{data.points !== 1 ? 's' : null}</TableCell>
    </>
  )
}

export default Driver