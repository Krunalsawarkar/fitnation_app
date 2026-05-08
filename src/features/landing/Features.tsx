import { Activity, Apple, LineChart, Users } from "lucide-react"
import { motion } from "framer-motion"
import { FeatureCard } from "./components/FeatureCard"

const features = [
  {
    title: "Workout Tracking",
    description: "Log your sets, reps, and weights with our intuitive interface. Access a library of over 500+ exercises.",
    icon: Activity,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Nutrition Plans",
    description: "Personalized meal plans based on your goals. Track macros, calories, and discover healthy recipes.",
    icon: Apple,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Progress Analytics",
    description: "Visualize your transformation with beautiful charts. Track body measurements and performance metrics.",
    icon: LineChart,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Community",
    description: "Join challenges, share your success, and get motivated by a community of fitness enthusiasts.",
    icon: Users,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Features</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to succeed</h3>
          <p className="text-muted-foreground text-lg">
            We've built a comprehensive toolkit to support every aspect of your fitness journey, all in one beautiful app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
