"use client"
import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaUserTie, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

export const MediaContacts = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contacts = [
    {
      name: "Dr. Priya Sharma",
      title: "Chief Communications Officer",
      email: "media@synergyhospital.com",
      phone: "+91 98765 43210",
      hours: "Mon-Fri, 9:00 AM - 5:00 PM",
      image: "/media/contact-priya.jpg"
    },
    {
      name: "Rahul Kapoor",
      title: "Media Relations Manager",
      email: "press@synergyhospital.com",
      phone: "+91 87654 32109",
      hours: "Mon-Sat, 8:00 AM - 6:00 PM",
      image: "/media/contact-rahul.jpg"
    },
    {
      name: "Media Relations Desk",
      title: "General Inquiries",
      email: "info@synergyhospital.com",
      phone: "+91 11 2345 6789",
      hours: "24/7 Helpline",
      image: "/media/contact-desk.jpg"
    }
  ]

  const pressResources = [
    {
      title: "Press Kit",
      description: "Download our hospital fact sheet, leadership bios, and high-resolution images",
      link: "#"
    },
    {
      title: "Media Guidelines",
      description: "Protocols for interviews, filming, and patient privacy",
      link: "#"
    },
    {
      title: "Expert Speakers",
      description: "List of medical specialists available for interviews",
      link: "#"
    }
  ]

  return (
    <section
      ref={ref}
      id="media-contacts"
      className="min-h-screen w-full px-2 sm:px-2  lg:px-16 xl:px-24 py-12 md:py-20"
    >
      <div className='lg:p-10 md:p-8 p-2 py-4 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
<div className="px-2">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Media Contacts
          </h2>
          <p className="text-lg md:text-lg text-gray-700 mb-12 max-w-4xl">
            Our dedicated media team is available to assist journalists, content creators, and media professionals with inquiries, interviews, and hospital information.
          </p>
</div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4 mb-5 lg:mb-16">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                    <FaUserTie />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{contact.name}</h3>
                  <p className="text-gray-600 mb-4">{contact.title}</p>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <FaEnvelope className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <a href={`mailto:${contact.email}`} className="text-gray-700 hover:text-blue-600 break-all">
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <FaPhone className="text-blue-600 mr-3 flex-shrink-0" />
                      <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="text-gray-700 hover:text-blue-600">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{contact.hours}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Press Resources */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 pb-2 border-b border-gray-200">
              Press Resources
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {pressResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-blue-50/30 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-blue-50/50 transition-colors duration-300"
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{resource.title}</h4>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a href={resource.link} className="text-blue-600 font-medium hover:underline inline-flex items-center">
                    Access Resource
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hospital Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">Hospital Information</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                  <FaMapMarkerAlt className="text-blue-600 mr-2" />
                  Location & Directions
                </h4>
                <p className="text-gray-700 mb-2">
                  Synergy Super Speciality Hospital<br />
                  123 Medical Avenue<br />
                  New Delhi, DL 110001
                </p>
                <a href="#" className="text-blue-600 hover:underline inline-flex items-center">
                  Get Directions
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-4">Media Visits</h4>
                <p className="text-gray-700 mb-4">
                  All media visits must be scheduled in advance. Please contact our media relations team at least 48 hours before your intended visit.
                </p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Request Media Access
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
