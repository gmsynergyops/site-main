"use client"

import { useEffect, useState } from "react"
import { AppointmentCard } from "@/components/admin/appointment-card"
import { AppointmentDetailsSheet } from "@/components/admin/appointment-details-sheet"
import { Appointment } from "@/types/appointment"
import { Loader2 } from "lucide-react"

const AdminOnlyAppointmentsPage = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)

  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null)
  const [sheetOpen, setSheetOpen] = useState(false)

  useEffect(() => {
    const fetchAppointments = async () => {
      const res = await fetch("/api/appointments")
      const data: { appointments: Appointment[] } = await res.json()
      setAppointments(data.appointments)
      setLoading(false)
    }

    fetchAppointments()
  }, [])

const handleCardClick = (appointment: Appointment) => {
  setSelectedAppointment(appointment)
  setSheetOpen(true)
}


  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    )
  }

  return (
    <>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Appointments</h1>
          <p className="text-muted-foreground">
            Click on an appointment to view full details
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {appointments.map((appointment) => (
            <AppointmentCard
              key={appointment._id}
              appointment={appointment}
              onSelect={handleCardClick}
            />
          ))}
        </div>
      </div>

      <AppointmentDetailsSheet
        appointment={selectedAppointment}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      />
    </>
  )
}

export default AdminOnlyAppointmentsPage
