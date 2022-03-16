import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import Layout from '@components/Layout'
import { useRouter } from 'next/router'

const Page: NextPage = () => {

  const router = useRouter()

  useEffect(() => {
    router.push('/', undefined, { shallow: true })
  },[])

  return (
    <Layout>
      
    </Layout>
  )
}

export default Page
