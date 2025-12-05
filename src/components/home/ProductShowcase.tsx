"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Jaw Crusher X-Series",
        specs: "Capacity: 500 TPH | Power: 200 kW",
        image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1974&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Cone Crusher C-Pro",
        specs: "Capacity: 350 TPH | Power: 160 kW",
        image: "data:image/jpeg;base64,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",
    },
    {
        id: 3,
        name: "VSI Impact Crusher",
        specs: "Capacity: 300 TPH | Power: 250 kW",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 4,
        name: "Mobile Crushing Plant",
        specs: "Capacity: 200 TPH | Track Mounted",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
    },
];

export default function ProductShowcase() {
    return (
        <Section className="bg-surface-highlight">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase mb-2 block">
                            Our Machinery
                        </span>
                        <h2 className="text-4xl font-bold text-white font-heading">
                            ENGINEERED FOR <span className="text-gray-500">PERFORMANCE</span>
                        </h2>
                    </div>
                    <Button variant="outline" className="hidden md:flex mt-6 md:mt-0">
                        View All Products
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative overflow-hidden bg-background border border-white/5 rounded-sm"
                        >
                            {/* Image Container */}
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                                        <p className="text-primary text-sm font-bold uppercase tracking-wider mb-1">
                                            Specifications
                                        </p>
                                        <p className="text-gray-300 text-sm">
                                            {product.specs}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-white/20 pt-4">
                                        <h3 className="text-white font-bold font-heading text-lg leading-tight">
                                            {product.name}
                                        </h3>
                                        <div className="bg-primary text-black p-2 rounded-full opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button variant="outline">View All Products</Button>
                </div>
            </div>
        </Section>
    );
}
