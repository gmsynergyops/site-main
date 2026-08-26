"use client"
import { ImageWithFallback } from '@/components/global/ImageWithFallback'
import { useTranslations } from 'next-intl';

export const OurMission = () => {
    const t = useTranslations('TheSynergyStory.OurMission')
    return (
        <section
            className="w-full px-4 sm:px-6 py-12"
            id="Our-Mission"
        >
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                {/* Left content */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-synergy-blue leading-tight">
                        {t('title')}
                    </h2>

                    <div className="space-y-5 text-gray-700 text-base leading-relaxed">
                        <p className="">At Synergy Super Speciality Hospital & Cancer Institute, our mission is to transform healthcare by delivering world-class, evidence-based, and compassionate medical care through clinical excellence, advanced technology, and a patient-first approach.</p>

                        <p className="">We are committed to providing accessible, affordable, and ethical healthcare across a wide range of super-speciality services, with a strong focus on comprehensive cancer care. Every patient is treated with dignity, empathy, respect, and personalized attention, ensuring the highest standards of safety and quality throughout their healthcare journey.</p>

                        <p className="">Our mission is to continuously advance medical excellence by investing in cutting-edge technology, highly skilled healthcare professionals, continuous research, innovation, and education. We strive to create an environment where healing is driven by compassion, trust, and excellence.</p>

                        <p>As a leading healthcare institution serving Eastern Uttar Pradesh, Western Bihar, and Southern Nepal, we aspire to become the region&apos;s most trusted destination for advanced medical care by improving patient outcomes, enhancing quality of life, and making healthcare accessible to every individual who needs it.</p>

                        <p>Healing with Compassion. Caring with Excellence. Inspiring Hope.</p>
                    </div>
                </div>

                {/* Right image */}
                <div className="w-full lg:w-1/2 rounded-2xl shadow-lg overflow-hidden">
                    <div className="relative w-full aspect-video">
                        <ImageWithFallback
                            fallbackSrc="/fallback-image.webp"
                            src="/mission-horizontal.webp"
                            alt="Doctors treating cancer patients at Synergy Super Specialty Hospital"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
