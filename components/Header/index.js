import React from 'react'
import Link from 'next/link'
import Logo from '@components/Logo'
import Tag from '@components/Tag'
import { useRouter } from 'next/router'

const NavItem = ({ label, route }) => {
  const router = useRouter()

  if(router.pathname === route) {
    return(
      <Link href={route}>
        <a className={'pr-2 inline-flex'}>
          <Tag>{label}</Tag>
        </a>
      </Link>
    )
  } else {
    return(
      <Link href={route}>
        <a className={'pr-2 inline-flex'}>
          <Tag ghost>{label}</Tag>
        </a>
      </Link>
    )
  }
}

const Header = () => {

  return(
    <div className="fixed border-b border-gray-100 dark:border-gray-700 px-6 py-4 w-full flex">
      <div className={'w-full flex justify-start'}>
        <Link href={'/'}>
          <a>
            <Logo type={'primary'} />
          </a>
        </Link>
      </div>
      <div className={'w-full flex justify-center'}>
        <NavItem label={'Schedule'} route={'/'}/>
        <NavItem label={'Standings'} route={'/standings'}/>
      </div>
      <div className={'w-full flex justify-end'}>
        <NavItem label={'About'} route={'/about'}/>
      </div>
    </div>
  )
}

export default Header