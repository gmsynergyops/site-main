"use client"
import { SupportServicePage } from '@/components/global/SupportServicePage';
import { laundryData } from '@/data/supportServicesData';
import React from 'react';

export const Laundry = () => {
  return (
    <SupportServicePage
    heroImage={laundryData.heroImage}
    title={laundryData.title}
    description={laundryData.description}
    services={laundryData.services}
    preparationTips={laundryData.preparationTips}
    whyChoose={laundryData.whyChoose}
    faqs={laundryData.faqs}
    cta={laundryData.cta}
/>
  );
}
