'use client';

import { usePathname } from 'next/navigation';
import { useCentersData } from '@/data/centersData';
import { ImageWithFallback } from '@/components/global/ImageWithFallback';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-synergy-blue mt-1 mr-2 flex-shrink-0">
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
  h1: "text-4xl md:text-5xl font-display font-bold tracking-tight",
  h2: "text-3xl font-display font-semibold border-b-2 border-gray-200 pb-2 mb-6",
  h3: "text-2xl font-display font-semibold",
  body: "text-gray-700 leading-relaxed font-sans"
};

export default function CentersPage() {
  const pathname = usePathname();
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const slug = pathname?.split('/').pop() || '';
  const centersData = useCentersData();
  const pageData = centersData.find(p => p.slug === slug);

  if (!pageData) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Page Not Found</h1>
        <p className="text-lg text-gray-600">The requested center page does not exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Hero Section */}
      <motion.section ref={heroRef} initial="hidden" animate={heroInView ? "visible" : "hidden"} variants={containerVariants} className="mb-20">
        <motion.div variants={itemVariants} className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <ImageWithFallback fallbackSrc="/fallback-image.webp" src={pageData.bannerImage} alt={pageData.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          
          <motion.div className="absolute bottom-[10px] left-0 right-0 w-full px-4 flex justify-center z-10">
            <div className="w-full max-w-4xl p-6 md:p-10 rounded-2xl bg-white/[0.02] backdrop-blur-xl border-[1.5px] border-white/50 shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_8px_32px_0_rgba(0,0,0,0.2)] text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
              <motion.h1 variants={itemVariants} className={`${newYorkTypography.h1} text-white mb-3 md:mb-4 [text-shadow:_0_0_20px_rgba(255,255,255,0.8),_0_0_5px_rgba(255,255,255,1)] relative z-10`}>
                {pageData.heroTitle}
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-white font-serif max-w-3xl mx-auto [text-shadow:_0_0_15px_rgba(255,255,255,0.6)] font-medium relative z-10">
                {pageData.heroSubtitle}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Main Content Sections */}
      <motion.section ref={contentRef} initial="hidden" animate={contentInView ? "visible" : "hidden"} variants={containerVariants} className={cn("mb-20 p-6 md:p-12 rounded-3xl shadow-sm border border-black/5", pageData.themeBgClass)}>
        <div className="max-w-4xl mx-auto space-y-16">
          {pageData.sections.map((section, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-6">
              <h2 className={`${newYorkTypography.h2} text-synergy-blue border-blue-200 text-center md:text-left`}>{section.title}</h2>
              
              {section.description && section.description.map((desc, dIndex) => (
                <p key={dIndex} className={`${newYorkTypography.body} text-lg text-center md:text-left`}>{desc}</p>
              ))}

              {section.items && (
                <div className="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-white mt-6">
                  <ul className="grid sm:grid-cols-1 gap-4">
                    {section.items.map((item, iIndex) => (
                      <li key={iIndex} className={`flex items-start ${newYorkTypography.body} bg-white p-4 rounded-xl shadow-sm border border-gray-50`}>
                        <CheckIcon />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Common Blocks for Every Page */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="mb-20 grid md:grid-cols-2 gap-8">
        {/* Why this network matters */}
        <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 shadow-sm">
           <h3 className={`${newYorkTypography.h3} mb-6 text-gray-900`}>WHY THIS NETWORK MATTERS</h3>
           <ul className="space-y-4">
             {["Reduces travel stress for patients and families", "Encourages early consultation", "Supports timely diagnosis and treatment", "Brings expert cancer care closer to communities"].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <CheckIcon /> <span>{item}</span>
                </li>
             ))}
           </ul>
           <p className="mt-6 italic font-serif text-gray-600 font-medium">"Cancer care should be within reach, not out of reach."</p>
        </div>

        {/* Our commitment to consistent care */}
        <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 shadow-sm">
           <h3 className={`${newYorkTypography.h3} mb-6 text-gray-900`}>OUR COMMITMENT TO CONSISTENT CARE</h3>
           <p className="text-gray-700 mb-4">Every center and outreach program follows:</p>
           <ul className="space-y-4">
             {["Standard treatment protocols", "Ethical and evidence-based practices", "Clear communication with patients", "Continuous coordination with oncology specialists"].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <CheckIcon /> <span>{item}</span>
                </li>
             ))}
           </ul>
           <p className="mt-6 italic font-serif text-gray-600 font-medium">"Patients receive the same quality of guidance, wherever they connect with Synergy."</p>
        </div>
      </motion.section>

      {/* CALL TO ACTION Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="bg-blue-900 text-white py-16 md:py-20 rounded-3xl shadow-xl">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 variants={itemVariants} className={`${newYorkTypography.h1} mb-6 border-none text-white`}>
            Not sure where to start?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Our team will help you find the right center and guide you through the next steps.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <Link href="/centers/find-center">
                <button className="px-8 py-3.5 w-full sm:w-auto rounded-full font-serif font-bold shadow-md bg-white text-blue-900 hover:bg-gray-100 transition-colors">
                  Find a Center Near You
                </button>
              </Link>
              <Link href="/centers/outstation-support">
                <button className="px-8 py-3.5 w-full sm:w-auto rounded-full font-serif font-bold shadow-md border-2 border-white text-white hover:bg-white/10 transition-colors">
                  Check Upcoming Camps
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-3.5 w-full sm:w-auto rounded-full font-serif font-bold shadow-md border-2 border-blue-400 text-blue-100 hover:bg-blue-800 transition-colors">
                  Talk to Our Care Team
                </button>
              </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}