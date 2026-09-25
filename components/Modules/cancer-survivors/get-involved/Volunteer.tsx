'use client'

import React from 'react'
import { ImageWithFallback } from '@/components/global/ImageWithFallback'
import { Link } from '@/i18n/navigation'
import { Heart, Users, HandHeart, Sparkles, CheckCircle2, PhoneCall, Mail, ArrowRight } from 'lucide-react'

const VOLUNTEER_ROLES = [
  {
    title: "Survivor Peer Mentor",
    role: "For Cancer Survivors",
    icon: <Sparkles className="w-7 h-7 text-amber-500" />,
    description: "Share your journey and inspire newly diagnosed patients. Your lived experience can provide unmatched emotional strength and reassurance.",
    responsibilities: ["One-on-one survivor talks", "Support group discussions", "Sharing tips on navigating treatment side effects"]
  },
  {
    title: "Patient Guide & Hospital Navigator",
    role: "Community Volunteers",
    icon: <Users className="w-7 h-7 text-blue-600" />,
    description: "Help patients and their families navigate OPD, diagnostic services, and day care facilities with warmth and ease.",
    responsibilities: ["Welcoming new patients", "Assisting elderly visitors", "Guiding patients across hospital departments"]
  },
  {
    title: "Screening Camp & Event Assistant",
    role: "Event Volunteers",
    icon: <HandHeart className="w-7 h-7 text-emerald-600" />,
    description: "Support our outreach doctors and nurses during community screening camps, school lectures, and health awareness drives.",
    responsibilities: ["Camp registration coordination", "Public distribution of awareness booklets", "Crowd & queue facilitation"]
  },
  {
    title: "Creative & Emotional Wellness Support",
    role: "Art, Music & Yoga Instructors",
    icon: <Heart className="w-7 h-7 text-rose-500" />,
    description: "Conduct art therapy, soothing music, meditation, or light restorative yoga sessions for cancer in-patients and survivors.",
    responsibilities: ["Weekend art or music workshops", "Laughter & relaxation sessions", "Storytelling & book reading for day-care patients"]
  }
]

const PERKS = [
  "Certificate of Appreciation & Volunteering Experience from Synergy Cancer Institute",
  "Free basic health check-ups and subsidized annual screening tests",
  "Specialized training in psycho-oncology support and patient communication",
  "The profound joy of transforming someone's hardest days into moments of hope"
]

export const Volunteer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-sans">
      {/* Hero Banner Section */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1] min-h-[220px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 mb-10 sm:mb-14">
        <ImageWithFallback
          fallbackSrc="/fallback-image.webp"
          src="/health-library/banner/cancer-wellness.png"
          alt="Volunteer at Synergy Cancer Care"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent pointer-events-none" />

        <div className="absolute bottom-0 inset-x-0 p-5 sm:p-8 md:p-10 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium tracking-wide mb-2 sm:mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              <span>Get Involved</span>
              <span className="text-white/40">•</span>
              <span className="text-white/90">Volunteer Program</span>
            </div>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white mb-2 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Be a Beacon of Hope: Volunteer with Us
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-100 font-sans leading-relaxed max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
              Whether you are a cancer survivor, student, healthcare enthusiast, or passionate citizen, your time and empathy can make a world of difference.
            </p>
          </div>
        </div>
      </div>

      {/* Volunteer Roles Grid */}
      <div className="mb-16 sm:mb-20">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">Ways You Can Volunteer</h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Choose a volunteering track that matches your background, interests, and availability. Flexible hours on weekdays or weekends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {VOLUNTEER_ROLES.map((role, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-rose-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-slate-50 rounded-xl shadow-xs">{role.icon}</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{role.title}</h3>
                    <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">{role.role}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">{role.description}</p>
                <div className="space-y-2 border-t border-gray-50 pt-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Key Involvements:</p>
                  {role.responsibilities.map((r, rIdx) => (
                    <div key={rIdx} className="flex items-start text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-rose-500 mr-2 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Volunteer Section */}
      <div className="bg-gradient-to-br from-rose-50/70 via-orange-50/50 to-white rounded-3xl p-6 sm:p-10 md:p-12 border border-rose-100/70 mb-16 shadow-xs">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Why Join the Synergy Volunteer Network?</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {PERKS.map((perk, pIdx) => (
              <div key={pIdx} className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-white shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-medium text-gray-800 leading-relaxed">{perk}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Sign Up */}
      <div className="bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-800 text-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Ready to Touch a Life?</h2>
          <p className="text-rose-100 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Fill out a simple inquiry or call our patient relations desk to begin your volunteering onboarding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/contact">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-rose-700 px-8 py-3.5 rounded-full font-bold hover:bg-rose-50 transition shadow-md text-sm sm:text-base">
                <span>Join as a Volunteer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <a href="tel:+917234006595">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition text-sm sm:text-base">
                <PhoneCall className="w-4 h-4" />
                Call: +91 7234006595
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
