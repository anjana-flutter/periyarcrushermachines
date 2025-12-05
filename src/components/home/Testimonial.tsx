"use client";

import { useRef, useEffect } from "react";
import { Quote } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".testimonial-text", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative py-32 bg-background flex items-center justify-center overflow-hidden"
        >
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <Quote className="w-[40vw] h-[40vw] text-white opacity-[0.03]" />
            </div>

            <div className="container-custom relative z-10 text-center max-w-4xl">
                <blockquote className="testimonial-text">
                    <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                        &quot;Periyar&apos;s crushers have revolutionized our quarry operations.&quot;
                    </p>
                    <footer className="text-xl text-primary font-bold tracking-widest uppercase">
                        — Quarry Manager, TN
                    </footer>
                </blockquote>
            </div>
        </section>
    );
}
