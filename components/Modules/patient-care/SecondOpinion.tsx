import { ImageWithFallback } from '@/components/global/ImageWithFallback';
import FaqAccordion from '@/components/homepage/FaqAccordion';
import { ClockIcon, CloudUpload, UserCircleIcon } from 'lucide-react';
import { FaLock } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';

export const SecondOpinion = () => {
    const t = useTranslations("secondOpinionPage");

    const specialties = t.raw("specialties") as string[];
    const testimonials = t.raw("testimonials.items") as { name: string; text: string; location: string }[];
    const faqs = t.raw("faqs.items") as { question: string; answer: string }[];
    const whyItems = t.raw("whyChooseUs.items") as { title: string; text: string }[];
    const stepsData = t.raw("howItWorks.steps") as { title: string; text: string }[];

    const stepIcons = [CloudUpload, UserCircleIcon, ClockIcon, FaLock];

    return (
        <div className="font-sans text-gray-700">
            {/* Hero Section */}
            <section className="bg-linear-to-r from-blue-50 to-cyan-50 py-20 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            {t("hero.title")}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            {t("hero.subtitle")}
                        </p>
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            {t("hero.bookButton")}
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-end">
                        <ImageWithFallback
                            fallbackSrc='/fallback-image.webp'
                            src="/doctor-consultation.jpg"
                            alt="Doctor consultation"
                            width={400}
                            height={320}
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12">{t("howItWorks.title")}</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {stepsData.map((step, index) => {
                            const IconComponent = stepIcons[index] || CloudUpload;
                            return (
                                <div key={index} className="text-center p-6">
                                    <IconComponent className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12">{t("whyChooseUs.title")}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyItems.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Form */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-8">{t("form.title")}</h2>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <input type="text" placeholder={t("form.namePlaceholder")} className="p-3 border rounded-lg" />
                            <input type="email" placeholder={t("form.emailPlaceholder")} className="p-3 border rounded-lg" />
                            <input type="tel" placeholder={t("form.phonePlaceholder")} className="p-3 border rounded-lg" />
                            <select className="p-3 border rounded-lg">
                                <option>{t("form.specialtyPlaceholder")}</option>
                                {specialties.map((spec, index) => (
                                    <option key={index}>{spec}</option>
                                ))}
                            </select>
                        </div>

                        <textarea
                            placeholder={t("form.descPlaceholder")}
                            className="w-full p-3 border rounded-lg h-32"
                        />

                        <div className="border-dashed border-2 border-gray-300 rounded-lg p-8 text-center">
                            <input type="file" id="upload" className="hidden" />
                            <label htmlFor="upload" className="cursor-pointer">
                                <CloudUpload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                                <p className="text-gray-600">{t("form.uploadLabel")}</p>
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input type="checkbox" id="terms" className="mr-2" />
                            <label htmlFor="terms" className="text-sm text-gray-600">
                                {t("form.terms")}
                            </label>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            {t("form.submit")}
                        </button>
                    </form>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12">{t("testimonials.title")}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <p className="text-gray-600 mb-4">&quot;{testimonial.text}&quot;</p>
                                <div className="flex items-center">
                                    <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-gray-500 text-sm">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12">{t("faqs.title")}</h2>
                    <FaqAccordion items={faqs}/>
                </div>
            </section>
        </div>
    );
};
