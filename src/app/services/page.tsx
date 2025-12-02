"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Wrench, Cog, Microscope, Hammer, Factory, FileBox } from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            icon: Factory,
            name: "Fabrication",
            description: "Custom fabrication of conveyors, rollers, drums, vibrating screens, and batch plants tailored to your specifications."
        },
        {
            icon: Hammer,
            name: "High Chromium Iron Casting",
            description: "Premium quality high chromium iron castings with superior strength and durability for demanding industrial applications."
        },
        {
            icon: Microscope,
            name: "Spectrum Analysis",
            description: "Advanced spectrum analysis services to ensure material quality and composition meet exact specifications."
        },
        {
            icon: Wrench,
            name: "Assembling and Repair of Heavy Machinery",
            description: "Expert assembly and repair services for heavy machinery, ensuring optimal performance and extended equipment life."
        },
        {
            icon: Cog,
            name: "Machining and Fabrication Unit",
            description: "State-of-the-art machining and fabrication facilities with precision equipment for complex manufacturing needs."
        },
        {
            icon: FileBox,
            name: "Pattern Shop",
            description: "Professional pattern making services for casting production, ensuring accuracy and consistency in every piece."
        }
    ];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Our <span className="text-primary">Services</span>
                        </h1>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                            Comprehensive foundry, fabrication, and machining solutions for industrial performance
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-surface border border-white/10 rounded-lg p-8 hover:border-primary/50 transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <service.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                    {service.name}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-surface">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">
                            HIGH QUALITY CAST IRON FOUNDRIES
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Certified by Global Standards
                        </p>
                        <a
                            href="/products"
                            className="inline-block bg-primary text-black hover:bg-yellow-500 px-8 py-4 rounded-lg font-bold transition-colors duration-300"
                        >
                            View Products
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
