import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

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
    <Card className="lg:col-span-2 border-none shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] flex items-end justify-between gap-2 pt-6">
          {data.map((item, i) => {
            const height = `${(item.value / maxValue) * 100}%`
            const isToday = i === isTodayIndex
            return (
              <div key={i} className="flex flex-col items-center flex-1 gap-2 group cursor-pointer">
                <div className="w-full relative h-[200px] flex items-end rounded-t-sm group-hover:bg-secondary/20 transition-colors px-1">
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none shadow-md">
                    {item.value} kcal
                  </div>
                  <div 
                    className={`w-full rounded-t-md transition-all duration-1000 ${isToday ? 'bg-primary' : 'bg-primary/20'}`}
                    style={{ height }}
                  />
                </div>
                <span className={`text-xs ${isToday ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                  {item.day}
                </span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
