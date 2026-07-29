import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

interface LanguageSwitchProps {
    switchLocale: (locale: string) => void;
    className?: string;
}

export function LanguageSwitch({ switchLocale, className }: LanguageSwitchProps) {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname()
    const currentLocale = pathname.startsWith('/en') ? 'en' : 'hi'

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const result: boolean =  scrolled || (pathname !== "/en" && pathname !== "/hi");

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => switchLocale(currentLocale === 'en' ? 'hi' : 'en')}
            className={cn(
                "font-medium transition-colors",
                result ? "text-black hover:text-black/80" : "text-white hover:text-white/80",
                className
            )}
        >
            {currentLocale === 'en' ? 'हिन्दी' : 'English'}
        </Button>
    )
}
