import React, { PropsWithChildren } from 'react'
import { DashboardNavbar } from './_components/dashboard-navbar'
import { DashboardSidebar } from './_components/dashboard-sidebar'

const WithSidebar = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Fixed sidebar */}
            <div className="h-screen flex-shrink-0">
                <DashboardSidebar />
            </div>

            {/* Main content area with fixed navbar and scrollable content */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Fixed navbar */}
                <div className="flex-shrink-0">
                    <DashboardNavbar />
                </div>

                {/* Scrollable content area */}
                <div className="flex-1 overflow-auto p-5 bg-slate-50">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default WithSidebar
