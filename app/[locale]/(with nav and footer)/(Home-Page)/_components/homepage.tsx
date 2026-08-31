import dynamic from "next/dynamic";
import { FloatingBarWrapper } from "@/components/global/FloatingBarWrapper";
import { SpecialitiesSection } from "@/components/homepage/SpecialitiesSection";
import { useGeneralQuestions } from '@/data';
import { useTranslations } from "next-intl";
import { Link } from '@/i18n/navigation';
import HomepageVideo from "./homepage-video";

// Lazy-load below-the-fold sections to reduce initial JS bundle
const GalleryMarquee = dynamic(
    () => import("@/components/homepage/GalleryMarquee").then(mod => mod.GalleryMarquee),
    { ssr: true }
);
const LeaderCards = dynamic(
    () => import("@/components/homepage/LeaderCards").then(mod => mod.LeaderCards),
    { ssr: true }
);
const AyushmaanBharatCard = dynamic(
    () => import("@/components/global/AyushmaanBharatCard"),
    { ssr: true }
);
const TestimonialCards = dynamic(
    () => import("@/components/homepage/TestimonialCards").then(mod => mod.TestimonialCards),
    { ssr: true }
);
const NewsSlider = dynamic(
    () => import("@/components/homepage/NewsSlider")
);
const PatientTestimonials = dynamic(
    () => import("@/components/homepage/PatientTestimonials").then(mod => mod.PatientTestimonials),
    { ssr: true }
);
const FaqAccordion = dynamic(
    () => import("@/components/homepage/FaqAccordion"),
    { ssr: true }
);

export const Homepage = () => {
    const t = useTranslations('homepage');
    const generalQuestions = useGeneralQuestions();


    return (
        <main className="w-full flex flex-col items-center justify-center ">
            {/* Hero Section with Video */}
            <section id="banner" className="relative aspect-4/3 lg:aspect-4/2 min-w-full ">

                <HomepageVideo />
                <div className="absolute lg:bottom-5 bottom-20 w-full flex justify-center px-4">
                    <Link
                        href="#specialties"
                        className="text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base"
                    >
                        {t('exploreMore')}
                    </Link>
                </div>
                <FloatingBarWrapper isOnHomePage={true} />
            </section>


            {/* Specialties Section */}
            <SpecialitiesSection />
            {/*The Leader Card Grid*/}

            <div className="bg-linear-to-b from-fuchsia-100 to-white w-full flex items-center justify-center">
                <LeaderCards />
            </div>
            <div className="max-w-screen w-full text-black lg:p-5 p-2 ">
                {/* Ayushmaan Bharat */}
                <AyushmaanBharatCard />
            </div>

            <GalleryMarquee />


            {/* Testimonial Cards */}
            <TestimonialCards />

            {/* News Section */}
            <section className="w-full bg-white px-4 sm:px-8 lg:px-20 py-10">
                <div className="max-w-6xl mx-auto">
                    <NewsSlider />
                </div>
            </section>

            {/* Patient Speaks */}
            <PatientTestimonials />

            {/* FAQs */}
            <section className="w-full bg-linear-to-t from-white to-slate-100 px-4 sm:px-8 lg:px-20 py-10">
                <div className="max-w-6xl mx-auto space-y-6">
                    <div className="space-y-4 text-center">
                        <h2 className="text-heading text-2xl sm:text-3xl lg:text-4xl">
                            {t('FaqsSection.title')}
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
                            {t('FaqsSection.subtitle')}
                        </p>
                    </div>
                    <FaqAccordion items={generalQuestions} />
                </div>
            </section>
        </main>
    )
}

