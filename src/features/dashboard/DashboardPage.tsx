import DashboardLayout from "./DashboardLayout"
import { useOnboardingStore } from "@/store/useOnboardingStore"
import { Flame, Dumbbell, Calendar, Target } from "lucide-react"
import { StatsCard } from "./components/StatsCard"
import { TodayWorkout } from "./components/TodayWorkout"
import { ActivityChart } from "./components/ActivityChart"
import { MotionBackground } from "@/components/layout/MotionBackground"
import { MaskedHeading } from "@/components/ui/MaskedHeading"

import { motion } from "framer-motion"

export default function DashboardPage() {
  const { data } = useOnboardingStore()

  const todayWorkout = [
    { id: 1, name: "Barbell Squats", sets: "3 sets x 10 reps", completed: true },
    { id: 2, name: "Leg Press", sets: "3 sets x 12 reps", completed: true },
    { id: 3, name: "Walking Lunges", sets: "3 sets x 15 reps", completed: false },
    { id: 4, name: "Calf Raises", sets: "4 sets x 20 reps", completed: false },
  ]

  const activityData = [
    { value: 450, day: "Mon" },
    { value: 600, day: "Tue" },
    { value: 300, day: "Wed" },
    { value: 750, day: "Thu" },
    { value: 500, day: "Fri" },
    { value: 800, day: "Sat" },
    { value: 650, day: "Sun" },
  ]

  const stats = [
    { label: "Metabolic Burn", value: "2,450", unit: "KCAL", icon: Flame, color: "text-primary", bg: "bg-primary/5" },
    { label: "Sessions", value: "4", unit: "SESSIONS", icon: Dumbbell, color: "text-foreground", bg: "bg-foreground/5" },
    { label: "Continuity", value: "12", unit: "DAYS", icon: Calendar, color: "text-primary", bg: "bg-primary/5" },
    { label: "Efficiency", value: "68", unit: "PERCENT", icon: Target, color: "text-foreground", bg: "bg-foreground/5" },
  ]

  return (
    <DashboardLayout>
      <div className="relative min-h-screen bg-background text-foreground p-8 overflow-hidden">
        <MotionBackground />
        
        <div className="relative z-10">
          <div className="mb-12">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block"
            >
              Protocol Active
            </motion.span>
            <MaskedHeading className="text-5xl md:text-7xl mb-4 text-foreground">
              {data.username || data.name?.split(' ')[0] || "Athlete"}
            </MaskedHeading>
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm">
              Biometric status: Optimal
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, i) => (
              <StatsCard key={i} {...stat} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <TodayWorkout 
              title="Active Protocol" 
              description="Lower Body Structural Integrity" 
              exercises={todayWorkout} 
            />
            <ActivityChart 
              title="Biometric Flow" 
              description="Metabolic output over 7 cycles" 
              data={activityData} 
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
