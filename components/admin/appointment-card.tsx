"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Phone, User, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Appointment } from "@/types/appointment"

interface AppointmentCardProps {
    appointment: Appointment
    onSelect: (appointment: Appointment) => void
}

export function AppointmentCard({ appointment, onSelect }: AppointmentCardProps) {
    const isEmergency = appointment.emergency

    return (
        <Card
            onClick={() => onSelect(appointment)}
            className={cn(
                "relative cursor-pointer transition hover:shadow-lg",
                appointment.emergency && "border-red-500 bg-red-50"
            )}
        >


            {isEmergency && (
                <div className="absolute top-3 right-3">
                    <Badge variant="destructive" className="flex gap-1">
                        <AlertTriangle className="h-3 w-3" />
                        Emergency
                    </Badge>
                </div>
            )}

            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                    <User className="h-4 w-4" />
                    {appointment.patientName}
                </CardTitle>

                <div className="flex gap-2 flex-wrap mt-2">
                    <Badge variant="secondary">{appointment.department ?? "General"}</Badge>
                    {appointment.status && (
                        <Badge
                            variant={
                                appointment.status === "confirmed"
                                    ? "default"
                                    : appointment.status === "cancelled"
                                        ? "destructive"
                                        : "outline"
                            }
                        >
                            {appointment.status}
                        </Badge>
                    )}
                </div>
            </CardHeader>

            <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {appointment.phoneNumber}
                </div>

                {appointment.appointmentDate && (
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(appointment.appointmentDate).toLocaleDateString()}
                    </div>
                )}

                {appointment.timeSlot && (
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {appointment.timeSlot}
                    </div>
                )}

                {appointment.selectedDoctor && (
                    <p>
                        <span className="font-medium text-foreground">Doctor:</span>{" "}
                        {appointment.selectedDoctor}
                    </p>
                )}
            </CardContent>
        </Card>
    )
}
