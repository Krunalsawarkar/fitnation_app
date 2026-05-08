import { motion } from "framer-motion"
import { PricingCard } from "./components/PricingCard"
import { MaskedHeading } from "@/components/ui/MaskedHeading"

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: ["Basic workout tracking", "Limited exercise library", "Standard community access", "Ad-supported"],
    buttonVariant: "outline",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/mo",
    description: "For serious fitness enthusiasts",
    features: ["Advanced analytics", "Full exercise library", "Custom workout plans", "Nutrition tracking", "No ads"],
    buttonVariant: "default",
    popular: true,
  },
  {
    name: "Elite",
    price: "$19.99",
    period: "/mo",
    description: "Complete health & wellness coaching",
    features: ["Everything in Pro", "1-on-1 expert coaching", "Personalized meal plans", "Priority support", "Early access to features"],
    buttonVariant: "outline",
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-foreground/[0.02] uppercase select-none pointer-events-none">
        Commitment
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Membership Protocols
          </motion.span>
          <MaskedHeading className="text-5xl md:text-7xl mb-6">
            Elite Access
          </MaskedHeading>
          <p className="text-foreground/40 text-lg md:text-xl font-medium">
            Choose your level of immersion. Transparent scaling for individuals 
            who demand architectural results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PricingCard {...tier} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
