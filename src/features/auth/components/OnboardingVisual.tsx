import { motion } from "framer-motion"
import { Flame } from "lucide-react"
import { MotionBackground } from "@/components/layout/MotionBackground"

interface OnboardingVisualProps {
  currentStep: number
}

export function OnboardingVisual({ currentStep }: OnboardingVisualProps) {
  return (
    <div className="hidden md:flex flex-1 relative bg-background items-center justify-center overflow-hidden">
      <MotionBackground />
      
      <div className="relative z-10 max-w-lg px-12 text-foreground">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-16 h-16 bg-card/80 backdrop-blur-md rounded-none flex items-center justify-center mb-8 border-2 border-primary">
            <Flame className="w-8 h-8 text-primary fill-current" />
          </div>
          <h2 className="text-5xl font-black mb-6 leading-tight uppercase tracking-tighter text-foreground">
            {currentStep === 1 && "Start your transformation today."}
            {currentStep === 2 && "Personalized for your body type."}
            {currentStep === 3 && "Set goals. Crush them. Repeat."}
            {currentStep === 4 && "Fuel your active lifestyle."}
            {currentStep === 5 && "Join the community."}
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            {currentStep === 1 && "Join thousands of users who have already achieved their fitness goals with FitNation."}
            {currentStep === 2 && "We use these details to calculate your BMI and daily caloric needs accurately."}
            {currentStep === 3 && "Whether you want to lose weight or build muscle, we have the perfect plan."}
            {currentStep === 4 && "Your daily activity level helps us recommend the right intensity for your workouts."}
            {currentStep === 5 && "You're almost there. Just a few final details to complete your profile."}
          </p>
        </motion.div>
      </div>
    </div>
  )
}
