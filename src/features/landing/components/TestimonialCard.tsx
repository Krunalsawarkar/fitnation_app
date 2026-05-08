import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export interface TestimonialCardProps {
  name: string
  role: string
  content: string
  avatar: string
  rating: number
}

export function TestimonialCard({ name, role, content, avatar, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full border-none shadow-md bg-background relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
      <CardContent className="pt-8">
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-foreground/80 mb-6 relative z-10 italic">
          "{content}"
        </p>
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
          />
          <div>
            <h4 className="font-semibold text-sm">{name}</h4>
            <p className="text-muted-foreground text-xs">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
