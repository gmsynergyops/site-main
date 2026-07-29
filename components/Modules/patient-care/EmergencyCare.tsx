"use client"
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

export const EmergencyCare = () => {
  // State to control the visibility of the emergency dialog
  const [showEmergencyDialog, setShowEmergencyDialog] = useState(false);

  // Show the dialog when the component mounts (page loads)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmergencyDialog(true);
    }, 500); // Small delay for better user experience

    return () => clearTimeout(timer);
  }, []);

  const services = [
    { icon: HeartIcon, title: 'Cardiac Emergencies', description: '24/7 cardiology team for heart attacks & cardiac events' },
    { icon: BoltIcon, title: 'Accidents & Trauma', description: 'Level 1 trauma center with immediate response' },
    { icon: ArrowBigDownDash, title: 'Stroke Management', description: 'Golden hour stroke treatment protocol' },
    { icon: FaUserGroup, title: 'Pediatric Emergencies', description: 'Specialized pediatric emergency team' },
    { icon: HeartIcon, title: 'Intensive Care', description: 'Immediate ICU admission when needed' },
    { icon: TruckIcon, title: 'Ambulance Services', description: 'Advanced life support ambulances' }
  ];

  const testimonial = {
    quote: "The ER team saved my husband's life when he had a heart attack at midnight. They took him straight to the cath lab without any paperwork delay.",
    name: "Mrs. Priya Sharma",
    date: "May 15, 2023"
  };

  // Emergency numbers
  const emergencyNumber = "18005706595";
  const ambulanceNumber = "+91-7234006597";

  return (
    <div className="font-sans">
      {/* Emergency Dialog Popup */}
      {showEmergencyDialog && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 animate-in fade-in zoom-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-red-600">Have an emergency? Don&apos;t hesitate</h2>
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
                Call Emergency: {emergencyNumber}
              </a>

              <a
                href={`tel:${ambulanceNumber}`}
                className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg text-lg font-bold flex items-center justify-center transition-all w-full"
              >
                <TruckIcon className="h-5 w-5 mr-2" />
                Call Ambulance: {ambulanceNumber}
              </a>
            </div>

            <p className="text-gray-600 text-center text-sm">
              Our team is available 24/7 to assist you in medical emergencies
            </p>
          </div>
        </div>
      )}

      {/* Sticky Emergency Contact Bar */}
      <div className="bg-red-600 text-white py-2 px-4 sticky top-20 z-20">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <PhoneIcon className="h-5 w-5 mr-2 animate-pulse" />
            <span className="font-bold">FOR EMERGENCIES: </span>
            <a href="tel:18005706595" className="ml-2 hover:underline">18005706595</a>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="h-5 w-5 mr-2" />
            <span>Emergency Entrance: Gate 1, Synergy Super Speciality Hospital Building</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="bg-[url('/emergency-room.jpg')] bg-cover bg-center h-96 md:h-screen max-h-[700px] flex items-center"
          aria-label="Emergency room with medical team"
        >
          <div className="relative max-w-6xl mx-auto px-4 text-white z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Emergency Care When You Need It Most – <span className="text-red-400">24x7</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-lg max-w-2xl">
              Immediate treatment with zero waiting time for critical patients. No appointments required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:18005706595"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold flex items-center justify-center transition-all animate-pulse"
              >
                <PhoneIcon className="h-6 w-6 mr-2" />
                CALL NOW: 18005706595
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold flex items-center justify-center transition-all"
              onClick={() => {
                window.open("https://maps.app.goo.gl/MXM5snovbSDPidJy5", "_blank");
            }}
              >
                <MapPinIcon className="h-6 w-6 mr-2" />
                LOCATE EMERGENCY ENTRANCE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Offered */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Emergency Services We Provide
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-red-500">
                <service.icon className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Emergency Care Process
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
            <div className="space-y-8 md:space-y-0 md:grid grid-cols-4 gap-8">
              {[
                { title: 'Arrival', description: 'Direct entry through emergency gates' },
                { title: 'Immediate Evaluation', description: 'Triage within 2 minutes of arrival' },
                { title: 'Rapid Diagnosis', description: 'On-site CT, X-ray, and lab tests' },
                { title: 'Treatment Begins', description: 'No delay for critical patients' }
              ].map((step, index) => (
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
            Why Choose Our Emergency Care
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ul className="space-y-6">
                {[
                  '24/7 availability of specialist doctors',
                  'Fully equipped emergency rooms',
                  'Advanced diagnostic tools available immediately',
                  'Critical care ambulances with paramedics',
                  'No paperwork delay for life-threatening cases',
                  'Direct access to ICU and operation theaters'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                src="/emergency-team.jpg"
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
          &quot;{testimonial.quote}&quot;
          </blockquote>
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-gray-800">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.date}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Footer */}
      <section className="bg-red-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Emergency Care Right Now?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <a
              href="tel:18005706595"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-bold flex items-center justify-center transition-all"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              CALL EMERGENCY: 18005706595
            </a>
            <button className="bg-transparent border-2 border-white hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-bold flex items-center justify-center transition-all"
            onClick={() => {
                window.open("https://maps.app.goo.gl/MXM5snovbSDPidJy5", "_blank");
            }}
            >
              <MapPinIcon className="h-6 w-6 mr-2" />
              GET DIRECTIONS
            </button>
          </div>
          <p className="text-red-100">
            Emergency Department open 24 hours, 7 days a week, 365 days a year
          </p>
        </div>
      </section>
    </div>
  );
};
