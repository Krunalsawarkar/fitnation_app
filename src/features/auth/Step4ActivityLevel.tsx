import React from "react"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useOnboardingStore } from "@/store/useOnboardingStore"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Monitor, PersonStanding, Zap, Bike, Trophy } from "lucide-react"

const schema = z.object({
  activityLevel: z.string().min(1, "Please select your activity level")
})

type FormData = z.infer<typeof schema>

const activityOptions = [
  { id: "sedentary", title: "Sedentary", icon: Monitor, desc: "Desk job, little to no exercise" },
  { id: "lightly_active", title: "Lightly Active", icon: PersonStanding, desc: "Light exercise 1-2 times/week" },
  { id: "moderately_active", title: "Moderately Active", icon: Zap, desc: "Moderate exercise 3-4 times/week" },
  { id: "very_active", title: "Very Active", icon: Bike, desc: "Hard exercise 5+ times/week" },
  { id: "athlete", title: "Athlete", icon: Trophy, desc: "Physical job or training 2x/day" },
]

export default function Step4ActivityLevel() {
  const { data, updateData, nextStep, prevStep } = useOnboardingStore()
  
  const { handleSubmit, control, formState: { errors, isValid } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      activityLevel: data.activityLevel || "",
    }
  })

  const onSubmit = (formData: FormData) => {
    updateData({ activityLevel: formData.activityLevel })
    nextStep()
  }

  return (
    <div className="w-full max-w-md mx-auto animate-in slide-in-from-right duration-500">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">How active are you?</h2>
        <p className="text-muted-foreground">This helps us calculate your daily calorie needs</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Controller
          control={control}
          name="activityLevel"
          render={({ field }) => (
            <div className="flex flex-col gap-3">
              {activityOptions.map((level) => {
                const isSelected = field.value === level.id
                return (
                  <button
                    type="button"
                    key={level.id}
                    onClick={() => field.onChange(level.id)}
                    className={`flex items-center p-4 border-2 rounded-xl text-left transition-all ${
                      isSelected 
                        ? "border-primary bg-primary/5 shadow-md" 
                        : "border-border hover:border-primary/50 hover:bg-secondary/50"
                    }`}
                  >
                    <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center mr-4 ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground'}`}>
                      <level.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-base">{level.title}</h3>
                      <p className="text-sm text-muted-foreground">{level.desc}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-primary' : 'border-muted'}`}>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                    </div>
                  </button>
                )
              })}
            </div>
          )}
        />
        
        {errors.activityLevel && <p className="text-sm text-destructive text-center">{errors.activityLevel.message}</p>}

        <div className="flex justify-between items-center pt-2">
          <button type="button" className="text-sm text-muted-foreground hover:text-foreground" onClick={nextStep}>
            Skip for now
          </button>
        </div>

        <div className="flex gap-4 pt-2">
          <Button type="button" variant="outline" className="h-12 w-12 p-0" onClick={prevStep}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button type="submit" className="h-12 flex-1" disabled={!isValid}>
            Continue <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </form>
    </div>
  )
}
