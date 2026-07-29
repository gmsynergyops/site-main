"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

import {
    AlertTriangle,
    Clock,
    FlaskConical,
    Receipt
} from 'lucide-react'

export const NotificationAlters = () => {
  return (
    <Card className="col-span-1">
    <CardHeader>
        <CardTitle>Alerts & Notifications</CardTitle>
        <CardDescription>Items that need your attention</CardDescription>
    </CardHeader>
    <CardContent>
        <ScrollArea className="h-72 pr-4">
            <div className="space-y-4">
                <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Critical Medicine Shortage</AlertTitle>
                    <AlertDescription>
                        Insulin stock is below threshold (5 units remaining)
                    </AlertDescription>
                </Alert>

                <Alert>
                    <FlaskConical className="h-4 w-4" />
                    <AlertTitle>24 Pending Lab Reports</AlertTitle>
                    <AlertDescription>
                        Some reports are overdue by more than 24 hours
                    </AlertDescription>
                </Alert>

                <Alert>
                    <Receipt className="h-4 w-4" />
                    <AlertTitle>18 Pending Bills</AlertTitle>
                    <AlertDescription>
                        Total pending amount: ₹24,750
                    </AlertDescription>
                </Alert>

                <Alert>
                    <Clock className="h-4 w-4" />
                    <AlertTitle>3 Overdue Discharges</AlertTitle>
                    <AlertDescription>
                        Patients ready for discharge but paperwork pending
                    </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>System Maintenance</AlertTitle>
                    <AlertDescription>
                        Scheduled downtime today at 11:00 PM for 30 minutes
                    </AlertDescription>
                </Alert>
            </div>
        </ScrollArea>
    </CardContent>
</Card>
  )
}
