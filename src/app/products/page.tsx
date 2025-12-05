"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const products = [
    {
        id: 1,
        name: "Jaw Crusher Series",
        category: "Primary Crushing",
        image: "https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?q=80&w=2070&auto=format&fit=crop",
        description: "High-capacity primary crushers designed for the toughest materials.",
    },
    {
        id: 2,
        name: "Cone Crusher Pro",
        category: "Secondary Crushing",
        image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?q=80&w=2080&auto=format&fit=crop",
        description: "Precision engineered for excellent particle shape and high output.",
    },
    {
        id: 3,
        name: "VSI Impact Crusher",
        category: "Tertiary Crushing",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2068&auto=format&fit=crop",
        description: "Ideal for producing high-quality sand and aggregates.",
    },
    {
        id: 4,
        name: "Mobile Crusher X",
        category: "Mobile Solutions",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
        description: "Track-mounted crushing plants for maximum mobility and flexibility.",
    },
    {
        id: 5,
        name: "Vibrating Screens",
        category: "Screening",
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop",
        description: "Efficient screening solutions for accurate material separation.",
    },
    {
        id: 6,
        name: "Washing Systems",
        category: "Washing",
        image: "https://images.unsplash.com/photo-1535136029863-4a3813f1a127?q=80&w=2070&auto=format&fit=crop",
        description: "Advanced washing equipment for clean, high-quality end products.",
    },
];

export default function Products() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".product-card", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main className="min-h-screen bg-background text-text selection:bg-primary selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2068&auto=format&fit=crop"
                        alt="Periyar Products"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-5xl md:text-8xl font-bold mb-6">
                        OUR <span className="text-primary">PRODUCTS</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto">
                        Engineered for performance, durability, and maximum return on investment.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section ref={containerRef} className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="product-card group bg-surface border border-white/5 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                    <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                        {product.category}
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-3 uppercase">{product.name}</h3>
                                    <p className="text-text-muted mb-6 line-clamp-2">
                                        {product.description}
                                    </p>
                                    <Link
                                        href={`/contact-us?product=${encodeURIComponent(product.name)}`}
                                        className="inline-block text-primary font-bold uppercase tracking-wider hover:text-white transition-colors"
                                    >
                                        Enquire Now →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
