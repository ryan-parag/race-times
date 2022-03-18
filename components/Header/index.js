import React, { useState } from 'react'
import Link from 'next/link'
import Logo from '@components/Logo'
import { NavItem, MobileNavItem } from '@components/Header/NavItem'
import { Menu, X } from 'react-feather'
import { motion } from 'framer-motion'

const Header = () => {

  const [open, setOpen] = useState(false)

  return(
    <div className="fixed border-b border-gray-100 dark:border-gray-700 w-full bg-white dark:bg-gray-900 z-10">
      <div className="px-6 py-4 flex">
        <div className={'w-full flex justify-start'}>
          <Link href={'/'}>
            <a>
              <Logo type={'primary'} />
            </a>
          </Link>
        </div>
        <div className={'w-full justify-center hidden md:flex'}>
          <NavItem label={'Schedule'} route={'/'}/>
          <NavItem label={'Standings'} route={'/standings'}/>
        </div>
        <div className={'w-full justify-end hidden md:flex'}>
          <NavItem label={'About'} route={'/about'}/>
        </div>
        <div className={'w-full justify-end flex md:hidden'}>
          <button
            className="border border-gray-200 dark:border-gray-500 rounded-full w-8 h-8 inline-flex items-center justify-center hover:bg-gray-0 hover:dark:bg-gray-700 transition p-0"
            onClick={() => setOpen(!open)}
          >
            {
              open ? (<X size={'20'} />) : (<Menu size={'20'} />)
            }
          </button>
        </div>
      </div>
      {
        open && (
          <motion.div
            className={'flex md:hidden w-full flex-col h-0 overflow-hidden bg-white dark:bg-gray-900'}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.24, delay: 0.1 }}
          >
            <MobileNavItem label={'Schedule'} route={'/'}/>
            <MobileNavItem label={'Standings'} route={'/standings'}/>
            <MobileNavItem label={'About'} route={'/about'}/>
          </motion.div>
        )
      }
    </div>
  )
}

export default Header