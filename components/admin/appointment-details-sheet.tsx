"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Appointment } from "@/types/appointment"
import {
  CalendarDays,
  Clock,
  Mail,
  Phone,
  User,
  Building,
  Stethoscope,
  MessageSquare,
  AlertTriangle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { toast } from "sonner"

interface AppointmentDetailsSheetProps {
  appointment: Appointment | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onStatusChange?: (id: string, status: string) => void
}

export function AppointmentDetailsSheet({
  appointment,
  open,
  onOpenChange,
//   onStatusChange,
}: AppointmentDetailsSheetProps) {
  const [status, setStatus] = useState<string>(appointment?.status || "")

  if (!appointment) return null

const handleStatusChange = async (newStatus: string) => {
  setStatus(newStatus) // Update UI immediately
  if (!appointment) return

  try {
    const res = await fetch(`/api/appointments/${appointment._id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })

    if (!res.ok) throw new Error("Failed to update status")
  } catch (error) {
    console.error(error)
    toast.error("Could not update status")
  }
}


  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-xl overflow-y-auto">
        <SheetHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div>
              <SheetTitle className="text-2xl font-bold tracking-tight">
                Appointment Details
              </SheetTitle>
              <SheetDescription className="mt-1 text-base">
                Submitted on{" "}
                <span className="font-medium text-foreground">
                  {new Date(appointment.createdAt).toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </SheetDescription>
            </div>
            {appointment.emergency && (
              <Badge
                variant="destructive"
                className="gap-1.5 px-3 py-1.5 text-sm font-semibold animate-pulse"
              >
                <AlertTriangle className="h-3.5 w-3.5" />
                Emergency
              </Badge>
            )}
          </div>
        </SheetHeader>

        <Separator className="my-6" />

        {/* Patient Info */}
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <User className="h-5 w-5 text-primary" />
            Patient Information
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <DetailWithIcon
              icon={<User className="h-4 w-4" />}
              label="Full Name"
              value={appointment.patientName}
            />
            <DetailWithIcon
              icon={<Phone className="h-4 w-4" />}
              label="Phone Number"
              value={appointment.phoneNumber}
              actions={[
                { label: "Call", href: `tel:${appointment.phoneNumber}` },
              ]}
            />
            <DetailWithIcon
              icon={<Mail className="h-4 w-4" />}
              label="Email Address"
              value={appointment.email}
              spanFull
              actions={[
                { label: "Email", href: `mailto:${appointment.email}` },
              ]}
            />
          </div>
        </div>

        {/* Appointment Details */}
        <div className="rounded-lg border bg-card p-4 shadow-sm mt-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <CalendarDays className="h-5 w-5 text-primary" />
            Appointment Details
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <DetailWithIcon
              icon={<Building className="h-4 w-4" />}
              label="Department"
              value={appointment.department}
            />
            <DetailWithIcon
              icon={<Stethoscope className="h-4 w-4" />}
              label="Doctor"
              value={appointment.selectedDoctor}
            />
            <DetailWithIcon
              icon={<CalendarDays className="h-4 w-4" />}
              label="Date"
              value={
                appointment.appointmentDate
                  ? new Date(appointment.appointmentDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : undefined
              }
            />
            <DetailWithIcon
              icon={<Clock className="h-4 w-4" />}
              label="Time Slot"
              value={appointment.timeSlot}
            />
          </div>

          {/* Status Action */}
          <div className="mt-4 flex items-center gap-4">
            <span className="text-sm font-medium text-muted-foreground">Update Status:</span>
            <Select value={status} onValueChange={handleStatusChange}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Message */}
        {appointment.message && (
          <div className="rounded-lg border bg-card p-4 shadow-sm mt-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <MessageSquare className="h-5 w-5 text-primary" />
              Patient Message
            </h3>
            <div className="rounded-md bg-muted/50 p-4">
              <p className="whitespace-pre-line text-foreground leading-relaxed">
                {appointment.message}
              </p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

function DetailWithIcon({
  icon,
  label,
  value,
  spanFull = false,
  actions,
}: {
  icon: React.ReactNode
  label: string
  value?: string
  spanFull?: boolean
  actions?: { label: string; href: string }[]
}) {
  if (!value) return null

  return (
    <div className={cn("space-y-1.5", spanFull && "md:col-span-2")}>
      <div className="flex items-center gap-2">
        <div className="text-muted-foreground">{icon}</div>
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
      </div>
      <div className="flex items-center gap-2 pl-6">
        <p className="text-base font-semibold text-foreground truncate">{value}</p>
        {actions?.map((action) => (
          <Button
            key={action.label}
            variant="outline"
            size="sm"
            asChild
          >
            <a href={action.href}>{action.label}</a>
          </Button>
        ))}
      </div>
    </div>
  )
}
