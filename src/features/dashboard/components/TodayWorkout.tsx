import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
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
    <Card className="lg:col-span-1 p-8 bg-card/40 backdrop-blur-sm border-border flex flex-col">
      <div className="mb-10">
        <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest">{description}</p>
      </div>
      
      <div className="flex-1 space-y-4">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="flex items-center gap-4 p-4 border-2 border-border hover:border-primary/30 transition-all cursor-pointer group">
            <div className="w-6 h-6 border-2 border-muted-foreground flex items-center justify-center group-hover:border-primary transition-colors">
              {exercise.completed && <div className="w-3 h-3 bg-primary" />}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className={cn("font-black uppercase tracking-tight text-sm truncate", exercise.completed ? "text-muted-foreground line-through" : "text-foreground")}>
                {exercise.name}
              </h4>
              <p className="text-[10px] text-primary font-bold uppercase tracking-tighter">{exercise.sets}</p>
            </div>
          </div>
        ))}
      </div>
      
      <Button className="mt-10 h-14 w-full">
        Initiate Protocol
      </Button>
    </Card>
  )
}
