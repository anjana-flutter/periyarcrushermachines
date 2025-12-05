"use client";

import { useRef, useEffect } from "react";
import { Hammer, Settings, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "Heavy-Duty Performance",
        description: "Engineered to handle the toughest materials with ease.",
        icon: Hammer,
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        title: "Low Maintenance",
        description: "Designed for easy access and minimal downtime.",
        icon: Settings,
        colSpan: "col-span-1",
    },
    {
        title: "Trusted Support",
        description: "24/7 expert support to keep your operations running.",
        icon: ShieldCheck,
        colSpan: "col-span-1 md:col-span-3",
    },
];

export default function Features() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".feature-card", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-background relative z-10">
            <div className="container-custom">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
                    BUILT TO <span className="text-primary">LAST</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature-card group relative p-8 bg-surface border border-white/5 hover:border-primary/50 transition-colors duration-300 overflow-hidden ${feature.colSpan}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <feature.icon className="w-12 h-12 text-primary mb-6 transform group-hover:scale-125 transition-transform duration-300" />

                            <h3 className="text-2xl font-bold mb-4 uppercase">{feature.title}</h3>
                            <p className="text-text-muted">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
