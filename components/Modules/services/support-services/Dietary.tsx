"use client"
import { SupportServicePage } from '@/components/global/SupportServicePage';
import { useDietaryData } from '@/data/supportServicesData';
import React from 'react';

export const Dietary = () => {
  const dietaryData = useDietaryData();

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
};
