"use client"
import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { ImageWithFallback } from "@/components/global/ImageWithFallback";
import { FaPlay, FaImages, FaNewspaper, FaVideo } from 'react-icons/fa'

export const MediaGallery = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    // Sample media data
    const galleryItems = [
        {
            id: 1,
            type: 'image',
            title: 'Big news for the people of Ayodhya!',
            category: 'Events',
            image: '/media/media_g_0.jpg'
        },
        {
            id: 2,
            type: 'image',
            title: 'Save time, get the right advice, start tele consultation',
            category: 'Facilities',
            image: '/media/media_g_1.jpg'
        },
        {
            id: 3,
            type: 'image',
            title: 'World Cancer Day Awareness Program ',
            category: 'Events',
            image: '/media/media_g_2.jpg'
        },
        {
            id: 4,
            type: 'image',
            title: 'Famous Synergy Super Speciality Hospital now in Siwan',
            category: 'Facilities',
            image: '/media/media_g_3.jpg'
        },
        {
            id: 5,
            type: 'image',
            title: 'Wishing everyone a Happy & Healthy new year',
            category: 'Events',
            image: '/media/media_g_4.jpg'
        }, // <--- Ye comma add kar dein
        {
            id: 6,
            type: 'video',
            title: 'Is your cough not stopping ?',
            category: 'Communities',
            image: '/media/media_g_5.jpg'
        }
    ]

    const mediaTypes = [
        { name: 'All Media', icon: <FaImages className="mr-2" />, count: 42 },
        { name: 'Photos', icon: <FaImages className="mr-2" />, count: 28 },
        { name: 'Videos', icon: <FaVideo className="mr-2" />, count: 9 },
        { name: 'Press', icon: <FaNewspaper className="mr-2" />, count: 5 }
    ]

    return (
        <section
            ref={ref}
            id="media-gallery"
            className="min-h-screen w-full px-2 sm:px-4 lg:px-16 xl:px-24 py-12 md:py-20"
        >
            <div className='lg:p-10 md:p-8 p-2 rounded-3xl bg-white border-3 space-y-12 border-neutral-200 shadow-expanded'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="p-3">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Media Gallery
                    </h2>
                    <p className="text-lg md:text-lg text-gray-700 mb-8 max-w-4xl">
                        Explore our collection of photos and videos showcasing hospital facilities, medical advancements, community events, and patient stories.
                    </p>
                    </div>

                    {/* Media Type Filter */}
                    <motion.div
                        className="flex flex-wrap gap-2 lg:gap-4 mb-12"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        {mediaTypes.map((type, index) => (
                            <motion.button
                                key={type.name}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className={`flex items-center py-2 px-3 lg:px-5 lg:py-3 rounded-lg text-sm font-medium transition-colors ${index === 0 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                {type.icon}
                                {type.name} ({type.count})
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Gallery Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-3"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                    >
                        {galleryItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.6 + index * 0.1, type: 'spring', stiffness: 100 }}
                                whileHover={{ y: -5 }}
                                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <div className="aspect-[4/3] relative">
                                    <ImageWithFallback
                                        fallbackSrc='/fallback-image.webp'
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {item.type === 'video' && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                            <div className="w-16 h-16 flex items-center justify-center bg-white/90 rounded-full text-blue-600">
                                                <FaPlay className="text-xl ml-1" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div>
                                        <span className="text-xs font-medium text-white bg-blue-600 px-2 py-1 rounded-full">
                                            {item.category}
                                        </span>
                                        <h3 className="text-white font-semibold text-lg mt-2">{item.title}</h3>
                                      
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* View More Button */}
                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1 }}
                    >
                        <button className="lg:px-8 lg:py-3 text-sm lg:text-base py-2 px-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
                            <FaImages className="mr-2" />
                            View Full Gallery
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
