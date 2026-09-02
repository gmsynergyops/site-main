'use client';

import { ImageWithFallback } from '@/components/global/ImageWithFallback';
import { useCancerCareData } from '@/data/cancerCareData';
import { cn } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-synergy-blue mt-1 mr-2 shrink-0">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const newYorkTypography = {
  h1: "text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight",
  h2: "text-2xl sm:text-3xl font-display font-semibold border-b-2 border-gray-200 pb-2 mb-6",
  body: "text-gray-700 leading-relaxed font-sans"
};

export default function CancerCarePage() {
  const pathname = usePathname();
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const slug = pathname?.split('/').pop() || '';
  const cancerCareData = useCancerCareData();
  const pageData = cancerCareData.find(p => p.slug === slug);

  if (!pageData) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Page Not Found</h1>
        <p className="text-lg text-gray-600">The requested page does not exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Hero Section */}
      <motion.section ref={heroRef} initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={containerVariants} className="mb-16 md:mb-20">
        <motion.div variants={itemVariants} className="relative h-[440px] sm:h-[500px] md:h-[560px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50">
          <ImageWithFallback
            fallbackSrc="/fallback-image.webp"
            src={pageData.bannerImage}
            alt={pageData.name}
            fill
            className="object-cover object-top"
            priority
          />
          
          {/* Curved radial gradient scrim: wraps organically around text at bottom-left without darkening the central/upper image */}
          <div className="absolute inset-0 [background:radial-gradient(ellipse_85%_55%_at_bottom_left,rgba(2,6,23,0.82)_0%,rgba(2,6,23,0.35)_50%,transparent_100%)] pointer-events-none" />
          {/* Subtle low grounded fade (only touches the bottom 25% to keep image vibrant and bright) */}
          <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Clean modern hero typography & metadata positioned comfortably in the bottom zone */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 md:p-12 z-10">
            <div className="max-w-4xl">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-synergy-pink animate-pulse" />
                <span>Cancer Care</span>
                <span className="text-white/40">•</span>
                <span className="text-white/90">{pageData.name}</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-2xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              >
                {pageData.heroTitle}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base md:text-lg text-slate-200/90 font-sans leading-relaxed max-w-3xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
              >
                {pageData.heroSubtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Main Content Sections (Dynamically rendering from the new JSON structure) */}
      <motion.section ref={contentRef} initial="hidden" animate={contentInView ? "visible" : "hidden"} variants={containerVariants} className={cn("mb-20 p-6 md:p-12 rounded-3xl shadow-sm border border-black/5", pageData.themeBgClass)}>
        <div className="max-w-4xl mx-auto space-y-16">
          {pageData.sections?.map((section, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-6">

              <h2 className={`${newYorkTypography.h2} text-synergy-blue border-blue-200 text-center md:text-left`}>{section.title}</h2>

              {section.description && section.description.map((desc, dIndex) => (
                <p key={dIndex} className={`${newYorkTypography.body} text-base sm:text-lg text-center md:text-left`}>{desc}</p>
              ))}

              {section.items && section.items.length > 0 && (
                <div className="bg-white/60 backdrop-blur-sm p-5 md:p-8 rounded-2xl shadow-sm border border-white mt-6">
                  <ul className="grid sm:grid-cols-1 gap-4">
                    {section.items.map((item, iIndex) => (
                      <li key={iIndex} className={`flex items-start ${newYorkTypography.body} bg-white p-4 rounded-xl shadow-sm border border-gray-50`}>
                        <CheckIcon />
                        <span className="font-medium text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
}