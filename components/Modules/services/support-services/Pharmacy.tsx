"use client"
import { SupportServicePage } from '@/components/global/SupportServicePage'
import { usePharmacyData } from '@/data/supportServicesData'
import React from 'react'

export const Pharmacy = () => {
  const pharmacyData = usePharmacyData()

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
