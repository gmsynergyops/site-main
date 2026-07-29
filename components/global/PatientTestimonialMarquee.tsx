import { cn } from "@/lib/utils";
import { useTestimonials } from "@/data";
import React from "react";
import Marquee from "react-fast-marquee";
import { VideoModal } from "./VideoModal";
import PatientSpeaksWrittenTestimonialCard from "./PatientSpeaksWrittenTestimonialCard";

const PatientTestimonialMarquee = ({ className, ...rest }: { className?: string }) => {
    const testimonials = useTestimonials();

    return (
        <div className={cn("relative mt-6 overflow-hidden space-y-6", className)} {...rest}>
            <Marquee speed={60} pauseOnHover className="pt-4">
                {testimonials.map((item, index) => (
                    <div key={index} className="mx-4 flex items-center">
                        {item.type === "written" && (
                            <PatientSpeaksWrittenTestimonialCard testimonial={item} />
                        )}
                        {item.type === "video" && (
                            <VideoModal
                                image={item.image}
                                videoUrl={item.videoUrl}
                                className="w-full"
                            />
                        )}
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default PatientTestimonialMarquee;
