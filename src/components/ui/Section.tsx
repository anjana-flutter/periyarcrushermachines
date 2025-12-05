"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps extends HTMLMotionProps<"section"> {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

export default function Section({
    children,
    className = "",
    id,
    delay = 0,
    ...props
}: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={`py-20 md:py-32 ${className}`}
            {...props}
        >
            {children}
        </motion.section>
    );
}
