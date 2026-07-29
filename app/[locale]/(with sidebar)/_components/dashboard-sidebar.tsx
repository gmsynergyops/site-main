"use client"

import React, { useState } from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeftIcon, MenuIcon } from "lucide-react"
import { sidebarItems } from '../_data/sidebar-items'

export const DashboardSidebar = () => {
    const pathname = usePathname()
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div
            className={cn(
                "h-full border-r bg-white transition-all duration-300",
                collapsed ? "w-16" : "w-64"
            )}
        >
            <div className="flex items-center justify-between p-4 border-b">
                {!collapsed && (
                    <span className="text-xl font-bold">Admin Panel</span>
                )}
                <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? <MenuIcon size={20} /> : <ChevronLeftIcon size={20} />}
                </Button>
            </div>

            <ScrollArea className="h-[calc(100vh-64px)] pt-2">
                <nav className="grid gap-1 px-2">
                    {sidebarItems.map((item, index) => {
                        const isActive = pathname === item.href || pathname.endsWith(`${item.href}`)
                        const Icon = item.icon

                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-slate-100",
                                    isActive ? "bg-slate-100 text-slate-900 font-medium" : "text-slate-500",
                                    collapsed ? "justify-center" : "justify-start"
                                )}
                            >
                                <div className="flex-shrink-0">
                                    <Icon className={cn("size-5", collapsed ? "mx-0" : "mr-2")} />
                                </div>
                                {!collapsed && <span>{item.title}</span>}
                            </Link>
                        )
                    })}
                </nav>
            </ScrollArea>
        </div>
    )
}
