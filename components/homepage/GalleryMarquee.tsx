"use client"

import { useGalleryItems } from "@/data/mediaData";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Marquee from 'react-fast-marquee';
import { MdArrowOutward } from "react-icons/md";
import { Button } from '../ui/button';
import { ImageWithFallback } from "../global/ImageWithFallback";
import { FaPlay } from "react-icons/fa6";

export const GalleryMarquee = () => {
    const galleryItems = useGalleryItems()
    const t = useTranslations('homepage.GalleryMarquee')
    
    return (
        <div className="py-10 overflow-hidden w-full " >
            <div className="p-3 flex flex-col items-center justify-start">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left text-heading mb-4">
                    {t('mediaGallery')}
                </h2>
                <p className="text-lg md:text-lg text-gray-700 mb-8 max-w-4xl text-center">
                    {t('subtitle')}
                </p>
            </div>

            <Marquee
                direction="left"
                speed={50}
                className="w-full py-8"
                gradient={false}
                pauseOnHover={true}
            >
                {galleryItems.map((item) => (
                    <div
                        key={item.id}
                        className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 mx-4"
                        style={{ width: '280px' }} /* Width thodi kam kardi taaki reel jaisa feel aaye */
                    >
                        {/* Yahan par aspect-4/3 ko hata kar aspect-[9/16] kar diya hai (Reel Ratio) */}
                        <div className="aspect-[4/5] relative">
                            <ImageWithFallback
                                fallbackSrc='/fallback-image.webp'
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {item.type === 'video' && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full text-blue-600 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                                        <FaPlay className="text-xl ml-1" />
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* Text Overlay - Ise thoda bada kiya hai taaki lamba text ache se dikhe */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                            <div>
                                <span className="text-xs font-medium text-white bg-blue-600 px-3 py-1 rounded-full shadow-sm">
                                    {item.category}
                                </span>
                                <h3 className="text-white font-semibold text-lg mt-3 leading-snug line-clamp-3">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </Marquee>

            <div className="w-full flex items-center justify-center mt-6">
                <Link href={"/media-center#media-gallery"}>
                    <Button
                        className='capitalize flex items-center gap-2 px-8 py-6 rounded-full'
                        variant={"default"}
                    >
                        <span className="text-lg font-medium">{t('viewMore')}</span>
                        <MdArrowOutward size={22} />
                    </Button>
                </Link>
            </div>
        </div>
    )
}
