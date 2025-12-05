import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import BuiltToConquer from "@/components/home/BuiltToConquer";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import Testimonial from "@/components/home/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <BuiltToConquer />
      <ProductsShowcase />
      <Testimonial />
      <Footer />
    </main>
  );
}
