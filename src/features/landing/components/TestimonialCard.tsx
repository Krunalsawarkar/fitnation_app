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
    <Card className="h-full p-10 group border-border hover:border-primary/50 transition-all bg-card/80 backdrop-blur-md relative overflow-hidden">
      {/* Decorative quote mark */}
      <div className="absolute -top-4 -left-4 text-primary/10 text-9xl font-black select-none pointer-events-none group-hover:text-primary/20 transition-colors">
        "
      </div>
      
      <div className="relative z-10">
        <div className="flex gap-1 mb-8">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        
        <p className="text-xl text-foreground font-medium leading-relaxed mb-10 italic">
          {content}
        </p>
        
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-none border-2 border-primary overflow-hidden">
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-sm text-foreground">{name}</h4>
            <p className="text-primary text-xs font-bold uppercase tracking-tighter mt-1">{role}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
