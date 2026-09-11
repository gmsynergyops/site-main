"use client";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useMenuItems, useQuickLinks } from "@/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronRight, MenuIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT_INFO } from "@/data/contactData";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import React, { useEffect, useState } from "react";
import { GiSiren } from "react-icons/gi";
import { NavigationMenuStructureProps } from "@/types";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "../ui/sheet";
import { LanguageSwitch } from "./LanguageSwitch";
import { useTranslations } from 'next-intl';

// Animation variants
const dropdownVariants: Variants = {
    hidden: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.15,
            ease: "easeOut",
            when: "afterChildren"
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            ease: "easeOut",
            staggerChildren: 0.05,
            when: "beforeChildren"
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 }
};

export function Navbar() {
    const router = useRouter()
    const pathname = usePathname();
    const [activePageIndex, setActivePageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [outerOpen, setOuterOpen] = useState(false);
    // Secondary sheet state: which category's pages to show
    const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);
    // Tertiary sheet state: which page's links to show
    const [activePageDetail, setActivePageDetail] = useState<NavigationMenuStructureProps | null>(null);
    const menuItems = useMenuItems();
    const quickLinks = useQuickLinks();
    const t = useTranslations('global');

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollTop / docHeight) * 100;
        setIsScrolled(scrollPercentage > 10);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const result: boolean = isHovered || isScrolled || pathname !== "/";
    const switchLocale = (locale: string) => {
        document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000;SameSite=Lax`;
        router.replace(pathname, { locale });
        router.refresh();
    };
    return (
        <div className={cn(
            "h-16 xl:h-20 fixed w-full top-0 z-50 transition-all duration-300 m-0 p-0 space-y-0",
            result ? "bg-white shadow-md" : "bg-transparent"
        )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            {/* Desktop Menu */}
            <NavigationMenu
                aria-label="Main navigation"
                role="navigation"
                className={cn(
                    "hidden md:flex h-full font-display items-center justify-between px-6 w-full transition-all duration-300",
                    result ? "text-black" : "text-white"
                )}
            >
                <div className="flex items-center justify-start gap-4 w-1/4 px-2">
                    <NavigationMenuLink
                        asChild
                        className="h-16 py-2 xl:p-0! rounded-none m-0! hover:bg-transparent"
                    >
                        <Link href="/">
                            <Image
                                src="/LOGO.svg"
                                alt={t('logo')}
                                height={40}
                                width={100}
                                className="h-full w-auto object-cover"
                                priority
                            />
                        </Link>
                    </NavigationMenuLink>
                    <Image
                        src="/nabh-logo.png"
                        alt={t('logo')}
                        height={64}
                        width={64}
                        className="h-full w-auto object-cover"
                    />
                    <Image
                        src="/qci-logo.png"
                        alt={t('logo')}
                        height={48}
                        width={48}
                        className="h-full w-auto object-cover"
                    />
                </div>
                <NavigationMenuList className="w-full flex items-center justify-evenly lg:space-x-4 space-x-0">
                    {menuItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger
                                    onMouseEnter={() => setActivePageIndex(0)}
                                    className="xl:px-4 md:px-2 px-0! py-2 uppercase font-medium! font-display lg:text-base text-xs"
                                >
                                    {item.label}
                                </NavigationMenuTrigger>

                                <NavigationMenuContent className="xl:min-w-7xl lg:min-w-6xl md:min-w-5xl w-full bg-slate-50 flex items-center justify-center p-0 outline-none! ring-0! border-none! rounded-none! min-h-[450px] h-full ">
                                    <AnimatePresence>
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            variants={dropdownVariants}
                                            className="flex w-full min-h-full justify-center "
                                        >
                                            {item.pages[0]?.name ? (
                                                <>
                                                    {/* LEFT: Page Names */}
                                                    <motion.div
                                                        variants={itemVariants}
                                                        className="w-1/4 p-4 flex flex-col space-y-2 items-start min-h-full"
                                                    >
                                                        {item.pages.map((page) => (
                                                            <Button
                                                                key={page.name}
                                                                variant="ghost"
                                                                onMouseEnter={() => setActivePageIndex(item.pages.indexOf(page))}
                                                                className={cn(
                                                                    "text-left hover:text-indigo-600 w-full items-center justify-between text-base min-w-full flex ",
                                                                    {
                                                                        "text-indigo-600 font-semibold":
                                                                            activePageIndex === item.pages.indexOf(page),
                                                                    }
                                                                )}
                                                            >
                                                                <span>{page.name}</span>
                                                                <span><ArrowRight className={cn("size-4 hidden", {
                                                                    "block":
                                                                        activePageIndex === item.pages.indexOf(page),
                                                                })} /></span>
                                                            </Button>
                                                        ))}
                                                    </motion.div>

                                                    {/* CENTER: Links */}
                                                    <motion.div
                                                        variants={itemVariants}
                                                        className="w-5/8 border-x border-gray-300 p-4 min-h-full overflow-auto"
                                                    >
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                                            {Array.from({
                                                                length: Math.ceil(item.pages[activePageIndex]?.links.length / 12),
                                                            }).map((_, colIndex) => {
                                                                const start = colIndex * 12;
                                                                const columnLinks = item.pages[activePageIndex]?.links.slice(
                                                                    start,
                                                                    start + 12
                                                                );

                                                                return (
                                                                    <motion.div
                                                                        key={colIndex}
                                                                        variants={itemVariants}
                                                                        className="flex flex-col gap-2"
                                                                    >
                                                                        {columnLinks.map((link) => (
                                                                            <Link
                                                                                key={link.label}
                                                                                href={link.href}
                                                                                className="hover:underline font-normal w-max block text-sm transition-colors"
                                                                            >
                                                                                {link.label}
                                                                            </Link>
                                                                        ))}
                                                                    </motion.div>
                                                                );
                                                            })}
                                                        </div>
                                                    </motion.div>

                                                    {/* RIGHT: Quick Links */}
                                                    <motion.div
                                                        variants={itemVariants}
                                                        className="w-1/4 p-4 space-y-4  overflow-y-auto max-h-[478px]"
                                                    >
                                                        <h4 className="font-semibold text-gray-700">{t('quickLinks')}</h4>
                                                        {quickLinks.map((qLink) => {
                                                            const isPeripheralOPD = qLink.label === "Our Peripheral OPDs";
                                                            return isPeripheralOPD ? (
                                                                <Button
                                                                    key={qLink.label}
                                                                    variant="link"
                                                                    className="bg-indigo-100 text-black px-4 py-2 rounded-full hover:shadow-blob w-full justify-between hover:no-underline"
                                                                    title="Book an Appointment"
                                                                    onClick={() => { router.push(qLink.value) }}
                                                                >
                                                                    {qLink.label} <span>→</span>
                                                                </Button>
                                                            ) : (
                                                                <motion.div
                                                                    key={qLink.label}
                                                                    variants={itemVariants}
                                                                    className={cn("px-4 py-2 rounded-lg text-sm border border-neutral-300", qLink.bg)}
                                                                >
                                                                    <div className="text-gray-500 text-2.5">{qLink.label}</div>
                                                                    <div className="font-normal">{qLink.value}</div>
                                                                </motion.div>
                                                            );
                                                        })}

                                                        <motion.div variants={itemVariants}>
                                                            <Button
                                                                variant="link"
                                                                className="bg-indigo-100 text-black px-4 py-2 rounded-full hover:shadow-blob w-full justify-between hover:no-underline"
                                                                title="Book an Appointment"
                                                                onClick={() => { router.push("/book-appointment") }}
                                                            >
                                                                {t('bookAppointment')} <span>→</span>
                                                            </Button>
                                                        </motion.div>

                                                        <motion.div variants={itemVariants}>
                                                            <Button
                                                                variant="link"
                                                                className="bg-indigo-100 text-black px-4 py-2 rounded-full hover:shadow-blob w-full justify-between hover:no-underline"
                                                                title="Search for available doctors"
                                                                onClick={() => { router.push("/doctors/all") }}
                                                            >
                                                                {t('findAvailableDoctors')} <span>→</span>
                                                            </Button>
                                                        </motion.div>

                                                        <motion.div variants={itemVariants}>
                                                            <Button
                                                                variant="link"
                                                                className="bg-indigo-100 text-black px-4 py-2 rounded-full hover:shadow-blob w-full justify-between hover:no-underline"
                                                                title="Get in touch with us"
                                                                onClick={() => {
                                                                    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                                                                }}
                                                            >
                                                                {t('contactUs')} <span>→</span>
                                                            </Button>

                                                        </motion.div>
                                                    </motion.div>
                                                </>
                                            ) : (
                                                <motion.div variants={itemVariants} className="w-full p-4">
                                                    <p>{item.label} content here</p>
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </React.Fragment>
                    ))}
                </NavigationMenuList>
                <div className="w-1/4 flex items-center justify-end gap-4">
                    {/* Language Switch */}
                    <LanguageSwitch switchLocale={switchLocale} result={result} />

                    {/* Emergency Button */}
                    <Link
                        href="/patient-care/emergency"
                        aria-label="Emergency Care"
                        className={cn(
                            "group relative flex items-center justify-center rounded-full border-2 border-red-500 bg-transparent p-3 min-w-[44px] min-h-[44px] transition-colors duration-200",
                            "focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        )}
                    >
                        <GiSiren
                            className={`size-7 transition-colors duration-200 ${result ? "text-red-500" : "text-white"
                                }`}
                        />
                        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-red-600 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            {t('emergencyCare')}
                        </span>
                    </Link>

                    {/* WhatsApp Button */}
                    <Link
                        href={CONTACT_INFO.whatsapp.url}
                        target="_blank"
                        aria-label="Contact us on WhatsApp"
                        className={cn(
                            "group relative flex items-center justify-center rounded-full border-2 border-green-500 bg-transparent p-3 min-w-[44px] min-h-[44px] transition-colors duration-200",
                            "focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        )}
                    >
                        <FaWhatsapp
                            className={`size-5 transition-colors duration-200 ${result ? "text-green-500" : "text-white"
                                }`}
                        />
                        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-green-500 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            {t('whatsapp')}
                        </span>
                    </Link>
                </div>
            </NavigationMenu>

            {/* Mobile Menu */}
            <div className="w-full md:hidden flex h-full relative items-center gap-1">
                <Link href={"/"} className="w-40 h-[68px] py-2! rounded-none m-0!">
                    <Image src="/LOGO.svg" alt="Logo" height={40} width={50} className="size-full rounded-none" priority />
                </Link>

                <div className="flex h-10 items-center gap-1.5">
                    <Image
                        src="/nabh-logo.png"
                        alt={t('logo')}
                        height={24}
                        width={24}
                        className="h-full w-auto object-cover"
                    />
                    <Image
                        src="/qci-logo.png"
                        alt={t('logo')}
                        height={24}
                        width={24}
                        className="h-full w-auto object-cover"
                    />
                </div>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2 items-center justify-end">
                    {/* Language Switch */}
                    <LanguageSwitch switchLocale={switchLocale} />

                    {/* Single Sheet – no nested Sheets */}
                    <Sheet open={outerOpen} onOpenChange={(open) => {
                            setOuterOpen(open);
                            if (!open) {
                                setActiveCategoryIndex(null);
                                setActivePageDetail(null);
                            }
                        }}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Open menu">
                                <MenuIcon className={cn(result ? "text-primary" : "text-background")} />
                            </Button>
                        </SheetTrigger>

                        <SheetContent
                            side="right"
                            className="w-full sm:max-w-sm p-0 flex flex-col h-full overflow-hidden"
                            data-lenis-prevent
                        >
                            {/* Stacked panels via AnimatePresence */}
                            <AnimatePresence mode="wait">
                                {activePageDetail ? (
                                    /* ─── Tertiary: links for a specific page ─── */
                                    <motion.div
                                        key="tertiary"
                                        initial={{ x: "100%" }}
                                        animate={{ x: 0 }}
                                        exit={{ x: "100%" }}
                                        transition={{ type: "tween", duration: 0.2 }}
                                        className="flex flex-col h-full"
                                    >
                                        {/* Header */}
                                        <div className="px-4 pt-4 pb-2 border-b border-gray-100 flex items-center gap-3">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="shrink-0"
                                                onClick={() => setActivePageDetail(null)}
                                            >
                                                <ArrowLeft className="size-4" />
                                            </Button>
                                            <span className="text-sm font-semibold text-primary truncate">
                                                {activePageDetail.name}
                                            </span>
                                        </div>

                                        <ScrollArea className="flex-1 overflow-y-auto" data-lenis-prevent>
                                            <ul className="flex flex-col px-2 py-3">
                                                {activePageDetail.links.map((link) => (
                                                    <li key={link.href}>
                                                        <SheetClose asChild>
                                                            <Link
                                                                href={link.href}
                                                                className="block px-4 py-2.5 text-sm text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                                                onClick={() => {
                                                                    setOuterOpen(false);
                                                                    setActiveCategoryIndex(null);
                                                                    setActivePageDetail(null);
                                                                }}
                                                            >
                                                                {link.label}
                                                            </Link>
                                                        </SheetClose>
                                                    </li>
                                                ))}
                                            </ul>
                                        </ScrollArea>
                                    </motion.div>
                                ) : activeCategoryIndex !== null ? (
                                    /* ─── Secondary: pages of a category ─── */
                                    <motion.div
                                        key="secondary"
                                        initial={{ x: "100%" }}
                                        animate={{ x: 0 }}
                                        exit={{ x: "100%" }}
                                        transition={{ type: "tween", duration: 0.2 }}
                                        className="flex flex-col h-full"
                                    >
                                        {/* Header */}
                                        <div className="px-4 pt-4 pb-2 border-b border-gray-100 flex items-center gap-3">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="shrink-0"
                                                onClick={() => setActiveCategoryIndex(null)}
                                            >
                                                <ArrowLeft className="size-4" />
                                            </Button>
                                            <span className="text-sm font-semibold uppercase tracking-wide text-primary truncate">
                                                {menuItems[activeCategoryIndex].label}
                                            </span>
                                        </div>

                                        <ScrollArea className="flex-1 overflow-y-auto" data-lenis-prevent>
                                            <div className="px-2 py-3 space-y-1">
                                                {menuItems[activeCategoryIndex].pages.map((page) => (
                                                    <button
                                                        key={page.name}
                                                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
                                                        onClick={() => setActivePageDetail(page)}
                                                    >
                                                        <span>{page.name}</span>
                                                        <ChevronRight className="size-4 text-gray-400" />
                                                    </button>
                                                ))}
                                            </div>
                                        </ScrollArea>
                                    </motion.div>
                                ) : (
                                    /* ─── Primary: category list + quick links ─── */
                                    <motion.div
                                        key="primary"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: 0 }}
                                        exit={{ x: "-100%" }}
                                        transition={{ type: "tween", duration: 0.2 }}
                                        className="flex flex-col h-full"
                                    >
                                        {/* Header */}
                                        <SheetHeader className="px-4 pt-4 pb-2 border-b border-gray-100">
                                            <SheetTitle className="text-heading sr-only">
                                                {t('hospitalName')}
                                            </SheetTitle>
                                            <SheetDescription className="sr-only">Navigation Menu</SheetDescription>
                                            <div className="flex items-center gap-2">
                                                <Image src="/LOGO.svg" alt="Logo" height={32} width={80} className="h-8 w-auto" />
                                            </div>
                                        </SheetHeader>

                                        <ScrollArea className="flex-1 overflow-y-auto" data-lenis-prevent>
                                            <div className="px-2 py-3">
                                                {/* Category buttons */}
                                                <div className="space-y-1">
                                                    {menuItems.map((item, index) => (
                                                        <button
                                                            key={item.label}
                                                            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold uppercase tracking-wide text-primary hover:bg-indigo-50 rounded-xl transition-colors border border-gray-100"
                                                            onClick={() => setActiveCategoryIndex(index)}
                                                        >
                                                            <span>{item.label}</span>
                                                            <ChevronRight className="size-4 text-gray-400" />
                                                        </button>
                                                    ))}
                                                </div>

                                                {/* Divider */}
                                                <div className="my-4 border-t border-gray-100" />

                                                {/* Quick info cards */}
                                                <div className="px-2 space-y-2">
                                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 px-2">
                                                        {t('quickLinks')}
                                                    </p>
                                                    {quickLinks.map((item, i) => (
                                                        <div
                                                            key={i}
                                                            className="bg-indigo-50 border border-indigo-100 px-3 py-2 rounded-lg text-sm"
                                                        >
                                                            <div className="text-gray-500 text-xs">{item.label}</div>
                                                            <div className="font-medium text-gray-800">{item.value}</div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* CTA Buttons */}
                                                <div className="px-2 mt-4 space-y-2">
                                                    <SheetClose asChild>
                                                        <Button
                                                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-between px-5"
                                                            onClick={() => router.push("/book-appointment")}
                                                        >
                                                            {t('bookAppointment')} <ArrowRight className="size-4" />
                                                        </Button>
                                                    </SheetClose>
                                                    <SheetClose asChild>
                                                        <Button
                                                            variant="outline"
                                                            className="w-full rounded-full flex items-center justify-between px-5 border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                                                            onClick={() => router.push("/doctors/all")}
                                                        >
                                                            {t('findAvailableDoctors')} <ArrowRight className="size-4" />
                                                        </Button>
                                                    </SheetClose>
                                                    <SheetClose asChild>
                                                        <Button
                                                            variant="outline"
                                                            className="w-full rounded-full flex items-center justify-between px-5 border-gray-200 text-gray-700 hover:bg-gray-50"
                                                            onClick={() => router.push("/contact")}
                                                        >
                                                            {t('contactUs')} <ArrowRight className="size-4" />
                                                        </Button>
                                                    </SheetClose>
                                                </div>

                                                {/* bottom padding so last item isn't hidden behind safe area */}
                                                <div className="h-8" />
                                            </div>
                                        </ScrollArea>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
}
