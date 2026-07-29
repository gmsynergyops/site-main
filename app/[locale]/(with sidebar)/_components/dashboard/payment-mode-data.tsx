"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import {
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip
} from 'recharts'
import { COLORS, paymentModeData } from "../../_data/sample-data"

export const PaymentModeData = () => {
  return (
    <Card className="col-span-1">
    <CardHeader>
        <CardTitle>Payment Breakdown</CardTitle>
        <CardDescription>Payment modes distribution</CardDescription>
    </CardHeader>
    <CardContent className="h-80">
        <div className="flex justify-center items-center h-full">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={paymentModeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
                    >
                        {paymentModeData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </CardContent>
</Card>
  )
}
