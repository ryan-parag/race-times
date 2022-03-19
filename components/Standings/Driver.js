import React from 'react'
import Crown from '@components/Crown'

const TableCell = ({ children }) => {
  return(
    <td className="p-2 border-b text-sm md:text-base border-gray-100 dark:border-gray-600 text-mono-black-60 dark:text-mono-white-60">
      {children}
    </td>
  )
}

const Driver = ({data}) => {
  return(
    <tr>
      <TableCell>
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
      <TableCell>
        <div className="flex flex-col">
          <span className="font-bold text-black dark:text-white">{data.firstName} {data.lastName}</span>
          {
            data.team !== null && (
              <div className="inline-flex items-center">
                <img
                  className="w-6 h-6 rounded-full overflow-hidden bg-white p-0.5 mr-2 border border-gray-100 shadow"
                  src={`/static/teams/${data.teamId}.png`}
                  onError={(e) => (e.currentTarget.src = '/static/teams/default.png')}
                />
                <span className="text-xs">{data.team}</span>
              </div>
            )
          }
        </div>
      </TableCell>
      <TableCell>{data.wins} Win{data.wins !== 1 ? 's' : null}</TableCell>
      <TableCell>{data.points} Point{data.points !== 1 ? 's' : null}</TableCell>
    </tr>
  )
}

export default Driver