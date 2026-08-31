"use client"
import { SupportServicePage } from "@/components/global/SupportServicePage";
import { useBloodBankData } from "@/data/supportServicesData";

const BloodBank = () => {
  const bloodBankData = useBloodBankData();

  return (
    <SupportServicePage
      heroImage={bloodBankData.heroImage}
      title={bloodBankData.title}
      description={bloodBankData.description}
      services={bloodBankData.services}
      preparationTips={bloodBankData.preparationTips}
      whyChoose={bloodBankData.whyChoose}
      faqs={bloodBankData.faqs}
      cta={bloodBankData.cta}
    />
  );
};

export default BloodBank;
