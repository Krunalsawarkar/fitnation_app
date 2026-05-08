import React from "react"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useOnboardingStore } from "@/store/useOnboardingStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, ArrowRight } from "lucide-react"

const schema = z.object({
  dob: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Please select a gender"),
  height: z.number().min(100, "Height is required"),
  weight: z.number().min(30, "Weight is required"),
  unit: z.enum(["metric", "imperial"])
})

type FormData = z.infer<typeof schema>

export default function Step2PersonalDetails() {
  const { data, updateData, nextStep, prevStep } = useOnboardingStore()
  
  const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      dob: data.dob ? new Date(data.dob).toISOString().split('T')[0] : "",
      gender: data.gender || "",
      height: data.height || 170,
      weight: data.weight || 70,
      unit: data.unit || "metric",
    }
  })

  const unit = watch("unit")
  const height = watch("height")
  const weight = watch("weight")

  const onSubmit = (formData: FormData) => {
    updateData({
      dob: new Date(formData.dob),
      gender: formData.gender,
      height: formData.height,
      weight: formData.weight,
      unit: formData.unit
    })
    nextStep()
  }

  return (
    <div className="w-full max-w-md mx-auto animate-in slide-in-from-right duration-500">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Personal Details</h2>
        <p className="text-muted-foreground">This helps us customize your experience</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-3">
          <Label>Date of Birth</Label>
          <Input type="date" {...register("dob")} className={errors.dob ? "border-destructive" : ""} />
          {errors.dob && <p className="text-sm text-destructive">{errors.dob.message}</p>}
        </div>

        <div className="space-y-3">
          <Label>Biological Gender</Label>
          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="r1" />
                  <Label htmlFor="r1">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="r2" />
                  <Label htmlFor="r2">Female</Label>
                </div>
              </RadioGroup>
            )}
          />
          {errors.gender && <p className="text-sm text-destructive">{errors.gender.message}</p>}
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <Label>Measurement System</Label>
            <Controller
              control={control}
              name="unit"
              render={({ field }) => (
                <div className="flex bg-secondary rounded-lg p-1">
                  <button
                    type="button"
                    onClick={() => {
                      field.onChange("metric")
                      if (unit === "imperial") {
                        setValue("height", Math.round(height * 2.54))
                        setValue("weight", Math.round(weight * 0.453592))
                      }
                    }}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${field.value === "metric" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground"}`}
                  >
                    Metric (cm/kg)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      field.onChange("imperial")
                      if (unit === "metric") {
                        setValue("height", Math.round(height / 2.54))
                        setValue("weight", Math.round(weight / 0.453592))
                      }
                    }}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${field.value === "imperial" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground"}`}
                  >
                    Imperial (in/lbs)
                  </button>
                </div>
              )}
            />
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <Label>Height</Label>
            <span className="text-primary font-bold text-xl">
              {height} <span className="text-sm text-muted-foreground font-normal">{unit === "metric" ? "cm" : "in"}</span>
            </span>
          </div>
          <Controller
            control={control}
            name="height"
            render={({ field }) => (
              <Slider
                min={unit === "metric" ? 100 : 40}
                max={unit === "metric" ? 220 : 86}
                step={1}
                value={[field.value]}
                onValueChange={(vals) => field.onChange(vals[0])}
                className="py-4"
              />
            )}
          />
        </div>

        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <Label>Weight</Label>
            <span className="text-primary font-bold text-xl">
              {weight} <span className="text-sm text-muted-foreground font-normal">{unit === "metric" ? "kg" : "lbs"}</span>
            </span>
          </div>
          <Controller
            control={control}
            name="weight"
            render={({ field }) => (
              <Slider
                min={unit === "metric" ? 30 : 66}
                max={unit === "metric" ? 150 : 330}
                step={1}
                value={[field.value]}
                onValueChange={(vals) => field.onChange(vals[0])}
                className="py-4"
              />
            )}
          />
        </div>

        <div className="flex gap-4 pt-4">
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
