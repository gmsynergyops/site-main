import { ImageWithFallback } from '@/components/global/ImageWithFallback';
import FaqAccordion from '@/components/homepage/FaqAccordion';
import { ClockIcon, CloudUpload, UserCircleIcon } from 'lucide-react';
import { FaLock } from 'react-icons/fa6';


export const SecondOpinion = () => {
    const specialties = [
        'Cardiology', 'Oncology', 'Neurology', 'Orthopedics',
        'Gastroenterology', 'Endocrinology', 'Pulmonology'
    ];

    const testimonials = [
        {
            name: 'Rahul Sharma',
            text: 'The second opinion service gave me clarity about my treatment options. The doctor was thorough and compassionate.',
            location: 'Mumbai'
        },
        {
            name: 'Priya Mehta',
            text: 'Received a detailed analysis of my reports within 48 hours. Highly professional service.',
            location: 'Delhi'
        }
    ];

    const faqs = [
        {
            question: 'Is the service online or in-person?',
            answer: 'Consultations are conducted online through secure video calls or via detailed written reports.'
        },
        {
            question: 'What documents should I upload?',
            answer: 'Please share all relevant medical reports, scans, prescriptions, and previous treatment details.'
        }
    ];

    return (
        <div className="font-sans text-gray-700">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-20 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Get a Trusted Second Opinion
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Consult our experienced specialists to make confident healthcare decisions
                        </p>
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Book Now
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-end">
                        <ImageWithFallback
                            fallbackSrc='/fallback-image.webp'
                            src="/doctor-consultation.jpg"
                            alt="Doctor consultation"
                            width={400}
                            height={320}
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: CloudUpload, title: 'Upload Reports', text: 'Share your medical records securely' },
                            { icon: UserCircleIcon, title: 'Choose Specialist', text: 'Select from 200+ experienced doctors' },
                            { icon: ClockIcon, title: 'Get Consultation', text: 'Video call or written opinion within 48hrs' },
                            { icon: FaLock, title: 'Follow-up', text: 'Optional follow-up consultations available' }
                        ].map((step, index) => (
                            <div key={index} className="text-center p-6">
                                <step.icon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: '200+ Specialists', text: 'Experienced doctors across specialties' },
                            { title: '48hr Response', text: 'Quick turnaround time guaranteed' },
                            { title: 'Secure Platform', text: 'HIPAA-compliant data security' },
                            { title: '15+ Specialties', text: 'Comprehensive medical coverage' }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Form */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-8">Request Second Opinion</h2>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Full Name" className="p-3 border rounded-lg" />
                            <input type="email" placeholder="Email" className="p-3 border rounded-lg" />
                            <input type="tel" placeholder="Phone Number" className="p-3 border rounded-lg" />
                            <select className="p-3 border rounded-lg">
                                <option>Select Specialty</option>
                                {specialties.map((spec, index) => (
                                    <option key={index}>{spec}</option>
                                ))}
                            </select>
                        </div>

                        <textarea
                            placeholder="Briefly describe your medical condition"
                            className="w-full p-3 border rounded-lg h-32"
                        />

                        <div className="border-dashed border-2 border-gray-300 rounded-lg p-8 text-center">
                            <input type="file" id="upload" className="hidden" />
                            <label htmlFor="upload" className="cursor-pointer">
                                <CloudUpload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                                <p className="text-gray-600">Upload Medical Reports (PDF/Images)</p>
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input type="checkbox" id="terms" className="mr-2" />
                            <label htmlFor="terms" className="text-sm text-gray-600">
                                I agree to the terms of service and privacy policy
                            </label>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Submit Request
                        </button>
                    </form>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12">Patient Experiences</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <p className="text-gray-600 mb-4">&quot;{testimonial.text}&quot;</p>
                                <div className="flex items-center">
                                    <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-gray-500 text-sm">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
                    <FaqAccordion items={faqs}/>
                </div>
            </section>
        </div>
    );
};
