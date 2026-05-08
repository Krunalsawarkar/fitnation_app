import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

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
    <section id="testimonials" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Loved by thousands</h3>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our community has to say about FitTrack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md bg-background relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                <CardContent className="pt-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 relative z-10 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
