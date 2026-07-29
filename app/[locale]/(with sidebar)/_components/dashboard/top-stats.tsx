"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
    Ambulance,
    Bed,
    CalendarDays,
    FlaskConical,
    IndianRupee,
    Receipt,
    Stethoscope,
    Users
} from 'lucide-react'


export const TopStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">Patients</CardTitle>
        <Users className="h-4 w-4 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">1,248</div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <div>Today: 78</div>
          <div>This Month: 412</div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">Appointments</CardTitle>
        <CalendarDays className="h-4 w-4 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">42</div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <div>Today: 42</div>
          <div>Upcoming: 156</div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">Doctors</CardTitle>
        <Stethoscope className="h-4 w-4 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">86</div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <div>Active: 32</div>
          <div>On Leave: 6</div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">Revenue</CardTitle>
        <IndianRupee className="h-4 w-4 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">₹42,580</div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <div>Today: ₹8,250</div>
          <div>This Month: ₹142K</div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">Bed Capacity</CardTitle>
        <Bed className="h-4 w-4 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">107 / 150</div>
        <Progress className="mt-2" value={71} />
        <div className="mt-2 text-xs text-gray-500">71% Occupancy</div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">Lab Tests</CardTitle>
        <FlaskConical className="h-4 w-4 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">36</div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <div>Today: 36</div>
          <div>Pending: 24</div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">Bills Generated</CardTitle>
        <Receipt className="h-4 w-4 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">124</div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <div>Today: 27</div>
          <div>Pending: 18</div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">Emergency Cases</CardTitle>
        <Ambulance className="h-4 w-4 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">8</div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <div>Critical: 3</div>
          <div>Stabilized: 5</div>
        </div>
      </CardContent>
    </Card>
  </div>
  )
}
