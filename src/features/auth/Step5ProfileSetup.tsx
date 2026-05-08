import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useOnboardingStore } from "@/store/useOnboardingStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Check, Camera, Sparkles } from "lucide-react"

const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").max(20, "Username must be less than 20 characters"),
  bio: z.string().max(160, "Bio must be less than 160 characters").optional(),
  notifications: z.boolean()
})

type FormData = z.infer<typeof schema>

export default function Step5ProfileSetup() {
  const { data, updateData, prevStep } = useOnboardingStore()
  const navigate = useNavigate()
  const [isCompleting, setIsCompleting] = useState(false)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(data.avatar || null)
  
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: data.username || "",
      bio: data.bio || "",
      notifications: data.notifications ?? true,
    }
  })

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setAvatarPreview(url)
      // In a real app, upload this file to storage
      updateData({ avatar: url })
    }
  }

  const onSubmit = (formData: FormData) => {
    updateData({
      username: formData.username,
      bio: formData.bio,
      notifications: formData.notifications
    })
    
    setIsCompleting(true)
    
    // Simulate API call and redirect
    setTimeout(() => {
      navigate("/dashboard")
    }, 2000)
  }

  if (isCompleting) {
    return (
      <div className="w-full max-w-md mx-auto text-center animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-12 h-12 text-primary animate-pulse" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Welcome to FitTrack!</h2>
        <p className="text-muted-foreground mb-8">Your personalized profile has been set up successfully. Let's get to work.</p>
        <div className="w-full max-w-xs mx-auto bg-secondary h-2 rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-[progress_2s_ease-in-out]" style={{ width: '100%' }} />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto animate-in slide-in-from-right duration-500">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Complete Profile</h2>
        <p className="text-muted-foreground">Add the finishing touches to your account</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="relative group cursor-pointer">
            <input 
              type="file" 
              className="hidden" 
              id="avatarUpload" 
              accept="image/*"
              onChange={handleAvatarChange}
            />
            <Label htmlFor="avatarUpload" className="cursor-pointer">
              <div className="w-24 h-24 rounded-full border-4 border-background shadow-lg bg-secondary flex items-center justify-center overflow-hidden relative">
                {avatarPreview ? (
                  <img src={avatarPreview} alt="Avatar Preview" className="w-full h-full object-cover" />
                ) : (
                  <Camera className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
            </Label>
          </div>
          <p className="text-sm text-muted-foreground mt-3">Upload a profile picture</p>
        </div>

        <div className="space-y-3">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="fitness_enthusiast" {...register("username")} className={errors.username ? "border-destructive" : ""} />
          {errors.username && <p className="text-sm text-destructive">{errors.username.message}</p>}
        </div>

        <div className="space-y-3">
          <Label htmlFor="bio">Bio (Optional)</Label>
          <Input id="bio" placeholder="Tell us a bit about yourself" {...register("bio")} className={errors.bio ? "border-destructive" : ""} />
          {errors.bio && <p className="text-sm text-destructive">{errors.bio.message}</p>}
        </div>

        <div className="flex items-center space-x-2 pt-2">
          <Controller
            control={control}
            name="notifications"
            render={({ field }) => (
              <Checkbox 
                id="notifications" 
                checked={field.value} 
                onCheckedChange={field.onChange} 
              />
            )}
          />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="notifications" className="font-medium">
              Receive motivational emails
            </Label>
            <p className="text-sm text-muted-foreground">
              Get weekly tips, updates, and reminders to stay on track.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-2">
          <button type="button" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => onSubmit({ username: `user_${Math.floor(Math.random()*10000)}`, notifications: false })}>
            Skip for now
          </button>
        </div>

        <div className="flex gap-4 pt-2">
          <Button type="button" variant="outline" className="h-12 w-12 p-0" onClick={prevStep}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button type="submit" className="h-12 flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 border-0">
            Complete Setup <Check className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </form>
    </div>
  )
}
