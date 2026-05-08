import React from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/features/landing/Hero"
import Features from "@/features/landing/Features"
import HowItWorks from "@/features/landing/HowItWorks"
import Testimonials from "@/features/landing/Testimonials"
import Pricing from "@/features/landing/Pricing"
import CTA from "@/features/landing/CTA"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
