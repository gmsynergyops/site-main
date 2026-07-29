"use client"
import { RecentActivity } from "./recent-activity"
import { RevenueOverview } from "./revenue-overview"

export const ChartsAndActivities = () => {


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Overview */}
            <RevenueOverview />
            {/* Recent Activity */}
            <RecentActivity />
        </div>
    )
}
