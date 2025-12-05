"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
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
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?q=80&w=2080&auto=format&fit=crop"
                        alt="Contact Periyar"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-5xl md:text-8xl font-bold mb-6">
                        GET IN <span className="text-primary">TOUCH</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto">
                        Ready to upgrade your operations? Our team is here to help.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section ref={containerRef} className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="fade-in-up space-y-12">
                            <div>
                                <h2 className="text-4xl font-bold mb-8">
                                    CONTACT <span className="text-primary">INFO</span>
                                </h2>
                                <p className="text-text-muted text-lg mb-8">
                                    Reach out to us for quotes, technical support, or general inquiries. We look forward to hearing from you.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-surface border border-white/5 rounded-full">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 uppercase">Headquarters</h3>
                                        <p className="text-text-muted">
                                            123 Industrial Estate, Coimbatore,<br />
                                            Tamil Nadu, India - 641001
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-surface border border-white/5 rounded-full">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 uppercase">Phone</h3>
                                        <p className="text-text-muted">+91 98765 43210</p>
                                        <p className="text-text-muted">+91 12345 67890</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-surface border border-white/5 rounded-full">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 uppercase">Email</h3>
                                        <p className="text-text-muted">sales@periyarcrusher.com</p>
                                        <p className="text-text-muted">support@periyarcrusher.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-surface border border-white/5 rounded-full">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 uppercase">Business Hours</h3>
                                        <p className="text-text-muted">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                        <p className="text-text-muted">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="fade-in-up bg-surface border border-white/5 p-8 md:p-12">
                            <h3 className="text-3xl font-bold mb-8 uppercase">Send us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-text-muted">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full bg-background border-b border-white/10 focus:border-primary px-4 py-3 outline-none transition-colors"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider text-text-muted">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full bg-background border-b border-white/10 focus:border-primary px-4 py-3 outline-none transition-colors"
                                            placeholder="Your Phone"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-text-muted">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-background border-b border-white/10 focus:border-primary px-4 py-3 outline-none transition-colors"
                                        placeholder="Your Email"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-text-muted">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full bg-background border-b border-white/10 focus:border-primary px-4 py-3 outline-none transition-colors resize-none"
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-black font-bold uppercase tracking-wider py-4 hover:bg-white transition-colors duration-300 mt-4"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
