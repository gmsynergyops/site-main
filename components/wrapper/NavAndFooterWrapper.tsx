"use client"
import React, { PropsWithChildren } from 'react'
import { Navbar } from '../global/Navbar'
import { Footer } from '../global/Footer'
import { Toaster } from 'sonner'
import { WhatsappReachOutButton } from '../global/WhatsappReachOutButton'


export const NavAndFooterWrapper = ({children}:PropsWithChildren) => {
  return (
    <div className='w-full'>
        <Navbar/>
        {children}
        <WhatsappReachOutButton />
        <Toaster richColors={true} duration={3000} position='top-center' className='z-[999]' />
        <Footer/>
    </div>
  )
}
