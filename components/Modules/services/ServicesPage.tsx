"use client"
import { ImageWithFallback } from '@/components/global/ImageWithFallback';
import { useDepartmentData } from '@/data/departmentData';
import { DepartmentData } from '@/types';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

// Animation variants (unchanged)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export default function ServicesPage() {
    const departmentData = useDepartmentData()
    
  return (
    <motion.main
      className="min-h-screen bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Enhanced Hospital Introduction Section */}
      <motion.section
        className="py-16 px-4 bg-white"
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                className="text-4xl font-display font-light text-gray-900 mb-6 leading-tight"
                variants={itemVariants}
              >
                Exceptional Care at <span className="font-medium">Synergy Hospital</span>
              </motion.h1>

              <motion.p
                className="text-lg text-gray-600 mb-6 font-sans font-light leading-relaxed"
                variants={itemVariants}
              >
                Where compassionate healthcare meets cutting-edge medical innovation.
              </motion.p>

              <motion.div
                className="space-y-4 mb-8"
                variants={containerVariants}
              >
                {[
                  "Board-certified specialists in every field",
                  "State-of-the-art diagnostic technology",
                  "Patient-centered treatment plans",
                  "Multidisciplinary approach to complex cases"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-sans font-light">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-sans font-normal transition-colors">
                  Schedule a Consultation
                </button>
              </motion.div>
            </div>

            <motion.div
              className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <ImageWithFallback
                fallbackSrc='/fallback-image.webp'
                fill
                src="/fallback-image.webp"
                alt="Synergy Hospital Facility"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Improved Departments Grid Section */}
      <motion.section
        className="py-12 px-4"
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-gray-900 mb-8"
            variants={itemVariants}
          >
            Our Medical Departments
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {departmentData.map((department) => (
              <DepartmentCard key={department.id} {...department} />
            ))}
          </motion.div>
        </div>
      </motion.section>
    </motion.main>
  );
}

// Improved DepartmentCard component with consistent sizing
function DepartmentCard(department: DepartmentData) {
  const t = useTranslations('global');
  return (
    <motion.div
      variants={itemVariants}
      className="h-full" // Ensure all cards take full height of their container
    >
      <Link
        href={`/services/${department.slug}`}
        className="group  h-full rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 flex flex-col"
      >
        {/* Image or Icon */}
        <div className="mb-4 shrink-0">
          {department.heroImage ? (
            <motion.div
              className="w-full h-40 relative rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback
                fallbackSrc='/fallback-image.webp'
                fill
                src={department.heroImage}
                alt={department.name}
                className="object-cover"
              />
            </motion.div>
          ) : (
            <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          )}
        </div>

        {/* Content area with consistent height */}
        <div className="flex flex-col grow">
          {/* Header with name and featured tag */}
          <div className="mb-2 flex items-start justify-between">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary line-clamp-2">
              {department.name}
            </h3>
            {department.isFeatured && (
              <span className="text-xs font-semibold text-white bg-pink-600 px-2 py-0.5 rounded ml-2 shrink-0">
                Featured
              </span>
            )}
          </div>

          {/* Description with fixed height */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 min-h-[60px]">
            {department.overview.description}
          </p>

          {/* Tags with scroll if too many */}
          {department.treatments.items?.length > 0 && (
            <div className="mt-auto">
              <div className="flex flex-wrap gap-1 mb-3 max-h-20 overflow-y-auto py-1">
                {department.treatments.items.slice(0, 6).map((item, index) => (
                  <span
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                    key={index}
                  >
                    {item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer with consistent positioning */}
        <div className="mt-4 flex flex-col gap-6  items-start justify-between">
          {department.facilities.features && (
            <span className="text-xs text-gray-500">
              {department.facilities.features} services
            </span>
          )}
          <div className="flex items-center text-white bg-linear-to-tl from-synergy-blue to-indigo-300 from-40% shadow-blob  py-1 px-2 rounded-sm group-hover:text-slate-50">
            <span className="text-sm font-medium">{t('learnMore')}</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
