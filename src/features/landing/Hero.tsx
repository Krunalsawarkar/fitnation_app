import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { MotionBackground } from "@/components/layout/MotionBackground"
import { MaskedHeading } from "@/components/ui/MaskedHeading"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <MotionBackground />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-12 h-[2px] bg-primary"></span>
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">
              Level Up Your Game
            </span>
          </motion.div>
          
          <div className="space-y-2 mb-8">
            <MaskedHeading className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-foreground">
              Elevate Your
            </MaskedHeading>
            <MaskedHeading className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-primary" delay={0.1}>
              Potential.
            </MaskedHeading>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-foreground/60 text-lg md:text-xl max-w-2xl mb-12 font-medium leading-relaxed"
          >
            Experience the future of fitness with advanced tracking, cinematic 
            analytics, and personalized coaching designed for those who demand 
            nothing but excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <Link to="/onboarding">
              <Button size="lg" className="group">
                Start Transformation 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground hover:text-background">
              <Play className="mr-2 w-5 h-5 fill-current" /> Watch Film
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-12 bottom-0 w-[1px] h-32 bg-gradient-to-t from-primary to-transparent hidden lg:block"></div>
    </section>
  )
}
