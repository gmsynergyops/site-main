"use client"
import { SupportServicePage } from '@/components/global/SupportServicePage'
import { laboratoryData } from '@/data/supportServicesData'

export const Laboratory = () => {
  return (
    <SupportServicePage
    heroImage={laboratoryData.heroImage}
    title={laboratoryData.title}
    description={laboratoryData.description}
    services={laboratoryData.services}
    preparationTips={laboratoryData.preparationTips}
    whyChoose={laboratoryData.whyChoose}
    faqs={laboratoryData.faqs}
    cta={laboratoryData.cta}
  />
  )
}
