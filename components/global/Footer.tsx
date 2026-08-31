"use client"
import { useMenuItems } from '@/data';
import { CONTACT_INFO } from '@/data/contactData';
import { Link } from '@/i18n/navigation';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { SiGooglemaps } from "react-icons/si";
import { FooterFormContainer } from './FooterFormContainer';
import { useTranslations } from 'next-intl';

export const Footer = () => {
    const [expandedItems, setExpandedItems] = useState<Record<string, Record<string, number>>>({});
    const menuItems = useMenuItems();
    const t = useTranslations('footer');

    const toggleExpand = (menuLabel: string, pageName: string, currentLimit: number, totalItems: number) => {
        setExpandedItems(prev => ({
            ...prev,
            [menuLabel]: {
                ...prev[menuLabel],
                [pageName]: Math.min(currentLimit + 4, totalItems)
            }
        }));
    };

    return (
        <footer
            id="footer"
            className="relative w-full mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white "
        >
            {/* Top Section - Form and Map */}
            <div className="flex flex-col lg:flex-row mb-12 gap-6 w-full">

                <div className="w-full lg:w-1/2 h-75 lg:h-119.75 rounded-2xl border-2 border-border/10 hover:border-border transition-colors duration-200 ease-in-out overflow-hidden shadow-sm">
                    <iframe
                        src={CONTACT_INFO.locations[0].mapURL}
                        title="Synergy Super Speciality Hospital Main Location"
                        className="w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="w-full lg:w-1/2">
                    <FooterFormContainer />
                </div>
                <div className="w-full lg:w-1/2 h-75 lg:h-119.75 rounded-2xl border-2 border-border/10 hover:border-border transition-colors duration-200 ease-in-out overflow-hidden shadow-sm">
                    <iframe
                        src={CONTACT_INFO.locations[1].mapURL}
                        title="Synergy Super Speciality Hospital Peripheral Location"
                        className="w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

            {/* Menu Links Section - UPDATED GRID FOR 6 COLUMNS ON MEDIUM SCREENS */}
            <div className="flex justify-center w-full mb-8">
                {/* Changed to: grid-cols-2 sm:grid-cols-3 md:grid-cols-6 */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-x-6 gap-y-10 w-full items-start">
                    {menuItems.map((menu) => {
                        const hasMultiplePages = menu.pages.length > 1;

                        return (
                            <div key={menu.label} className="w-full">
                                <h2 className="text-primary font-bold font-display uppercase tracking-wide text-sm mb-5 border-b border-gray-100 pb-2">
                                    {menu.label}
                                </h2>

                                {menu.pages.map((page) => {
                                    const uniqueLinksMap = new Map<string, string>();
                                    page.links.forEach((link) => {
                                        if (!uniqueLinksMap.has(link.href)) {
                                            uniqueLinksMap.set(link.href, link.label);
                                        }
                                    });

                                    const uniqueLinks = Array.from(uniqueLinksMap.entries());
                                    if (uniqueLinks.length === 0) return null;

                                    const initialLimit = 5; // Default links to show before "View more"
                                    const currentLimit = expandedItems[menu.label]?.[page.name] || initialLimit;
                                    const shouldShowMore = uniqueLinks.length > initialLimit && currentLimit < uniqueLinks.length;
                                    const visibleLinks = uniqueLinks.slice(0, currentLimit);

                                    return (
                                        <div key={page.name} className="mb-6 w-full">
                                            {hasMultiplePages && (
                                                <h3 className="text-sm font-semibold text-gray-800 mb-3">{page.name}</h3>
                                            )}
                                            <ul className="w-full space-y-2">
                                                {visibleLinks.map(([href, label]) => (
                                                    <li key={href} className="w-full">
                                                        <Link
                                                            href={href}
                                                            className="text-xs md:text-sm hover:text-synergy-blue transition-colors duration-200 text-slate-500 block w-full leading-snug"
                                                        >
                                                            {label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            {shouldShowMore && (
                                                <button
                                                    onClick={() => toggleExpand(menu.label, page.name, currentLimit, uniqueLinks.length)}
                                                    className="text-xs font-semibold text-synergy-blue hover:text-blue-800 transition-colors cursor-pointer mt-3"
                                                >
                                                    + {t('viewMore')} ({uniqueLinks.length - currentLimit})
                                                </button>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Section - Social and Copyright */}
            <div className="mt-10 pt-6 border-t border-gray-200 w-full relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                    {/* Social Links - Center on mobile */}
                    <div className="flex items-center justify-center md:justify-start gap-5 order-2 md:order-1">
                        {[
                            {
                                name: "GoogleMaps",
                                Icon: SiGooglemaps,
                                link: CONTACT_INFO.locations[0].directMapURL,
                            },
                            {
                                name: "Instagram",
                                Icon: FaInstagram,
                                link: CONTACT_INFO.socialUrls.instagram,
                            },
                            {
                                name: "YouTube",
                                Icon: FaYoutube,
                                link: CONTACT_INFO.socialUrls.youtube,
                            },
                            {
                                name: "Facebook",
                                Icon: FaFacebook,
                                link: CONTACT_INFO.socialUrls.facebook,
                            },
                        ].map((button, index) => (
                            <Link key={index} href={button.link} aria-label={button.name} target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-full hover:bg-synergy-blue group transition-all">
                                <button.Icon size={16} className='text-slate-600 group-hover:text-white transition-colors' />
                            </Link>
                        ))}
                    </div>

                    {/* Copyright - Center on mobile */}
                    <div className="order-1 md:order-2 w-full md:w-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                        <p className="text-center text-sm font-medium text-slate-500">
                            {t('copyright')}
                        </p>
                    </div>

                    {/* Developer Credit - Right on desktop, below on mobile */}
                    <div className="text-center md:text-right order-3 w-full md:w-auto">
                        <p className="text-xs font-medium text-slate-600">
                            {t('developedBy')} <span className="text-slate-700">{t('developer')}</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
