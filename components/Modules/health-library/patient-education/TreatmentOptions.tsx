'use client';

import React from 'react';
import { ImageWithFallback } from '@/components/global/ImageWithFallback';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Syringe,
  Radiation,
  Pill,
  HeartPulse,
  Landmark,
  FlaskConical,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export const TreatmentOptions = () => {
  const t = useTranslations("treatmentOptionsPage");

  const icons = [
    <Landmark key="surgery" className="text-sky-600" />,
    <Radiation key="radiation" className="text-amber-600" />,
    <Syringe key="chemo" className="text-red-600" />,
    <FlaskConical key="targeted" className="text-indigo-600" />,
    <HeartPulse key="immuno" className="text-green-600" />,
    <Pill key="hormone" className="text-pink-500" />
  ];

  const rawTreatments = t.raw("treatmentsSection.treatments") as { title: string; description: string }[];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <ImageWithFallback
          fallbackSrc="/fallback-image.webp"
          src="/images/treatment-options.webp"
          alt={t("hero.title")}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <div className="text-white space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">{t("hero.title")}</h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <main className="px-6 py-16 max-w-6xl mx-auto space-y-16">
        {/* Intro */}
        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold">{t("intro.title")}</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            {t("intro.description")}
          </p>
        </section>

        <Separator />

        {/* Treatment Options */}
        <section className="space-y-8">
          <h3 className="text-2xl font-semibold text-center">{t("treatmentsSection.title")}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rawTreatments.map((treatment, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow border border-muted rounded-xl bg-gray-100 py-0"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      {icons[index] || <Syringe className="text-red-600" />}
                    </div>
                    <h4 className="text-lg font-semibold">{treatment.title}</h4>
                  </div>
                  <p className="text-sm text-gray-700">{treatment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
