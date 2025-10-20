'use client'

import { SignUpButton } from '@clerk/nextjs'
import { ArrowRightIcon, ZapIcon } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'
import FadeInWhenVisible from './FadeInWhenVisible'

function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="relative py-32 px-6 z-10 max-w-7xl mx-auto"
        >
            <FadeInWhenVisible>
                {/* HEADER */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
                        <ZapIcon className="size-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                            Simple Process
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Three steps to
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            better dental health
                        </span>
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Our streamlined process makes dental care accessible,
                        convenient, and stress-free for everyone.
                    </p>
                </div>
            </FadeInWhenVisible>

            {/* STEPS */}
            <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2 hidden lg:block"></div>

                <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
                    {[
                        {
                            step: '1',
                            title: 'Ask Questions',
                            desc: 'Chat with our AI assistant about any dental concerns. Get instant answers about symptoms, treatments, and oral health tips.',
                            img: '/audio.png',
                            features: ['24/7 Available', 'Instant Response'],
                        },
                        {
                            step: '2',
                            title: 'Get Expert Advice',
                            desc: 'Receive personalized recommendations based on thousands of dental cases. Our AI provides professional-grade insights.',
                            img: '/brain.png',
                            features: ['AI-Powered', 'Personalized'],
                        },
                        {
                            step: '3',
                            title: 'Book & Get Care',
                            desc: 'Schedule with verified dentists and receive comprehensive follow-up care. Track your progress seamlessly.',
                            img: '/calendar.png',
                            features: ['Verified Doctors', 'Follow-up Care'],
                        },
                    ].map((item) => (
                        <FadeInWhenVisible key={item.step}>
                            <div className="relative group">
                                <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.03]">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                                        {item.step}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            width={40}
                                            height={40}
                                            className="w-14"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-center">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground text-center leading-relaxed mb-6">
                                        {item.desc}
                                    </p>

                                    {/* Feature Pills */}
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {item.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>
            </div>

            {/* BOTTOM CTA */}
            <FadeInWhenVisible>
                <div className="text-center mt-16">
                    <SignUpButton mode="modal">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-primary to-primary/70 text-white font-semibold shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all"
                        >
                            <ArrowRightIcon className="mr-2 size-5" />
                            Get started now
                        </Button>
                    </SignUpButton>
                </div>
            </FadeInWhenVisible>
        </section>
    )
}

export default HowItWorks
