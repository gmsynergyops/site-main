import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import { Appointment } from "@/models/Appointment"

export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()

    const appointment = await Appointment.create(body)

    return NextResponse.json(
      { success: true, appointment },
      { status: 201 }
    )
  } catch (error) {
    console.error("Appointment save error:", error)

    return NextResponse.json(
      { success: false, message: "Failed to save appointment" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await connectDB()

    const appointments = await Appointment.find()
      .sort({ emergency: -1, createdAt: -1 }) // 🚨 emergency first
      .lean()

    return NextResponse.json({ appointments })
  } catch (error) {
    console.error("Fetch appointments error:", error)
    return NextResponse.json(
      { message: "Failed to fetch appointments" },
      { status: 500 }
    )
  }
}

