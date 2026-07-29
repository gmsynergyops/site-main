"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
    Activity,
    Bed,
    Calendar,
    Clock,
    LogIn,
    Receipt
} from 'lucide-react'
import { AppointmentsAndBedManagement } from "../_components/dashboard/appointments-and-bed-management"
import { ChartsAndActivities } from "../_components/dashboard/charts-and-activities"
import { DepartmentWiseSummary } from "../_components/dashboard/department-wise-summary"
import { NotificationAlters } from "../_components/dashboard/notification-alerts"
import { PaymentModeData } from "../_components/dashboard/payment-mode-data"
import { TopStats } from "../_components/dashboard/top-stats"

const AdminOnlyDashboardPage = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Hospital Dashboard</h1>
                <p className="text-gray-500">Welcome back, Admin. Here&apos;s what&apos;s happening today.</p>
            </div>

            {/* Top Stats / KPIs */}
            <TopStats />

            {/* Middle Section - Charts and Activity */}
            <ChartsAndActivities />

            {/* Third Row - Appointments and Bed Management */}
            <AppointmentsAndBedManagement />

            {/* Fourth Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Department-wise Summary */}
                <DepartmentWiseSummary />

                {/* Payment Mode Data */}
                <PaymentModeData />

                {/* Notifications / Alerts */}
                <NotificationAlters/>
            </div>

            {/* Fifth Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Doctor & Staff Overview */}
                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>Current Shift Overview</CardTitle>
                        <CardDescription>Doctors & staff on duty right now</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-72 pr-4">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
                                    <div className="flex items-center space-x-3">
                                        <Avatar>
                                            <AvatarFallback>JL</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium">Dr. John Lee</p>
                                            <p className="text-xs text-gray-500">Cardiology</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Badge className="bg-green-500">On Duty</Badge>
                                        <p className="text-xs text-gray-500 mt-1">8:00 AM - 5:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
                                    <div className="flex items-center space-x-3">
                                        <Avatar>
                                            <AvatarFallback>SP</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium">Dr. Sarah Peterson</p>
                                            <p className="text-xs text-gray-500">Neurology</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Badge className="bg-green-500">On Duty</Badge>
                                        <p className="text-xs text-gray-500 mt-1">9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
                                    <div className="flex items-center space-x-3">
                                        <Avatar>
                                            <AvatarFallback>TW</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium">Dr. Tom Wilson</p>
                                            <p className="text-xs text-gray-500">Pediatrics</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Badge className="bg-green-500">On Duty</Badge>
                                        <p className="text-xs text-gray-500 mt-1">8:00 AM - 4:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
                                    <div className="flex items-center space-x-3">
                                        <Avatar>
                                            <AvatarFallback>EC</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium">Dr. Emma Chen</p>
                                            <p className="text-xs text-gray-500">Orthopedics</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Badge variant="outline">Off Duty</Badge>
                                        <p className="text-xs text-gray-500 mt-1">Next: Tomorrow, 7:00 AM</p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
                                    <div className="flex items-center space-x-3">
                                        <Avatar>
                                            <AvatarFallback>NJ</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium">Nurse Jessica Parker</p>
                                            <p className="text-xs text-gray-500">ICU</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Badge className="bg-green-500">On Duty</Badge>
                                        <p className="text-xs text-gray-500 mt-1">7:00 AM - 7:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>

                {/* System Logs / Patient Feedback */}
                <Tabs defaultValue="feedback" className="col-span-1">
                    <CardHeader className="p-6 pb-2">
                        <div className="flex items-center justify-between">
                            <CardTitle>System Activity</CardTitle>
                            <TabsList>
                                <TabsTrigger value="feedback">Feedback</TabsTrigger>
                                <TabsTrigger value="logs">System Logs</TabsTrigger>
                            </TabsList>
                        </div>
                    </CardHeader>

                    <TabsContent value="feedback" className="p-6 pt-2">
                        <ScrollArea className="h-72 pr-4">
                            <div className="space-y-4">
                                <div className="p-3 bg-slate-50 rounded-md">
                                    <div className="flex items-start space-x-3">
                                        <Avatar>
                                            <AvatarFallback>RM</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="flex items-center">
                                                <p className="font-medium">Richard Moore</p>
                                                <div className="flex ml-2">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <span key={star} className="text-yellow-400">★</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-sm mt-1">Excellent care from Dr. Wilson. The staff was very attentive and professional. I felt comfortable throughout my entire stay.</p>
                                            <p className="text-xs text-gray-400 mt-1">2 hours ago - Orthopedics Dept.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 bg-slate-50 rounded-md">
                                    <div className="flex items-start space-x-3">
                                        <Avatar>
                                            <AvatarFallback>AJ</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="flex items-center">
                                                <p className="font-medium">Alice Johnson</p>
                                                <div className="flex ml-2">
                                                    {[1, 2, 3].map((star) => (
                                                        <span key={star} className="text-yellow-400">★</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-sm mt-1">Had to wait over an hour past my appointment time. The doctor was good but the wait time was unacceptable.</p>
                                            <p className="text-xs text-gray-400 mt-1">Yesterday - Cardiology Dept.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 bg-slate-50 rounded-md">
                                    <div className="flex items-start space-x-3">
                                        <Avatar>
                                            <AvatarFallback>SG</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="flex items-center">
                                                <p className="font-medium">Sarah Garcia</p>
                                                <div className="flex ml-2">
                                                    {[1, 2, 3, 4].map((star) => (
                                                        <span key={star} className="text-yellow-400">★</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-sm mt-1">Pediatrics department was wonderful with my daughter. Dr. Lee made her feel at ease during her checkup.</p>
                                            <p className="text-xs text-gray-400 mt-1">2 days ago - Pediatrics Dept.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 bg-slate-50 rounded-md">
                                    <div className="flex items-start space-x-3">
                                        <Avatar>
                                            <AvatarFallback>BT</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="flex items-center">
                                                <p className="font-medium">Brandon Thompson</p>
                                                <div className="flex ml-2">
                                                    {[1, 2].map((star) => (
                                                        <span key={star} className="text-yellow-400">★</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-sm mt-1">Billing department made several errors on my invoice. Had to make multiple calls to get it sorted out.</p>
                                            <p className="text-xs text-gray-400 mt-1">3 days ago - Billing Dept.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>
                    </TabsContent>

                    <TabsContent value="logs" className="p-6 pt-2">
                        <ScrollArea className="h-72 pr-4">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 p-2 border-b">
                                    <LogIn className="h-4 w-4 text-blue-500" />
                                    <div>
                                        <p className="text-sm">Admin user logged in</p>
                                        <p className="text-xs text-gray-500">admin@hospital.com | 09:12 AM</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 p-2 border-b">
                                    <Activity className="h-4 w-4 text-green-500" />
                                    <div>
                                        <p className="text-sm">Patient record updated</p>
                                        <p className="text-xs text-gray-500">ID: P-4582 | 09:34 AM | Dr. Wilson</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 p-2 border-b">
                                    <Receipt className="h-4 w-4 text-purple-500" />
                                    <div>
                                        <p className="text-sm">Invoice generated</p>
                                        <p className="text-xs text-gray-500">INV-2839 | ₹1,850 | 10:01 AM</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 p-2 border-b">
                                    <Calendar className="h-4 w-4 text-blue-500" />
                                    <div>
                                        <p className="text-sm">Appointment rescheduled</p>
                                        <p className="text-xs text-gray-500">ID: A-3829 | 10:15 AM | Front Desk</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 p-2 border-b">
                                    <LogIn className="h-4 w-4 text-blue-500" />
                                    <div>
                                        <p className="text-sm">Doctor logged in</p>
                                        <p className="text-xs text-gray-500">dr.lee@hospital.com | 10:30 AM</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 p-2 border-b">
                                    <Clock className="h-4 w-4 text-yellow-500" />
                                    <div>
                                        <p className="text-sm">Shift change recorded</p>
                                        <p className="text-xs text-gray-500">Nurses Station 2 | 11:00 AM</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3 p-2 border-b">
                                    <Bed className="h-4 w-4 text-green-500" />
                                    <div>
                                        <p className="text-sm">Bed status updated</p>
                                        <p className="text-xs text-gray-500">Room 305 | Available | 11:22 AM</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default AdminOnlyDashboardPage
