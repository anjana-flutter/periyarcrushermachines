"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subtextRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Headline Stagger Animation
            const chars = headlineRef.current?.querySelectorAll(".char");
            if (chars) {
                gsap.fromTo(
                    chars,
                    { y: "100%", opacity: 0 },
                    {
                        y: "0%",
                        opacity: 1,
                        duration: 1,
                        stagger: 0.05,
                        ease: "power4.out",
                        delay: 0.5,
                    }
                );
            }

            // Subtext and Buttons Fade In
            gsap.fromTo(
                [subtextRef.current, buttonsRef.current],
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    delay: 1.2,
                }
            );

            // Magnetic Button Effect
            const buttons = buttonsRef.current?.querySelectorAll(".magnetic-btn");
            buttons?.forEach((btn) => {
                btn.addEventListener("mousemove", (e: any) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" });
                });
                btn.addEventListener("mouseleave", () => {
                    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const splitText = (text: string) => {
        return text.split("").map((char, index) => (
            <span key={index} className="char inline-block">
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    };

    return (
        <section
            ref={containerRef}
            className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?q=80&w=2070&auto=format&fit=crop"
                    alt="Industrial Crusher"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 flex flex-col items-center text-center pt-5">
                <h1
                    ref={headlineRef}
                    className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-none tracking-tighter overflow-hidden mb-6 pt-[50px]"
                >
                    {splitText("POWER THAT NEVER QUITS")}
                </h1>

                <p
                    ref={subtextRef}
                    className="text-lg md:text-2xl text-text-muted max-w-2xl mb-10 font-light"
                >
                    Industry-leading crushing solutions designed for maximum uptime.
                </p>

                <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6">
                    <Link
                        href="/products"
                        className="magnetic-btn px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors clip-path-slant"
                        style={{ clipPath: "polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)" }}
                    >
                        Explore Crushers
                    </Link>
                    <Link
                        href="/contact-us"
                        className="magnetic-btn px-8 py-4 bg-transparent border border-white/20 text-text font-bold uppercase tracking-wider hover:bg-white/5 transition-colors"
                    >
                        Contact Sales
                    </Link>
                </div>
            </div>
        </section>
    );
}
