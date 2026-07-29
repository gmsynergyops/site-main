'use client'

import React from 'react'
import { ImageWithFallback } from '@/components/global/ImageWithFallback'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Syringe,
  Radiation,
  Pill,
  HeartPulse,
  Landmark,
  FlaskConical,
} from 'lucide-react'

const treatments = [
  {
    title: 'Surgery',
    description:
      'Physically removes the tumor from the body. Often used when cancer is localized and hasn’t spread.',
    icon: <Landmark className="text-sky-600" />,
  },
  {
    title: 'Radiation Therapy',
    description:
      'Uses high-energy rays to kill cancer cells or shrink tumors. Can be external or internal.',
    icon: <Radiation className="text-amber-600" />,
  },
  {
    title: 'Chemotherapy',
    description:
      'Involves powerful drugs that target and destroy rapidly dividing cancer cells.',
    icon: <Syringe className="text-red-600" />,
  },
  {
    title: 'Targeted Therapy',
    description:
      'Uses drugs to target specific genes or proteins involved in cancer growth.',
    icon: <FlaskConical className="text-indigo-600" />,
  },
  {
    title: 'Immunotherapy',
    description:
      'Helps your immune system recognize and fight cancer more effectively.',
    icon: <HeartPulse className="text-green-600" />,
  },
  {
    title: 'Hormone Therapy',
    description:
      'Blocks or removes hormones that fuel certain cancers like breast and prostate cancer.',
    icon: <Pill className="text-pink-500" />,
  },
]

export const TreatmentOptions = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <ImageWithFallback
          fallbackSrc="/fallback-image.webp"
          src="/images/treatment-options.webp"
          alt="Medical team discussing cancer treatment strategies"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <div className="text-white space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">Cancer Treatment Options</h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the latest and most effective treatment methods available today.
            </p>
          </div>
        </div>
      </section>

      <main className="px-6 py-16 max-w-6xl mx-auto space-y-16">
        {/* Intro */}
        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold">Personalized Cancer Care</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Cancer treatment is tailored to the type, stage, and genetics of the disease, as well as your health and preferences. Learn about each major option available.
          </p>
        </section>

        <Separator />

        {/* Treatment Options */}
        <section className="space-y-8">
          <h3 className="text-2xl font-semibold text-center">Main Treatment Methods</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow border border-muted rounded-xl bg-gray-100 py-0"
              >
                <CardContent className="p-6 space-y-4">
                <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    {treatment.icon}
                  </div>
                  <h4 className="text-lg font-semibold">{treatment.title}</h4>
                </div>
                  <p className="text-sm text-gray-700">{treatment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
