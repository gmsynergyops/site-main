"use client";

import React, { useState } from "react";
import NewsSlider from "@/components/homepage/NewsSlider";
import { motion } from "framer-motion";
import { Mic, Trophy, ArrowRight, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";
import { AllMediaCoverageModal } from "./AllMediaCoverageModal";
import { getLocalizedNewsVideos } from "@/data/mediaCenterData";

export const SynergyInTheNewsSection = () => {
  const t = useTranslations("mediaCenter.synergyInTheNews");
  const locale = useLocale();
  const [isAllCoverageOpen, setIsAllCoverageOpen] = useState(false);
  const localizedNews = getLocalizedNewsVideos(locale);

  return (
    <>
      <section
        className="w-full px-2 sm:px-4 md:px-6 lg:px-16 xl:px-24 py-6 md:py-10"
        id="synergy-in-the-news"
      >
        <div className="p-4 sm:p-6 lg:p-8 rounded-3xl bg-white flex flex-col lg:flex-row border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between space-y-6 pr-0 lg:pr-6 mb-8 lg:mb-0">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-synergy-blue/10 text-synergy-blue text-xs font-semibold">
                <Video className="size-3.5 text-synergy-blue" />
                <span>{t("badge")}</span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-synergy-blue tracking-tight leading-tight"
              >
                {t("title")}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-600 text-sm sm:text-base leading-relaxed"
              >
                {t("description")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col space-y-3.5 pt-2"
              >
                <div className="flex items-center space-x-3 p-3 rounded-2xl bg-gray-50 border border-gray-100 hover:border-synergy-pink/30 transition-colors">
                  <div className="w-10 h-10 bg-synergy-pink/10 rounded-xl flex items-center justify-center shrink-0">
                    <Trophy className="text-synergy-pink w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-900">
                      {t("awardWinningCare.title")}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {t("awardWinningCare.description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-2xl bg-gray-50 border border-gray-100 hover:border-synergy-blue/30 transition-colors">
                  <div className="w-10 h-10 bg-synergy-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mic className="text-synergy-blue w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-900">
                      {t("mediaFeatures.title")}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {t("mediaFeatures.description")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* View All Media Coverage Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-2"
            >
              <Button
                onClick={() => setIsAllCoverageOpen(true)}
                variant="outline"
                className="w-full sm:w-auto border-synergy-blue text-synergy-blue hover:text-white hover:bg-synergy-blue transition-all duration-300 rounded-xl gap-2 font-medium"
              >
                <span>{t("viewAllMedia")}</span>
                <ArrowRight className="size-4" />
              </Button>
            </motion.div>
          </div>

          {/* News Slider Section */}
          <div className="w-full lg:w-2/3 flex items-center">
            <NewsSlider items={localizedNews} />
          </div>
        </div>
      </section>

      {/* View All Media Coverage Modal */}
      <AllMediaCoverageModal
        isOpen={isAllCoverageOpen}
        onClose={() => setIsAllCoverageOpen(false)}
      />
    </>
  );
};
