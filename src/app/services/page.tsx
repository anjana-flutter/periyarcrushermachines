"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wrench, Truck, PhoneCall, Settings, BarChart, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Installation & Commissioning",
        description: "Expert on-site installation and setup to ensure your plant runs at peak performance from day one.",
        icon: Wrench,
    },
    {
        title: "Maintenance Contracts",
        description: "Scheduled maintenance programs to prevent downtime and extend the life of your equipment.",
        icon: Settings,
    },
    {
        title: "Spare Parts Supply",
        description: "Genuine high-quality spares delivered rapidly to keep your operations moving.",
        icon: Truck,
    },
    {
        title: "24/7 Technical Support",
        description: "Round-the-clock access to our engineering team for troubleshooting and advice.",
        icon: PhoneCall,
    },
    {
        title: "Plant Optimization",
        description: "Comprehensive audits and upgrades to increase output and efficiency.",
        icon: BarChart,
    },
    {
        title: "Operator Training",
        description: "Hands-on training for your staff to ensure safe and efficient machine operation.",
        icon: Users,
    },
];

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-card", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main className="min-h-screen bg-background text-text selection:bg-primary selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                        alt="Periyar Services"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-5xl md:text-8xl font-bold mb-6">
                        EXPERT <span className="text-primary">SERVICES</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto">
                        Comprehensive support to keep your crushing plant running at maximum efficiency.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section ref={containerRef} className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="service-card group p-8 bg-surface border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
                            >
                                <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-2xl font-bold mb-4 uppercase">{service.title}</h3>
                                <p className="text-text-muted group-hover:text-white transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
