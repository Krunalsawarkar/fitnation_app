import { Card, CardContent } from "@/components/ui/card"
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
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4 md:p-6 flex flex-col justify-between h-full gap-4">
        <div className="flex justify-between items-start">
          <div className={`p-2 rounded-lg ${bg}`}>
            <Icon className={`w-5 h-5 ${color}`} />
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground font-medium mb-1">{label}</p>
          <div className="flex items-baseline gap-1">
            <h3 className="text-2xl md:text-3xl font-bold">{value}</h3>
            <span className="text-xs text-muted-foreground">{unit}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
