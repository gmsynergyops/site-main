"use client"
import { SupportServicePage } from '@/components/global/SupportServicePage'
import { pharmacyData } from '@/data/supportServicesData'
import React from 'react'

export const Pharmacy = () => {
  return (
    <SupportServicePage
    heroImage={pharmacyData.heroImage}
    title={pharmacyData.title}
    description={pharmacyData.description}
    services={pharmacyData.services}
    preparationTips={pharmacyData.preparationTips}
    whyChoose={pharmacyData.whyChoose}
    faqs={pharmacyData.faqs}
    cta={pharmacyData.cta}
  />
  )
}
