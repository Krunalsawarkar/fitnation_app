import { motion } from "framer-motion"
import { TestimonialCard } from "./components/TestimonialCard"
import { MaskedHeading } from "@/components/ui/MaskedHeading"

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Lost 30 lbs",
    content: "FitTrack completely changed how I approach fitness. The customized workout plans made it so easy to stay consistent, and I've never felt better!",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marathon Finisher",
    content: "As someone training for a marathon, the analytics and progress tracking are unmatched. I can see exactly how my performance improves week over week.",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Strength Training",
    content: "The beautiful UI and smooth animations make me actually want to open the app and log my workouts. Best fitness app I've ever used.",
    avatar: "https://i.pravatar.cc/150?img=44",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            The Collective
          </motion.span>
          <MaskedHeading className="text-5xl md:text-7xl mb-6">
            Elite Standards
          </MaskedHeading>
          <p className="text-foreground/40 text-lg md:text-xl font-medium">
            Hear from the individuals who have transformed their lives using 
            our architectural approach to fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
