"use client"
// pages/MedicalRecords.tsx
import PageLayout from '@/components/global/PageLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const MedicalRecords = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Records Request",
      description: "Request official copies of your medical records and discharge summaries for personal use or health providers.",
      icon: "📄",
    },
    {
      title: "Certificates & Verification",
      description: "Obtain verified medical certificates, birth/death records, and institutional documentation directly from MRD.",
      icon: "📜",
    },
    {
      title: "Release Authorization",
      description: "Authorize the official release of your medical information to designated family members or insurance providers.",
      icon: "✍️",
    },
  ];

  return (
    <PageLayout title="Medical Records">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: inView ? 0 : -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-6 rounded-xl shadow-md border border-indigo-100 mb-8"
        >
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Secure Medical Records</h2>
          <p className="text-gray-600">
            Your health information is kept strictly confidential and safe. Our Medical Records Department (MRD) provides verified access, copies, and record transfers in compliance with healthcare regulations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-indigo-50"
            >
              <div className="text-3xl mb-4 text-synergy-blue">{service.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 bg-linear-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white p-8 rounded-xl shadow-xl border border-indigo-700/50 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 text-white">
              <span>📋</span> Medical Records Request Desk (MRD)
            </h3>
            <p className="text-indigo-100 mb-6 max-w-3xl leading-relaxed">
              Medical records, discharge summaries, and certificates can be requested directly at our Medical Records Department counter. Please present valid government photo identification and hospital UHID/Registration details.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-lg border border-white/10">
                <div className="font-semibold text-muted text-sm mb-1">Required Identification</div>
                <div className="text-xs text-gray-200">Patient Photo ID & UHID Card / Discharge Slip</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-lg border border-white/10">
                <div className="font-semibold text-muted text-sm mb-1">Processing Time</div>
                <div className="text-xs text-gray-200">24 to 48 working hours following verification</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-lg border border-white/10">
                <div className="font-semibold text-muted text-sm mb-1">Third-Party Requests</div>
                <div className="text-xs text-gray-200">Signed Consent Letter & Representative Photo ID</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link
                href="/contact"
                className="bg-synergy-pink text-white px-6 py-3 rounded-lg font-medium hover:bg-fuchsia-600 transition-colors text-center shadow-md inline-flex items-center justify-center gap-2"
              >
                <span>📍</span> Visit MRD Desk / Directions
              </Link>
              <a
                href="tel:+917234001617"
                className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors text-center shadow-md inline-flex items-center justify-center gap-2"
              >
                <span>📞</span> Call MRD Helpdesk
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default MedicalRecords;

