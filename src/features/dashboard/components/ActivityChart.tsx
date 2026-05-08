import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ActivityData {
  value: number
  day: string
}

interface ActivityChartProps {
  title: string
  description: string
  data: ActivityData[]
  maxValue?: number
}

export function ActivityChart({ title, description, data, maxValue = 1000 }: ActivityChartProps) {
  // Use today as Saturday for demo (index 5)
  const isTodayIndex = 5

  return (
    <Card className="lg:col-span-2 p-8 bg-card/40 backdrop-blur-sm border-border">
      <div className="mb-10">
        <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest">{description}</p>
      </div>
      
      <div className="h-[250px] flex items-end justify-between gap-2 pt-6">
        {data.map((item, i) => {
          const height = `${(item.value / maxValue) * 100}%`
          const isToday = i === isTodayIndex
          return (
            <div key={i} className="flex flex-col items-center flex-1 gap-4 group cursor-pointer">
              <div className="w-full relative h-[200px] flex items-end rounded-none px-1">
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-none opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap z-10 pointer-events-none shadow-xl border-2 border-primary/20">
                  {item.value} KCAL
                </div>
                <div 
                  className={cn("w-full transition-all duration-1000", isToday ? "bg-primary shadow-[0px_0px_20px_rgba(255,77,0,0.5)]" : "bg-muted group-hover:bg-primary/40")}
                  style={{ height }}
                />
              </div>
              <span className={cn("text-[10px] font-black uppercase tracking-widest", isToday ? "text-primary" : "text-muted-foreground/40")}>
                {item.day}
              </span>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
