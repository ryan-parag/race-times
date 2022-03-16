import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Tag from '@components/Tag'

const Page: NextPage = () => {

  return (
    <Layout>
      About
      <Tag type={'primary'}>Sup</Tag>
    </Layout>
  )
}

export default Page
