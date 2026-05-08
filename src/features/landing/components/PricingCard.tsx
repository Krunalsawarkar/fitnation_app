import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
    <Card className={`h-full flex flex-col ${popular ? 'border-primary shadow-xl border-2' : 'border-border shadow-sm'}`}>
      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 flex items-baseline text-5xl font-extrabold">
          {price}
          {period && <span className="ml-1 text-xl font-medium text-muted-foreground">{period}</span>}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <div className="rounded-full p-1 bg-primary/10 text-primary">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link to="/onboarding" className="w-full">
          <Button 
            className="w-full h-12" 
            variant={buttonVariant as "default" | "outline"}
          >
            {name === "Free" ? "Get Started" : "Subscribe"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
