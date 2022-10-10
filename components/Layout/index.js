import React from 'react'
import Header from '@components/Header'
import { motion } from 'framer-motion'

const Layout = ({ children }) => {
  return(
    <>
      <Header/>
        <motion.div
          className="fixed z-0 w-96 h-96 rounded-full bg-gradient-to-r from-info-500 to-primary-500 transform rotate-45 blur-3xl opacity-10 md:opacity-20 top-0 left-0"
          animate={{ transform: 'rotate(135deg)' }}
          transition={{ duration: 2, delay: 0.1 }}
        />
        <motion.div
          className="h-80 w-80 fixed z-0 rounded-full bg-gradient-to-r from-primary-500 to-info-500 transform rotate-60 blur-3xl opacity-10 md:opacity-10 -bottom-20 -right-20"
          animate={{ transform: 'rotate(135deg)' }}
          transition={{ duration: 2, delay: 0.3 }}
        />
      <main className="relative z-10 pt-16 flex w-full flex-col items-center">
        {children}
      </main>
    </>
  )
}

export default Layout