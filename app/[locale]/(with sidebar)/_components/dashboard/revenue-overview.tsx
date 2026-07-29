"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts'
import { revenueData } from "../../_data/sample-data"

type Timeframe = "daily" | "weekly" | "monthly"
export const RevenueOverview = () => {
    const [revenueTimeframe, setRevenueTimeframe] = useState<Timeframe>("weekly")
  return (
    <Card className="col-span-1">
    <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <div className="flex items-center space-x-2">
            <Button
                variant={revenueTimeframe === "daily" ? "default" : "outline"}
                size="sm"
                onClick={() => setRevenueTimeframe("daily")}
            >
                Daily
            </Button>
            <Button
                variant={revenueTimeframe === "weekly" ? "default" : "outline"}
                size="sm"
                onClick={() => setRevenueTimeframe("weekly")}
            >
                Weekly
            </Button>
            <Button
                variant={revenueTimeframe === "monthly" ? "default" : "outline"}
                size="sm"
                onClick={() => setRevenueTimeframe("monthly")}
            >
                Monthly
            </Button>
        </div>
    </CardHeader>
    <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={revenueData[revenueTimeframe]}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${value}`, 'Revenue']} />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    </CardContent>
</Card>
  )
}
