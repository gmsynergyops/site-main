"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useDepartmentData } from "@/data/departmentData";
import { cn } from "@/lib/utils";
import { DepartmentData } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    MinusIcon,
    PlusIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "../global/ImageWithFallback";
import { Badge } from "../ui/badge";

export default function SliderWithTriggers() {
    const departmentData = useDepartmentData()
    const t = useTranslations('SliderWithTriggers');
    const featuredDepartments = departmentData.filter(dept => dept.isFeatured);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredDepartments.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? featuredDepartments.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (!isHovered) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredDepartments.length);
            }, 5000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isHovered, featuredDepartments.length]);

    return (
        <div className="w-full flex flex-col gap-3 sm:gap-5 relative items-center justify-center px-2 sm:px-4">
            {/* Trigger Buttons */}
            <div className="flex items-center justify-normal w-full">
                <div className="flex overflow-x-auto gap-2 items-center justify-start w-full max-w-5xl px-2 sm:px-4 hide-scrollbar">
                    {featuredDepartments.map((slide, index) => (
                        <Button
                            key={slide.id}
                            className={cn(
                                "px-3 py-1 rounded-md border-1 min-w-max cursor-pointer text-xs sm:text-sm",
                                currentIndex === index
                                    ? "bg-primary text-white border-primary"
                                    : "bg-transparent text-synergy-blue border-synergy-blue/80 hover:bg-primary/50 hover:text-white"
                            )}
                            onClick={() => setCurrentIndex(index)}
                        >
                            {slide.name}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Slider */}
            <div className="relative max-w-4xl w-full bg-white border border-neutral-200 hover:border-neutral-300 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl">
                <div className="w-full flex justify-center items-center overflow-hidden rounded-xl">
                    <AnimatePresence mode="wait">
                        {featuredDepartments.map((department, index) =>
                            index === currentIndex ? (
                                <motion.div
                                    key={department.id}
                                    className="w-full p-0 mx-auto flex justify-center items-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <SliderCard props={department} t={t} />
                                </motion.div>
                            ) : null
                        )}
                    </AnimatePresence>
                </div>

                {/* Mobile Navigation Arrows */}
                <div className="md:hidden flex justify-between w-full absolute top-1/2 -translate-y-1/2 px-2">
                    <Button
                        size="icon"
                        className="p-2 bg-white/90 text-primary rounded-full shadow-lg hover:bg-white z-20 size-8"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="size-4" />
                    </Button>
                    <Button
                        size="icon"
                        className="p-2 bg-white/90 text-primary rounded-full shadow-lg hover:bg-white z-20 size-8"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="size-4" />
                    </Button>
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-4 mt-4 sm:mt-6 px-2 sm:px-0">
                <Link href="/services/all" className="w-full sm:w-auto">
                    <Button
                        variant="default"
                        size="xl"
                        className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-indigo-800 text-white hover:bg-indigo-900"
                    >
                        {t('viewAllSpecialities')}
                    </Button>
                </Link>

                <div className="hidden sm:flex space-x-2 sm:space-x-4">
                    <Button
                        size="icon"
                        className="p-2 sm:p-3 bg-indigo-800 text-white rounded-full shadow-lg hover:bg-indigo-700 size-10 sm:size-12"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="size-4 sm:size-6" />
                    </Button>
                    <Button
                        size="icon"
                        className="p-2 sm:p-3 bg-indigo-800 text-white rounded-full shadow-lg hover:bg-indigo-700 size-10 sm:size-12"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="size-4 sm:size-6" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

const SliderCard = ({ props, t }: { props: DepartmentData, t: (key: string) => string }) => {
    const [showAll, setShowAll] = useState(false);
    const [cardHovered, setCardHovered] = useState(false);

    return (
        <Card
            className={cn(
                "w-full flex flex-col md:flex-row p-3 sm:p-4 bg-transparent border-transparent shadow-none",
                props.index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
            onMouseEnter={() => setCardHovered(true)}
            onMouseLeave={() => setCardHovered(false)}
        >
            {/* Image Section */}
            <div className="w-full md:w-2/5 flex justify-center items-start aspect-square p-2 sm:p-4">
                <div className="w-full h-full max-w-xs overflow-hidden rounded-lg shadow-sm relative">
                    {props.heroImage && (
                        <ImageWithFallback
                            fallbackSrc="/fallback-image.webp"
                            src={props.heroImage}
                            className={cn(
                                "object-cover object-center w-full h-full transition-all duration-300",
                                cardHovered && "md:scale-105"
                            )}
                            fill
                            alt={props.name}
                            priority={props.index === 1}
                        />
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col w-full md:w-3/5 justify-between px-0 sm:px-2 md:px-4 pt-3 sm:pt-4 md:pt-0">
                <CardHeader className="w-full px-0">
                    <CardTitle className="font-semibold text-left text-lg sm:text-xl md:text-2xl mb-1">
                        {props.name}
                    </CardTitle>
                    <CardDescription className="text-neutral-600 text-xs sm:text-sm leading-normal mb-2 line-clamp-3">
                        {props.heroTitle + " " + props.heroSubtitle} ...
                        <Link href={`/services/${props.slug}`} className="ml-1 sm:ml-2 underline hover:text-primary text-xs sm:text-sm">
                            {t('readMore')}
                        </Link>
                    </CardDescription>
                </CardHeader>

                <CardContent className="w-full !p-0">
                    <p className="font-medium text-xs sm:text-sm mb-2">Top Specialities & Procedures</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 py-1">
                        {props.treatments.items
                            .slice(0, showAll ? props.treatments.items.length : 3)
                            .map((item, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="text-[10px] sm:text-xs text-primary border-primary/50"
                                >
                                    {item.title}
                                </Badge>
                            ))}

                        {props.treatments.items.length > 3 && (
                            <Badge
                                variant="outline"
                                className="text-[10px] sm:text-xs cursor-pointer text-primary border-primary/50"
                                onClick={() => setShowAll(!showAll)}
                            >
                                {showAll ? (
                                    <MinusIcon className="size-2 sm:size-3 mr-1" />
                                ) : (
                                    <PlusIcon className="size-2 sm:size-3 mr-1" />
                                )}
                                {showAll ? "Less" : `${props.treatments.items.length - 3} more`}
                            </Badge>
                        )}
                    </div>
                </CardContent>

                <CardFooter className="flex flex-col sm:flex-row gap-2 px-0! pb-0! mt-3 sm:mt-4">
                    <Link href={"#"} className="w-full">
                        <Button
                            variant={"outline"}
                            className="w-full rounded-lg border-gray-300 py-1 px-3 text-xs sm:text-sm"
                        >
                            {t('findDoctor')}
                        </Button>
                    </Link>
                    <Link href={`/services/${props.slug}` || "#"} className="w-full">
                        <Button
                            variant={"default"}
                            className="w-full rounded-lg bg-synergy-blue hover:bg-synergy-blue/90 text-white py-1 px-3 text-xs sm:text-sm"
                        >
                            {t("exploreMore")}
                        </Button>
                    </Link>
                </CardFooter>
            </div>
        </Card>
    );
};
