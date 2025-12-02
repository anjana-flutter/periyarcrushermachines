"use client";

import { motion } from "framer-motion";
import { Wrench, Headphones, FileSearch, Truck, Settings, Shield } from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: Settings,
            name: "Custom Design & Manufacturing",
            description: "Tailored crushing solutions designed to meet your specific requirements and production goals."
        },
        {
            icon: Truck,
            name: "Installation & Commissioning",
            description: "Professional installation services ensuring optimal setup and performance from day one."
        },
        {
            icon: Wrench,
            name: "Maintenance & Repairs",
            description: "Comprehensive maintenance programs and rapid repair services to minimize downtime."
        },
        {
            icon: Headphones,
            name: "24/7 Technical Support",
            description: "Round-the-clock expert support to keep your operations running smoothly."
        },
        {
            icon: FileSearch,
            name: "Performance Optimization",
            description: "Analysis and optimization services to maximize efficiency and reduce operating costs."
        },
        {
            icon: Shield,
            name: "Spare Parts Supply",
            description: "Genuine spare parts and wear components available with fast delivery worldwide."
        }
    ];

    return (
        <section id="services" className="py-20 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our <span className="text-primary">Services</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Comprehensive support services to ensure your crushing operations run at peak performance
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-background border border-white/10 rounded-lg p-8 hover:border-primary/50 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <service.icon className="w-8 h-8 text-primary" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {service.name}
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Need a Custom Solution?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Our engineering team can design and build custom crushing solutions tailored to your unique requirements.
                        </p>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-block bg-primary text-black hover:bg-yellow-500 px-8 py-3 rounded-md font-bold transition-colors duration-300"
                        >
                            Contact Our Team
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
