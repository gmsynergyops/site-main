import React from 'react'
import { ImageWithFallback } from '@/components/global/ImageWithFallback'
import { Link } from '@/i18n/navigation'
import { Activity, Dumbbell, HeartPulse, PhoneCall, CalendarCheck, ShieldCheck, Sparkles } from 'lucide-react'

const PROGRAM_TYPES = [
  {
    icon: <Activity className="w-8 h-8 text-teal-600" />,
    title: "Post-Surgical Cancer Rehabilitation",
    description: "Personalized physiotherapy to restore strength, shoulder/arm range of motion, and physical independence after surgical oncology procedures."
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
    title: "Lymphedema Management & Care",
    description: "Specialized therapy including manual lymphatic drainage, compression care, and gentle exercise for breast and pelvic cancer survivors."
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-blue-600" />,
    title: "Fatigue Management & Conditioning",
    description: "Supervised aerobic and resistance conditioning to counter cancer-related fatigue and rebuild stamina after chemotherapy or radiation."
  }
]

const SPECIALISTS = [
  {
    name: "Physiotherapy & Rehab Team",
    title: "Lead Cancer Physical Therapist",
    specialty: "Mobility & Lymphedema Care",
    image: "/doctors/therapist-davis.webp"
  },
  {
    name: "Occupational Therapy Specialists",
    title: "Occupational Therapist",
    specialty: "Daily Activity & Ergonomic Restoration",
    image: "/doctors/therapist-miller.webp"
  },
  {
    name: "Speech & Swallowing Therapists",
    title: "Rehabilitation Specialist",
    specialty: "Head & Neck Cancer Recovery",
    image: "/doctors/doctor-wong.webp"
  }
]

const TESTIMONIALS = [
  {
    quote: "After my breast surgery, the rehabilitation team at Synergy helped me regain complete movement of my arm in just a few weeks.",
    author: "Cancer Survivor",
    treatment: "Post-Op Physical Therapy",
    avatar: "/patients/kalavati-devi.png"
  },
  {
    quote: "The personalized exercises guided by the physiotherapy staff helped me overcome chemotherapy fatigue and return to my daily routine.",
    author: "Cancer Survivor",
    treatment: "Endurance & Conditioning Rehab",
    avatar: "/patients/mahaveeram.png"
  }
]

export const RehabilationPrograms = () => {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50/70 via-blue-50/50 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-teal-100/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>Cancer Survivor Rehabilitation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Comprehensive <span className="text-teal-600">Rehabilitation</span> Programs
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Regaining strength, mobility, and confidence after cancer treatments. Our multi-disciplinary rehabilitation team creates tailored recovery roadmaps for every patient.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link href="/book-appointment">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-teal-700 transition duration-300 font-medium shadow-md text-sm sm:text-base"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Book Rehab Assessment
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-teal-600 text-teal-700 px-6 sm:px-8 py-3 rounded-full hover:bg-teal-50 transition duration-300 font-medium text-sm sm:text-base"
                >
                  <PhoneCall className="w-4 h-4" />
                  Contact Rehab Team
                </button>
              </Link>
            </div>
          </div>

          <div className="relative aspect-video sm:aspect-[4/3] md:aspect-square max-h-[420px] w-full mt-4 md:mt-0">
            <div className="relative rounded-2xl shadow-xl w-full h-full overflow-hidden border border-teal-100">
              <ImageWithFallback
                fallbackSrc='/fallback-image.webp'
                src="/health-library/banner/treatment-options.png"
                fill
                alt="Patient rehabilitation and physical therapy"
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-lg border border-teal-50">
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 p-2 sm:p-2.5 rounded-full text-teal-600">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-800">Advanced Physiotherapy</p>
                  <p className="text-2xs sm:text-xs text-gray-500">Dedicated Oncology Gym</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Types */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Specialized Cancer Rehabilitation Services</h2>
          <p className="text-base sm:text-lg text-gray-600">
            Evidence-based recovery protocols designed to restore physical capabilities, prevent complications, and improve overall wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PROGRAM_TYPES.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-teal-100 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 inline-block p-3 bg-white rounded-xl shadow-xs">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialist Team */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-50/80">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12">
            <div className="md:w-2/3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">Expert Rehabilitation Care Team</h2>
              <p className="text-base sm:text-lg text-gray-600">
                Certified physical therapists, occupational therapists, and oncological rehabilitation specialists.
              </p>
            </div>
            <Link href="/doctors/all">
              <button
                className="mt-4 md:mt-0 border border-teal-600 text-teal-700 px-6 py-2.5 rounded-full hover:bg-teal-50 transition duration-300 font-medium text-sm sm:text-base shadow-xs"
              >
                View Doctors &amp; Specialists
              </button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALISTS.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition duration-300"
              >
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <ImageWithFallback
                    fallbackSrc='/fallback-image.webp'
                    fill
                    src={member.image}
                    alt={member.name}
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-teal-600 font-medium text-sm mt-0.5">{member.title}</p>
                  <p className="text-gray-500 mt-2 text-sm">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Survivor Recovery Experiences</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50/40 to-slate-50 p-6 sm:p-8 rounded-2xl border border-teal-50 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <blockquote className="text-base sm:text-lg text-gray-700 italic mb-6 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                </div>
                <div className="flex items-center gap-3.5 pt-2">
                  <div className="relative rounded-full w-12 h-12 overflow-hidden bg-teal-100 shrink-0 border border-white shadow-xs">
                    <ImageWithFallback
                      fallbackSrc="/fallback-image.webp"
                      src={testimonial.avatar}
                      fill
                      alt={testimonial.author}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.author}</p>
                    <p className="text-teal-600 text-xs sm:text-sm font-medium">{testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-tl from-teal-900 via-teal-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Begin Your Recovery Roadmap Today</h2>
          <p className="text-base sm:text-lg text-teal-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our oncology rehabilitation team is ready to evaluate your needs and assist you with step-by-step physical recovery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book-appointment">
              <button
                className="w-full sm:w-auto bg-white text-teal-900 px-8 py-3.5 rounded-full hover:bg-teal-50 transition duration-300 font-bold shadow-md text-sm sm:text-base"
              >
                Book Rehabilitation Appointment
              </button>
            </Link>
            <a href="tel:+917234006595">
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-full hover:bg-white/10 transition duration-300 font-bold text-sm sm:text-base"
              >
                <PhoneCall className="w-4 h-4" />
                Call Helpline: +91 7234006595
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
