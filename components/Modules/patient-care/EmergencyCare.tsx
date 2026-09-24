"use client";
import { CONTACT_INFO } from "@/data/contactData";
import { ImageWithFallback } from '@/components/global/ImageWithFallback';
import {
    ArrowBigDownDash,
    BoltIcon,
    HeartIcon,
    MapPinIcon,
    PhoneIcon,
    TruckIcon,
    X as XIcon
} from 'lucide-react';

import { useEffect, useState } from 'react';
import { FaUserGroup } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';

export const EmergencyCare = () => {
  const t = useTranslations("emergencyCarePage");

  // State to control the visibility of the emergency dialog
  const [showEmergencyDialog, setShowEmergencyDialog] = useState(false);

  // Show the dialog when the component mounts (page loads)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmergencyDialog(true);
    }, 500); // Small delay for better user experience

    return () => clearTimeout(timer);
  }, []);

  const serviceIcons = [
    HeartIcon,
    BoltIcon,
    ArrowBigDownDash,
    FaUserGroup,
    HeartIcon,
    TruckIcon
  ];

  const servicesData = t.raw("services.items") as { title: string; description: string }[];
  const processSteps = t.raw("process.steps") as { title: string; description: string }[];
  const whyPoints = t.raw("whyChooseUs.points") as string[];

  // Emergency numbers
  const emergencyNumber = CONTACT_INFO.phoneNumbers.emergency;
  const ambulanceNumber = CONTACT_INFO.phoneNumbers.ambulance;

  return (
    <div className="font-sans">
      {/* Emergency Dialog Popup */}
      {showEmergencyDialog && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm sm:max-w-md w-full p-5 sm:p-6 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[clamp(1.15rem,3vw,1.5rem)] font-bold text-red-600 leading-snug">
                {t("dialog.title")}
              </h2>
              <button
                onClick={() => setShowEmergencyDialog(false)}
                className="text-gray-400 hover:text-gray-700 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close dialog"
              >
                <XIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4 my-5">
              <a
                href={`tel:${emergencyNumber}`}
                className="bg-red-600 hover:bg-red-700 text-white py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl text-[clamp(0.875rem,2.2vw,1.05rem)] font-bold flex items-center justify-center transition-all w-full shadow-md active:scale-[0.99]"
              >
                <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 shrink-0" />
                <span>{t("dialog.callEmergency", { number: emergencyNumber })}</span>
              </a>

              <a
                href={`tel:${ambulanceNumber}`}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl text-[clamp(0.875rem,2.2vw,1.05rem)] font-bold flex items-center justify-center transition-all w-full shadow-md active:scale-[0.99]"
              >
                <TruckIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 shrink-0" />
                <span>{t("dialog.callAmbulance", { number: ambulanceNumber })}</span>
              </a>
            </div>

            <p className="text-gray-500 text-center text-xs sm:text-sm">
              {t("dialog.footer")}
            </p>
          </div>
        </div>
      )}

      {/* Sticky Emergency Contact Bar */}
      <div className="bg-red-600 text-white py-2 px-3 sm:px-4 sticky top-16 sm:top-20 z-20 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-4 text-[clamp(0.75rem,2.2vw,0.875rem)]">
          <div className="flex items-center flex-wrap">
            <PhoneIcon className="h-4 w-4 mr-1.5 animate-pulse text-red-200 shrink-0" />
            <span className="font-semibold">{t("stickyBar.forEmergencies")}</span>
            <a href={`tel:${emergencyNumber}`} className="ml-1.5 font-bold tracking-wide hover:underline text-yellow-200">
              {emergencyNumber}
            </a>
          </div>
          <div className="flex items-center text-red-100">
            <MapPinIcon className="h-4 w-4 mr-1.5 shrink-0 text-white" />
            <span className="line-clamp-1">{t("stickyBar.entrance")}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden w-full h-[260px] sm:h-[340px] md:h-[440px] lg:h-[520px] max-h-[600px] flex items-center bg-slate-900">
        <ImageWithFallback
          src="/department/emergency-and-critical-care-banner.png"
          fallbackSrc="/fallback-image.webp"
          alt="Emergency room with medical team"
          fill
          priority
          className="object-cover sm:object-contain object-center z-0"
        />

        {/* Action Buttons: Responsive positioning & clamp sizing */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-12 lg:bottom-20 right-3 sm:right-6 md:right-12 lg:right-80 z-10 flex flex-row sm:flex-row gap-2 sm:gap-3 md:gap-4 max-w-full">
          <a
            href={`tel:${emergencyNumber}`}
            className="bg-red-600 hover:bg-red-700 active:scale-95 text-white px-3.5 py-2 sm:px-5 sm:py-3 md:px-7 md:py-3.5 rounded-lg sm:rounded-xl text-[clamp(0.75rem,2vw,1rem)] font-bold flex items-center justify-center transition-all animate-heartbeat shadow-xl backdrop-blur-xs whitespace-nowrap"
          >
            <PhoneIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1.5 sm:mr-2 shrink-0" />
            <span>{t("hero.callNow", { number: emergencyNumber })}</span>
          </a>
          <button
            className="bg-blue-600/95 hover:bg-blue-700 active:scale-95 text-white px-3.5 py-2 sm:px-5 sm:py-3 md:px-7 md:py-3.5 rounded-lg sm:rounded-xl text-[clamp(0.75rem,2vw,1rem)] font-bold flex items-center justify-center transition-all shadow-xl backdrop-blur-xs whitespace-nowrap"
            onClick={() => {
              window.open(CONTACT_INFO.locations[0].directMapURL, "_blank");
            }}
          >
            <MapPinIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1.5 sm:mr-2 shrink-0" />
            <span>{t("hero.locateEntrance")}</span>
          </button>
        </div>
      </section>

      {/* Emergency Services Offered */}
      <section className="py-10 sm:py-14 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[clamp(1.35rem,4vw,2.25rem)] font-bold text-center mb-8 sm:mb-10 md:mb-12 text-gray-800 leading-tight">
            {t("services.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {servicesData.map((service, index) => {
              const ServiceIcon = serviceIcons[index] || HeartIcon;
              return (
                <div
                  key={index}
                  className="bg-gray-50/80 rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-red-500 hover:-translate-y-0.5"
                >
                  <ServiceIcon className="h-8 w-8 sm:h-10 sm:w-10 text-red-600 mb-3" />
                  <h3 className="text-[clamp(1.05rem,2.2vw,1.25rem)] font-bold mb-1.5 sm:mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-10 sm:py-14 md:py-16 px-4 bg-blue-50/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[clamp(1.35rem,4vw,2.25rem)] font-bold text-center mb-8 sm:mb-10 md:mb-12 text-gray-800 leading-tight">
            {t("process.title")}
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
            <div className="space-y-5 sm:space-y-6 md:space-y-0 md:grid md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-xs text-center border border-blue-100/60"
                >
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white rounded-full h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-[clamp(1rem,2vw,1.2rem)] font-bold mb-1.5 sm:mb-2 text-red-500 mt-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 sm:py-14 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[clamp(1.35rem,4vw,2.25rem)] font-bold text-center mb-8 sm:mb-10 md:mb-12 text-gray-800 leading-tight">
            {t("whyChooseUs.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <ul className="space-y-3.5 sm:space-y-4 md:space-y-5">
                {whyPoints.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2.5 sm:mr-3 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[clamp(0.875rem,2vw,1.05rem)] text-gray-700 leading-relaxed font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 relative rounded-xl overflow-hidden shadow-md aspect-16/10 sm:aspect-16/9 md:aspect-auto md:h-full md:min-h-[300px]">
              <ImageWithFallback
                fallbackSrc='/fallback-image.webp'
                width={720}
                height={560}
                src="/department/emergency.jpg"
                alt="Emergency medical team ready for action"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-10 sm:py-14 md:py-16 px-4 bg-gray-50/70">
        <div className="max-w-4xl mx-auto bg-white p-5 sm:p-7 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <blockquote className="text-[clamp(0.938rem,2.2vw,1.15rem)] italic text-gray-700 mb-5 leading-relaxed">
            &quot;{t("testimonial.quote")}&quot;
          </blockquote>
          <div className="flex items-center">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm sm:text-base mr-3.5 shrink-0">
              {t("testimonial.name").charAt(0)}
            </div>
            <div>
              <p className="font-bold text-gray-800 text-sm sm:text-base">{t("testimonial.name")}</p>
              <p className="text-gray-500 text-xs sm:text-sm">{t("testimonial.date")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Footer */}
      <section className="bg-red-600 text-white py-10 sm:py-12 md:py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[clamp(1.35rem,3.5vw,2rem)] font-bold mb-4 sm:mb-6 leading-tight">
            {t("bottomCta.title")}
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 mb-6 sm:mb-8 max-w-lg mx-auto sm:max-w-none">
            <a
              href={`tel:${emergencyNumber}`}
              className="bg-white text-red-600 hover:bg-gray-100 active:scale-95 px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl text-[clamp(0.875rem,2.2vw,1.1rem)] font-bold flex items-center justify-center transition-all shadow-lg"
            >
              <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 shrink-0" />
              <span>{t("bottomCta.callEmergency", { number: emergencyNumber })}</span>
            </a>
            <button
              className="bg-transparent border-2 border-white hover:bg-red-700 active:scale-95 text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl text-[clamp(0.875rem,2.2vw,1.1rem)] font-bold flex items-center justify-center transition-all shadow-lg"
              onClick={() => {
                window.open(CONTACT_INFO.locations[0].directMapURL, "_blank");
              }}
            >
              <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 shrink-0" />
              <span>{t("bottomCta.getDirections")}</span>
            </button>
          </div>
          <p className="text-red-100 text-xs sm:text-sm max-w-xl mx-auto">
            {t("bottomCta.footer")}
          </p>
        </div>
      </section>
    </div>
  );
};

export default EmergencyCare;
