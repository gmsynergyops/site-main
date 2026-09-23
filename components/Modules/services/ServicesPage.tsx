"use client";

import { useState, useMemo } from 'react';
import { ImageWithFallback } from '@/components/global/ImageWithFallback';
import { useDepartmentData } from '@/data/departmentData';
import { DepartmentData } from '@/types';
import { motion, Variants } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Stethoscope, 
  Activity, 
  Clock, 
  Search, 
  CheckCircle2,
  Calendar
} from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export default function ServicesPage() {
  const departmentData = useDepartmentData();
  const t = useTranslations('global');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('all');

  const filteredDepartments = useMemo(() => {
    return departmentData.filter((dept) => {
      const matchesSearch = 
        dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dept.heroTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dept.treatments?.items?.some((t) => t.title.toLowerCase().includes(searchQuery.toLowerCase()));

      if (activeFilter === 'featured') {
        return matchesSearch && dept.isFeatured;
      }
      return matchesSearch;
    });
  }, [departmentData, searchQuery, activeFilter]);

  const featuredCount = useMemo(() => departmentData.filter(d => d.isFeatured).length, [departmentData]);

  return (
    <motion.main
      className="min-h-screen bg-slate-50/60"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero / Header Section (No placeholder image, modern medical layout) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-slate-50/60 border-b border-neutral-200/70 pt-12 sm:pt-16 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Eyebrow Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-100 shadow-xs text-synergy-blue text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="size-4 text-synergy-blue" />
            <span>Centres of Clinical Excellence</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto mb-6"
            variants={itemVariants}
          >
            Exceptional Care & Specialized Medical Departments at{' '}
            <span className="text-synergy-blue">Synergy Hospital</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg text-gray-600 font-sans max-w-3xl mx-auto mb-10 leading-relaxed"
            variants={itemVariants}
          >
            Delivering advanced clinical care with state-of-the-art medical technology, board-certified super-specialists, and compassionate patient-centered healthcare.
          </motion.p>

          {/* Key Pillars / Stats Bar */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-10 text-left"
          >
            <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-neutral-200/80 shadow-xs flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-50 text-synergy-blue shrink-0">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">20+ Specialties</h4>
                <p className="text-xs text-gray-500 mt-0.5">Comprehensive super-speciality departments</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-neutral-200/80 shadow-xs flex items-start gap-3">
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700 shrink-0">
                <Stethoscope className="size-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Expert Doctors</h4>
                <p className="text-xs text-gray-500 mt-0.5">Dedicated surgeons & senior clinicians</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-neutral-200/80 shadow-xs flex items-start gap-3">
              <div className="p-2 rounded-lg bg-sky-50 text-sky-700 shrink-0">
                <Activity className="size-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Advanced Tech</h4>
                <p className="text-xs text-gray-500 mt-0.5">Modern modular OTs, MRI & Dialysis</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-neutral-200/80 shadow-xs flex items-start gap-3">
              <div className="p-2 rounded-lg bg-rose-50 text-rose-700 shrink-0">
                <Clock className="size-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">24/7 Emergency</h4>
                <p className="text-xs text-gray-500 mt-0.5">Round-the-clock trauma & critical care</p>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#departments-grid"
              className="inline-flex items-center gap-2 bg-synergy-blue hover:bg-synergy-blue/90 text-white font-medium text-sm sm:text-base px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <span>Explore Departments</span>
              <ArrowRight className="size-4" />
            </a>
            <Link
              href="/doctors/all"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-medium text-sm sm:text-base px-6 py-3 rounded-xl shadow-xs transition-all"
            >
              <Calendar className="size-4 text-synergy-blue" />
              <span>{t('findAvailableDoctors') || 'Find Available Doctors'}</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Departments Grid Section */}
      <section id="departments-grid" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[100rem] mx-auto">
        {/* Section Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 text-synergy-blue text-xs sm:text-sm font-semibold mb-1">
              <CheckCircle2 className="size-4" />
              <span>Comprehensive Healthcare</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Our Medical & Surgical Departments
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Browse through all our clinical specialties and advanced healthcare divisions.
            </p>
          </div>

          {/* Search & Filter bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Filter Tabs */}
            <div className="inline-flex p-1 bg-neutral-200/70 rounded-xl">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeFilter === 'all'
                    ? 'bg-white text-gray-900 shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                All ({departmentData.length})
              </button>
              <button
                onClick={() => setActiveFilter('featured')}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1 ${
                  activeFilter === 'featured'
                    ? 'bg-white text-gray-900 shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Sparkles className="size-3 text-synergy-blue" />
                <span>Featured ({featuredCount})</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px] sm:min-w-[280px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search department or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-neutral-300 rounded-xl text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-synergy-blue/30 focus:border-synergy-blue transition-all"
              />
            </div>
          </div>
        </div>

        {/* Department Grid */}
        {filteredDepartments.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {filteredDepartments.map((department) => (
              <DepartmentCard key={department.id} department={department} />
            ))}
          </motion.div>
        ) : (
          <div className="bg-white rounded-2xl border border-neutral-200/80 p-12 text-center max-w-lg mx-auto my-8">
            <Search className="size-10 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">No departments found</h3>
            <p className="text-sm text-gray-600 mb-4">
              We couldn&apos;t find any department matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="px-4 py-2 bg-synergy-blue text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-synergy-blue/90 transition-colors"
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </section>
    </motion.main>
  );
}

// Enhanced DepartmentCard component
function DepartmentCard({ department }: { department: DepartmentData }) {
  const t = useTranslations('global');
  const imageSrc = department.heroImage || department.bannerImage;

  // Format overview text
  const overviewText = Array.isArray(department.overview?.description)
    ? department.overview.description.join(' ')
    : department.overview?.description || department.heroSubtitle || '';

  return (
    <motion.div
      variants={itemVariants}
      className="h-full"
    >
      <Link
        href={`/services/${department.slug}`}
        className="group relative flex flex-col h-full bg-white rounded-2xl border border-neutral-200/80 hover:border-synergy-blue/50 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
      >
        {/* Department Image Container */}
        <div className="relative w-full aspect-4/3 sm:aspect-square overflow-hidden bg-neutral-100 shrink-0">
          {imageSrc ? (
            <>
              <ImageWithFallback
                fallbackSrc="/fallback-image.webp"
                fill
                src={imageSrc}
                alt={department.name}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </>
          ) : (
            <div className="w-full h-full bg-slate-100 flex items-center justify-center">
              <Activity className="size-12 text-slate-400" />
            </div>
          )}

          {/* Featured Badge */}
          {department.isFeatured && (
            <span className="absolute top-3 left-3 bg-synergy-blue text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 z-10">
              <Sparkles className="size-3" />
              <span>Featured</span>
            </span>
          )}

          {/* Department Index Pill */}
          <span className="absolute top-3 right-3 bg-black/45 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-full font-medium z-10">
            #{String(department.index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Content Body */}
        <div className="p-5 flex flex-col grow justify-between">
          <div>
            {/* Header with Department Name */}
            <div className="mb-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-synergy-blue transition-colors line-clamp-1">
                {department.name}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4 min-h-[36px]">
              {overviewText}
            </p>

            {/* Key Treatments / Services Badges */}
            {department.treatments?.items && department.treatments.items.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {department.treatments.items.slice(0, 3).map((item, index) => (
                  <span
                    className="text-[11px] bg-slate-50 text-slate-700 border border-slate-200/80 px-2 py-0.5 rounded-md font-medium"
                    key={index}
                  >
                    {item.title.length > 22 ? `${item.title.substring(0, 22)}...` : item.title}
                  </span>
                ))}
                {department.treatments.items.length > 3 && (
                  <span className="text-[11px] bg-blue-50/80 text-synergy-blue border border-blue-100 px-1.5 py-0.5 rounded-md font-semibold">
                    +{department.treatments.items.length - 3} more
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Footer Action Button */}
          <div className="pt-2 border-t border-neutral-100 mt-2">
            <div className="w-full py-2 px-3 bg-slate-50 group-hover:bg-synergy-blue text-slate-700 group-hover:text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all duration-300">
              <span>{t('learnMore') || 'Explore Department'}</span>
              <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
