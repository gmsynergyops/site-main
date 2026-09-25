'use client'

import React from 'react'
import { ImageWithFallback } from '@/components/global/ImageWithFallback'
import { Link } from '@/i18n/navigation'
import { Megaphone, Calendar, Users, Award, ShieldAlert, HeartHandshake, PhoneCall, CheckCircle2 } from 'lucide-react'

const STATS = [
  { value: "25,000+", label: "People Screened Across UP" },
  { value: "150+", label: "Rural & Urban Camps Conducted" },
  { value: "100%", label: "Free Initial Awareness Talks" },
  { value: "24/7", label: "Helpline & Guidance Available" }
]

const CAMPAIGNS = [
  {
    title: "Pink Ribbon: Breast Cancer Early Detection",
    tag: "Women's Health",
    color: "bg-pink-100 text-pink-700",
    description: "Community breast self-examination workshops, subsidized mammography drives, and clinical examinations for women across Gorakhpur and surrounding districts.",
    image: "/health-library/banner/breast-cancer.png",
    highlights: ["Free clinical breast examinations", "Self-exam education workshops", "Subsidized diagnostic mammograms"]
  },
  {
    title: "Tobacco-Free Purvanchal Campaign",
    tag: "Oral & Head/Neck Cancer",
    color: "bg-amber-100 text-amber-800",
    description: "Mass screening camps targeting early precancerous oral lesions (leukoplakia, erythroplakia) with free specialist consultations and tobacco cessation counseling.",
    image: "/health-library/banner/oral-cancer.png",
    highlights: ["Oral cavity screening camps", "Nicotine de-addiction counseling", "School & college youth awareness"]
  },
  {
    title: "Cervical Cancer Prevention & HPV Drives",
    tag: "Preventive Care",
    color: "bg-purple-100 text-purple-700",
    description: "Education on HPV vaccination for adolescent girls and Pap smear screening camps for women in rural primary health centers.",
    image: "/health-library/banner/cervical-cancer.png",
    highlights: ["Pap smear screening on wheels", "HPV vaccination awareness", "Doctor-led interactive sessions"]
  },
  {
    title: "Community Outreach & Rural Medical Camps",
    tag: "Rural Health",
    color: "bg-emerald-100 text-emerald-800",
    description: "Mobile medical teams visiting villages across Eastern UP and Bihar borders to bring oncologist consultations and diagnostic screenings to doorsteps.",
    image: "/health-library/banner/cancer-prevention.png",
    highlights: ["Free oncologist consultation", "Vital checks & basic investigations", "Direct referral pathways to hospital"]
  }
]

export const AwarenessCampaigns = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-sans">
      {/* Hero Banner Section */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1] min-h-[220px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 mb-10 sm:mb-14">
        <ImageWithFallback
          fallbackSrc="/fallback-image.webp"
          src="/health-library/banner/cancer-prevention.png"
          alt="Cancer Awareness Campaigns"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent pointer-events-none" />

        <div className="absolute bottom-0 inset-x-0 p-5 sm:p-8 md:p-10 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium tracking-wide mb-2 sm:mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Get Involved</span>
              <span className="text-white/40">•</span>
              <span className="text-white/90">Awareness Campaigns</span>
            </div>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white mb-2 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Cancer Awareness &amp; Screening Campaigns
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-100 font-sans leading-relaxed max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
              Early detection saves lives. Synergy Hospital actively leads community awareness drives, screening camps, and public health initiatives across Eastern UP.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
        {STATS.map((stat, index) => (
          <div key={index} className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-synergy-blue mb-1">{stat.value}</p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Campaigns Grid */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Signature Community Initiatives</h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Targeting the most prevalent cancers in our region through proactive education, clinical screenings, and direct doctor interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAMPAIGNS.map((camp, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[21/9] w-full bg-slate-100">
                  <ImageWithFallback
                    fallbackSrc="/fallback-image.webp"
                    src={camp.image}
                    alt={camp.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${camp.color} shadow-xs`}>
                      {camp.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{camp.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{camp.description}</p>
                  <ul className="space-y-2">
                    {camp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Request a Camp Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl mb-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex p-3 bg-white/10 rounded-2xl backdrop-blur-md">
            <Megaphone className="w-8 h-8 text-amber-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Organize a Screening Camp at Your Workplace or Community</h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We partner with corporate organizations, residential societies, colleges, and NGOs to conduct free or subsidized cancer awareness and detection camps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/contact">
              <button className="w-full sm:w-auto bg-white text-blue-900 px-8 py-3.5 rounded-full font-bold hover:bg-blue-50 transition shadow-md text-sm sm:text-base">
                Request a Camp / Workshop
              </button>
            </Link>
            <a href="tel:+917234006595">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition text-sm sm:text-base">
                <PhoneCall className="w-4 h-4" />
                Helpline: +91 7234006595
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
