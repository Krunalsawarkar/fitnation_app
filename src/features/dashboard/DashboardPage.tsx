import DashboardLayout from "./DashboardLayout"
import { useOnboardingStore } from "@/store/useOnboardingStore"
import { Flame, Dumbbell, Calendar, Target } from "lucide-react"
import { StatsCard } from "./components/StatsCard"
import { TodayWorkout } from "./components/TodayWorkout"
import { ActivityChart } from "./components/ActivityChart"

export default function DashboardPage() {
  const { data } = useOnboardingStore()

  const stats = [
    { label: "Calories Burned", value: "2,450", unit: "kcal", icon: Flame, color: "text-orange-500", bg: "bg-orange-500/10" },
    { label: "Workouts", value: "4", unit: "this week", icon: Dumbbell, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Streak", value: "12", unit: "days", icon: Calendar, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "Goal Progress", value: "68", unit: "%", icon: Target, color: "text-green-500", bg: "bg-green-500/10" },
  ]

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

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 tracking-tight">
          Welcome back, {data.username || data.name?.split(' ')[0] || "Athlete"}! 👋
        </h1>
        <p className="text-muted-foreground">Here's your fitness overview for today.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <StatsCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <TodayWorkout 
          title="Today's Workout" 
          description="Lower Body Strength" 
          exercises={todayWorkout} 
        />
        <ActivityChart 
          title="Activity Overview" 
          description="Calories burned over the last 7 days" 
          data={activityData} 
        />
      </div>
    </DashboardLayout>
  )
}
