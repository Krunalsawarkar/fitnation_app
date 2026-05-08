import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  color: string
  bgColor: string
}

export function FeatureCard({ title, description, icon: Icon, color, bgColor }: FeatureCardProps) {
  return (
    <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background">
      <CardHeader>
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${bgColor}`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
