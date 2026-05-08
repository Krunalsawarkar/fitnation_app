import { motion, AnimatePresence } from "framer-motion"
import { useOnboardingStore } from "@/store/useOnboardingStore"
import { Activity } from "lucide-react"
import { Link } from "react-router-dom"
import Step1CreateAccount from "./Step1CreateAccount"
import Step2PersonalDetails from "./Step2PersonalDetails"
import Step3FitnessGoals from "./Step3FitnessGoals"
import Step4ActivityLevel from "./Step4ActivityLevel"
import Step5ProfileSetup from "./Step5ProfileSetup"
import { StepIndicator } from "./components/StepIndicator"
import { OnboardingVisual } from "./components/OnboardingVisual"

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
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-1 rounded-none">
              <Activity className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-black text-lg tracking-[0.2em] uppercase text-foreground">Fit<span className="text-primary">Nation</span></span>
          </Link>
          <div className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
            Step {currentStep} of 5
          </div>
        </div>

        {/* Progress Bar */}
        <StepIndicator currentStep={currentStep} totalSteps={5} />

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
      <OnboardingVisual currentStep={currentStep} />
    </div>
  )
}
