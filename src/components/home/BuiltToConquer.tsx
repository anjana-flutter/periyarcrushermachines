"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const content = [
    {
        title: "TOUGHEST TERRAIN",
        description: "Our machines are built to withstand the harshest environments on earth. From extreme heat to freezing cold, we deliver consistent performance.",
        image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?q=80&w=2080&auto=format&fit=crop",
    },
    {
        title: "ENGINEERED PRECISION",
        description: "Every component is designed with microscopic precision to ensure maximum efficiency and minimal wear, extending the lifespan of your equipment.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "MAXIMUM OUTPUT",
        description: "Maximize your productivity with high-capacity crushing chambers and optimized material flow. Get more done in less time.",
        image: "https://images.unsplash.com/photo-1535136029863-4a3813f1a127?q=80&w=2070&auto=format&fit=crop",
    },
];

export default function BuiltToConquer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: ".sticky-image-container",
            });

            content.forEach((_, index) => {
                ScrollTrigger.create({
                    trigger: `#block-${index}`,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => setActiveIndex(index),
                    onEnterBack: () => setActiveIndex(index),
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative bg-background">
            <div className="flex flex-col md:flex-row">
                {/* Left Side: Scrolling Text */}
                <div className="w-full md:w-1/2 py-24 px-6 md:px-24">
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            BUILT TO <span className="text-primary">CONQUER</span>
                        </h2>
                    </div>

                    {content.map((item, index) => (
                        <div
                            key={index}
                            id={`block-${index}`}
                            className={`min-h-[80vh] flex flex-col justify-center transition-opacity duration-500 ${index === activeIndex ? "opacity-100" : "opacity-30"
                                }`}
                        >
                            <h3 className="text-3xl md:text-5xl font-bold mb-6">{item.title}</h3>
                            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right Side: Sticky Image */}
                <div className="hidden md:block w-1/2 h-screen sticky-image-container sticky top-0 overflow-hidden">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className={`object-cover transition-all duration-700 ${index === activeIndex ? "grayscale-0 scale-105" : "grayscale scale-100"
                                    }`}
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
