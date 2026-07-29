"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Bed,
    Calendar,
    FlaskConical,
    Receipt,
    UserCheck
} from 'lucide-react'


export const RecentActivity = () => {
    return (
        <Card className="col-span-1">
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-80 pr-4">
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 p-2 rounded-full">
                                <Calendar className="h-4 w-4 text-blue-600" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium">Appointment booked</p>
                                <p className="text-xs text-gray-500">Dr. Sarah Johnson with patient Robert Miller for Cardiology consultation</p>
                                <p className="text-xs text-gray-400">12 minutes ago</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-green-100 p-2 rounded-full">
                                <Bed className="h-4 w-4 text-green-600" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium">Patient admitted</p>
                                <p className="text-xs text-gray-500">Emily Wilson admitted to ICU under Dr. Michael Chang</p>
                                <p className="text-xs text-gray-400">45 minutes ago</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-purple-100 p-2 rounded-full">
                                <Receipt className="h-4 w-4 text-purple-600" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium">Payment received</p>
                                <p className="text-xs text-gray-500">₹1,850 from Insurance for patient Thomas Lee</p>
                                <p className="text-xs text-gray-400">1 hour ago</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-yellow-100 p-2 rounded-full">
                                <FlaskConical className="h-4 w-4 text-yellow-600" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium">Lab results available</p>
                                <p className="text-xs text-gray-500">Blood work results for patient Sophia Martinez</p>
                                <p className="text-xs text-gray-400">1 hour ago</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-red-100 p-2 rounded-full">
                                <Bed className="h-4 w-4 text-red-600" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium">Patient discharged</p>
                                <p className="text-xs text-gray-500">James Brown discharged after 5 days stay</p>
                                <p className="text-xs text-gray-400">2 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 p-2 rounded-full">
                                <UserCheck className="h-4 w-4 text-blue-600" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium">New doctor registered</p>
                                <p className="text-xs text-gray-500">Dr. Rebecca Torres joined Neurology department</p>
                                <p className="text-xs text-gray-400">3 hours ago</p>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    )
}
