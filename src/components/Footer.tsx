import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Products", href: "/products" },
        { name: "About Us", href: "/about-us" },
        { name: "Contact Us", href: "/contact-us" }
    ];

    const products = [
        "Manganese Jaw Plate",
        "Iron Hammer Blow Bar",
        "Vibrating Screen",
        "Cone / Mantle",
        "High Chromium Iron Blow Bar",
        "VSI Parts"
    ];

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Instagram, href: "#", label: "Instagram" }
    ];

    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">
                            Periyar <span className="text-primary">Crusher</span>
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Leading foundry and fabrication company specializing in high-quality castings and heavy machinery components.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-surface border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-colors"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Our Products</h4>
                        <ul className="space-y-3">
                            {products.map((product) => (
                                <li key={product}>
                                    <Link
                                        href="/products"
                                        className="text-gray-400 hover:text-primary transition-colors"
                                    >
                                        {product}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                <span className="text-gray-400">
                                    Mayoorapuram, Kurichilakkode P.O., Perumbavoor, Ernakulam Dist, Kerala – 683544
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="text-gray-400">+91 70349 31000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="text-gray-400">pcmpbvr@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-gray-500">
                        © {currentYear} Periyar Crusher Machines Pvt Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
