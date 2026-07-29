"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { MinusCircle, PlusCircle } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useFaqItems } from "@/data";

interface FaqAccordionProps {
    className?: string;
    items?: Array<{
        question: string;
        answer: string;
    }>;
}

export default function FaqAccordion({ className, items: propItems }: FaqAccordionProps) {
    const [openItem, setOpenItem] = useState<string | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 }); // Runs only once when 30% visible
    const defaultItems = useFaqItems();
    const items = propItems || defaultItems;

    const handleToggle = (itemValue: string) => {
        setOpenItem((prev) => (prev === itemValue ? null : itemValue));
    };

    return (
        <Accordion type="single" collapsible className={cn("w-full space-y-3", className)} ref={ref}>
            {items.map((item, index) => {
                const value = `item-${index}`;
                const isOpen = openItem === value;

                return (
                    <motion.div
                        key={index}
                        initial={{ y: -50, opacity: 0 }} // Start stacked at the top
                        animate={isInView ? { y: 0, opacity: 1 } : {}} // Fall smoothly
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1, // Staggered effect
                            ease: "easeOut",
                        }}
                    >
                        <AccordionItem value={value} className="border-none">
                            <AccordionTrigger
                                onClick={() => handleToggle(value)}
                                className="flex items-center justify-between w-full p-4 text-left bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-medium text-gray-900">{item.question}</span>
                                {isOpen ? (
                                    <MinusCircle className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <PlusCircle className="h-5 w-5 text-gray-500" />
                                )}
                            </AccordionTrigger>
                            <AccordionContent className="px-4 py-3 text-gray-600 bg-gray-50 rounded-b-lg">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                );
            })}
        </Accordion>
    );
}
