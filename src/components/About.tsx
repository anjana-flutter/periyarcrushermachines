"use client";

import { motion } from "framer-motion";
import { Building2, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
    const stats = [
        { icon: Building2, label: "Years in Business", value: "25+" },
        { icon: Users, label: "Happy Clients", value: "500+" },
        { icon: Award, label: "Projects Completed", value: "1000+" },
        { icon: TrendingUp, label: "Growth Rate", value: "40%" },
    ];

    return (
        <section id="about" className="py-20 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About <span className="text-primary">Periyar Crusher Machines</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Leading manufacturer of high-quality crushing equipment since 1998
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Engineering Excellence in Crushing Solutions
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Periyar Crusher Machines has been at the forefront of crushing technology for over two decades.
                            We specialize in designing, manufacturing, and delivering world-class crushing equipment that
                            meets the demanding needs of mining, construction, and aggregate industries.
                        </p>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Our commitment to innovation, quality, and customer satisfaction has made us a trusted partner
                            for businesses across the globe. Every machine we build is engineered for maximum efficiency,
                            durability, and performance.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            From initial consultation to after-sales support, we provide comprehensive solutions that
                            help our clients achieve their production goals while maintaining the highest safety standards.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-96 rounded-lg overflow-hidden"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop"
                            alt="Periyar Crusher Machines Factory"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop";
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-background border border-white/10 rounded-lg p-6 text-center hover:border-primary/50 transition-colors"
                        >
                            <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
