"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Story() {
    return (
        <Section className="bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-widest uppercase mb-4 block"
                        >
                            The Periyar Difference
                        </motion.span>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight font-heading">
                            BUILT TO CONQUER <br />
                            <span className="text-gray-500">THE TOUGHEST TERRAIN</span>
                        </h2>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                In the crushing industry, downtime isn't just an inconvenience—it's a profit killer. That's why at Periyar, we don't just build machines; we engineer reliability.
                            </p>
                            <p>
                                For over 25 years, we've been perfecting the art of reduction. Our crushers are designed with a single goal: to deliver the highest throughput with the lowest cost per ton, day after day, year after year.
                            </p>
                        </div>

                        <div className="mt-10">
                            <Button variant="outline">Our Story</Button>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 border-2 border-white/10 p-2"
                        >
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-highlight">
                                {/* Placeholder for a real industrial image */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
                                <img
                                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                                    alt="Industrial Crusher Plant"
                                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 -z-0" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/20 -z-0" />
                    </div>
                </div>
            </div>
        </Section>
    );
}
