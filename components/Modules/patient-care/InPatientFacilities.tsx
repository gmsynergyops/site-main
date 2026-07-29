import React from 'react';
import {
    BedIcon,
    UserCircleIcon,
    HeartPulseIcon,
    AlarmClockIcon,
    ShieldCheckIcon,
    WifiIcon,
    TvIcon,
    UtensilsIcon,
    MapPinIcon,
    PhoneIcon
} from 'lucide-react';
import { ImageWithFallback } from '@/components/global/ImageWithFallback';

export const InPatientFacilities = () => {
    const facilities = [
        { icon: BedIcon, title: 'Private Rooms', description: 'Spacious, well-ventilated rooms with privacy curtains and personal storage' },
        { icon: UserCircleIcon, title: 'Deluxe Suites', description: 'Premium accommodations with separate living areas and luxury amenities' },
        { icon: HeartPulseIcon, title: 'Intensive Care Units', description: 'State-of-the-art ICUs with 1:1 nursing care and advanced monitoring' },
        { icon: AlarmClockIcon, title: 'Emergency Response', description: 'Rapid response teams available 24/7 for any patient needs' },
        { icon: ShieldCheckIcon, title: 'Operation Theaters', description: 'Modular OTs with laminar airflow and advanced surgical equipment' }
    ];

    const roomTypes = [
        {
            name: 'Economy Ward',
            description: 'Comfortable shared accommodation with essential amenities',
            features: ['Shared bathroom', 'Centralized AC', 'Nursing call button'],
            image: '/economy-ward.jpg'
        },
        {
            name: 'Semi-Private',
            description: 'Two-bed rooms with privacy partitions',
            features: ['Attached bathroom', 'Personal locker', 'TV', 'Wi-Fi'],
            image: '/semi-private.jpg'
        },
        {
            name: 'Private Room',
            description: 'Individual rooms for personalized care',
            features: ['Attached bathroom', 'TV', 'Wi-Fi', 'Visitor chair'],
            image: '/private-room.jpg'
        },
        {
            name: 'Deluxe Room',
            description: 'Enhanced comfort with additional space',
            features: ['Sofa cum bed', 'Mini fridge', 'Premium toiletries', 'Daily newspaper'],
            image: '/deluxe-room.jpg'
        }
    ];

    const testimonials = [
        {
            name: 'Rajesh Mehta',
            quote: "The private room was extremely comfortable during my recovery. The nursing staff was attentive and professional.",
            stay: "Post-operative care, May 2023"
        },
        {
            name: 'Priya Sharma',
            quote: "The deluxe suite made our week-long stay much easier with space for my husband to stay with me.",
            stay: "Maternity care, March 2023"
        }
    ];

    return (
        <div className="font-sans text-gray-700">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        In-Patient Facilities
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Experience world-class amenities, personalized care, and comfortable recovery environments designed for your healing journey.
                    </p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="prose-lg text-gray-600 text-center">
                        <p>
                            Our hospital is committed to providing premium inpatient care with a patient-centric approach.
                            We offer private accommodations, specialized ICU units, round-the-clock nursing support,
                            patient counseling services, and family accommodations to ensure complete comfort during
                            your treatment and recovery.
                        </p>
                    </div>
                </div>
            </section>

            {/* Facilities Grid */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                        Our In-Patient Facilities
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facilities.map((facility, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-500"
                            >
                                <facility.icon className="h-10 w-10 text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{facility.title}</h3>
                                <p className="text-gray-600">{facility.description}</p>
                            </div>
                        ))}
                        {/* Additional facility cards */}
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-500">
                            <WifiIcon className="h-10 w-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Rehabilitation Center</h3>
                            <p className="text-gray-600">Comprehensive therapy services with modern equipment and expert therapists</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-500">
                            <TvIcon className="h-10 w-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Diagnostic Labs</h3>
                            <p className="text-gray-600">On-site laboratory with rapid test processing for immediate results</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-500">
                            <UtensilsIcon className="h-10 w-10 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Pharmacy</h3>
                            <p className="text-gray-600">24/7 pharmacy service with all essential medications available</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Room Types */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                        Accommodation Options
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {roomTypes.map((room, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <div className="h-48 bg-gray-200 overflow-hidden">
                                    <ImageWithFallback
                                        fallbackSrc='/fallback-image.webp'
                                        width={720}
                                        height={560}
                                        src={room.image}
                                        alt={room.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{room.name}</h3>
                                    <p className="text-gray-600 mb-4">{room.description}</p>
                                    <ul className="space-y-2">
                                        {room.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Admission Process */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                        Admission Process
                    </h2>
                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
                        <div className="space-y-8 md:space-y-0 md:grid grid-cols-5 gap-4">
                            {[
                                { title: 'Consultation', description: 'Evaluation by specialist doctor' },
                                { title: 'Admission', description: 'Complete admission formalities' },
                                { title: 'Room Allotment', description: 'Assign suitable accommodation' },
                                { title: 'Care Begins', description: 'Treatment and monitoring starts' },
                                { title: 'Discharge', description: 'Final checkup and instructions' }
                            ].map((step, index) => (
                                <div key={index} className="relative bg-white p-6 rounded-lg shadow-sm text-center z-10">
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-blue-800">{step.title}</h3>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                        Why Choose Our In-Patient Care
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-8 rounded-xl">
                            <ul className="space-y-6">
                                {[
                                    '24/7 nursing and medical support',
                                    'Personalized treatment plans',
                                    'Hygienic and safe environment',
                                    'Infection control protocols',
                                    'Daily doctor rounds'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-xl">
                            <ul className="space-y-6">
                                {[
                                    'Modern medical equipment',
                                    'Comfortable patient beds',
                                    'Attendant facilities',
                                    'Nutritious food service',
                                    'Wi-Fi and entertainment'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                        Patient Experiences
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                                <div className="flex items-center mb-4">
                                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.stay}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto bg-blue-50 rounded-xl p-8 text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                        Admission Helpdesk
                    </h2>
                    <div className="space-y-4 mb-8">
                        <p className="flex items-center justify-center text-gray-700">
                            <PhoneIcon className="h-5 w-5 mr-2 text-blue-600" />
                            +91-XXX-XXXX-XXX
                        </p>
                        <p className="flex items-center justify-center text-gray-700">
                            <MapPinIcon className="h-5 w-5 mr-2 text-blue-600" />
                            Ground Floor, Main Lobby - Admission Desk
                        </p>
                        <p className="text-gray-600">
                            Open Monday-Sunday, 8:00 AM to 8:00 PM
                        </p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                        Need Help With Admission?
                    </button>
                </div>
            </section>
        </div>
    );
};
