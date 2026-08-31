import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { Button } from "../ui/button";

interface LanguageSwitchProps {
    switchLocale: (locale: string) => void;
    className?: string;
    result?: boolean;
}

export function LanguageSwitch({ switchLocale, className, result }: LanguageSwitchProps) {
    const locale = useLocale();

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => switchLocale(locale === 'en' ? 'hi' : 'en')}
            className={cn(
                "font-medium transition-colors",
                result ? "text-black hover:text-black/80" : "text-white hover:text-white/80",
                className
            )}
        >
            {locale === 'en' ? 'हिन्दी' : 'English'}
        </Button>
    );
}
