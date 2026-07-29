import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/card'
import { ComponentPropsWithoutRef } from 'react'
import { WrittenTestimonial } from '@/types'

interface PatientSpeaksWrittenTestimonialCardProps
  extends ComponentPropsWithoutRef<'div'> {
  testimonial: WrittenTestimonial
}

const PatientSpeaksWrittenTestimonialCard: React.FC<
  PatientSpeaksWrittenTestimonialCardProps
> = ({ testimonial }) => {
  if (!testimonial) return null

  return (
    <Card
      className="rounded-2xl
        max-w-[560px] min-w-[450px]
        h-[180px] md:h-[220px] lg:h-[240px]
        overflow-hidden bg-white border-none m-0 py-0"
    >
      <div className="size-full px-4 py-4 md:px-5 md:py-6 lg:px-6 lg:py-8 shadow-blob rounded-2xl relative space-y-3 md:space-y-4">
        <CardHeader className="p-0">
          <CardTitle className="text-lg md:text-xl lg:text-2xl text-primary font-semibold w-max">
            {testimonial.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0 w-full">
          <CardDescription className="text-sm md:text-base text-slate-600 leading-snug md:leading-normal line-clamp-4">
            {testimonial.description}
          </CardDescription>
        </CardContent>

        <p className="font-semibold text-xs md:text-sm absolute bottom-4 right-4 text-primary">
          – {testimonial.name}
        </p>
      </div>
    </Card>
  )
}

export default PatientSpeaksWrittenTestimonialCard
