"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-surface text-text relative">
            {/* Massive CTA */}
            <div className="bg-primary py-24 md:py-32 text-center">
                <div className="container-custom">
                    <h2 className="text-5xl md:text-8xl font-bold text-black mb-8">
                        READY TO UPGRADE?
                    </h2>
                    <Link
                        href="/contact-us"
                        className="inline-block px-12 py-5 bg-black text-white font-bold text-xl uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
                    >
                        Get a Quote
                    </Link>
                </div>
            </div>

            {/* Footer Links */}
            <div className="container-custom py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-3xl font-bold mb-6">PERIYAR</h3>
                        <p className="text-text-muted mb-6">
                            Engineering excellence for the toughest crushing challenges since 1998.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-primary">Quick Links</h4>
                        <ul className="space-y-4 text-text-muted">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-primary">Our Products</h4>
                        <ul className="space-y-4 text-text-muted">
                            <li><Link href="/products" className="hover:text-white transition-colors">Jaw Crushers</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Cone Crushers</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">VSI Crushers</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Mobile Plants</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-primary">Contact Us</h4>
                        <ul className="space-y-4 text-text-muted">
                            <li>+91 98765 43210</li>
                            <li>info@periyarcrusher.com</li>
                            <li>Coimbatore, Tamil Nadu, India</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-text-muted text-sm">
                        © {new Date().getFullYear()} Periyar Crusher Machines. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="mt-4 md:mt-0 flex items-center gap-2 text-primary hover:text-white transition-colors group"
                    >
                        <span className="uppercase font-bold text-sm">Back to Top</span>
                        <div className="p-2 border border-primary rounded-full group-hover:bg-primary group-hover:text-black transition-colors">
                            <ArrowUp className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
}
