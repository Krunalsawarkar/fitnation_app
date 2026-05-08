import React from "react"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useOnboardingStore } from "@/store/useOnboardingStore"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Flame, Dumbbell, Activity, Compass, Apple, Brain } from "lucide-react"

const schema = z.object({
  goals: z.array(z.string()).min(1, "Please select at least one goal").max(3, "You can select up to 3 goals")
})

type FormData = z.infer<typeof schema>

const goalOptions = [
  { id: "lose_weight", title: "Lose Weight", icon: Flame, desc: "Burn fat and get leaner" },
  { id: "build_muscle", title: "Build Muscle", icon: Dumbbell, desc: "Increase muscle mass and strength" },
  { id: "stay_active", title: "Stay Active", icon: Activity, desc: "Maintain overall fitness" },
  { id: "improve_flexibility", title: "Improve Flexibility", icon: Compass, desc: "Enhance mobility and posture" },
  { id: "eat_healthier", title: "Eat Healthier", icon: Apple, desc: "Build better eating habits" },
  { id: "reduce_stress", title: "Reduce Stress", icon: Brain, desc: "Focus on mental wellness" },
]

export default function Step3FitnessGoals() {
  const { data, updateData, nextStep, prevStep } = useOnboardingStore()
  
  const { handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      goals: data.goals || [],
    }
  })

  const onSubmit = (formData: FormData) => {
    updateData({ goals: formData.goals })
    nextStep()
  }

  return (
    <div className="w-full max-w-2xl mx-auto animate-in slide-in-from-right duration-500">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">What are your goals?</h2>
        <p className="text-muted-foreground">Select up to 3 goals to help us personalize your plan</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Controller
          control={control}
          name="goals"
          render={({ field }) => (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {goalOptions.map((goal) => {
                const isSelected = field.value.includes(goal.id)
                return (
                  <button
                    type="button"
                    key={goal.id}
                    onClick={() => {
                      if (isSelected) {
                        field.onChange(field.value.filter(v => v !== goal.id))
                      } else {
                        if (field.value.length < 3) {
                          field.onChange([...field.value, goal.id])
                        }
                      }
                    }}
                    className={`flex flex-col items-start p-4 border-2 rounded-xl text-left transition-all ${
                      isSelected 
                        ? "border-primary bg-primary/5 shadow-md scale-[1.02]" 
                        : "border-border hover:border-primary/50 hover:bg-secondary/50"
                    } ${
                      !isSelected && field.value.length >= 3 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground'}`}>
                      <goal.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{goal.title}</h3>
                    <p className="text-sm text-muted-foreground">{goal.desc}</p>
                    {isSelected && (
                      <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          )}
        />
        
        {errors.goals && <p className="text-sm text-destructive text-center">{errors.goals.message}</p>}

        <div className="flex gap-4 pt-4 max-w-md mx-auto">
          <Button type="button" variant="outline" className="h-12 w-12 p-0" onClick={prevStep}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button type="submit" className="h-12 flex-1">
            Continue <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </form>
    </div>
  )
}
