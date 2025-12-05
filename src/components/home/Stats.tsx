"use client";

import Section from "@/components/ui/Section";
import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} className="text-5xl md:text-6xl font-bold text-primary font-heading" />;
}

const stats = [
    { value: 25, suffix: "+", label: "Years of Excellence" },
    { value: 500, suffix: "+", label: "Installations Worldwide" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { value: 24, suffix: "/7", label: "Support Available" },
];

export default function Stats() {
    return (
        <Section className="bg-background border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <Counter value={stat.value} suffix={stat.suffix} />
                            <p className="text-gray-400 mt-2 uppercase tracking-wider text-sm font-bold">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
