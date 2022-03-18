import React from 'react'
import { Flag } from 'react-feather'

const EmptyState = ({ label }) => {
  return(
    <div className="text-center flex flex-col items-center px-4 py-6 rounded-md bg-gray-0 dark:bg-gray-800 text-mono-black-60 dark:text-mono-white-60">
      <Flag size={'32'} className="-rotate-12" />
      <p className="text-sm mt-4">{label}</p>
    </div>
  )
}

export default EmptyState