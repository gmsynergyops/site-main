"use client";

import { ImageWithFallback } from "@/components/global/ImageWithFallback";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const diagnosticServices = [
    {
        id: "diagnostic-imaging",
        title: "Diagnostic Imaging",
        description: "Advanced imaging technologies including CT scans, X-rays, digital mammography, and ultrasounds for accurate diagnosis.",
        image: "/images/diagnostics/imaging.jpg",
    },
    {
        id: "dialysis",
        title: "Dialysis Unit",
        description: "State-of-the-art hemodialysis and peritoneal dialysis services for renal care patients.",
        image: "/images/diagnostics/dialysis.jpg",
    },
    {
        id: "radiology",
        title: "Radiology",
        description: "Comprehensive radiological services including interventional radiology and fluoroscopy.",
        image: "/images/diagnostics/radiology.jpg",
    },
    {
        id: "pathology",
        title: "Pathology",
        description: "Full-range pathological testing including histopathology, cytopathology, and advanced tissue diagnostics.",
        image: "/images/diagnostics/pathology.jpg",
    },
    {
        id: "microbiology",
        title: "Microbiology",
        description: "Specialized microbial culture, sensitivity testing, and infectious disease diagnostics to ensure precise treatments.",
        image: "/images/diagnostics/microbiology.jpg",
    },
    {
        id: "biochemistry",
        title: "Clinical Biochemistry",
        description: "Advanced biochemical analysis supporting early detection and monitoring of metabolic and endocrine disorders.",
        image: "/images/diagnostics/biochemistry.jpg",
    },
];

export default function DiagnosticServices() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Diagnostic Services</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Comprehensive diagnostic solutions with cutting-edge technology and expert analysis for accurate health assessments.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {diagnosticServices.map((service) => (
                    <Card
                        key={service.id}
                        className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 px-4"
                    >
                        <div className="relative w-full h-48 bg-blue-300 ">
                            <ImageWithFallback
                                fallbackSrc="/fallback-image.webp"
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover  "
                            />
                        </div>
                        <div className="flex flex-col flex-1 justify-between">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-2xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-1 justify-between">
                                <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed flex-1">
                                    {service.description}
                                </p>
                                <Link href={`/services/${service.id}`} passHref>
                                    <Button variant="default" className="w-full mt-auto">
                                        Learn More
                                    </Button>
                                </Link>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Need Help Choosing a Diagnostic Service?</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Our care coordinators can guide you to the right diagnostic tests based on your symptoms and medical history.
                </p>
                <Link href="/contact">
                    <Button variant="default" size="xl">
                        Contact Diagnostic Services
                    </Button>
                </Link>
            </div>
        </div>
    );
}
