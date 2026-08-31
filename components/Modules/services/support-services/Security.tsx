"use client"
import { SupportServicePage } from '@/components/global/SupportServicePage';
import { useSecurityData } from '@/data/supportServicesData';
import React from 'react';

export const Security = () => {
  const securityData = useSecurityData();

  return (
    <SupportServicePage
      heroImage={securityData.heroImage}
      title={securityData.title}
      description={securityData.description}
      services={securityData.services}
      preparationTips={securityData.preparationTips}
      whyChoose={securityData.whyChoose}
      faqs={securityData.faqs}
      cta={securityData.cta}
    />
  );
};
