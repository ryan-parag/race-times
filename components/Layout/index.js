import React from 'react'
import Header from '@components/Header'
import { motion } from 'framer-motion'
import Head from 'next/head'

const Layout = ({ children }) => {
  return(
    <>
      <Head>
        <title>Race Times</title>
        <meta name="title" content="Race Times"/>
        <meta name="description" content="A directory of translated race times, schedules, and leaderboards"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://race-times.vercel.app/"/>
        <meta property="og:title" content="Race Times"/>
        <meta property="og:description" content="A directory of translated race times, schedules, and leaderboards"/>
        <meta property="og:image" content="/social-media.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://race-times.vercel.app/"/>
        <meta property="twitter:title" content="Race Times"/>
        <meta property="twitter:description" content="A directory of translated race times, schedules, and leaderboards"/>
        <meta property="twitter:image" content="/social-media.png"/>
      </Head>
      <Header/>
      <main className="relative z-10 pt-16 flex w-full flex-col items-center">
        {children}
      </main>
    </>
  )
}

export default Layout