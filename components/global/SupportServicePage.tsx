"use client"
import { ImageWithFallback } from "@/components/global/ImageWithFallback"
import FaqAccordion from "@/components/homepage/FaqAccordion"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useGeneralQuestions } from "@/data"
import { SupportServiceProps } from "@/types"
import type { VariantProps } from "class-variance-authority"
import { Link } from '@/i18n/navigation';
import { useTranslations } from "next-intl"

export const SupportServicePage = ({
    heroImage,
    title,
    description,
    services,
    preparationTips,
    whyChoose,
    faqs,
    cta
}: SupportServiceProps) => {
    const generalQuestions = useGeneralQuestions()
    const t = useTranslations('supportService')

    // const scrollToSection = (id: string) => {
    //     const element = document.getElementById(id);
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <section className="relative w-full rounded-xl overflow-hidden mb-16 max-h-120">
                <ImageWithFallback
                    fallbackSrc="/fallback-image.webp"
                    src={heroImage}
                    alt={title}
                    width={1200}
                    height={500}
                    
                    className=" object-cover w-full h-auto aspect-5:3"
                />
            </section>

            {/* Title & Description Header */}
            <div className="mb-12 text-center max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                    {title}
                </h1>
                {description && (
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        {description}
                    </p>
                )}
            </div>

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
                        {t('preparationGuidelines')}
                    </h2>
                    <ul className="space-y-3">
                        {preparationTips.map((tip, index) => (
                            <li key={index} className="flex items-start">
                                <span className="shrink-0 mt-1 mr-2">•</span>
                                <span className="text-gray-700">{tip}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('faqs')}</h2>
                    <div className="space-y-4">
                        <FaqAccordion items={faqs && faqs.length > 0 ? faqs : generalQuestions} />
                    </div>
                </div>
            </section>
        
            {/* CTA Section */}
            <section className="text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">{cta.title}</h2>
                <p className="text-gray-600 mb-8">{cta.description}</p>
                <div className="flex flex-wrap justify-center gap-4">
                    {cta.buttons.map((btn, index) => {
                        const isOutline = btn.variant === "outline"
                        const buttonEl = (
                            <Button
                                className={isOutline ? "border-blue-600 text-blue-600 hover:bg-blue-50" : "bg-blue-600 hover:bg-blue-700 text-white"}
                                key={index}
                                variant={btn.variant as VariantProps<typeof buttonVariants>["variant"]}
                                onClick={btn.onClick}
                            >
                                {btn.text}
                            </Button>
                        )
                        if (btn.href) {
                            return (
                                <Link key={index} href={btn.href}>
                                    {buttonEl}
                                </Link>
                            )
                        }
                        return buttonEl
                    })}
                </div>
            </section>
        </div>
    );
};
