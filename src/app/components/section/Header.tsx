'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='w-full bg-black'>
      <div className='flex items-center justify-between max-w-7xl mx-auto p-4 md:px-10 xl:px-0 w-full'>
        <Link href="/" className='border border-[#7ed957]/70 rounded-md'>
          <Image
            className='rounded-md'
            src="/assets/logo.png"
            width={40}
            height={40}
            alt='SuperApp Logo'
          />
        </Link>

        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-12'>
          <Link href="/about" className='text-white hover:text-[#7ed957] text-sm transition-all duration-150'>
            About
          </Link>
          <Link href="/pricing" className='text-white hover:text-[#7ed957] text-sm transition-all duration-150'>
            Pricing
          </Link>
          <Link href="/contact" className='text-white hover:text-[#7ed957] text-sm transition-all duration-150'>
            Contact
          </Link>
        </nav>

        <Link href="/sign-in" className='hidden md:block p-2 rounded-md bg-[#7ed957]/90 text-white hover:bg-[#74d849] transition-all duration-150'>
          Sign-in
        </Link>

        {/* Mobile Menu Button */}
        <button className='md:hidden text-white' onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-black'>
          <nav className='flex flex-col items-center py-4'>
            <Link href="/about" className='text-white hover:text-[#7ed957] text-sm transition-all duration-150 py-2'>
              About
            </Link>
            <Link href="/pricing" className='text-white hover:text-[#7ed957] text-sm transition-all duration-150 py-2'>
              Pricing
            </Link>
            <Link href="/Contact" className='text-white hover:text-[#7ed957] text-sm transition-all duration-150 py-2'>
              Contact
            </Link>
            <Link href="/sign-in" className='mt-4 p-2 rounded-md bg-[#7ed957]/90 text-white hover:bg-[#74d849] transition-all duration-150'>
              Sign-in
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header