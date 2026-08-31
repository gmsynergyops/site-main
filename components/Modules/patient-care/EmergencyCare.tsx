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
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 animate-in fade-in zoom-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-red-600">{t("dialog.title")}</h2>
              <button
                onClick={() => setShowEmergencyDialog(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4 my-6">
              <a
                href={`tel:${emergencyNumber}`}
                className="bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg text-lg font-bold flex items-center justify-center transition-all w-full"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                {t("dialog.callEmergency", { number: emergencyNumber })}
              </a>

              <a
                href={`tel:${ambulanceNumber}`}
                className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg text-lg font-bold flex items-center justify-center transition-all w-full"
              >
                <TruckIcon className="h-5 w-5 mr-2" />
                {t("dialog.callAmbulance", { number: ambulanceNumber })}
              </a>
            </div>

            <p className="text-gray-600 text-center text-sm">
              {t("dialog.footer")}
            </p>
          </div>
        </div>
      )}

      {/* Sticky Emergency Contact Bar */}
      <div className="bg-red-600 text-white py-2 px-4 sticky top-20 z-20">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <PhoneIcon className="h-5 w-5 mr-2 animate-pulse" />
            <span className="font-bold">{t("stickyBar.forEmergencies")}</span>
            <a href={`tel:${emergencyNumber}`} className="ml-2 hover:underline">{emergencyNumber}</a>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="h-5 w-5 mr-2" />
            <span>{t("stickyBar.entrance")}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden h-96 md:h-screen max-h-[700px] flex items-center">
        <ImageWithFallback
          src="/department/emergency-and-critical-career-banner.png"
          fallbackSrc="/fallback-image.webp"
          alt="Emergency room with medical team"
          fill
          priority
          className="object-contain object-center z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-1"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-white z-10 w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            {t("hero.title")}<span className="text-red-400">{t("hero.highlight")}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-lg max-w-2xl">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${emergencyNumber}`}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold flex items-center justify-center transition-all animate-pulse"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              {t("hero.callNow", { number: emergencyNumber })}
            </a>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold flex items-center justify-center transition-all"
              onClick={() => {
                window.open(CONTACT_INFO.locations[0].directMapURL, "_blank");
              }}
            >
              <MapPinIcon className="h-6 w-6 mr-2" />
              {t("hero.locateEntrance")}
            </button>
          </div>
        </div>
      </section>

      {/* Emergency Services Offered */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {t("services.title")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const ServiceIcon = serviceIcons[index] || HeartIcon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-red-500">
                  <ServiceIcon className="h-10 w-10 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {t("process.title")}
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
            <div className="space-y-8 md:space-y-0 md:grid grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-red-500">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {t("whyChooseUs.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ul className="space-y-6">
                {whyPoints.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 relative rounded-xl overflow-hidden">
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          <blockquote className="text-xl italic text-gray-700 mb-6">
            &quot;{t("testimonial.quote")}&quot;
          </blockquote>
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
              {t("testimonial.name").charAt(0)}
            </div>
            <div>
              <p className="font-bold text-gray-800">{t("testimonial.name")}</p>
              <p className="text-gray-500">{t("testimonial.date")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Footer */}
      <section className="bg-red-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t("bottomCta.title")}</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <a
              href={`tel:${emergencyNumber}`}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-bold flex items-center justify-center transition-all"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              {t("bottomCta.callEmergency", { number: emergencyNumber })}
            </a>
            <button
              className="bg-transparent border-2 border-white hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-bold flex items-center justify-center transition-all"
              onClick={() => {
                window.open(CONTACT_INFO.locations[0].directMapURL, "_blank");
              }}
            >
              <MapPinIcon className="h-6 w-6 mr-2" />
              {t("bottomCta.getDirections")}
            </button>
          </div>
          <p className="text-red-100">
            {t("bottomCta.footer")}
          </p>
        </div>
      </section>
    </div>
  );
};

export default EmergencyCare;
