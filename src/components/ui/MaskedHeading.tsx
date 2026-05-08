import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MaskedHeadingProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function MaskedHeading({ children, className, delay = 0 }: MaskedHeadingProps) {
  return (
    <div className="overflow-hidden">
      <motion.h2
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.25, 1, 0.5, 1] // Custom spring-like cubic-bezier
        }}
        className={cn("font-black tracking-tighter uppercase", className)}
      >
        {children}
      </motion.h2>
    </div>
  )
}
