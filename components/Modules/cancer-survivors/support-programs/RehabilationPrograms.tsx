import React from 'react'
import { ImageWithFallback } from '@/components/global/ImageWithFallback'

const PROGRAM_TYPES = [
  {
    icon: '🏥',
    title: "Inpatient Rehabilitation",
    description: "24/7 medical supervision with intensive therapy for acute recovery needs"
  },
  {
    icon: '🏠',
    title: "Outpatient Programs",
    description: "Flexible therapy schedules while living at home for ongoing recovery"
  },
  {
    icon: '👨‍⚕️',
    title: "Specialized Therapy",
    description: "Targeted programs for stroke, spinal cord, and traumatic brain injuries"
  }
]

const SPECIALISTS = [
  {
    name: "Dr. Robert Johnson",
    title: "Physical Medicine Specialist",
    specialty: "Neurological Rehabilitation",
    image: "/doctors/doctor-johnson.webp"
  },
  {
    name: "Dr. Lisa Wong",
    title: "Rehabilitation Physician",
    specialty: "Musculoskeletal Recovery",
    image: "/doctors/doctor-wong.webp"
  },
  {
    name: "Mark Davis, PT",
    title: "Lead Physical Therapist",
    specialty: "Mobility Restoration",
    image: "/doctors/therapist-davis.webp"
  },
  {
    name: "Sarah Miller, OT",
    title: "Occupational Therapist",
    specialty: "Daily Living Skills",
    image: "/doctors/therapist-miller.webp"
  }
]

const TESTIMONIALS = [
  {
    quote: "After my stroke, the rehabilitation team gave me back my independence. I'm walking again and even returned to work.",
    author: "Thomas K.",
    treatment: "Stroke Rehabilitation",
    avatar: "/avatars/patient-3.webp"
  },
  {
    quote: "The spinal injury program helped me adapt to my new normal with dignity. The therapists were incredibly supportive.",
    author: "Maria G.",
    treatment: "Spinal Cord Rehabilitation",
    avatar: "/avatars/patient-4.webp"
  }
]

export const RehabilationPrograms = () => {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="space-y-4 sm:space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Comprehensive <span className="text-teal-600">Rehabilitation</span> Programs
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Personalized recovery plans designed to restore function, improve mobility, and enhance quality of life after injury or illness.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <button
                className="bg-teal-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-teal-700 transition duration-300 font-medium focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-sm sm:text-base"
                aria-label="Schedule an assessment"
              >
                Schedule an Assessment
              </button>
              <button
                className="border border-teal-600 text-teal-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-teal-50 transition duration-300 font-medium focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-sm sm:text-base"
                aria-label="Tour our facilities"
              >
                Tour Our Facilities
              </button>
            </div>
          </div>

          <div className="relative aspect-video md:aspect-auto md:h-full mt-6 md:mt-0">
            <div className="relative rounded-lg shadow-xl w-full h-full overflow-hidden">
              <ImageWithFallback
                fallbackSrc='/fallback-image.webp'
                src="/rehab/rehab-hero.webp"
                fill
                alt="Patient working with physical therapist"
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
                  <p className="text-xs sm:text-sm font-medium text-gray-600">Certified</p>
                  <p className="text-2xs sm:text-xs text-gray-500">CARF Accredited</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Types */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-5">Our Rehabilitation Programs</h2>
          <p className="text-base sm:text-lg text-gray-600">
            Evidence-based therapies delivered by multidisciplinary teams to maximize your recovery potential.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 md:gap-7 max-w-6xl mx-auto">
          {PROGRAM_TYPES.map((program, index) => (
            <div
              key={index}
              className="bg-gray-50 p-5 sm:p-6 md:p-7 rounded-xl hover:shadow-lg transition duration-300"
              aria-label={program.title}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4" aria-hidden="true">{program.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{program.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specialist Team */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 sm:mb-12 md:mb-14">
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Our Rehabilitation Team</h2>
              <p className="text-base sm:text-lg text-gray-600">
                Board-certified physicians, physical therapists, occupational therapists, and speech pathologists working together for your recovery.
              </p>
            </div>
            <button
              className="mt-4 sm:mt-5 md:mt-0 border border-teal-600 text-teal-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-teal-50 transition duration-300 font-medium focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-sm sm:text-base"
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
                  <p className="text-teal-600 font-medium text-sm sm:text-base">{member.title}</p>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10 sm:mb-12 md:mb-14 text-center">Success Stories</h2>

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
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-tl from-teal-600 via-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5">Begin Your Recovery Journey Today</h2>
          <p className="text-base sm:text-lg text-teal-100 mb-6 sm:mb-7">
            Our admissions team is ready to discuss your rehabilitation needs and verify insurance coverage.
          </p>
          <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4">
            <button
              className="bg-white text-teal-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-teal-50 transition duration-300 font-medium focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600 text-sm sm:text-base"
              aria-label="Call to schedule an assessment"
            >
              Call (555) 987-6543
            </button>
            <button
              className="border border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-teal-700 transition duration-300 font-medium focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600 text-sm sm:text-base"
              aria-label="Request information online"
            >
              Request Information Online
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
