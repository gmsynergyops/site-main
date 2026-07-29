'use client'

import { ImageWithFallback } from '@/components/global/ImageWithFallback'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Star, Quote, ArrowUpRight, PauseCircle, PlayCircle } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

interface Testimonial {
    id: number;
    name: string;
    text: string;
    avatar: string;
    stars: number;
    role: string;
    location: string;
    department: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Ramesh Kumar',
        text: `My experience at Synergy Super Speciality Hospital & Cancer Institute was exceptional. The cardiology department saved my life with their timely intervention and expert care.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Heart Patient',
        location: 'Gorakhpur',
        department: 'Cardiology'
    },
    {
        id: 2,
        name: 'Sunita Devi',
        text: `Synergy Super Speciality Hospital & Cancer Institute provided excellent care during my cancer treatment. The doctors were compassionate and the facilities world-class.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Cancer Survivor',
        location: 'Deoria',
        department: 'Oncology'
    },
    {
        id: 3,
        name: 'Vikram Singh',
        text: `The orthopedic team at Synergy Super Speciality Hospital & Cancer Institute helped me recover from my joint replacement surgery faster than I expected. Highly recommended!`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Orthopedic Patient',
        location: 'Kushinagar',
        department: 'Orthopedics'
    },
    {
        id: 4,
        name: 'Priya Sharma',
        text: `As a new mother, I was nervous about delivery, but the maternity ward at Synergy Super Speciality Hospital & Cancer Institute made it a beautiful experience.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'New Mother',
        location: 'Basti',
        department: 'Obstetrics'
    },
    {
        id: 5,
        name: 'Amit Patel',
        text: `Synergy Super Speciality Hospital & Cancer Institute's neurology department accurately diagnosed my condition when others couldn't. Grateful for their expertise.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Neurology Patient',
        location: 'Siddharthnagar',
        department: 'Neurology'
    },
    {
        id: 6,
        name: 'Neha Gupta',
        text: `The cancer care at Synergy Super Speciality Hospital & Cancer Institute gave me hope when I needed it most. The staff treated me like family.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Cancer Patient',
        location: 'Maharajganj',
        department: 'Oncology'
    },
    {
        id: 7,
        name: 'Rajesh Yadav',
        text: `After my accident, the trauma center at Synergy Super Speciality Hospital & Cancer Institute provided immediate and effective treatment. Thank you for saving my life.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Trauma Patient',
        location: 'Gorakhpur',
        department: 'Emergency'
    },
    {
        id: 8,
        name: 'Pooja Mishra',
        text: `Synergy Super Speciality Hospital & Cancer Institute's pediatric department is amazing with children. My son actually looks forward to his check-ups now!`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Parent',
        location: 'Azamgarh',
        department: 'Pediatrics'
    },
    {
        id: 9,
        name: 'Alok Verma',
        text: `The urology team at Synergy Super Speciality Hospital & Cancer Institute solved my chronic problem that other hospitals couldn't. Life-changing treatment.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Urology Patient',
        location: 'Sant Kabir Nagar',
        department: 'Urology'
    },
    {
        id: 10,
        name: 'Anjali Tiwari',
        text: `Synergy Super Speciality Hospital & Cancer Institute's eye care center restored my vision with cataract surgery. The procedure was painless and recovery quick.`,
        avatar: '/doctors/dr-vishal-mishra.png',
        stars: 5,
        role: 'Ophthalmology Patient',
        location: 'Ballia',
        department: 'Ophthalmology'
    },
];

// Group testimonials by department
const departments = Array.from(new Set(testimonials.map(t => t.department)));

export const PatientTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [autoRotate, setAutoRotate] = useState<boolean>(true)
    const [selectedDepartment, setSelectedDepartment] = useState<string>('All')
    const [isHovering, setIsHovering] = useState<boolean>(false)
    const [touchStart, setTouchStart] = useState<number>(0)
    const autoRotateTimerRef = useRef<NodeJS.Timeout | null>(null)

    // Filter testimonials based on selected department
    const filteredTestimonials = selectedDepartment === 'All'
        ? testimonials
        : testimonials.filter(t => t.department === selectedDepartment)

    const current = filteredTestimonials[currentIndex % filteredTestimonials.length]

    const handlePrev = (): void => {
        setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
        resetAutoRotate()
    }

    const handleNext = (): void => {
        setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
        resetAutoRotate()
    }

    const resetAutoRotate = (): void => {
        setAutoRotate(false)
        if (autoRotateTimerRef.current) {
            clearTimeout(autoRotateTimerRef.current)
        }
        autoRotateTimerRef.current = setTimeout(() => {
            setAutoRotate(true)
        }, 10000) // Resume auto-rotation after 10 seconds of inactivity
    }

    const handleDepartmentChange = (dept: string): void => {
        setSelectedDepartment(dept)
        setCurrentIndex(0)
        resetAutoRotate()
    }

    const handleTouchStart = (e: React.TouchEvent): void => {
        setTouchStart(e.touches[0].clientX)
    }

    const handleTouchEnd = (e: React.TouchEvent): void => {
        const touchEnd = e.changedTouches[0].clientX
        const diff = touchStart - touchEnd

        if (diff > 50) {
            // Swipe left
            handleNext()
        } else if (diff < -50) {
            // Swipe right
            handlePrev()
        }
    }

    // Auto-rotation effect
    useEffect(() => {
        if (!autoRotate || isHovering) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [autoRotate, filteredTestimonials.length, isHovering])

    // Handle cleanup when component unmounts
    useEffect(() => {
        return () => {
            if (autoRotateTimerRef.current) {
                clearTimeout(autoRotateTimerRef.current)
            }
        }
    }, [])

    // Compute visible window of testimonials (max 5, centered on currentIndex)
    const totalTestimonials = filteredTestimonials.length;
    const maxVisible = Math.min(5, totalTestimonials);
    let startIndex = currentIndex - Math.floor(maxVisible / 2);
    let endIndex = currentIndex + Math.floor(maxVisible / 2);

    if (startIndex < 0) {
        startIndex = 0;
        endIndex = Math.min(totalTestimonials - 1, maxVisible - 1);
    }
    if (endIndex > totalTestimonials - 1) {
        endIndex = totalTestimonials - 1;
        startIndex = Math.max(0, totalTestimonials - maxVisible);
    }

    // Handle edge case when there are fewer than maxVisible testimonials
    if (endIndex - startIndex + 1 < maxVisible) {
        endIndex = Math.min(startIndex + maxVisible - 1, totalTestimonials - 1);
    }

    return (
        <section
            className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-6">
                    <div className="text-center md:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900"
                        >
                            What Our Patients Say
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-gray-600 mt-2 text-lg"
                        >
                            Real stories of healing and exceptional care
                        </motion.p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        {/* Department Filter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="relative flex-1 md:flex-none"
                        >
                            <select
                                value={selectedDepartment}
                                onChange={(e) => handleDepartmentChange(e.target.value)}
                                className="w-full md:w-40 bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm cursor-pointer appearance-none"
                            >
                                <option value="All">All Departments</option>
                                {departments.map(dept => (
                                    <option key={dept} value={dept}>{dept}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </motion.div>

                        {/* Navigation Controls */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-3"
                        >
                            <Button
                                size="icon"
                                variant="outline"
                                onClick={() => setAutoRotate(!autoRotate)}
                                className="rounded-full w-10 h-10 hover:bg-primary/10"
                                title={autoRotate ? "Pause autoplay" : "Resume autoplay"}
                            >
                                {autoRotate ? (
                                    <PauseCircle className="w-5 h-5" />
                                ) : (
                                    <PlayCircle className="w-5 h-5" />
                                )}
                            </Button>
                            <Button
                                size="icon"
                                variant="outline"
                                onClick={handlePrev}
                                className="rounded-full w-10 h-10 hover:bg-primary/10"
                                disabled={filteredTestimonials.length <= 1}
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                            <Button
                                size="icon"
                                onClick={handleNext}
                                className="rounded-full w-10 h-10 bg-primary hover:bg-primary/90"
                                disabled={filteredTestimonials.length <= 1}
                            >
                                <ArrowRight className="w-5 h-5 text-white" />
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {filteredTestimonials.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-lg p-10 text-center">
                        <p className="text-gray-500 text-lg">No testimonials available for this department yet.</p>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
                        {/* Avatars column */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex lg:flex-col items-center gap-4 order-2 lg:order-1"
                        >
                            <span className="text-sm font-medium text-primary hidden lg:block">
                                {(currentIndex % filteredTestimonials.length) + 1}/<span className="text-gray-600">{filteredTestimonials.length}</span>
                            </span>
                            <div className="flex lg:flex-col gap-3">
                                {filteredTestimonials.slice(startIndex, endIndex + 1).map((t, idx) => {
                                    const actualIndex = (startIndex + idx) % filteredTestimonials.length;
                                    return (
                                        <button
                                            key={t.id}
                                            onClick={() => setCurrentIndex(actualIndex)}
                                            className={cn(
                                                'size-14 rounded-full relative overflow-hidden border-2 transition-all duration-300',
                                                actualIndex === currentIndex % filteredTestimonials.length
                                                    ? "border-primary scale-110 shadow-md"
                                                    : "border-transparent hover:border-primary/50"
                                            )}
                                        >
                                            <ImageWithFallback
                                                fallbackSrc='/fallback-image.webp'
                                                fill
                                                className="object-cover object-center"
                                                src={t.avatar}
                                                alt={t.name}
                                            />
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Main testimonial */}
                        <motion.div
                            className="flex-1 w-full order-1 lg:order-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current.id}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col md:flex-row items-start gap-6 md:gap-8 h-full relative overflow-hidden"
                                >
                                    {/* Decorative quote icon */}
                                    <div className="absolute -top-6 -left-6 text-gray-100">
                                        <Quote size={120} strokeWidth={1} />
                                    </div>

                                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden shrink-0 border-4 border-white shadow-md z-10">
                                        <ImageWithFallback
                                            fallbackSrc="/fallback-image.webp"
                                            src={current.avatar}
                                            alt={current.name}
                                            fill
                                            className="object-cover"
                                        />
                                        {current.department && (
                                            <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-white py-1 px-2 text-xs font-medium text-center">
                                                {current.department}
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-4 flex-1 z-10">
                                        <div className="flex items-center gap-1 text-yellow-500">
                                            {Array.from({ length: current.stars }).map((_, i) => (
                                                <Star key={i} size={18} fill="currentColor" />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                            &quot;{current.text}&quot;
                                        </p>
                                        <div className="pt-2 mt-2 border-t border-gray-100">
                                            <p className="font-semibold text-gray-900 text-lg">- {current.name}</p>
                                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                                                <p className="text-gray-500 text-sm">{current.role}</p>
                                                {current.location && (
                                                    <>
                                                        <span className="text-gray-300">•</span>
                                                        <p className="text-gray-500 text-sm">{current.location}</p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </div>
                )}

                {/* Mobile indicators */}
                <div className="flex justify-center gap-2 mt-8 lg:hidden">
                    {filteredTestimonials.slice(startIndex, endIndex + 1).map((_, idx) => {
                        const actualIndex = (startIndex + idx) % filteredTestimonials.length;
                        return (
                            <button
                                key={actualIndex}
                                onClick={() => setCurrentIndex(actualIndex)}
                                className={`w-2 h-2 rounded-full transition-all ${actualIndex === currentIndex % filteredTestimonials.length
                                    ? "bg-primary w-4"
                                    : "bg-gray-300"
                                    }`}
                                aria-label={`Go to testimonial ${actualIndex + 1}`}
                            ></button>
                        );
                    })}
                </div>

                {/* Share your story CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 text-center"
                >
                    <Button
                        className="group bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-full px-6 py-6 h-auto transition-all duration-300"
                    >
                        Share Your Story
                        <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
