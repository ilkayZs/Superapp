import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className=' bg-black'>
        <div className='max-w-7xl lg:mx-auto p-2 md:px-10 xl:px-0 w-full flex justify-between items-center flex-col gap-4 text-center sm:flex-row'>
           <div className=''>
            <Link href="/" className=''>
            <Image
            className='rounded-md border border-[#7ed957]/70'
            src="/assets/logo.png"
            width={40}
            height={40}
            alt='SuperApp Logo'
            />
            </Link>
            </div>
            <div className='flex md:flex-row flex-col gap-4 md:gap-12 md:ml-40'>
            <Link href="/about" className='text-white hover:text-[#7ed957] text-sm transition-all duration-150 py-2'>
            About
            </Link>
            <Link href="/pricing"  className='text-white hover:text-[#7ed957] text-sm transition-all duration-150 py-2'>
            Pricing          
            </Link>
            <Link href="/contact"  className='text-white hover:text-[#7ed957] text-sm transition-all duration-150 py-2'>
            Contact
            </Link>
            <Link href="/faqs"  className='text-white hover:text-[#7ed957] text-sm transition-all duration-150 py-2'>
            FAQ
            </Link>
            </div>
            <p  className='text-white'>2024 SuperApp. All Rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer