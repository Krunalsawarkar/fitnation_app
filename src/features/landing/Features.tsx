import { Activity, Apple, LineChart, Users } from "lucide-react"
import { motion } from "framer-motion"
import { FeatureCard } from "./components/FeatureCard"
import { MaskedHeading } from "@/components/ui/MaskedHeading"

const features = [
  {
    title: "Performance Tracking",
    description: "Architectural precision in every rep. Log sets, weights, and momentum with an interface designed for peak efficiency.",
    icon: Activity,
    color: "text-primary",
    bgColor: "bg-primary/5",
  },
  {
    title: "Nutritional Matrix",
    description: "Systematize your intake. Personalized macronutrient scaling and biometric synchronization.",
    icon: Apple,
    color: "text-foreground",
    bgColor: "bg-foreground/5",
  },
  {
    title: "Biometric Insights",
    description: "Visualize your evolution with surgical detail. High-fidelity charts and transformation analytics.",
    icon: LineChart,
    color: "text-primary",
    bgColor: "bg-primary/5",
  },
  {
    title: "The Collective",
    description: "Join the elite hierarchy. Challenges, success protocols, and motivational synchronization.",
    icon: Users,
    color: "text-foreground",
    bgColor: "bg-foreground/5",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 w-[1px] h-32 bg-gradient-to-b from-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block"
            >
              Core Infrastructure
            </motion.span>
            <MaskedHeading className="text-5xl md:text-7xl mb-6">
              Precision Engineered
            </MaskedHeading>
            <p className="text-foreground/40 text-lg md:text-xl font-medium">
              Every feature is built with the athlete in mind, focusing on clarity, 
              speed, and actionable biometrics.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 border-2 border-foreground/10 flex items-center justify-center font-black">01</div>
            <div className="w-12 h-12 border-2 border-primary flex items-center justify-center font-black text-primary">04</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
