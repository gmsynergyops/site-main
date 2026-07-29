import React from 'react'
import { ImageWithFallback } from '@/components/global/ImageWithFallback'

const THERAPY_TYPES = [
  {
    icon: '🧠',
    title: "Cognitive Behavioral Therapy",
    description: "Effective for depression, anxiety, and more by changing thought patterns"
  },
  {
    icon: '💬',
    title: "Dialectical Behavior Therapy",
    description: "Skills training for emotional regulation and interpersonal effectiveness"
  },
  {
    icon: '👨‍👩‍👧',
    title: "Family Systems Therapy",
    description: "Addressing relational patterns that impact mental health"
  }
]

const SPECIALISTS = [
  {
    name: "Dr. Sarah Chen",
    title: "Clinical Psychologist",
    specialty: "Anxiety Disorders",
    image: "/doctors/doctor-chen.webp"
  },
  {
    name: "Dr. Michael Rodriguez",
    title: "Psychiatrist",
    specialty: "Mood Disorders",
    image: "/doctors/doctor-rodriguez.webp"
  },
  {
    name: "Dr. Priya Patel",
    title: "Neuropsychologist",
    specialty: "Cognitive Assessment",
    image: "/doctors/doctor-patel.webp"
  },
  {
    name: "Emily Wilson, LCSW",
    title: "Clinical Social Worker",
    specialty: "Trauma Therapy",
    image: "/doctors/therapist-wilson.webp"
  }
]

const TESTIMONIALS = [
  {
    quote: "The care I received was transformative. My therapist helped me develop tools to manage my anxiety that I'll use for life.",
    author: "James T.",
    treatment: "Anxiety Treatment",
    avatar: "/avatars/patient-1.webp"
  },
  {
    quote: "The family therapy sessions helped us communicate better than we have in years. We're truly grateful.",
    author: "The Rivera Family",
    treatment: "Family Therapy",
    avatar: "/avatars/patient-2.webp"
  }
]

export const CounselingAndMentalHealth = () => {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="space-y-4 sm:space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Comprehensive <span className="text-indigo-600">Mental Health</span> Services
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Evidence-based care in a compassionate environment. Our board-certified specialists provide personalized treatment plans to support your mental wellness journey.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <button
                className="bg-indigo-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-medium focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-sm sm:text-base"
                aria-label="Schedule a consultation"
              >
                Schedule a Consultation
              </button>
              <button
                className="border border-indigo-600 text-indigo-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-indigo-50 transition duration-300 font-medium focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-sm sm:text-base"
                aria-label="Meet our specialists"
              >
                Meet Our Specialists
              </button>
            </div>
          </div>

          <div className="relative aspect-video md:aspect-auto md:h-full mt-6 md:mt-0">
            <div className="relative rounded-lg shadow-xl w-full h-full overflow-hidden">
              <ImageWithFallback
                fallbackSrc='/fallback-image.webp'
                src="/doctors/counselor.webp"
                fill
                alt="Mental health professionals in consultation"
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 sm:p-3 rounded-full mr-2 sm:mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-600">Confidential</p>
                  <p className="text-2xs sm:text-xs text-gray-500">HIPAA Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence-Based Approach */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-5">Our Evidence-Based Approach</h2>
          <p className="text-base sm:text-lg text-gray-600">
            We integrate the latest research with clinical expertise to deliver treatments that have been scientifically validated.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 md:gap-7 max-w-6xl mx-auto">
          {THERAPY_TYPES.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-5 sm:p-6 md:p-7 rounded-xl hover:shadow-lg transition duration-300"
              aria-label={service.title}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4" aria-hidden="true">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specialist Team */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 sm:mb-12 md:mb-14">
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Our Specialist Team</h2>
              <p className="text-base sm:text-lg text-gray-600">
                Board-certified psychiatrists, licensed psychologists, and clinical social workers collaborating on your care.
              </p>
            </div>
            <button
              className="mt-4 sm:mt-5 md:mt-0 border border-indigo-600 text-indigo-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-indigo-50 transition duration-300 font-medium focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-sm sm:text-base"
              aria-label="View all specialists"
            >
              View All Specialists
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {SPECIALISTS.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                aria-label={`Specialist: ${member.name}`}
              >
                <div className="relative aspect-square w-full">
                  <ImageWithFallback
                    fallbackSrc='/fallback-image.webp'
                    fill
                    src={member.image}
                    alt={member.name}
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-indigo-600 font-medium text-sm sm:text-base">{member.title}</p>
                  <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10 sm:mb-12 md:mb-14 text-center">Patient Experiences</h2>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-7">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-5 sm:p-6 md:p-7 rounded-xl"
                aria-label={`Testimonial from ${testimonial.author}`}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-base sm:text-lg text-gray-700 italic mb-4 sm:mb-5">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="flex items-center">
                  <div className="relative rounded-full w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 overflow-hidden">
                    <ImageWithFallback
                      fallbackSrc="/avatars/fallback-avatar.webp"
                      src={testimonial.avatar}
                      fill
                      alt={`${testimonial.author}'s avatar`}
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm sm:text-base">{testimonial.author}</p>
                    <p className="text-gray-600 text-xs sm:text-sm">{testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-tl from-indigo-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5">Take the First Step Toward Wellness</h2>
          <p className="text-base sm:text-lg text-indigo-100 mb-6 sm:mb-7">
            Our intake coordinators are available to answer your questions and help you schedule an appointment.
          </p>
          <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4">
            <button
              className="bg-white text-indigo-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-indigo-50 transition duration-300 font-medium focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 text-sm sm:text-base"
              aria-label="Call to schedule an appointment"
            >
              Call (555) 123-4567
            </button>
            <button
              className="border border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-medium focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 text-sm sm:text-base"
              aria-label="Request appointment online"
            >
              Request Appointment Online
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
