'use client';

import React from 'react';
import { ImageWithFallback } from '@/components/global/ImageWithFallback';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Stethoscope,
  ScanLine,
  FileSearch,
  FileBarChart2,
  FileCheck,
  Brain,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export const DiagnosisAndStaging = () => {
  const t = useTranslations("diagnosisAndStagingPage");

  const icons = [
    <Stethoscope key="consult" className="text-blue-600" />,
    <FileSearch key="exam" className="text-emerald-600" />,
    <ScanLine key="imaging" className="text-purple-600" />,
    <FileCheck key="biopsy" className="text-pink-600" />,
    <FileBarChart2 key="staging" className="text-yellow-500" />,
    <Brain key="molecular" className="text-red-500" />
  ];

  const rawStages = t.raw("stagesSection.stages") as { title: string; description: string }[];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <ImageWithFallback
          fallbackSrc="/fallback-image.webp"
          src="/images/diagnosis-staging.webp"
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

        {/* Stages */}
        <section className="space-y-8">
          <h3 className="text-2xl font-semibold text-center">{t("stagesSection.title")}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rawStages.map((step, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow border border-muted rounded-xl bg-gray-100 py-0"
              >
                <CardContent className="lg:p-6 space-y-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                      {icons[index] || <Stethoscope className="text-blue-600" />}
                    </div>
                    <h4 className="text-lg font-semibold">{step.title}</h4>
                  </div>
                  <p className="text-sm text-gray-800">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
