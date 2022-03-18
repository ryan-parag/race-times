import React from 'react'
import Header from '@components/Header'

const Layout = ({ children }) => {
  return(
    <>
      <Header/>
      <main className="pt-16 flex w-full flex-col items-center">
        <div className="px-4 py-12 w-full md:w-3/4 lg:w-1/2">
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout