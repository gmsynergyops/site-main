'use client';

import { ImageWithFallback } from '@/components/global/ImageWithFallback';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaFlask, FaHeartbeat, FaProcedures, FaUserMd, FaXRay } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

interface Package {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  recommended?: boolean;
  image: string;
}

const HealthChecks = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: packagesRef, inView: packagesInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const packages: Package[] = [
    {
      id: 'basic',
      title: 'Basic Health Check',
      description: 'Essential tests for routine health monitoring',
      price: '₹900',
      features: [
        'Complete Blood Count (CBC)',
        'Lipid Profile',
        'Liver Function Test',
        'Kidney Function Test',
        'Urine Analysis',
        'Doctor Consultation'
      ],
      image: '/images/health-check-1.jpg'
    },
    {
      id: 'advanced',
      title: 'Advanced Screening',
      description: 'Comprehensive health assessment for early detection',
      price: '₹2000',
      features: [
        'Includes Basic Package',
        'Thyroid Function Test',
        'Diabetes Screening',
        'Cardiac Risk Markers',
        'Chest X-Ray',
        'ECG',
        'Full Doctor Report'
      ],
      recommended: true,
      image: '/images/health-check-2.jpg'
    },
    {
      id: 'executive',
      title: 'Executive Full Body',
      description: 'Complete diagnostic package for thorough evaluation',
      price: '₹4000',
      features: [
        'Includes Advanced Package',
        'Cancer Markers',
        'Bone Density Test',
        'Abdominal Ultrasound',
        'Stress Test',
        'Nutritionist Consultation',
        'Personalized Health Plan'
      ],
      image: '/images/health-check-3.jpg'
    },
    {
      id: 'senior',
      title: 'Senior Wellness',
      description: 'Specialized screening for age-related health concerns',
      price: '₹3000',
      features: [
        'Includes Advanced Package',
        'Arthritis Screening',
        'Cognitive Assessment',
        'Bone Mineral Density',
        'Vision and Hearing Tests',
        'Geriatric Consultation'
      ],
      image: '/images/health-check-4.jpg'
    }
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const getIcon = (packageId: string) => {
    switch(packageId) {
      case 'basic': return <FaHeartbeat className="text-blue-500" />;
      case 'advanced': return <FaFlask className="text-green-500" />;
      case 'executive': return <FaUserMd className="text-purple-500" />;
      case 'senior': return <FaProcedures className="text-orange-500" />;
      default: return <FaXRay className="text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Health Check Packages
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Comprehensive health screenings tailored to your needs
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          ref={packagesRef}
          initial="hidden"
          animate={packagesInView ? "visible" : "hidden"}
          variants={staggerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={fadeInVariants}
              whileHover={{ y: -5 }}
              className={`relative bg-white rounded-xl shadow-md overflow-hidden transition-all
                ${pkg.recommended ? 'ring-2 ring-blue-500' : ''}
                ${selectedPackage === pkg.id ? 'ring-2 ring-green-500' : ''}`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                  RECOMMENDED
                </div>
              )}

              <div className="h-48 relative">
                <ImageWithFallback
                fallbackSrc='/fallback-image.webp'
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2">
                    {getIcon(pkg.id)}
                    <h3 className="text-xl font-bold">{pkg.title}</h3>
                  </div>
                  <p className="text-sm">{pkg.description}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                  <button
                    onClick={() => setSelectedPackage(pkg.id === selectedPackage ? null : pkg.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedPackage === pkg.id
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                    }`}
                  >
                    {selectedPackage === pkg.id ? 'Selected' : 'Select'}
                  </button>
                </div>

                <ul className="space-y-2">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-blue-600 rounded-xl p-8 text-center text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to prioritize your health?</h2>
          <p className="mb-6 max-w-2xl mx-auto">Book your health check package today and receive a comprehensive report within 48 hours.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-md">
              Book Now
            </button>
            <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Speak to Our Consultant
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HealthChecks;
