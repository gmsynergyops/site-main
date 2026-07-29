"use client"
import { SupportServicePage } from '@/components/global/SupportServicePage'
import { physiotherapyData } from '@/data/supportServicesData'

export const Physiotherapy = () => {
  return (
    <SupportServicePage
    heroImage={physiotherapyData.heroImage}
    title={physiotherapyData.title}
    description={physiotherapyData.description}
    services={physiotherapyData.services}
    preparationTips={physiotherapyData.preparationTips}
    whyChoose={physiotherapyData.whyChoose}
    faqs={physiotherapyData.faqs}
    cta={physiotherapyData.cta}
  />
  )
}
