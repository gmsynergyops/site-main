"use client"
import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { ImageWithFallback } from '@/components/global/ImageWithFallback'
import { useTranslations } from 'next-intl'

export const EventsAndConferences = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const t = useTranslations("mediaCenter.eventsAndConferences")

    // Sample event data
    const events = [
        {
            id: 1,
            titleKey: "events.featured.items.oncologySummit.title",
            dateKey: "events.featured.items.oncologySummit.date",
            locationKey: "events.featured.items.oncologySummit.location",
            descriptionKey: "events.featured.items.oncologySummit.description",
            image: "/events/oncology-summit.jpg",
            tags: [
                "events.tags.oncology",
                "events.tags.research",
                "events.tags.workshop"
            ]
        },
        {
            id: 2,
            titleKey: "events.featured.items.cardiologyConf.title",
            dateKey: "events.featured.items.cardiologyConf.date",
            locationKey: "events.featured.items.cardiologyConf.location",
            descriptionKey: "events.featured.items.cardiologyConf.description",
            image: "/events/cardiology-conf.jpg",
            tags: [
                "events.tags.cardiology",
                "events.tags.liveDemo",
                "events.tags.networking"
            ]
        }
    ]

    const upcomingEvents = [
        {
            id: 3,
            titleKey: "events.upcoming.items.pediatric.title",
            dateKey: "events.upcoming.items.pediatric.date",
            locationKey: "events.upcoming.items.pediatric.location",
            descriptionKey: "events.upcoming.items.pediatric.description"
        }
    ]


    return (
        <section
            ref={ref}
            className="min-h-screen w-full px-2 sm:px-4 lg:px-16 xl:px-24 py-12 md:py-20"
            id='events'
        >
            <div className='lg:p-10 md:p-8 p-2 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto "
                >
                    <div className="p-4">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("title")}</h2>
                        <p className="text-lg md:text-lg text-gray-700 mb-12 max-w-4xl">{t("description")}</p>
                    </div>
                    {/* Featured Events */}
                    <div className="mb-20">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 pb-2 border-b border-gray-200">
                            {t("featuredEvents")}
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {events.map((event, index) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: index * 0.15, duration: 0.6 }}
                                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                                >
                                    <div className="h-48 relative overflow-hidden">
                                        <ImageWithFallback
                                            fallbackSrc='/fallback-image.webp'
                                            src={event.image}
                                            alt={t(event.titleKey)}
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-sm font-medium text-blue-600">{t(event.dateKey)}</span>
                                            <span className="text-sm text-gray-500">{t(event.locationKey)}</span>
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-800 mb-3">{t(event.locationKey)}</h4>
                                        <p className="text-gray-600 mb-4">{t(event.descriptionKey)}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {event.tags.map(tagKey => (
                                                <span key={tagKey} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                                    {t(tagKey)}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Events */}
                    <div className="mb-12">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 pb-2 border-b border-gray-200">
                            {t("featuredEvents")}
                        </h3>
                        <div className="space-y-6">
                            {upcomingEvents.map((event, index) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                    className="bg-blue-50/30 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-blue-50/50 transition-colors duration-300"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-800">{t(event.titleKey)}</h4>
                                            <p className="text-gray-600 mt-1">{t(event.descriptionKey)}</p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                            <div className="text-sm font-medium text-blue-600">{t(event.dateKey)}</div>
                                            <div className="text-sm text-gray-500">{t(event.locationKey)}</div>
                                            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                                {t("register")}
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Past Events Gallery */}
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 pb-2 border-b border-gray-200">
                            {t("pastEventsGallery")}
                        </h3>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                <motion.div
                                    key={item}
                                    whileHover={{ scale: 1.03 }}
                                    className="aspect-square relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                                >
                                    <ImageWithFallback
                                        fallbackSrc='/fallback-image.webp'
                                        src={`/events/gallery-${item}.jpg`}
                                        alt={`Event gallery ${item}`}
                                        fill
                                        className="object-cover transition-opacity hover:opacity-90"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                                        <span className="text-white font-medium">Event {item}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        <div className="mt-8 text-center">
                            <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                                View More Events
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
