import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import Menuitem from './Menuitem'
// Suggested code may be subject to a license. Learn more: ~LicenseLog:476114764.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2982409771.
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'
import Darkmodeswitch from './Darkmodeswitch'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 m-w-6xl'>
        <div className='flex gap-4'>
          <Menuitem title="home" address='/' Icon={AiFillHome} />
          <Menuitem title="about" address="/about" Icon={BsFillInfoCircleFill} />
        </div>
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:3210819109. */}
        <div className='flex items-center gap-4'>
          
        <Darkmodeswitch />
          
        <Link href={'/'} className='flex gap-1 items-center'>
          <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
          <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
        </div>
     
    </div>
  )
}