import BookAppointmentForm from '@/components/forms/BookAppointmentForm'
import React, { Suspense } from 'react'

const BookAppointmentPage = () => {
  return (
    <div className=' flex items-center justify-center w-full'>
      <Suspense fallback={<div className="py-20 text-center">Loading Appointment Form...</div>}>
        <BookAppointmentForm/>
      </Suspense>
    </div>
  )
}

export default BookAppointmentPage
