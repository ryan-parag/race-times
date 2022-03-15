import React from 'react'
import Link from 'next/link'
import Logo from '@components/Logo'

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
        <Link href={'/schedule'}>
          <a className={'pr-2 inline-flex'}>
            Schedule
          </a>
        </Link>
        <Link href={'/standings'}>
          <a className={'pr-2 inline-flex'}>
            Standings
          </a>
        </Link>
      </div>
      <div className={'w-full flex justify-end'}>
        <Link href={'/about'}>
          <a className={'inline-flex'}>
            About
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Header