"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-10 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Contact <span className="text-primary">Us</span>
                        </h1>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                            We're Here - Let's Build Together
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Reuse existing Contact component but adjust padding if needed */}
            <div className="-mt-20">
                <Contact hideHeading={true} />
            </div>

            <Footer />
        </main>
    );
}
