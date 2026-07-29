import { Schema, models, model } from "mongoose"

const AppointmentSchema = new Schema(
  {
    patientName: {
      type: String,
      required: true,
      minlength: 3,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    email: {
      type: String,
    },

    message: {
      type: String,
    },

    department: {
      type: String,
    },

    selectedDoctor: {
      type: String,
    },

    appointmentDate: {
      type: Date,
    },

    timeSlot: {
      type: String,
    },

    insurance: {
      type: String,
    },

    emergency: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
)

export const Appointment =
  models.Appointment || model("Appointment", AppointmentSchema)
