import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import HowItWorks from '@/components/landing/HowItWorks'
import WhatToAsk from '@/components/landing/WhatToAsk'
import PricingSection from '@/components/landing/PricingSection'
import CTA from '@/components/landing/CTA'
import Footer from '@/components/landing/Footer'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { syncUser } from '@/lib/actions/users'
import FadeInWhenVisible from '@/components/landing/FadeInWhenVisible'

export default async function Home() {
    const user = await currentUser()
    await syncUser()
    if (user) redirect('/dashboard')

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <FadeInWhenVisible>
                <Hero />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <HowItWorks />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <WhatToAsk />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <PricingSection />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
                <CTA />
            </FadeInWhenVisible>
            <Footer />
        </div>
    )
}
