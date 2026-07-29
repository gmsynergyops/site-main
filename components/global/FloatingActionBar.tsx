"use client";

import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ActionItem } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { ChevronRight } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";


type Props = {
    items: ActionItem[];
    isOnFooter?: boolean;
    isOnHomePage?: boolean;
    stickyOffset?: number;
    className?: string;
};

export const FloatingActionBar = ({
    items,
    isOnFooter = false,
    isOnHomePage,
    stickyOffset = 0,
    className = ""
}: Props) => {

const router = useRouter()
    const [isSticky, setIsSticky] = useState(false);
    const [isTouchingFooter, setIsTouchingFooter] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Process items to use the open function for "Book Appointment" buttons
    const processedItems = items.map(item => {
        if (item.label === "Book Appointment") {
            return {
                ...item,
                onClick:  () => { router.push("/book-appointment")}
            };
        }
        if (item.label === "Hospitals") {
            return {
                ...item,
                onClick: () => {
                    window.open("https://maps.app.goo.gl/MXM5snovbSDPidJy5", "_blank");
                }
            };
        }
        if (item.label === "Call Us") {
            return {
                ...item,
                onClick: () => {
                    window.open("tel:7234006597", "_blank");
                }
            };
        }

        return item;
    });

    // Check mobile viewport
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Handle scroll and intersection observer
    useEffect(() => {

        if (!isOnHomePage) {
            setIsSticky(true)
        }

        // FIXED: Don't run this effect if isOnFooter is true
        if (isOnFooter) return;

        const banner = document.getElementById("banner");
        const footer = document.getElementById("footer");

        const handleScroll = () => {
            if (!banner) return;
            const bannerRect = banner.getBoundingClientRect();
            setIsSticky(bannerRect.bottom <= stickyOffset);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        let observer: IntersectionObserver;

        if (footer) {
            observer = new IntersectionObserver(
                ([entry]) => {
                    setIsTouchingFooter(entry.isIntersecting);
                    // FIXED: Logic issue - only hide if intersecting and not mobile
                    if (entry.isIntersecting && !isMobile && isMobile) {
                        setIsSticky(false);
                    }
                },
                {
                    root: null,
                    threshold: 0.1,
                    rootMargin: '20px'
                }
            );
            observer.observe(footer);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (observer && footer) observer.unobserve(footer);
        };
    }, [isOnHomePage, stickyOffset, isMobile, isOnFooter]); // FIXED: Added isOnFooter to dependencies
    // FIXED: Early return if isOnFooter is true - this should prevent any rendering
    if (isOnFooter) {
        return null;
    }
    // Render action button based on state
    const renderActionButton = (item: ActionItem, index: number) => {
        // Banner Mode (Image 3 - Mobile horizontal buttons with arrows)
        if (!isSticky && isMobile) {
            return (
                <Tooltip key={index}>
                    <TooltipTrigger asChild>
                        <Button
                            onClick={item.onClick}
                            variant="ghost"
                            className="flex flex-col items-center gap-1 px-2  py-2 hover:bg-transparent"
                        >
                            {item.icon && (
                                typeof item.icon === 'string' ? (
                                    <Image
                                        src={item.icon}
                                        width={24}
                                        height={24}
                                        alt={item.label}
                                        className="size-6 object-contain"
                                    />
                                ) : (
                                    React.createElement(item.icon, { className: "size-6" })
                                )
                            )}
                            <span className="text-xs font-medium ">{item.label.slice(0, 9)}</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>{item.label}</TooltipContent>
                </Tooltip>
            );
        }

        // Banner Mode
        if (!isSticky && !isMobile) {
            return (
                <Button
                    key={index}
                    onClick={item.onClick}
                    variant="ghost"
                    className={cn("flex items-center justify-between rounded-full px-5 py-3 border-none min-w-52 ", item.className)}
                >
                    <div className="flex items-center gap-2">
                        {item.icon && (
                            typeof item.icon === 'string' ? (
                                <Image
                                    src={item.icon}
                                    width={20}
                                    height={20}
                                    alt={item.label}
                                    className="size-5 object-contain"
                                />
                            ) : (
                                React.createElement(item.icon, { className: "size-5" })
                            )
                        )}
                        <span className="text-sm font-medium text-gray-800">{item.label}</span>
                    </div>
                    <ChevronRight className="size-4 text-gray-500" />
                </Button>
            );
        }

        // Sticky Mode (Image 2 - Vertical column of circular icons)
        if (isSticky && !isMobile) {
            return (
                <Tooltip key={index}>
                    <TooltipTrigger asChild>
                        <Button
                            onClick={item.onClick}
                            variant="ghost"
                            size="icon"
                            className={cn("w-12 h-12 rounded-full  flex items-center justify-center shadow-sm  mb-2", item.className)}
                        >
                            {item.icon && (
                                typeof item.icon === 'string' ? (
                                    <Image
                                        src={item.icon}
                                        width={24}
                                        height={24}
                                        alt={item.label}
                                        className="size-6 object-contain"
                                    />
                                ) : (
                                    React.createElement(item.icon, { className: "size-6" })
                                )
                            )}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">{item.label}</TooltipContent>
                </Tooltip>
            );
        }

        // Mobile Sticky Mode
        return (
            <Tooltip key={index}>
                <TooltipTrigger asChild>
                    <Button
                        onClick={item.onClick}
                        variant="ghost"
                        className="flex flex-col items-center gap-1 px-1 py-2 hover:bg-transparent"
                    >
                        {item.icon && (
                            typeof item.icon === 'string' ? (
                                <Image
                                    src={item.icon}
                                    width={24}
                                    height={24}
                                    alt={item.label}
                                    className="size-6 object-contain"
                                />
                            ) : (
                                React.createElement(item.icon, { className: "size-6" })
                            )
                        )}
                        <span className="text-xs font-medium ">{item.label.slice(0, 9)}</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>{item.label}</TooltipContent>
            </Tooltip>
        );
    };

    // FIXED: Additional check to prevent rendering when isOnFooter is true
    if (isOnFooter) {
        return null;
    }

    return (
        <TooltipProvider>
            <AnimatePresence>
                {/* Sticky Mode (when scrolled past banner - Image 2) */}
                {isSticky && !isTouchingFooter && (
                    <div
                        className={cn(
                            "z-50 fixed transition-all duration-300 ease-in-out",
                            {
                                "bottom-0 left-0 right-0  py-4 bg-indigo-50 ": isMobile,
                                "top-1/2 -translate-y-1/2 left-0 bg-transparent": !isMobile
                            },
                            className
                        )}
                        ref={containerRef}
                    >
                        <div className={cn(
                            "flex gap-3",
                            {
                                "flex-col": !isMobile,
                                "flex-row justify-evenly": isMobile,
                                "bg-white/10 backdrop-blur-sm p-3 rounded-r-2xl shadow-md": !isMobile && items.length > 1
                            }
                        )}>
                            {processedItems.map(renderActionButton)}
                        </div>
                    </div>
                )}

                {/* Non-sticky Mode (when banner visible - Image 1 or Image 3 depending on mobile) */}
                {!isSticky && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                            "z-40",
                            {
                                // Mobile view (Image 3)
                                "fixed bottom-0 left-0 right-0 py-4  bg-indigo-50 ": isMobile,
                                // Desktop banner view (Image 1)
                                "absolute left-1/2 -translate-x-1/2 bottom-[90px]": !isMobile
                            },
                            className
                        )}
                        ref={containerRef}
                    >
                        <div className={cn(
                            "flex gap-3 justify-evenly",
                            {
                                "flex-row justify-center ": !isMobile,
                                "flex-row items-center w-full": isMobile
                            }
                        )}>
                            {processedItems.map(renderActionButton)}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </TooltipProvider>
    );
};
