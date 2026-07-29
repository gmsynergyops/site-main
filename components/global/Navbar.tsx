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
import { ArrowRight, MenuIcon, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GiSiren } from "react-icons/gi";
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
    const [innerOpen, setInnerOpen] = useState(false);
    const menuItems = useMenuItems();
    const quickLinks = useQuickLinks();
    const [selectedMenuItem, setSelectedMenuItem] = useState<typeof menuItems[0] | null>(null);
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

    const result: boolean = isHovered || isScrolled || (pathname !== "/en" && pathname !== "/hi");
    const switchLocale = (locale: string) => {
        // Get the current path without the locale prefix
        const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '')
        // Construct the new path with the selected locale
        const newPath = `/${locale}${pathWithoutLocale}`
        router.push(newPath)
        router.refresh()
    }
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
                <div className="flex items-center justify-start w-1/4 px-2">
                    <NavigationMenuLink
                        href="/"
                        className="h-16 py-2 xl:p-0! rounded-none m-0! hover:bg-transparent"
                    >
                        <Image
                            src="/LOGO.svg"
                            alt={t('logo')}
                            height={40}
                            width={100}
                            className="h-full w-auto object-cover"
                            priority
                        />
                    </NavigationMenuLink>
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
                                                        <h4 className="font-semibold text-gray-700">Quick Links</h4>
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
                                                                    <div className="text-gray-500 text-[10px]">{qLink.label}</div>
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
                                                                    router.push("#footer")
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
                    <LanguageSwitch switchLocale={switchLocale} />

                    {/* Emergency Button */}
                    <Link href="/patient-care/emergency">
                        <Button
                            variant="destructive"
                            size="icon"
                            className="group relative rounded-full border-2 border-red-500 bg-transparent p-3 transition-colors duration-200"
                        >
                            <GiSiren
                                className={`size-7 transition-colors duration-200 group-hover:text-white ${result ? "text-red-500" : "text-white"
                                    }`}
                            />
                            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-red-600 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Emergency
                            </span>
                        </Button>
                    </Link>

                    {/* Search Button */}
                    <Link href="/search">
                        <Button
                            variant="default"
                            size="icon"
                            className="group relative rounded-full border-2 border-synergy-blue bg-transparent p-3 transition-colors duration-200"
                        >
                            <Search
                                className={`size-4 transition-colors duration-200 group-hover:text-white ${result ? "text-synergy-blue" : "text-white"
                                    }`}
                            />
                            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-synergy-blue px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Search
                            </span>
                        </Button>
                    </Link>
                </div>
            </NavigationMenu>

            {/* Mobile Menu */}
            <div className="w-full md:hidden flex h-full relative">
                <Link href={"/"} className="w-40 h-[68px] py-2! rounded-none m-0!">
                    <Image src="/LOGO.svg" alt="Logo" height={40} width={50} className="size-full rounded-none" priority />
                </Link>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2 items-center justify-end">
                    {/* Language Switch */}
                    <LanguageSwitch switchLocale={switchLocale} />
                    <Sheet open={outerOpen} onOpenChange={setOuterOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" onClick={() => setOuterOpen(true)}>
                                <MenuIcon className={cn(result ? "text-primary" : "text-background")} />
                            </Button>
                        </SheetTrigger>

                        <AnimatePresence>
                            {outerOpen && (
                                <motion.div
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ type: 'tween', ease: 'easeInOut' }}
                                >
                                    <SheetContent className="w-full max-w-screen h-full">
                                        <SheetHeader>
                                            <SheetTitle className="text-heading sr-only">
                                                Synergy Super Speciality Hospital & Cancer Institute
                                            </SheetTitle>
                                            <SheetDescription className="text-gray-700 sr-only">Menu</SheetDescription>
                                        </SheetHeader>

                                        <div className="px-4 h-full flex flex-col space-y-2">
                                            {menuItems.map((item) => (
                                                <motion.div
                                                    key={item.label}
                                                    initial={{ x: 20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <Button
                                                        variant="ghost"
                                                        className="uppercase text-primary font-display hover:text-primary w-max"
                                                        onClick={() => {
                                                            setActivePageIndex(0);
                                                            setSelectedMenuItem(item);
                                                            setInnerOpen(true);
                                                        }}
                                                    >
                                                        {item.label}
                                                    </Button>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Inner Sheet */}
                                        <Sheet open={innerOpen} onOpenChange={(val) => {
                                            setInnerOpen(val);
                                            if (!val) {
                                                setSelectedMenuItem(null);
                                            }
                                        }}>
                                            <motion.div
                                                initial={{ x: '100%' }}
                                                animate={{ x: 0 }}
                                                exit={{ x: '100%' }}
                                                transition={{ type: 'tween', ease: 'easeInOut' }}
                                            >
                                                <SheetContent className="w-full max-w-screen">
                                                    <SheetHeader>
                                                        <SheetTitle className="text-heading sr-only">
                                                            {selectedMenuItem?.label}
                                                        </SheetTitle>
                                                        <SheetDescription className="text-gray-700 sr-only">
                                                            {selectedMenuItem?.label} Menu
                                                        </SheetDescription>
                                                    </SheetHeader>

                                                    {selectedMenuItem && (
                                                        <div className="flex">
                                                            {/* Page Names */}
                                                            <div className="w-full p-4 flex flex-col space-x-2 items-start">
                                                                {selectedMenuItem.pages.map((page, pageIndex) => (
                                                                    <motion.div
                                                                        key={pageIndex}
                                                                        initial={{ x: -20, opacity: 0 }}
                                                                        animate={{ x: 0, opacity: 1 }}
                                                                        transition={{ delay: pageIndex * 0.05 }}
                                                                    >
                                                                        <Button
                                                                            variant="ghost"
                                                                            onMouseEnter={() => setActivePageIndex(pageIndex)}
                                                                            className={cn(
                                                                                "text-left hover:text-indigo-600 w-full items-start justify-start",
                                                                                {
                                                                                    "text-indigo-600 font-semibold":
                                                                                        activePageIndex === pageIndex,
                                                                                }
                                                                            )}
                                                                        >
                                                                            {page.name}
                                                                        </Button>
                                                                    </motion.div>
                                                                ))}
                                                            </div>

                                                            {/* Page Links */}
                                                            <ScrollArea className="h-[calc(100vh-4rem)] w-full pr-4">
                                                                <div className="flex flex-col space-y-4 mt-4">
                                                                    {selectedMenuItem.pages[activePageIndex]?.links.map(
                                                                        (link, index) => (
                                                                            <motion.div
                                                                                key={index}
                                                                                initial={{ x: 20, opacity: 0 }}
                                                                                animate={{ x: 0, opacity: 1 }}
                                                                                transition={{ delay: index * 0.03 }}
                                                                            >
                                                                                <SheetClose asChild>
                                                                                    <Link
                                                                                        href={link.href}
                                                                                        className="text-base hover:text-fuchsia-600"
                                                                                        onClick={() => {
                                                                                            setInnerOpen(false);
                                                                                            setOuterOpen(false);
                                                                                            setSelectedMenuItem(null);
                                                                                        }}
                                                                                    >
                                                                                        {link.label}
                                                                                    </Link>
                                                                                </SheetClose>
                                                                            </motion.div>
                                                                        )
                                                                    )}
                                                                </div>
                                                            </ScrollArea>
                                                        </div>
                                                    )}
                                                </SheetContent>
                                            </motion.div>
                                        </Sheet>

                                        {/* Quick Links */}
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="w-full max-w-lg p-2 space-y-4 min-h-max absolute bottom-0 right-0"
                                        >
                                            <h4 className="font-semibold text-gray-700">Quick Links</h4>
                                            {quickLinks.map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ y: 10, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.35 + i * 0.05 }}
                                                    className="bg-indigo-100 px-2 py-1 rounded text-sm"
                                                >
                                                    <div className="text-gray-500">{item.label}</div>
                                                    <div className="font-medium">{item.value}</div>
                                                </motion.div>
                                            ))}
                                            <motion.div
                                                initial={{ y: 10, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.5 }}
                                            >
                                                <Button
                                                    variant={"link"}
                                                    className="bg-indigo-400 text-black px-4 py-2 rounded flex items-center justify-between w-full"
                                                >
                                                    {t('bookAppointment')} <span>→</span>
                                                </Button>
                                            </motion.div>
                                            <motion.div
                                                initial={{ y: 10, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.55 }}
                                            >
                                                <Button
                                                    variant={"link"}
                                                    className="bg-indigo-400 text-black px-4 py-2 rounded flex items-center justify-between w-full"
                                                >
                                                    {t('findAvailableDoctors')} <span>→</span>
                                                </Button>
                                            </motion.div>
                                            <motion.div
                                                initial={{ y: 10, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.6 }}
                                            >
                                                <Button
                                                    variant={"link"}
                                                    className="bg-indigo-400 text-black px-4 py-2 rounded flex items-center justify-between w-full"
                                                >
                                                    {t('contactUs')} <span>→</span>
                                                </Button>
                                            </motion.div>
                                        </motion.div>
                                    </SheetContent>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Sheet>

                </div>
            </div>
        </div>
    );
}
