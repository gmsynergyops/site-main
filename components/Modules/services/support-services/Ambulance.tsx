"use client"

import { SupportServicePage } from "@/components/global/SupportServicePage";
import { ambulanceData } from "@/data/supportServicesData";

const Ambulance = () => {
  return (
    <SupportServicePage
    heroImage={ambulanceData.heroImage}
    title={ambulanceData.title}
    description={ambulanceData.description}
    services={ambulanceData.services}
    preparationTips={ambulanceData.preparationTips}
    whyChoose={ambulanceData.whyChoose}
    faqs={ambulanceData.faqs}
    cta={ambulanceData.cta}
  />
  );
};

export default Ambulance;
