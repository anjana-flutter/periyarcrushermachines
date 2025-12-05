"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const products = [
    {
        name: "JAW CRUSHER SERIES",
        image: "https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?q=80&w=2070&auto=format&fit=crop",
    },
    {
        name: "CONE CRUSHER PRO",
        image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?q=80&w=2080&auto=format&fit=crop",
    },
    {
        name: "VSI IMPACT CRUSHER",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2068&auto=format&fit=crop",
    },
    {
        name: "MOBILE CRUSHER X",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    },
];

export default function ProductsShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Draggable Slider
            Draggable.create(sliderRef.current, {
                type: "x",
                bounds: containerRef.current,
                inertia: true,
                edgeResistance: 0.65,
                onDragStart: () => setIsDragging(true),
                onDragEnd: () => setIsDragging(false),
            });

            // Custom Cursor Logic
            const moveCursor = (e: MouseEvent) => {
                gsap.to(cursorRef.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.1,
                    ease: "power2.out",
                });
            };

            window.addEventListener("mousemove", moveCursor);
        }, containerRef);

        return () => {
            ctx.revert();
            // Clean up event listener manually if needed, though ctx.revert handles GSAP stuff
            // window.removeEventListener("mousemove", moveCursor); // Scope issue, handled below
        };
    }, []);

    // Separate effect for mousemove to avoid scope issues in cleanup
    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.1,
                    ease: "power2.out",
                });
            }
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative py-24 bg-surface overflow-hidden cursor-none"
        >
            {/* Custom Cursor */}
            <div
                ref={cursorRef}
                className={`fixed top-0 left-0 w-24 h-24 bg-primary rounded-full flex items-center justify-center pointer-events-none z-50 mix-blend-difference transition-transform duration-300 ${isDragging ? "scale-125" : "scale-100"
                    } -translate-x-1/2 -translate-y-1/2 hidden md:flex`}
            >
                <span className="text-black font-bold text-sm">DRAG</span>
            </div>

            <div className="container-custom mb-12">
                <h2 className="text-4xl md:text-6xl font-bold">
                    OUR <span className="text-primary">MACHINES</span>
                </h2>
            </div>

            <div className="w-full overflow-hidden pl-6 md:pl-24">
                <div ref={sliderRef} className="flex gap-6 w-max cursor-grab active:cursor-grabbing">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="relative w-[80vw] md:w-[400px] h-[600px] bg-background border border-white/5 group overflow-hidden select-none"
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                draggable={false}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                            <div className="absolute bottom-0 left-0 w-full p-8">
                                {/* Vertical Text */}
                                <h3 className="text-4xl font-bold text-transparent text-stroke-white group-hover:text-primary transition-colors duration-300 origin-bottom-left -rotate-90 absolute bottom-24 -left-4 w-[500px]">
                                    {product.name}
                                </h3>
                            </div>

                            <div className="absolute bottom-8 left-8">
                                <span className="text-primary text-xl font-bold">0{index + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        .text-stroke-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
        }
      `}</style>
        </section>
    );
}
