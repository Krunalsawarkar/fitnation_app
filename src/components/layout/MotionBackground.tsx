import { motion } from "framer-motion"

export function MotionBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-background overflow-hidden pointer-events-none">
      {/* Cinematic Light Trails */}
      <svg className="absolute w-full h-full opacity-40 blur-[80px] text-foreground" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M -100 500 Q 250 250 500 500 T 1100 500"
          fill="none"
          stroke="url(#orange-gradient)"
          strokeWidth="100"
          animate={{
            d: [
              "M -100 500 Q 250 250 500 500 T 1100 500",
              "M -100 400 Q 300 600 500 400 T 1100 600",
              "M -100 500 Q 250 250 500 500 T 1100 500"
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M 1100 300 Q 750 600 500 300 T -100 300"
          fill="none"
          stroke="url(#dynamic-gradient)"
          strokeWidth="80"
          animate={{
            d: [
              "M 1100 300 Q 750 600 500 300 T -100 300",
              "M 1100 400 Q 700 200 500 400 T -100 200",
              "M 1100 300 Q 750 600 500 300 T -100 300"
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF4D00" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF4D00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF4D00" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="dynamic-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle Grain/Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
      
      {/* Radial Gradient for depth - adjusted to use background color for falloff */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,hsl(var(--background)/0.8)_100%)]" />
    </div>
  )
}
