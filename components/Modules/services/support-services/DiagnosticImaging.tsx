"use client"
import { SupportServicePage } from "@/components/global/SupportServicePage"
import { diagnosticImagingData } from "@/data/supportServicesData"

export function DiagnosticImaging() {

    return (
        <SupportServicePage
        heroImage={diagnosticImagingData.heroImage}
        title={diagnosticImagingData.title}
        description={diagnosticImagingData.description}
        services={diagnosticImagingData.services}
        preparationTips={diagnosticImagingData.preparationTips}
        whyChoose={diagnosticImagingData.whyChoose}
        faqs={diagnosticImagingData.faqs}
        cta={diagnosticImagingData.cta}
      />
    )
}
