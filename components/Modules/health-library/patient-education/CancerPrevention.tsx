'use client'

import React from 'react'
import { ImageWithFallback } from '@/components/global/ImageWithFallback'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ShieldCheck, HeartPulse, Sun, Salad, Dumbbell, CupSoda, Syringe } from 'lucide-react'

const preventionTips: {
  title: string
  description: string
  icon: React.ReactNode
}[] = [
  {
    title: 'Avoid Tobacco',
    description:
      'Smoking and tobacco use are the leading causes of cancer. Quitting significantly reduces your risk.',
    icon: <ShieldCheck className="text-red-500" />,
  },
  {
    title: 'Eat a Healthy Diet',
    description:
      'Include fruits, vegetables, whole grains, and lean proteins. Reduce processed foods and red meats.',
    icon: <Salad className="text-green-600" />,
  },
  {
    title: 'Stay Active & Maintain Weight',
    description:
      'Obesity is linked to many cancers. Aim for regular physical activity and a balanced diet.',
    icon: <Dumbbell className="text-indigo-600" />,
  },
  {
    title: 'Limit Alcohol',
    description:
      'If you drink, do so in moderation. Excessive alcohol increases the risk of several cancers.',
    icon: <CupSoda className="text-yellow-600" />,
  },
  {
    title: 'Protect from Sun Exposure',
    description:
      'Use sunscreen, wear protective clothing, and avoid tanning beds to reduce skin cancer risk.',
    icon: <Sun className="text-orange-500" />,
  },
  {
    title: 'Get Vaccinated',
    description:
      'Vaccines like HPV and Hepatitis B can prevent infections that may lead to cancer.',
    icon: <Syringe className="text-blue-600" />,
  },
  {
    title: 'Schedule Regular Screenings',
    description:
      'Routine checkups and screenings can detect cancer early when treatment is most effective.',
    icon: <HeartPulse className="text-pink-600" />,
  },
]

export const CancerPrevention = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <ImageWithFallback
          fallbackSrc="/fallback-image.webp"
          src="/images/cancer-prevention.webp"
          alt="A doctor advising a patient on cancer prevention"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <div className="text-white space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Prevent Cancer Before It Starts
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Small lifestyle changes today can make a world of difference tomorrow.
            </p>
          </div>
        </div>
      </section>

      <main className="px-6 py-16 max-w-6xl mx-auto space-y-16">
        {/* Intro */}
        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold">Why Cancer Prevention Matters</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Prevention is the most powerful tool we have against cancer. From lifestyle choices to regular screenings, there are many ways to lower your risk and protect your long-term health.
          </p>
        </section>

        <Separator />

        {/* Tips Grid */}
        <section className="space-y-8">
          <h3 className="text-2xl font-semibold text-center">7 Ways to Reduce Your Risk</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {preventionTips.map((tip, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow border border-muted rounded-xl bg-gray-100 py-0"
              >
                <CardContent className="p-6 space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center">
                    {tip.icon}
                  </div>
                  <h4 className="text-lg font-semibold">{tip.title}</h4>
                </div>
                  <p className="text-sm text-gray-700">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
