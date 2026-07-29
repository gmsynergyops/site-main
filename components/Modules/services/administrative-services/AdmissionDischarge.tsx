// pages/AdmissionDischarge.tsx
"use client"

import PageLayout from '@/components/global/PageLayout';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AdmissionDischarge = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: "Admission Process",
      description: "Streamlined admission procedures for patients with our digital forms and verification system.",
      icon: "🏥",
    },
    {
      title: "Discharge Planning",
      description: "Comprehensive discharge summaries and follow-up care coordination.",
      icon: "📋",
    },
    {
      title: "Bed Management",
      description: "Real-time bed availability tracking and allocation system.",
      icon: "🛏️",
    },
  ];

  return (
    <PageLayout title="Admission & Discharge">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 hover:border-synergy-pink transition-all"
          >
            <div className="text-4xl mb-4 text-synergy-blue">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: sectionInView ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 bg-gradient-to-r from-synergy-pink to-fuchsia-500 p-8 rounded-xl text-white"
      >
        <h2 className="text-2xl font-bold mb-4">24/7 Admission Support</h2>
        <p className="mb-4">Our team is available round the clock to assist with admissions and discharges.</p>
        <button className="bg-white text-indigo-800 px-6 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
          Contact Admission Desk
        </button>
      </motion.div>
    </PageLayout>
  );
};

export default AdmissionDischarge;
