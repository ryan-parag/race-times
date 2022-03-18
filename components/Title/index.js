import React from 'next'

const Title = ({type, label, children}) => {
  return(
    <div className={`flex items-center justify-between ${type !== 'subtitle' && 'pb-2 border-b border-gray-100 dark:border-gray-600'}`}>
      <h1 className={`${type === 'subtitle' ? 'text-sm font-normal text-gray-400' : 'text-lg font-bold text-inherit'}`}>{label}</h1>
      {children}
    </div>
  )
}

export default Title