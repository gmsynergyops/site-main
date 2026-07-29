// components/global/InsurancePartners.tsx
import React from 'react';
import { ImageWithFallback } from '@/components/global/ImageWithFallback';

const insuranceCompanies = [
        { name: 'Star Health and Allied Insurance Company', logo: "/insurance-companies/Star_Health_and_Allied_Insurance.svg.png" },
        { name: 'Aditya Birla Health Insurance Company', logo: "/insurance-companies/Aditya_Birla_Health_Insurance.svg.png" },
        { name: 'Ericsion TPA', logo: "/insurance-companies/ericson.webp" },
        { name: 'Heritage TPA', logo: "/insurance-companies/Heritage_Health_insurance.svg.png" },
        { name: 'Chola Mandalam General Insurance Company', logo: "/insurance-companies/Chola_MS_Insurance_Company.png" },
        { name: 'Universal Sompo General Insurance Company', logo: "/insurance-companies/USGI.png" },
        { name: 'Paramount Health Care', logo: "/insurance-companies/PHS.png" },
        { name: 'Genins TPA', logo: "/insurance-companies/Genins_TPA.png" },
        { name: 'ICICI Lombard Insurance', logo: "/insurance-companies/ICICI-Lombard_Insurance.png" },
        { name: 'FHPL', logo: "/insurance-companies/FHPL.png" },
        { name: 'SBI General Insurance', logo: "/insurance-companies/SBI_General_Insurance.webp" },
        { name: 'Tata AIG', logo: "/insurance-companies/TATA_AIG_logo.png" },
        { name: 'Link-K TPA', logo: "/insurance-companies/Link-K_TPA.png" },
        { name: 'Park Mediclaim TPA', logo: "/insurance-companies/Park_Mediclaim_TPA.png" },
        { name: 'Health Assist TPA', logo: "/insurance-companies/Health_Assist_TPA.png" },
];

const InsurancePartners = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Our Insurance Partners</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {insuranceCompanies.map((company, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-start items-center w-full gap-x-4">
                            <div className="!max-w-32 overflow-hidden h-full relative object-center flex items-center justify-start ">
                                <ImageWithFallback
                                    fallbackSrc='/fallback-image.webp'
                                    src={company.logo}
                                    width={300}
                                    height={200}
                                    alt={company.name}
                                    className='object-contain object-center max-h-[3rem]'
                                />
                            </div>
                            <span className="text-gray-700">{company.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InsurancePartners;
