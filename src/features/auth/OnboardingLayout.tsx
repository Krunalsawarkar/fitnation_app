import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useOnboardingStore } from "@/store/useOnboardingStore"
import { Activity } from "lucide-react"
import { Link } from "react-router-dom"
import Step1CreateAccount from "./Step1CreateAccount"
import Step2PersonalDetails from "./Step2PersonalDetails"
import Step3FitnessGoals from "./Step3FitnessGoals"
import Step4ActivityLevel from "./Step4ActivityLevel"
import Step5ProfileSetup from "./Step5ProfileSetup"

export default function OnboardingLayout() {
  const { currentStep } = useOnboardingStore()

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1CreateAccount />
      case 2: return <Step2PersonalDetails />
      case 3: return <Step3FitnessGoals />
      case 4: return <Step4ActivityLevel />
      case 5: return <Step5ProfileSetup />
      default: return <Step1CreateAccount />
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col relative">
        <div className="p-6 md:p-8 flex justify-between items-center z-10 relative bg-background/80 backdrop-blur-sm">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-1 rounded-md">
              <Activity className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg tracking-tight">FitTrack</span>
          </Link>
          <div className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
            Step {currentStep} of 5
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-secondary absolute top-[80px] md:top-[88px] left-0 z-20">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: `${((currentStep - 1) / 5) * 100}%` }}
            animate={{ width: `${(currentStep / 5) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        <div className="flex-1 flex items-center justify-center p-6 md:p-12 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right Side - Visual/Image (Hidden on mobile) */}
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
    </div>
  )
}
