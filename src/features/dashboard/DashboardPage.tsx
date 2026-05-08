import React from "react"
import DashboardLayout from "./DashboardLayout"
import { useOnboardingStore } from "@/store/useOnboardingStore"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Flame, Dumbbell, Calendar, Target, CheckCircle2, Circle } from "lucide-react"

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
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 md:p-6 flex flex-col justify-between h-full gap-4">
              <div className="flex justify-between items-start">
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">{stat.label}</p>
                <div className="flex items-baseline gap-1">
                  <h3 className="text-2xl md:text-3xl font-bold">{stat.value}</h3>
                  <span className="text-xs text-muted-foreground">{stat.unit}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Today's Workout */}
        <Card className="lg:col-span-1 border-none shadow-sm h-full flex flex-col">
          <CardHeader>
            <CardTitle>Today's Workout</CardTitle>
            <CardDescription>Lower Body Strength</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="space-y-4 flex-1">
              {todayWorkout.map((exercise) => (
                <div key={exercise.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer border border-border/50">
                  {exercise.completed ? (
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <Circle className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{exercise.name}</h4>
                    <p className="text-xs text-muted-foreground">{exercise.sets}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                Start Workout
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Activity Chart (Mocked with CSS) */}
        <Card className="lg:col-span-2 border-none shadow-sm">
          <CardHeader>
            <CardTitle>Activity Overview</CardTitle>
            <CardDescription>Calories burned over the last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] flex items-end justify-between gap-2 pt-6">
              {[450, 600, 300, 750, 500, 800, 650].map((val, i) => {
                const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                const height = `${(val / 1000) * 100}%`
                const isToday = i === 5 // Sat
                return (
                  <div key={i} className="flex flex-col items-center flex-1 gap-2 group cursor-pointer">
                    <div className="w-full relative h-[200px] flex items-end rounded-t-sm group-hover:bg-secondary/20 transition-colors px-1">
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none shadow-md">
                        {val} kcal
                      </div>
                      <div 
                        className={`w-full rounded-t-md transition-all duration-1000 ${isToday ? 'bg-primary' : 'bg-primary/20'}`}
                        style={{ height }}
                      />
                    </div>
                    <span className={`text-xs ${isToday ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                      {days[i]}
                    </span>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
