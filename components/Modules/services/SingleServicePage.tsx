'use client';

import { usePathname } from 'next/navigation';
import { useDepartmentData } from '@/data/departmentData';
import { ImageWithFallback } from '@/components/global/ImageWithFallback';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

// Simple Checkmark Icon Component for the new lists
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

// Animation variants
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

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

// TYPOGRAPHY FIXED FOR MOBILE
const newYorkTypography = {
  h1: "text-2xl sm:text-4xl md:text-4xl font-display font-bold tracking-tight", 
  h2: "text-2xl sm:text-3xl font-display font-semibold border-b-2 border-gray-200 pb-2 mb-6",
  h3: "text-xl sm:text-2xl font-display font-medium",
  body: "text-gray-700 leading-relaxed font-sans",
  quote: "text-lg italic font-serif text-gray-600"
};

export default function DepartmentPage() {
  const pathname = usePathname();
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [facilitiesRef, facilitiesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [researchRef, researchInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Extract slug from pathname
  const slug = pathname?.split('/').pop() || '';
  const departmentData = useDepartmentData()
  
  // Find matching department data
  const department = departmentData.find(dept => dept.slug === slug) as any;

  if (!department) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Department Not Found</h1>
        <p className="text-lg text-gray-600">The requested department does not exist.</p>
      </div>
    );
  }

  // Get dynamic background class or fallback to default
  const dynamicBgClass = department.themeBgClass || "bg-gradient-to-br from-blue-50/50 via-white to-blue-50/80";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mb-20"
      >
        <motion.div
          variants={itemVariants}
          className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
        >
          <ImageWithFallback
            fallbackSrc="/fallback-image.webp"
            src={department.bannerImage}
            alt={`${department.name} Department`}
            fill
            className="object-cover"
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          
          {/* GLASS BOX ADJUSTED FOR MOBILE */}
          <motion.div
            variants={fadeIn}
            className="absolute bottom-[10px] sm:bottom-[15px] left-0 right-0 w-full px-2 sm:px-4 flex justify-center z-10"
          >
            <div className="w-full max-w-4xl p-4 sm:p-6 md:p-10 rounded-2xl bg-white/[0.01] backdrop-blur-sm border-[1.5px] border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_8px_32px_0_rgba(0,0,0,0.2)] text-center relative overflow-hidden mx-2 sm:mx-0">
              
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

              <motion.h1
                variants={scaleUp}
                className={`${newYorkTypography.h1} text-white mb-1.5 sm:mb-3 md:mb-4 [text-shadow:_0_0_5px_rgba(0,0,0,1.0),_0_0_5px_rgba(255,255,255,0.9)] relative z-10 leading-tight`}
              >
                {department.heroTitle}
              </motion.h1>
              <motion.p
                variants={scaleUp}
                className="text-sm sm:text-base md:text-xl text-white font-serif max-w-3xl mx-auto [text-shadow:_0_0_15px_rgba(255,255,255,0.8)] font-medium relative z-10 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none"
              >
                {department.heroSubtitle}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        ref={contentRef}
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
        variants={containerVariants}
        className={cn("mb-20 p-6 md:p-10 rounded-3xl shadow-sm border border-black/5", dynamicBgClass)}
      >
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Overview Content Side */}
          <motion.div variants={itemVariants}>
            <motion.h2 variants={itemVariants} className={`${newYorkTypography.h2} text-gray-900 border-gray-300`}>
              {department.overview.title}
            </motion.h2>
            
            {/* Main Description */}
            {department.overview.description?.map((paragraph: string, index: number) => (
              <motion.p key={index} variants={itemVariants} className={`${newYorkTypography.body} mb-6`}>
                {paragraph.replace(/'/g, '&apos;').replace(/"/g, '&quot;')}
              </motion.p>
            ))}

            {/* Old structure fallback (Why Choose Us) */}
            {department.overview.whyChooseUs && !department.overview.additionalSections && (
                <>
                  <motion.h3 variants={itemVariants} className={`${newYorkTypography.h3} mb-4 text-gray-900`}>
                    Why Choose Us
                  </motion.h3>
                  <motion.ul variants={containerVariants} className="list-disc pl-6 space-y-3 text-gray-700">
                    {department.overview.whyChooseUs.map((item: string, index: number) => (
                      <motion.li key={index} variants={itemVariants} className={newYorkTypography.body}>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </>
            )}

            {/* NEW DYNAMIC ADDITIONAL SECTIONS */}
            {department.overview.additionalSections?.map((section: any, index: number) => (
              <motion.div key={index} variants={itemVariants} className="mb-8 last:mb-0 mt-6">
                <h3 className={`${newYorkTypography.h3} mb-4 text-gray-900 font-semibold`}>
                  {section.title}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {section.items.map((item: string, itemIndex: number) => (
                    <li key={itemIndex} className={`flex items-start ${newYorkTypography.body}`}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Treatments Side */}
          <motion.div variants={itemVariants}>
            <motion.div
              variants={scaleUp}
              className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-md border border-white sticky top-24"
            >
              <h3 className={`${newYorkTypography.h3} mb-6 text-gray-900 border-b border-gray-200 pb-3`}>
                {department.treatments.title}
              </h3>
              <motion.div variants={containerVariants} className="space-y-4">
                {department.treatments.items.map((treatment: any, index: number) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
                    className="p-5 bg-white rounded-xl border-l-4 border-blue-500 transition-all shadow-sm hover:shadow-md"
                  >
                    <h4 className="font-serif font-semibold mb-2 text-gray-900">{treatment.title}</h4>
                    <p className="text-gray-600 text-sm font-sans">{treatment.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-blue-900 text-white py-16 mb-20 rounded-3xl shadow-lg"
      >
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2 variants={itemVariants} className={`${newYorkTypography.h2} text-white border-blue-700/50 mb-12 text-center`}>
            {department.stats.title}
          </motion.h2>
          <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {department.stats.items.map((stat: any, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold mb-3">{stat.value}</div>
                <div className="text-blue-100 font-sans uppercase text-xs md:text-sm tracking-wider font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mb-20"
      >
        <motion.h2 variants={itemVariants} className={`${newYorkTypography.h2} text-gray-900 mb-12`}>
          {department.team.title}
        </motion.h2>
        <motion.div variants={containerVariants} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {department.team.members.map((member: any, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="relative h-64">
                  <ImageWithFallback
                    fallbackSrc="/fallback-image.webp"
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 text-sm mb-2 font-medium">{member.role}</p>
                  <p className="text-gray-500 text-xs mb-3 leading-relaxed">{member.credentials}</p>
                  <div className="text-xs bg-blue-50 text-blue-800 px-3 py-1.5 rounded-full inline-block font-medium">
                    {member.specialty}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Facilities Section */}
      <motion.section
        ref={facilitiesRef}
        initial="hidden"
        animate={facilitiesInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mb-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 p-6 md:p-12 rounded-3xl border border-slate-100">
          <motion.div variants={itemVariants}>
            <motion.h2 variants={itemVariants} className={`${newYorkTypography.h2} text-gray-900 mb-8 border-gray-200`}>
              {department.facilities.title}
            </motion.h2>
            <motion.p variants={itemVariants} className={`${newYorkTypography.body} mb-6`}>
              {department.facilities.description}
            </motion.p>
            <motion.ul variants={containerVariants} className="list-disc pl-6 space-y-3 text-gray-700">
              {department.facilities.features.map((item: string, index: number) => (
                <motion.li key={index} variants={itemVariants} className={newYorkTypography.body}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div variants={itemVariants} className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <ImageWithFallback
              fallbackSrc="/fallback-image.webp"
              src={department.facilities.image}
              alt={`${department.name} Facilities`}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Research Section */}
      <motion.section
        ref={researchRef}
        initial="hidden"
        animate={researchInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-gray-50 py-16 mb-20 rounded-3xl border border-gray-100"
      >
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2 variants={itemVariants} className={`${newYorkTypography.h2} text-gray-900 mb-12 text-center border-none`}>
            {department.research.title}
          </motion.h2>
          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8">
            {department.research.items.map((item: any, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100 transition-shadow hover:shadow-md"
              >
                <div className="text-4xl mb-4 text-blue-600">{item.icon}</div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mb-20"
      >
        <motion.h2 variants={itemVariants} className={`${newYorkTypography.h2} text-gray-900 mb-12`}>
          {department.testimonials.title}
        </motion.h2>
        <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8">
          {department.testimonials.items.map((story: any, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row items-start mb-6 gap-4">
                <div className="relative h-16 w-16 flex-shrink-0 rounded-full overflow-hidden border border-gray-200">
                  <ImageWithFallback
                    fallbackSrc="/fallback-image.webp"
                    src={story.image}
                    alt={story.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <blockquote className={`${newYorkTypography.quote} mb-4 text-base md:text-lg`}>
                  &quot;{story.quote}&quot;
                  </blockquote>
                  <p className="font-serif font-semibold text-gray-900">— {story.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-blue-900 text-white py-16 md:py-20 rounded-3xl shadow-xl"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 variants={itemVariants} className={`${newYorkTypography.h1} mb-6 border-none`}>
            {department.cta.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            {department.cta.subtitle}
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            {department.cta.buttons.map((button: any, index: number) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-3.5 rounded-full font-serif font-semibold shadow-md transition-colors w-full sm:w-auto ${
                  button.isPrimary
                    ? 'bg-white text-blue-900 hover:bg-gray-50'
                    : 'border-2 border-white text-white hover:bg-white/10'
                }`}
              >
                {button.text}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}