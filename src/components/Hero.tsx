"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image Placeholder */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                        Trusted Experts in <br />
                        <span className="text-primary">Metal Casting</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
                        Delivering precision-engineered metal castings, high chromium iron components, and heavy fabrication solutions.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/products"
                            className="bg-primary text-black hover:bg-yellow-500 px-8 py-4 rounded-md text-lg font-bold transition-colors duration-300"
                        >
                            Explore Products
                        </Link>
                        <Link
                            href="/contact-us"
                            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-md text-lg font-bold transition-colors duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
