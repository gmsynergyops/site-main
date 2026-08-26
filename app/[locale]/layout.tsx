import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "../globals.css";
import { Kantumruy_Pro } from 'next/font/google';
import UnderMaintenance from "@/components/scenes/UnderMaintenance";

const kantumruy = Kantumruy_Pro({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-nunito',
})


export const metadata: Metadata = {
    title: {
        default: "Synergy Super Speciality Hospital",
        template: "%s | Synergy Super Speciality Hospital",
    },
    description: "Gorakhpur's leading super speciality & cancer hospital offering advanced, affordable care.",
};

// RootLayout now accepts 'children' and 'params'
export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params;
    // Setting the locale for Next-Intl
    setRequestLocale(locale);
    const messages = await getMessages();
    const siteState = process.env.SITE_STATE
    return (
        <html lang={locale}>
            <body
                className={cn(kantumruy.variable, "[--font-nunito-sans:var(--font-nunito)]", "m-0 p-0 box-border")}
                suppressContentEditableWarning suppressHydrationWarning
            >
                <NextIntlClientProvider messages={messages}>
                    {
                        siteState === "maintenance" ?
                            <UnderMaintenance />
                            :
                            <>
                                {children}
                            </>
                    }
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
