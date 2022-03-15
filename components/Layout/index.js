import React from 'react'
import Header from '@components/Header'

const Layout = ({ children }) => {
  return(
    <>
      <Header/>
      <main className="px-4 pt-16">
        {children}
      </main>
    </>
  )
}

export default Layout