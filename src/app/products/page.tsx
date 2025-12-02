"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ProductsPage() {
    const products = [
        {
            name: "Manganese Jaw Plate",
            description: "High-quality manganese jaw plates designed for maximum wear life and crushing efficiency.",
            features: ["High manganese steel", "Superior durability", "Custom designs available"],
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop"
        },
        {
            name: "Iron Hammer Blow Bar",
            description: "Durable iron hammer blow bars for impact crushers, ensuring consistent performance.",
            features: ["Impact resistant", "Long service life", "Precision casting"],
            image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop"
        },
        {
            name: "Vibrating Screen",
            description: "Efficient vibrating screens for accurate material separation and sizing.",
            features: ["High screening efficiency", "Robust construction", "Low maintenance"],
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop"
        },
        {
            name: "Cone / Mantle",
            description: "Premium cone and mantle liners for cone crushers, optimized for various rock types.",
            features: ["Wear resistant", "Accurate fit", "Enhanced crushing action"],
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
        },
        {
            name: "High Chromium Iron Blow Bar",
            description: "High chromium blow bars offering exceptional hardness and wear resistance.",
            features: ["High chrome content", "Extreme hardness", "Ideal for abrasive materials"],
            image: "https://3.imimg.com/data3/WX/KA/MY-1068922/impact-crusher-500x500.jpg"
        },
        {
            name: "Manganese Side Plate",
            description: "Protective manganese side plates to shield crusher body from wear and tear.",
            features: ["Tough manganese steel", "Easy installation", "Body protection"],
            image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop"
        },
        {
            name: "VSI Parts",
            description: "Comprehensive range of wear parts for Vertical Shaft Impact crushers.",
            features: ["Rotor tips", "Distributor plates", "Wear plates"],
            image: "https://www.mekaglobal.com/content/images/uploads/originals/vertical-shaft-impact-crusher-l-model,4667.png"
        },
        {
            name: "Excavator Teeth",
            description: "Heavy-duty excavator teeth for superior digging penetration and longevity.",
            features: ["High strength alloy", "Self-sharpening design", "Various sizes"],
            image: "https://periyarcrushermachines.com/wp-content/uploads/2025/07/freepik__background__54845.png"
        },
        {
            name: "Roller",
            description: "Precision-engineered rollers for conveyors and other heavy machinery.",
            features: ["Smooth operation", "Sealed bearings", "Heavy load capacity"],
            image: "https://periyarcrushermachines.com/wp-content/uploads/2025/08/image-55.png"
        },
        {
            name: "Drum",
            description: "Robust drums for conveyor systems and material handling equipment.",
            features: ["Balanced design", "Durable lagging", "Custom sizes"],
            image: "https://periyarcrushermachines.com/wp-content/uploads/2025/08/image-56.png"
        },
        {
            name: "Classifier",
            description: "Efficient classifiers for sand washing and material separation.",
            features: ["High capacity", "Clean output", "Water efficient"],
            image: "https://periyarcrushermachines.com/wp-content/uploads/2025/08/image-61.png"
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
                            Our <span className="text-primary">Products</span>
                        </h1>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                            Premium quality crusher wear parts and heavy machinery components
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-surface border border-white/10 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        {product.description}
                                    </p>

                                    <div className="space-y-2">
                                        {product.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-400 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
