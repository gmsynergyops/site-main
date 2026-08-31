"use client";

import { ImageWithFallback } from "@/components/global/ImageWithFallback";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from '@/i18n/navigation';
import { useTranslations } from "next-intl";

export default function DiagnosticServices() {
    const t = useTranslations("diagnosticServicesPage");

    const diagnosticServices = [
        {
            id: "diagnostic-imaging",
            title: t("services.diagnosticImaging.title"),
            description: t("services.diagnosticImaging.description"),
            image: "/images/diagnostics/imaging.jpg",
        },
        {
            id: "dialysis",
            title: t("services.dialysis.title"),
            description: t("services.dialysis.description"),
            image: "/images/diagnostics/dialysis.jpg",
        },
        {
            id: "radiology",
            title: t("services.radiology.title"),
            description: t("services.radiology.description"),
            image: "/images/diagnostics/radiology.jpg",
        },
        {
            id: "pathology",
            title: t("services.pathology.title"),
            description: t("services.pathology.description"),
            image: "/images/diagnostics/pathology.jpg",
        },
        {
            id: "microbiology",
            title: t("services.microbiology.title"),
            description: t("services.microbiology.description"),
            image: "/images/diagnostics/microbiology.jpg",
        },
        {
            id: "biochemistry",
            title: t("services.biochemistry.title"),
            description: t("services.biochemistry.description"),
            image: "/images/diagnostics/biochemistry.jpg",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 font-display">{t("title")}</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t("subtitle")}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {diagnosticServices.map((service) => (
                    <Card
                        key={service.id}
                        className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 px-4"
                    >
                        <div className="relative w-full h-48 bg-blue-300 rounded-t-lg overflow-hidden">
                            <ImageWithFallback
                                fallbackSrc="/fallback-image.webp"
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col flex-1 justify-between">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-1 justify-between">
                                <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed flex-1">
                                    {service.description}
                                </p>
                                <Link href={`/services/${service.id}`}>
                                    <Button variant="default" className="w-full mt-auto">
                                        {t("learnMore")}
                                    </Button>
                                </Link>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4 font-display">{t("cta.title")}</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    {t("cta.description")}
                </p>
                <Link href="/contact">
                    <Button variant="default" size="xl">
                        {t("cta.button")}
                    </Button>
                </Link>
            </div>
        </div>
    );
}
