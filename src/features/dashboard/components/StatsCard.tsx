import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface StatsCardProps {
  label: string
  value: string | number
  unit: string
  icon: LucideIcon
  color: string
  bg: string
}

export function StatsCard({ label, value, unit, icon: Icon, color, bg }: StatsCardProps) {
  return (
    <Card className="p-6 group border-border hover:border-primary transition-all bg-card/40 backdrop-blur-sm">
      <div className="flex justify-between items-start mb-6">
        <div className={cn("p-3 rounded-none border-2 border-primary/20 group-hover:border-primary group-hover:bg-primary transition-all", bg)}>
          <Icon className={cn("w-6 h-6 group-hover:text-primary-foreground transition-colors", color)} />
        </div>
      </div>
      <div>
        <p className="text-xs text-muted-foreground font-black uppercase tracking-[0.2em] mb-2">{label}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-4xl font-black tracking-tighter text-foreground">{value}</h3>
          <span className="text-xs text-primary font-bold uppercase tracking-tighter">{unit}</span>
        </div>
      </div>
    </Card>
  )
}
