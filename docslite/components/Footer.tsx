import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer mt-8 md:mt-16 py-4 px-4 md:px-12'>
      <hr className='border-t-[1px] border-neutral-500 mb-4' />
      <div className='flex flex-col md:flex-row justify-between items-center px-4'>
        <Link href='/' className='md:flex-1'>
          DocsLite
        </Link>

        <Link
          href='https://leelaprasadbantu.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white text-sm md:text-md font-semibold'
        >
          © Leela Prasad Bantu
        </Link>
      </div>
    </div>
  )
}

export default Footer
