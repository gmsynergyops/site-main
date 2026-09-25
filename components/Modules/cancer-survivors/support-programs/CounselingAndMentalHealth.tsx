import React from 'react'
import { ImageWithFallback } from '@/components/global/ImageWithFallback'
import { Link } from '@/i18n/navigation'
import { Brain, HeartHandshake, Users, PhoneCall, CalendarCheck, ShieldCheck } from 'lucide-react'

const THERAPY_TYPES = [
  {
    icon: <Brain className="w-8 h-8 text-indigo-600" />,
    title: "Cognitive Behavioral Therapy (CBT)",
    description: "Helps cancer survivors and patients cope with anxiety, fear of recurrence, and emotional distress."
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-rose-500" />,
    title: "Psycho-Oncology Counseling",
    description: "Specialized emotional support tailored specifically to cancer patients throughout diagnosis, treatment, and recovery."
  },
  {
    icon: <Users className="w-8 h-8 text-teal-600" />,
    title: "Family & Caregiver Support",
    description: "Guidance and counseling sessions for family members and caregivers navigating emotional and caregiving burdens."
  }
]

const SPECIALISTS = [
  {
    name: "Clinical Psychology Team",
    title: "Psycho-Oncology Counselor",
    specialty: "Cancer Anxiety & Coping Support",
    image: "/doctors/counselor.webp"
  },
  {
    name: "Psychiatry & Wellness Team",
    title: "Consultant Psychiatrist",
    specialty: "Mood Support & Sleep Health",
    image: "/doctors/doctor-rodriguez.webp"
  },
  {
    name: "Medical Social Work",
    title: "Palliative & Support Counselor",
    specialty: "Patient & Caregiver Counseling",
    image: "/doctors/therapist-wilson.webp"
  }
]

const TESTIMONIALS = [
  {
    quote: "The psycho-oncology counseling at Synergy helped me regain my confidence after surgery. They listened with genuine compassion.",
    author: "Cancer Survivor",
    treatment: "Emotional Wellness Support",
    avatar: "/patients/mrs-neetu.png"
  },
  {
    quote: "Caregiver counseling gave our family the strength to navigate through my mother's chemotherapy cycles positively.",
    author: "Caregiver",
    treatment: "Family Counseling",
    avatar: "/patients/mr-naresh-ram.png"
  }
]

export const CounselingAndMentalHealth = () => {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-indigo-50/50 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-indigo-100/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs sm:text-sm font-semibold">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Cancer Survivor Support</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Counseling &amp; <span className="text-indigo-600">Mental Health</span> Support
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Healing is not just physical. At Synergy, our compassionate psycho-oncology team provides empathetic counseling and mental wellness support for cancer patients, survivors, and their families.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link href="/book-appointment">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-indigo-700 transition duration-300 font-medium shadow-md text-sm sm:text-base"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Schedule a Consultation
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-indigo-600 text-indigo-600 px-6 sm:px-8 py-3 rounded-full hover:bg-indigo-50 transition duration-300 font-medium text-sm sm:text-base"
                >
                  <PhoneCall className="w-4 h-4" />
                  Talk to Care Team
                </button>
              </Link>
            </div>
          </div>

          <div className="relative aspect-video sm:aspect-[4/3] md:aspect-square max-h-[420px] w-full mt-4 md:mt-0">
            <div className="relative rounded-2xl shadow-xl w-full h-full overflow-hidden border border-indigo-100">
              <ImageWithFallback
                fallbackSrc='/fallback-image.webp'
                src="/health-library/banner/cancer-wellness.png"
                fill
                alt="Mental health support and counseling"
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-lg border border-indigo-50">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 sm:p-2.5 rounded-full text-green-600">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-800">100% Confidential</p>
                  <p className="text-2xs sm:text-xs text-gray-500">Safe &amp; Compassionate Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence-Based Approach */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Comprehensive Counseling Approach</h2>
          <p className="text-base sm:text-lg text-gray-600">
            We integrate emotional resilience, stress management, and family support into the overall cancer recovery roadmap.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {THERAPY_TYPES.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-indigo-100 transition duration-300 flex flex-col justify-between"
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">Our Support &amp; Counseling Team</h2>
              <p className="text-base sm:text-lg text-gray-600">
                Experienced psychologists, counselors, and medical social workers dedicated to your well-being.
              </p>
            </div>
            <Link href="/doctors/all">
              <button
                className="mt-4 md:mt-0 border border-indigo-600 text-indigo-600 px-6 py-2.5 rounded-full hover:bg-indigo-50 transition duration-300 font-medium text-sm sm:text-base shadow-xs"
              >
                View All Doctors
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
                  <p className="text-indigo-600 font-medium text-sm mt-0.5">{member.title}</p>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Patient &amp; Family Experiences</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50/40 to-slate-50 p-6 sm:p-8 rounded-2xl border border-indigo-50 shadow-xs flex flex-col justify-between"
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
                  <div className="relative rounded-full w-12 h-12 overflow-hidden bg-indigo-100 shrink-0 border border-white shadow-xs">
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
                    <p className="text-indigo-600 text-xs sm:text-sm font-medium">{testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-tl from-indigo-900 via-blue-900 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">We Are Here For You and Your Family</h2>
          <p className="text-base sm:text-lg text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our cancer support team today. Confidential consultations are available both in-person and online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book-appointment">
              <button
                className="w-full sm:w-auto bg-white text-indigo-900 px-8 py-3.5 rounded-full hover:bg-indigo-50 transition duration-300 font-bold shadow-md text-sm sm:text-base"
              >
                Book a Counseling Session
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
