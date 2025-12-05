"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
    return (
        <Section className="py-0 md:py-0">
            <div className="bg-primary relative overflow-hidden">
                {/* Industrial Texture Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-black font-heading mb-4 leading-tight">
                            READY TO UPGRADE YOUR PRODUCTION?
                        </h2>
                        <p className="text-black/80 text-lg md:text-xl font-medium max-w-xl">
                            Get a custom quote tailored to your project requirements. Our engineers are ready to assist you.
                        </p>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            size="lg"
                            className="bg-black text-white hover:bg-gray-900 shadow-2xl shadow-black/20 border-none text-lg px-10 py-6"
                        >
                            Get a Custom Quote
                            <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                    </motion.div>
                </div>

                {/* Decorative Lines */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-black/5 -skew-x-12 translate-x-1/2" />
            </div>
        </Section>
    );
}
