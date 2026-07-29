"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageWithFallback } from "@/components/global/ImageWithFallback"
import FaqAccordion from "@/components/homepage/FaqAccordion"
import { SupportServiceProps } from "@/types"
import { useGeneralQuestions } from "@/data"

export const SupportServicePage = ({
    heroImage,
    title,
    description,
    services,
    preparationTips,
    whyChoose,
    cta
}: SupportServiceProps) => {
    const generalQuestions = useGeneralQuestions()

    // const scrollToSection = (id: string) => {
    //     const element = document.getElementById(id);
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <section className="relative rounded-xl overflow-hidden mb-16">
                <ImageWithFallback
                    fallbackSrc="/fallback-image.webp"
                    src={heroImage}
                    alt={title}
                    width={1200}
                    height={500}
                    className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center px-8">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
                        <p className="text-lg text-blue-100 mb-6">{description}</p>
                        <Button className="bg-white text-blue-900 hover:bg-blue-100">
                            Get Started
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="mb-16">
                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <service.icon className="h-6 w-6 text-blue-600" />
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-blue-50 rounded-xl p-8 mb-16">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                    {whyChoose.title}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {whyChoose.items.map((item, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="font-medium text-lg flex items-center">
                                <Badge className="mr-2">{item.badge}</Badge>
                                {item.title}
                            </h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Preparation & FAQ */}
            <section className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Preparation Guidelines
                    </h2>
                    <ul className="space-y-3">
                        {preparationTips.map((tip, index) => (
                            <li key={index} className="flex items-start">
                                <span className="flex-shrink-0 mt-1 mr-2">•</span>
                                <span className="text-gray-700">{tip}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">FAQs</h2>
                    <div className="space-y-4">
                        <FaqAccordion items={generalQuestions} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">{cta.title}</h2>
                <p className="text-gray-600 mb-8">{cta.description}</p>
                    {cta.buttons.map((btn,index)=>(
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" key={index}>
                    {btn.text}
                </Button>
                    ))}
            </section>
        </div>
    );
};
