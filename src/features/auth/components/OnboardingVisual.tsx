import { motion } from "framer-motion"
import { Activity } from "lucide-react"

interface OnboardingVisualProps {
  currentStep: number
}

export function OnboardingVisual({ currentStep }: OnboardingVisualProps) {
  return (
    <div className="hidden md:flex flex-1 relative bg-muted items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={`https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop`} 
          alt="Fitness Motivation" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 max-w-lg px-12 text-white">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/30">
            <Activity className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            {currentStep === 1 && "Start your transformation today."}
            {currentStep === 2 && "Personalized for your body type."}
            {currentStep === 3 && "Set goals. Crush them. Repeat."}
            {currentStep === 4 && "Fuel your active lifestyle."}
            {currentStep === 5 && "Join the community."}
          </h2>
          <p className="text-xl text-white/80">
            {currentStep === 1 && "Join thousands of users who have already achieved their fitness goals with FitTrack."}
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
