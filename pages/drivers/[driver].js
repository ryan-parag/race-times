import React from 'react'
import { useRouter } from "next/router"
import Layout from '@components/Layout'
import Profile from '@components/Profile'

const Page = () => {

  const router = useRouter();
  const { driver } = router.query;

  return (
    <Layout>
      <Profile id={driver}/>
    </Layout>
  )
}

export default Page