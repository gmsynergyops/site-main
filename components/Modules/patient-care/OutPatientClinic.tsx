import FaqAccordion from '@/components/homepage/FaqAccordion';
import { useGeneralQuestions } from '@/data';
import {
    Activity,
    Baby,
    Bone,
    Brain,
    Clock,
    Eye,
    HeartPulse,
    Stethoscope,
    UserCheck
} from 'lucide-react';

export const OutPatientClinic = () => {
    const generalQuestions = useGeneralQuestions();
    const clinics = [
        { icon: HeartPulse, name: 'Cardiology', description: 'Comprehensive heart care including preventive cardiology and advanced diagnostics' },
        { icon: Brain, name: 'Neurology', description: 'Specialized care for brain and nervous system disorders' },
        { icon: Bone, name: 'Orthopedics', description: 'Treatment for musculoskeletal issues, sports injuries and joint care' },
        { icon: Baby, name: 'Pediatrics', description: 'Child-friendly environment with specialized pediatric care' },
        { icon: Eye, name: 'Ophthalmology', description: 'Complete eye care from routine exams to advanced treatments' },
        { icon: Stethoscope, name: 'General Medicine', description: 'Primary care for adults with comprehensive health evaluations' }
    ];

    const features = [
        { icon: Clock, title: 'Minimal Waiting', description: 'Efficient scheduling system reduces your waiting time' },
        { icon: UserCheck, title: 'Expert Doctors', description: 'Consult with highly qualified specialists' },
        { icon: Activity, title: 'Comprehensive Diagnostics', description: 'On-site lab and imaging services available' }
    ];

    return (
        <div className="font-sans text-gray-700">
            {/* Hero Section */}
            <section className="relative">
                <div className="absolute inset-0 bg-blue-800/30"></div>
                <div
                    className="bg-[url('/doctor-patient.jpg')] bg-cover bg-center h-96 flex items-center"
                    aria-label="Doctor consulting with patient"
                >
                    <div className="relative max-w-6xl mx-auto px-4 text-white z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                            Outpatient Clinics
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg max-w-2xl mx-auto">
                            Expert Care, Personalized Attention
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="prose-lg text-gray-600 text-center">
                        <p>
                            Our outpatient clinics provide specialized medical care in a comfortable, convenient setting.
                            With over 15 specialty clinics staffed by experienced physicians, we offer comprehensive
                            evaluations, diagnostic services, and treatment plans tailored to your needs. Designed for
                            patients who don&apos;t require overnight hospitalization, our clinics combine expert medical
                            care with compassionate attention to help you achieve and maintain optimal health.
                        </p>
                    </div>
                </div>
            </section>

            {/* Clinics Grid */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                        Our Specialty Clinics
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clinics.map((clinic, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border-l-4 border-blue-500"
                            >
                                <clinic.icon className="h-10 w-10 text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{clinic.name}</h3>
                                <p className="text-gray-600">{clinic.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Appointment CTA */}
            <section className="py-16 px-4 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Book Your Appointment Today</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Schedule your visit with our specialists through our convenient booking system
                    </p>
                    <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-semibold transition-all">
                        Book Now
                    </button>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                        Why Choose Our Outpatient Care
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="bg-blue-50 h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                    <feature.icon className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                        Frequently Asked Questions
                    </h2>
                    <FaqAccordion items={generalQuestions} />
                </div>
            </section>
        </div>
    );
};
