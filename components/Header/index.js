import React, { useState, Fragment, useEffect } from 'react'
import Link from 'next/link'
import Logo from '@components/Logo'
import { NavItem, MobileNavItem } from '@components/Header/NavItem'
import { motion } from 'framer-motion'
import { Listbox, Transition } from '@headlessui/react'
import { Info, GitHub } from 'react-feather';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import Tag from '@components/Tag'

const Header = () => {

  const d = new Date()
  const year = d.getFullYear()
  const [season, setSeason] = useState(year)

  const { data, error } = useSWR('/api/seasons', fetcher)

  const fetchRaces = (season) => {
    setSeason(season)
  }

  useEffect(() => {

  },[season])

  return(
    <div className="fixed border-b border-secondary w-full bg-white dark:bg-gray-900 z-50">
      <div className="px-6 py-4 layout items-center flex">
        <div className={'w-full flex-1 flex items-center justify-start'}>
          <Link href={'/'}>
            <span className="mr-2">
              <Logo type={'primary'} />
            </span>
          </Link>
        </div>
        <div className={'w-full items-center justify-end flex flex-1'}>
          <Link href={'/about'}>
            <span title={'About'} className="button button-sm mr-2">
              <Info size={20}/>
            </span>
          </Link>
          <span title={'Contribute'} href="https://github.com/ryan-parag/race-times" target="_blank" className="button button-sm">
            <GitHub size={20}/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header