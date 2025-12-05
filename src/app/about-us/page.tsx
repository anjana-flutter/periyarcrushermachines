"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".fade-in-up", {
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
        <main className="min-h-screen bg-background text-text selection:bg-primary selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                        alt="About Periyar Crusher"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-5xl md:text-8xl font-bold mb-6">
                        OUR <span className="text-primary">LEGACY</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto">
                        Engineering excellence for the mining and construction industries since 1998.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section ref={containerRef} className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="fade-in-up">
                            <h2 className="text-4xl font-bold mb-8">
                                BUILT ON <span className="text-primary">TRUST</span>
                            </h2>
                            <div className="space-y-6 text-lg text-text-muted">
                                <p>
                                    Periyar Crusher Machines has been at the forefront of crushing technology for over two decades. We don&apos;t just build machines; we build partnerships that last.
                                </p>
                                <p>
                                    Our mission is simple: to deliver the most durable, efficient, and reliable crushing equipment in the market. We understand that downtime is not an option, which is why every machine we manufacture is rigorously tested to withstand the toughest conditions.
                                </p>
                                <p>
                                    From our humble beginnings to becoming a market leader, our commitment to quality and customer satisfaction has remained unwavering.
                                </p>
                            </div>
                        </div>
                        <div className="fade-in-up relative h-[500px] border border-white/10 bg-surface">
                            <Image
                                src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop"
                                alt="Factory Floor"
                                fill
                                className="object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
