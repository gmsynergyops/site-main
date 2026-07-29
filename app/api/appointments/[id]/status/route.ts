import { connectDB } from "@/lib/mongodb"
import { Appointment } from "@/models/Appointment"
import { NextRequest, NextResponse } from "next/server"

type Params = {
  params: Promise<{
    id: string
  }>
}

export async function PATCH(req: NextRequest, context: Params) {
  try {
    await connectDB()

    const { id } = await context.params
    const { status } = await req.json()

    if (!["pending", "confirmed", "cancelled"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 })
    }

    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    )

    if (!appointment) {
      return NextResponse.json({ error: "Appointment not found" }, { status: 404 })
    }

    return NextResponse.json({ appointment })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}