"use client"
import { LayoutDashboardIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { sidebarItems } from '../_data/sidebar-items'

export const DashboardNavbar = () => {
    const pathname = usePathname()
    const lastPathSegment = pathname.split('/').pop() || ''

    const currentItem = sidebarItems.find(item =>
        lastPathSegment.toLowerCase() === item.title.toLowerCase() ||
        (lastPathSegment === '' && item.title.toLowerCase() === 'dashboard')
    )

    const Icon = currentItem?.icon || LayoutDashboardIcon

    return (
        <div className=" z-10 bg-white border-b flex items-center justify-between px-5 py-5">
            <div className="flex gap-3 max-w-fit items-center">
                <Icon className="size-7 " />
                <p className='text-xl font-medium font-display capitalize'>
                    {lastPathSegment || 'Dashboard'}
                </p>
            </div>
            <div className="">
                <Link href={'/'} className='hover:underline underline-offset-2'>Go to Client</Link>
            </div>
        </div>
    )
}
