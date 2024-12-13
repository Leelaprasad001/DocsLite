import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn('header', className)}>
        <Link href='/' className='md:flex-1'>
            <Image
                src='/assets/icons/logo.svg'
                alt='Logo'
                width={130}
                height={130}
                className='hidden md:block'
            />
            <Image
                src='/assets/icons/logo-icon.svg'
                alt='Logo'
                width={30}
                height={30}
                className='mr-2 md:hidden'
            />
        </Link>
        {children}
    </div>
  )
}

export default Header