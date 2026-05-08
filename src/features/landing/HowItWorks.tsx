import React from "react"
import { UserPlus, Target, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    title: "Sign Up",
    description: "Create your free account in less than 2 minutes with our seamless onboarding process.",
    icon: UserPlus,
  },
  {
    title: "Set Goals",
    description: "Tell us about your fitness objectives and we'll create a personalized roadmap for you.",
    icon: Target,
  },
  {
    title: "Track Progress",
    description: "Log workouts, monitor your diet, and watch yourself get closer to your dream physique daily.",
    icon: TrendingUp,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">How It Works</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Your path to success</h3>
          <p className="text-muted-foreground text-lg">
            We've simplified the process of getting fit. Just follow these three simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-24 h-24 rounded-full bg-background border-4 border-background shadow-xl flex items-center justify-center mb-6 relative z-10">
                  <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-muted-foreground max-w-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
