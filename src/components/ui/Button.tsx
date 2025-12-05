"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    className?: string;
}

export default function Button({
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-orange-600 shadow-lg shadow-orange-900/20",
        secondary: "bg-surface-highlight text-text hover:bg-surface border border-white/10 hover:border-primary/50",
        outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    };

    const sizes = {
        sm: "text-xs px-4 py-2 rounded-sm",
        md: "text-sm px-6 py-3 rounded-sm",
        lg: "text-base px-8 py-4 rounded-sm",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
}
