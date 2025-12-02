"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Products = () => {
    const products = [
        {
            name: "Jaw Crusher",
            description: "Primary crushing solution for hard and abrasive materials with high reduction ratios.",
            features: [
                "Capacity: 50-800 TPH",
                "Feed size: up to 1200mm",
                "Heavy-duty construction",
                "Low maintenance costs"
            ],
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop"
        },
        {
            name: "Cone Crusher",
            description: "Secondary and tertiary crushing for medium-hard to hard materials with excellent cubical shape.",
            features: [
                "Capacity: 40-600 TPH",
                "Advanced automation",
                "Uniform particle size",
                "Energy efficient"
            ],
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
        },
        {
            name: "Impact Crusher",
            description: "High-performance crushing for soft to medium-hard materials with superior product quality.",
            features: [
                "Capacity: 30-500 TPH",
                "High reduction ratio",
                "Adjustable output size",
                "Wear-resistant design"
            ],
            image: "https://3.imimg.com/data3/WX/KA/MY-1068922/impact-crusher-500x500.jpg"
        },
        {
            name: "VSI Crusher",
            description: "Vertical shaft impact crusher for producing high-quality manufactured sand and aggregates.",
            features: [
                "Capacity: 20-400 TPH",
                "Superior sand shaping",
                "Low operating costs",
                "Dual crushing modes"
            ],
            image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop"
        },
        {
            name: "Mobile Crusher",
            description: "Portable crushing plant for on-site processing with maximum flexibility and mobility.",
            features: [
                "Fully mobile design",
                "Quick setup time",
                "Integrated conveyor",
                "Remote control operation"
            ],
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop"
        },
        {
            name: "Hammer Crusher",
            description: "Versatile crushing solution for limestone, coal, and other brittle materials.",
            features: [
                "Capacity: 10-300 TPH",
                "Simple structure",
                "High crushing ratio",
                "Cost-effective operation"
            ],
            image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop"
        }
    ];

    return (
        <section id="products" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our <span className="text-primary">Products</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Industry-leading crushing equipment engineered for maximum performance and reliability
                    </p>
                </motion.div>

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
    );
};

export default Products;
