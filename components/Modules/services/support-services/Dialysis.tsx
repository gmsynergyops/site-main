"use client"
import { SupportServicePage } from '@/components/global/SupportServicePage';
import { dialysisData } from '@/data/supportServicesData';

export const Dialysis = () => {
    return (
        <SupportServicePage
            heroImage={dialysisData.heroImage}
            title={dialysisData.title}
            description={dialysisData.description}
            services={dialysisData.services}
            preparationTips={dialysisData.preparationTips}
            whyChoose={dialysisData.whyChoose}
            faqs={dialysisData.faqs}
            cta={dialysisData.cta}
        />
    )
};
