"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const galleryImages = [
        {
            url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop",
            title: "Jaw Crusher Installation"
        },
        {
            url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
            title: "Cone Crusher in Operation"
        },
        {
            url: "https://www.mekaglobal.com/content/images/uploads/originals/vertical-shaft-impact-crusher-l-model,4667.png",
            title: "Impact Crusher Assembly"
        },
        {
            url: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
            title: "VSI Crusher Production"
        },
        {
            url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
            title: "Mobile Crushing Plant"
        },
        {
            url: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop",
            title: "Manufacturing Facility"
        },
        {
            url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
            title: "Quality Control Testing"
        },
        {
            url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
            title: "Client Site Installation"
        }
    ];

    return (
        <section id="gallery" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Project <span className="text-primary">Gallery</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Explore our successful installations and manufacturing excellence
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                            onClick={() => setSelectedImage(image.url)}
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <p className="text-white font-semibold">{image.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Gallery image"
                        className="max-w-full max-h-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            )}
        </section>
    );
};

export default Gallery;
