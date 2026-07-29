"use client"
import { SupportServicePage } from '@/components/global/SupportServicePage';
import { housekeepingData } from '@/data/supportServicesData';
import React from 'react';

export const HouseKeeping = () => {
  return (
    <SupportServicePage
    heroImage={housekeepingData.heroImage}
    title={housekeepingData.title}
    description={housekeepingData.description}
    services={housekeepingData.services}
    preparationTips={housekeepingData.preparationTips}
    whyChoose={housekeepingData.whyChoose}
    faqs={housekeepingData.faqs}
    cta={housekeepingData.cta}
/>
  );
}
