"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Bed
} from 'lucide-react'
import { bedOccupancyData } from "../../_data/sample-data"

export const AppointmentsAndBedManagement = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Appointment Overview */}
    <Card className="col-span-1">
        <CardHeader>
            <CardTitle>Today&apos;s Appointments</CardTitle>
            <CardDescription>28 appointments scheduled for today</CardDescription>
        </CardHeader>
        <CardContent>
            <ScrollArea className="h-72 pr-4">
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-md">
                        <div className="flex items-center space-x-3">
                            <Avatar>
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">John Doe</p>
                                <p className="text-xs text-gray-500">Cardiologist Consultation</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm">9:00 AM</p>
                            <Badge>Confirmed</Badge>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-md">
                        <div className="flex items-center space-x-3">
                            <Avatar>
                                <AvatarFallback>AS</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">Amelia Smith</p>
                                <p className="text-xs text-gray-500">Pediatric Checkup</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm">10:30 AM</p>
                            <Badge>Confirmed</Badge>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-md">
                        <div className="flex items-center space-x-3">
                            <Avatar>
                                <AvatarFallback>RJ</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">Robert Johnson</p>
                                <p className="text-xs text-gray-500">Orthopedic Follow-up</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm">11:15 AM</p>
                            <Badge variant="outline">Checked In</Badge>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-md">
                        <div className="flex items-center space-x-3">
                            <Avatar>
                                <AvatarFallback>EW</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">Emma Wilson</p>
                                <p className="text-xs text-gray-500">Dermatology Consultation</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm">1:00 PM</p>
                            <Badge>Confirmed</Badge>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-md">
                        <div className="flex items-center space-x-3">
                            <Avatar>
                                <AvatarFallback>MB</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">Michael Brown</p>
                                <p className="text-xs text-gray-500">Neurology Consultation</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm">2:45 PM</p>
                            <Badge>Confirmed</Badge>
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </CardContent>
    </Card>

    {/* Bed Management Summary */}
    <Card className="col-span-1">
        <CardHeader>
            <CardTitle>Bed Management Summary</CardTitle>
            <CardDescription>150 total beds across all wards</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-6">
                {bedOccupancyData.map((item, index) => (
                    <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <Bed className="h-4 w-4" />
                                <span className="font-medium">{item.name}</span>
                            </div>
                            <span className="text-sm">
                                {item.occupied} / {item.total} ({Math.round((item.occupied / item.total) * 100)}%)
                            </span>
                        </div>
                        <Progress value={(item.occupied / item.total) * 100} />
                    </div>
                ))}

                <div className="mt-6">
                    <Button variant="outline" className="w-full">View Detailed Bed Management</Button>
                </div>
            </div>
        </CardContent>
    </Card>
</div>
  )
}
