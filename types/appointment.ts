export type AppointmentStatus = "pending" | "confirmed" | "cancelled"

export interface Appointment {
  _id: string
  patientName: string
  phoneNumber: string
  email?: string
  message?: string
  department?: string
  selectedDoctor?: string
  appointmentDate?: string
  timeSlot?: string
  insurance?: string
  emergency: boolean
  status: AppointmentStatus
  createdAt: string
  updatedAt: string
}
