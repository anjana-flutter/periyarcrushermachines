"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Target, Award, Users } from "lucide-react";

export default function AboutPage() {
    const whyUs = [
        {
            title: "Proven Foundry Expertise",
            description: "With more than six decades of expertise, we possess thorough knowledge of casting methods, metallurgy, and quality standards."
        },
        {
            title: "Tailored Manufacturing",
            description: "We excel in producing castings and parts precisely according to client drawings and specifications."
        },
        {
            title: "Diverse Industry Applications",
            description: "Our products cater to a wide spectrum of sectors including chemical plants, oil refineries, infrastructure projects, and mining."
        },
        {
            title: "State-of-the-Art Facilities",
            description: "Investing in cutting-edge machinery and innovative production techniques to enhance product quality and efficiency."
        },
        {
            title: "Strict Quality Assurance",
            description: "We employ rigorous quality control measures throughout every stage of production, from pattern making to final inspection."
        },
        {
            title: "Customer-Focused Philosophy",
            description: "We foster enduring client relationships through flexible processes, prompt communication, and expert technical assistance."
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
                            About <span className="text-primary">Us</span>
                        </h1>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                            Leading foundry and metal casting experts in Kerala
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Periyar Crusher Machines Pvt. Ltd. is a leading foundry and fabrication company based in Kerala, specializing in high-quality castings and heavy machinery components. With decades of experience, we supply pearlitic cast iron castings, manganese and chromium steel parts, and custom-made crusher machinery components like blowbars, jaw plates, and excavator teeth, tailored to customer drawings and specifications.
                            </p>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Our state-of-the-art foundry features a 1.5-ton capacity furnace and a 2-ton heating oven, enabling precision manufacturing and heat treatment. We also offer fabrication of conveyors, rollers, drums, vibrating screens, and batch plants, along with assembly and repair services for heavy machinery.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Driven by quality, innovation, and customer satisfaction, Periyar Crusher Machines is committed to delivering durable, reliable solutions that support industries in Kerala and beyond.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[400px] rounded-lg overflow-hidden"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop"
                                alt="Foundry Operations"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Vision */}
            <section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Target className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            We foresee a future where our expertise in pearlitic cast iron, manganese and chromium steel castings, and heavy machinery parts drives industrial progress and creates lasting value for our customers.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            At Periyar Crusher Machines Pvt. Ltd., our vision is to become a globally respected leader in premium casting and fabrication solutions, delivering unmatched precision, durability, and innovation to a wide range of industries.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Why Us</h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyUs.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-surface p-8 rounded-lg border border-white/5 hover:border-primary/30 transition-colors"
                            >
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
