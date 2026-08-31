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
                        {t.raw('paragraphs').map((paragraph: string, index: number) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                {/* Right image */}
                <div className="w-full lg:w-1/2 rounded-2xl shadow-lg overflow-hidden">
                    <div className="relative w-full aspect-video">
                        <ImageWithFallback
                            fallbackSrc="/fallback-image.webp"
                            src="/mission-horizontal.webp"
                            alt={t('imageAlt')}
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
