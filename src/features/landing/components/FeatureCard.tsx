import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  color: string
  bgColor: string
}

export function FeatureCard({ title, description, icon: Icon, color, bgColor }: FeatureCardProps) {
  return (
    <Card className="h-full p-8 group border-border hover:border-primary transition-all bg-card/80 backdrop-blur-md">
      <div className={cn("w-16 h-16 rounded-none flex items-center justify-center mb-8 border-2 border-primary/20 group-hover:border-primary group-hover:bg-primary transition-all", bgColor)}>
        <Icon className={cn("w-8 h-8 group-hover:text-primary-foreground transition-colors", color)} />
      </div>
      <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-primary transition-colors text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground text-base leading-relaxed">
        {description}
      </p>
      <div className="mt-8 flex items-center text-primary font-black uppercase tracking-widest text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        Explore Module <ArrowRight className="ml-2 w-4 h-4" />
      </div>
    </Card>
  )
}
