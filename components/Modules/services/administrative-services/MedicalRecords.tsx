"use client"
// pages/MedicalRecords.tsx
import PageLayout from '@/components/global/PageLayout';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MedicalRecords = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Records Request",
      description: "Request copies of your medical records for personal use or to share with other providers.",
      icon: "📄",
    },
    {
      title: "Health Portal",
      description: "Access your health information anytime through our secure online portal.",
      icon: "💻",
    },
    {
      title: "Release Authorization",
      description: "Authorize the release of your medical information to designated individuals.",
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
            Your health information is protected and confidential. We provide secure access and transfer of your medical records in compliance with HIPAA regulations.
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
              <button className="mt-4 text-sm text-fuchsia-500 font-medium hover:text-fuchsia-700 transition-colors">
                Learn more →
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 bg-indigo-800 text-white p-8 rounded-xl"
        >
          <h3 className="text-xl font-bold mb-3">Patient Portal Access</h3>
          <p className="mb-6">
            View test results, medications, immunization history, and more through our secure patient portal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-synergy-pink text-white px-6 py-3 rounded-lg font-medium hover:bg-fuchsia-600 transition-colors">
              Login to Portal
            </button>
            <button className="bg-white text-indigo-800 px-6 py-3 rounded-lg font-medium hover:bg-indigo-100 transition-colors">
              Register for Access
            </button>
          </div>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default MedicalRecords;
