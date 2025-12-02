"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Factory, Hammer, Microscope } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text">
      <Navbar />
      <Hero />

      {/* Services Preview */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive foundry and fabrication solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-background p-8 rounded-lg border border-white/10 hover:border-primary/50 transition-colors">
              <Factory className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Fabrication</h3>
              <p className="text-gray-400 mb-6">
                Custom fabrication of conveyors, rollers, drums, and heavy machinery components.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border border-white/10 hover:border-primary/50 transition-colors">
              <Hammer className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Metal Casting</h3>
              <p className="text-gray-400 mb-6">
                High-quality pearlitic cast iron and manganese steel castings.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border border-white/10 hover:border-primary/50 transition-colors">
              <Microscope className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Quality Control</h3>
              <p className="text-gray-400 mb-6">
                Rigorous testing and spectrum analysis to ensure superior product quality.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-black px-8 py-3 rounded-md font-bold transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Premium quality wear parts and components for crusher machinery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              "Manganese Jaw Plate",
              "Iron Hammer Blow Bar",
              "Vibrating Screen",
              "Cone / Mantle"
            ].map((product) => (
              <div key={product} className="bg-surface p-6 rounded-lg border border-white/5 text-center">
                <h3 className="text-lg font-bold text-white mb-2">{product}</h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-block bg-primary text-black hover:bg-yellow-500 px-8 py-3 rounded-md font-bold transition-colors duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
