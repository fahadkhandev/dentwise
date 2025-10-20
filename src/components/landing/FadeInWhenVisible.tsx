'use client'

import { motion, Variants } from 'framer-motion'

const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2, // Slightly increased for a more elegant cascade
        },
    },
}

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9, // Increased from 0.6 for smoother motion
            ease: [0.22, 1, 0.36, 1], // Smooth “ease-out” curve for a premium feel
        },
    },
}

export default function FadeInWhenVisible({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {Array.isArray(children) ? (
                children.map((child, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                        {child}
                    </motion.div>
                ))
            ) : (
                <motion.div variants={fadeInUp}>{children}</motion.div>
            )}
        </motion.div>
    )
}
