"use client"
import { VideoModalForJourney } from "@/components/global/VideoModalForJourney";
import { containerVariants, imageVariants, itemVariants } from "@/lib/utils";
import { LeaderPageProps } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const LeadershipPage = (props: LeaderPageProps) => {
    const {
        name,
        role,
        description,
        image,
        customFirstHeading,
        theirStory,
        customSecondHeading,
        secondImage,
        secondSectionDescription,
        thirdImage,
        thirdSectionDescription,
        fourthSectionDescription,
        fifthSectionDescription,
        journeyHeading,
        videoModalForJourney,
    } = props;

    const [firstSectionRef, firstSectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: "-50px 0px"
    });

    const [secondSectionRef, secondSectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: "-50px 0px"
    });

    const [thirdSectionRef, thirdSectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: "-50px 0px"
    });

    const [fourthSectionRef, fourthSectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: "-50px 0px"
    });

    const [journeySectionRef, journeySectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: "-50px 0px"
    });

    return (
        <main className="bg-fuchsia-50/50 pt-12 md:pt-16 items-center justify-center flex flex-col">
            {/* First Section */}
            <section
                ref={firstSectionRef}
                className="w-full px-4 sm:px-6 lg:px-8 py-8 max-w-7xl"
            >
                <motion.div
                    initial="hidden"
                    animate={firstSectionInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="p-6 sm:p-8 rounded-xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 ">
                        <motion.div
                            variants={imageVariants}
                            className="relative rounded-xl w-2/5  h-full  aspect-[3/4] max-w-md overflow-hidden"
                        >
                            <Image
                                src={image}
                                alt={name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                        <motion.div
                            variants={containerVariants}
                            className="w-full lg:w-3/5 space-y-4"
                        >
                            <motion.h1
                                variants={itemVariants}
                                className="text-2xl sm:text-3xl font-bold text-gray-900 text-center lg:text-left"
                            >
                                {customFirstHeading}
                            </motion.h1>
                            <motion.div
                                variants={itemVariants}
                                className="space-y-1 text-center lg:text-left"
                            >
                                <h2 className="text-xl font-bold text-synergy-pink">{name}</h2>
                                <h3 className="text-base text-neutral-600 font-medium">{role}</h3>
                                <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>
                            </motion.div>
                            <motion.div
                                variants={itemVariants}
                                className="space-y-3"
                            >
                                {theirStory?.map((story, index) => (
                                    <p
                                        key={index}
                                        className="text-sm text-neutral-600 leading-relaxed"
                                    >
                                        {story}
                                    </p>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Second Section */}


            <section
                ref={secondSectionRef}
                className="w-full px-4 sm:px-6 lg:px-8 py-6 max-w-7xl"
            >
                <motion.div
                    initial="hidden"
                    animate={secondSectionInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="p-6 sm:p-8 rounded-xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className="flex flex-col lg:flex-row-reverse items-start gap-6 md:gap-8">
                        <motion.div
                            variants={imageVariants}
                            className="relative rounded-xl w-full lg:w-2/5 aspect-square max-w-md overflow-hidden"
                        >
                            <Image
                                src={secondImage}
                                alt={name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                        <motion.div
                            variants={containerVariants}
                            className="w-full lg:w-3/5 space-y-4 "
                            >
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={secondSectionInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4 }}
                                className="text-2xl sm:text-3xl font-bold text-synergy-pink text-left  "
                            >
                                {customSecondHeading}
                            </motion.h2>
                            {secondSectionDescription.map((para, idx) => (
                                <motion.p
                                    key={idx}
                                    variants={itemVariants}
                                    className="text-sm text-neutral-600 leading-relaxed"
                                >
                                    {para}
                                </motion.p>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Third Section */}
            <section
                ref={thirdSectionRef}
                className="w-full px-4 sm:px-6 lg:px-8 py-6 max-w-7xl"
            >
                <motion.div
                    initial="hidden"
                    animate={thirdSectionInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="p-6 sm:p-8 rounded-xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
                        <motion.div
                            variants={imageVariants}
                            className="relative rounded-xl w-full lg:w-2/4 aspect-video max-w-md overflow-hidden"
                        >
                            <Image
                                src={thirdImage}
                                alt={name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                        <motion.div
                            variants={containerVariants}
                            className="w-full lg:w-3/5 space-y-4"
                        >
                            {thirdSectionDescription.map((para, idx) => (
                                <motion.p
                                    key={idx}
                                    variants={itemVariants}
                                    className="text-sm text-neutral-600 leading-relaxed"
                                >
                                    {para}
                                </motion.p>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Fourth Section */}
            {fourthSectionDescription?.length > 0 && (
                <section
                    ref={fourthSectionRef}
                    className="w-full px-4 sm:px-6 lg:px-8 py-6 max-w-7xl"
                >
                    <motion.div
                        initial="hidden"
                        animate={fourthSectionInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="p-6 sm:p-8 rounded-xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow w-full mx-auto"
                    >
                        <div className="space-y-4">
                            {fourthSectionDescription.map((para, idx) => (
                                <motion.p
                                    key={idx}
                                    variants={itemVariants}
                                    className="text-sm text-neutral-600 leading-relaxed"
                                >
                                    {para}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>
                </section>
            )}

            {/* Journey Section */}
            <section
                ref={journeySectionRef}
                className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={journeySectionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4 }}
                    className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6"
                >
                    {journeyHeading}
                </motion.h2>
                <motion.div
                    initial="hidden"
                    animate={journeySectionInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="p-6 sm:p-8 rounded-xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow max-w-7xl mx-auto"
                >
                    <div className="space-y-6">
                        <motion.p
                            variants={itemVariants}
                            className="text-sm text-neutral-600 leading-relaxed text-center"
                        >
                            {fifthSectionDescription}
                        </motion.p>
                        <motion.div
                            variants={imageVariants}
                            className="w-full relative aspect-video overflow-hidden rounded-xl"
                        >
                            <VideoModalForJourney
                                image={videoModalForJourney.image}
                                videoUrl={videoModalForJourney.videoUrl}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default LeadershipPage;
