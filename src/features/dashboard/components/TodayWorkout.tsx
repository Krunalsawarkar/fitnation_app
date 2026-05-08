import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle2, Circle } from "lucide-react"

export interface Exercise {
  id: number
  name: string
  sets: string
  completed: boolean
}

interface TodayWorkoutProps {
  title: string
  description: string
  exercises: Exercise[]
}

export function TodayWorkout({ title, description, exercises }: TodayWorkoutProps) {
  return (
    <Card className="lg:col-span-1 border-none shadow-sm h-full flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-4 flex-1">
          {exercises.map((exercise) => (
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
  )
}
