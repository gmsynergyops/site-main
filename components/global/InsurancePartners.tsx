// components/global/InsurancePartners.tsx
import React from 'react';
import { ImageWithFallback } from '@/components/global/ImageWithFallback';
import { useTranslations } from 'next-intl';

const insuranceCompanies = [
    { name: 'ICICI Lombard General Insurance', logo: "/insurance-companies/ICICI-Lombard_Insurance.png" },
    { name: 'HDFC ERGO General Insurance', logo: "/insurance-companies/HDFC-Ergo.png" },
    { name: 'Aditya Birla Health Insurance', logo: "/insurance-companies/Aditya_Birla_Health_Insurance.svg.png" },
    { name: 'Genins TPA Pvt Ltd', logo: "/insurance-companies/Genins_TPA.png" },
    { name: 'Family Health Plan TPA (FHPL TPA)', logo: "/insurance-companies/FHPL.png" },
    { name: 'Link-K TPA Pvt Ltd', logo: "/insurance-companies/Link-K_TPA.png" },
    { name: 'Park Mediclaim TPA Pvt Ltd', logo: "/insurance-companies/Park_Mediclaim_TPA.png" },
    { name: 'SBI General Insurance Company', logo: "/insurance-companies/SBI_General_Insurance.webp" },
    { name: 'Chola Mandalam General Insurance', logo: "/insurance-companies/Chola_MS_Insurance_Company.png" },
    { name: 'Star Health & Allied Insurance Company', logo: "/insurance-companies/Star_Health_and_Allied_Insurance.svg.png" },
    { name: 'Heritage TPA Pvt Ltd', logo: "/insurance-companies/Heritage_Health_Insurance.svg.png" },
    { name: 'Paramount TPA Pvt Ltd', logo: "/insurance-companies/PHS.png" },
    { name: 'Ericson TPA Pvt Ltd', logo: "/insurance-companies/ericson.webp" },
    { name: 'Universal Sompo General Insurance TPA', logo: "/insurance-companies/USGI.png" },
    { name: 'Niva Bupa Health Insurance', logo: "/insurance-companies/Niva_Bupa_Health_Insurance.png" },
    { name: 'Health Assist TPA Pvt Ltd (Safeway TPA)', logo: "/insurance-companies/Health_Assist_TPA.png" },
    { name: 'Galaxy General Insurance', logo: "/insurance-companies/Galaxy_Health_Insurance.webp" },
];

const InsurancePartners = () => {
    const t = useTranslations('insurancePartners');

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">{t('title')}</h2>
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
                                    loading="lazy"
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
