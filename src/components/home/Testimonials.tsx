"use client";

import Section from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        text: "Periyar's crushers have revolutionized our quarry operations. The throughput is unmatched, and the maintenance downtime has dropped by 40%.",
        author: "Rajesh Kumar",
        role: "Operations Director, Southern Mines",
    },
    {
        id: 2,
        text: "We needed a custom solution for hard granite, and Periyar delivered. Their engineering team is top-notch, and the build quality is world-class.",
        author: "Sarah Williams",
        role: "Project Manager, BuildTech Infra",
    },
    {
        id: 3,
        text: "Reliability was our biggest concern. After 5 years of running Periyar machines, we haven't had a single major breakdown. Highly recommended.",
        author: "Amit Patel",
        role: "MD, Patel Aggregates",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Section className="bg-surface relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="mb-12">
                    <Quote className="w-16 h-16 text-primary/20 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-2">
                        TRUSTED BY INDUSTRY LEADERS
                    </h2>
                </div>

                <div className="relative min-h-[300px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <p className="text-xl md:text-2xl text-gray-300 italic leading-relaxed mb-8 max-w-2xl">
                                "{testimonials[currentIndex].text}"
                            </p>
                            <div>
                                <h4 className="text-white font-bold text-lg uppercase tracking-wide">
                                    {testimonials[currentIndex].author}
                                </h4>
                                <p className="text-primary text-sm font-medium">
                                    {testimonials[currentIndex].role}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={prev}
                        className="p-2 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="flex gap-2 items-center">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-primary" : "bg-white/20"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={next}
                        className="p-2 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </Section>
    );
}
