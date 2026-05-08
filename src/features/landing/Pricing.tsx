import React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"

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
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h3>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your goals. Upgrade or cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${tier.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full z-10 shadow-md">
                  Most Popular
                </div>
              )}
              <Card className={`h-full flex flex-col ${tier.popular ? 'border-primary shadow-xl border-2' : 'border-border shadow-sm'}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                    {tier.price}
                    {tier.period && <span className="ml-1 text-xl font-medium text-muted-foreground">{tier.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="rounded-full p-1 bg-primary/10 text-primary">
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/onboarding" className="w-full">
                    <Button 
                      className="w-full h-12" 
                      variant={tier.buttonVariant as "default" | "outline"}
                    >
                      {tier.name === "Free" ? "Get Started" : "Subscribe"}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
