"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

interface ContactProps {
    hideHeading?: boolean;
}

const Contact = ({ hideHeading = false }: ContactProps) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const contactInfo = [
        {
            icon: MapPin,
            title: "Address",
            content: "Mayoorapuram, Kurichilakkode P.O., Perumbavoor, Ernakulam Dist, Kerala – 683544"
        },
        {
            icon: Phone,
            title: "Phone",
            content: "+91 70349 31000"
        },
        {
            icon: Mail,
            title: "Email",
            content: "pcmpbvr@gmail.com"
        },
        {
            icon: Clock,
            title: "Business Hours",
            content: "Mon - Sat: 9:00 AM - 6:00 PM"
        }
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: ""
            });
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Here you would typically send the form data to your backend
            console.log("Form submitted:", formData);
            alert("Thank you for your inquiry! We will get back to you soon.");

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                message: ""
            });
        }
    };

    return (
        <section id="contact" className="py-20 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {!hideHeading && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Contact <span className="text-primary">Us</span>
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            Get in touch with our team for inquiries, quotes, or support
                        </p>
                    </motion.div>
                )}

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Have questions about our products or services? Our team is here to help.
                            Reach out to us and we'll respond as soon as possible.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <info.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                                        <p className="text-gray-400">{info.content}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-white font-medium mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    suppressHydrationWarning
                                    className={`w-full px-4 py-3 bg-background border ${errors.name ? 'border-red-500' : 'border-white/10'
                                        } rounded-lg text-white focus:outline-none focus:border-primary transition-colors`}
                                    placeholder="Your name"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-white font-medium mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        suppressHydrationWarning
                                        className={`w-full px-4 py-3 bg-background border ${errors.email ? 'border-red-500' : 'border-white/10'
                                            } rounded-lg text-white focus:outline-none focus:border-primary transition-colors`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        suppressHydrationWarning
                                        className={`w-full px-4 py-3 bg-background border ${errors.phone ? 'border-red-500' : 'border-white/10'
                                            } rounded-lg text-white focus:outline-none focus:border-primary transition-colors`}
                                        placeholder="+91 98765 43210"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-white font-medium mb-2">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    suppressHydrationWarning
                                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your company name"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white font-medium mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    suppressHydrationWarning
                                    rows={5}
                                    className={`w-full px-4 py-3 bg-background border ${errors.message ? 'border-red-500' : 'border-white/10'
                                        } rounded-lg text-white focus:outline-none focus:border-primary transition-colors resize-none`}
                                    placeholder="Tell us about your requirements..."
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-black hover:bg-yellow-500 px-8 py-4 rounded-lg font-bold transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
