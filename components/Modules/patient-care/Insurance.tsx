import AyushmaanBharatCard from '@/components/global/AyushmaanBharatCard';
import InsurancePartners from '@/components/global/InsurancePartners';
import React from 'react';
import { CONTACT_INFO } from '@/data/contactData';

// Yahan se component start hona chahiye tha jo miss ho gaya tha
const Insurance = () => {
    const steps = [
        {
            title: "Visit Insurance Desk",
            description: "Go to the hospital’s insurance help desk with your Ayushmaan card and ID proof."
        },
        {
            title: "Provide Details",
            description: "Submit your identification and card number to verify your eligibility."
        },
        {
            title: "Get Authorization",
            description: "The staff will process the authorization with the PM-JAY system for your treatment."
        },
        {
            title: "Receive Treatment",
            description: "Once approved, receive free and cashless treatment at the empanelled hospital."
        },
        {
            title: "Post-Treatment Support",
            description: "Collect discharge summary and necessary documents. Follow-up support is also provided."
        },
    ];

    return (
        <div className="font-sans text-gray-700">
            {/* Hero Section */}
            <section className="bg-linear-to-r from-blue-50 to-cyan-50 py-20 px-4">
                <div className="max-w-6xl mx-auto text-center animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Insurance and TPA Services
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        We partner with leading insurance providers and accept Ayushmaan Bharat Card for seamless healthcare access.
                    </p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Streamlined Insurance Processing</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Our dedicated insurance desk works directly with multiple providers to ensure quick claim approvals and cashless treatment facilities. We handle all paperwork and coordination with your insurance provider.
                    </p>
                    <p className="text-lg text-gray-600">
                        From document verification to final settlement, our team guides you through every step of the insurance process.
                    </p>
                </div>
            </section>

            {/* Ye raha aapka naya component */}
            <InsurancePartners />

            <div className="text-white">
                {/* Ayushmaan Bharat Section */}
                <AyushmaanBharatCard />
            </div>

            {/* How to Avail Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto text-center space-y-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                            Using Insurance in 5 Simple Steps
                        </h2>
                        <p className="mt-4 text-gray-500 text-lg">
                            Follow these easy steps to get cashless treatment effortlessly.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center bg-blue-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="bg-blue-600 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-8 text-gray-800">Insurance Support</h2>
                    <div className="space-y-4 mb-8">
                        <p className="text-lg">
                            📞 <a href={`tel:${CONTACT_INFO.phoneNumbers.primary}`} className="hover:underline font-semibold">{CONTACT_INFO.phoneNumbers.primaryFormatted}</a>
                        </p>
                        <p className="text-lg">
                            ✉️ <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">{CONTACT_INFO.email}</a>
                        </p>
                        <p className="text-lg">📍 Ground Floor, Main Lobby - Insurance Desk</p>
                    </div>
                    <a
                        href={`tel:${CONTACT_INFO.phoneNumbers.primary}`}
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        Need Immediate Help?
                    </a>
                </div>
            </section>
        </div>
    );
}; // Ye bracket bhi ghaayab tha

export default Insurance;
