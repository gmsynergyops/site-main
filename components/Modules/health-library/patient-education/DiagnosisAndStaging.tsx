'use client'

import React from 'react'
import { ImageWithFallback } from '@/components/global/ImageWithFallback'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Stethoscope,
  ScanLine,
  FileSearch,
  FileBarChart2,
  FileCheck,
  Brain,
} from 'lucide-react'

const stages = [
  {
    title: 'Initial Consultation & Medical History',
    description:
      'Your physician begins with a detailed discussion about symptoms, lifestyle, and family history to identify possible cancer risks.',
    icon: <Stethoscope className="text-blue-600" />,
  },
  {
    title: 'Physical Examination',
    description:
      'A thorough physical check-up helps detect visible abnormalities or lumps that may require further testing.',
    icon: <FileSearch className="text-emerald-600" />,
  },
  {
    title: 'Diagnostic Imaging',
    description:
      'Technologies such as CT, MRI, PET scans, and X-rays help identify tumors and determine their size and location.',
    icon: <ScanLine className="text-purple-600" />,
  },
  {
    title: 'Biopsy & Lab Tests',
    description:
      'Tissue samples are examined under a microscope to confirm the presence and type of cancer.',
    icon: <FileCheck className="text-pink-600" />,
  },
  {
    title: 'Cancer Staging',
    description:
      'Staging defines how much the cancer has grown or spread. It helps guide treatment options and prognosis.',
    icon: <FileBarChart2 className="text-yellow-500" />,
  },
  {
    title: 'Molecular & Genetic Testing',
    description:
      'Advanced tests identify mutations or markers that can help with personalized treatment plans.',
    icon: <Brain className="text-red-500" />,
  },
]

export const DiagnosisAndStaging = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <ImageWithFallback
          fallbackSrc="/fallback-image.webp"
          src="/images/diagnosis-staging.webp"
          alt="Diagnostic tools and doctors working on cancer staging"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <div className="text-white space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">Cancer Diagnosis & Staging</h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Early detection is the first step to effective treatment. Here&apos;s how the process works.
            </p>
          </div>
        </div>
      </section>

      <main className="px-6 py-16 max-w-6xl mx-auto space-y-16">
        {/* Intro */}
        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold">Understanding the Process</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Accurate diagnosis and cancer staging are crucial to determining the right treatment plan and improving outcomes. Each step ensures clarity and personalized care.
          </p>
        </section>

        <Separator />

        {/* Stages */}
        <section className="space-y-8">
          <h3 className="text-2xl font-semibold text-center">Steps in Diagnosis & Staging</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stages.map((step, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow border border-muted rounded-xl bg-gray-100 py-0"
              >
                <CardContent className="lg:p-6 space-y-4">
                  <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-semibold">{step.title}</h4>
                  </div>
                  <p className="text-sm text-gray-800">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
