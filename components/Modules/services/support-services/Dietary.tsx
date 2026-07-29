"use client"
import { SupportServicePage } from '@/components/global/SupportServicePage';
import { dietaryData } from '@/data/supportServicesData';
import React from 'react';

export const Dietary = () => {
  return (
    <SupportServicePage
    heroImage={dietaryData.heroImage}
    title={dietaryData.title}
    description={dietaryData.description}
    services={dietaryData.services}
    preparationTips={dietaryData.preparationTips}
    whyChoose={dietaryData.whyChoose}
    faqs={dietaryData.faqs}
    cta={dietaryData.cta}
/>
  );
}
