import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

export interface PricingCardProps {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  buttonVariant: string
  popular: boolean
}

export function PricingCard({ name, price, period, description, features, buttonVariant, popular }: PricingCardProps) {
  return (
    <Card className={cn(
      "h-full p-10 flex flex-col group transition-all duration-500",
      popular ? "border-primary bg-primary/5 shadow-[8px_8px_0px_0px_rgba(255,77,0,1)] scale-105 z-10" : "border-border bg-card/80 backdrop-blur-md"
    )}>
      <div className="mb-10">
        <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 text-foreground">{name}</h3>
        <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest">{description}</p>
      </div>
      
      <div className="mb-10 flex items-baseline gap-1">
        <span className="text-6xl font-black tracking-tighter text-foreground">{price}</span>
        {period && <span className="text-muted-foreground font-bold uppercase text-sm">{period}</span>}
      </div>
      
      <ul className="space-y-4 mb-12 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-primary flex items-center justify-center">
              <div className="w-2 h-2 bg-primary" />
            </div>
            <span className="text-sm font-medium text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link to="/onboarding" className="w-full">
        <Button 
          className="w-full h-14" 
          variant={popular ? "default" : "outline"}
        >
          {name === "Free" ? "Initiate" : "Subscribe"}
        </Button>
      </Link>
    </Card>
  )
}
