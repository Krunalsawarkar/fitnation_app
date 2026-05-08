import React from "react"
import { Flame } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-background border-t-2 border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-primary p-1 rounded-none transition-transform">
                <Flame className="h-6 w-6 text-primary-foreground fill-current" />
              </div>
              <span className="font-black text-2xl tracking-[0.2em] uppercase text-foreground">
                Fit<span className="text-primary">Nation</span>
              </span>
            </Link>
            <p className="text-muted-foreground/60 mb-8 leading-relaxed font-medium">
              The architectural standard for elite fitness tracking. Master your biometrics, optimize your output, and achieve structural dominance.
            </p>
            <div className="flex items-center gap-6 text-muted-foreground/40 font-black uppercase tracking-widest text-[10px]">
              <a href="#" className="hover:text-primary transition-colors">X / TWITTER</a>
              <a href="#" className="hover:text-primary transition-colors">INSTAGRAM</a>
              <a href="#" className="hover:text-primary transition-colors">GITHUB</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6">Operations</h4>
            <ul className="space-y-3 text-sm font-medium text-muted-foreground/60">
              <li><a href="#features" className="hover:text-primary transition-colors uppercase tracking-wider text-[11px]">Protocols</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors uppercase tracking-wider text-[11px]">Subscription</a></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors uppercase tracking-wider text-[11px]">Command Center</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors uppercase tracking-wider text-[11px]">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6">Intelligence</h4>
            <ul className="space-y-3 text-sm font-medium text-muted-foreground/60">
              <li><a href="#" className="hover:text-primary transition-colors uppercase tracking-wider text-[11px]">Briefings</a></li>
              <li><a href="#" className="hover:text-primary transition-colors uppercase tracking-wider text-[11px]">Guides</a></li>
              <li><a href="#" className="hover:text-primary transition-colors uppercase tracking-wider text-[11px]">Nutrition</a></li>
              <li><a href="#" className="hover:text-primary transition-colors uppercase tracking-wider text-[11px]">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6">Entity</h4>
            <ul className="space-y-3 text-sm font-medium text-muted-foreground/60">
              <li><a href="#" className="hover:text-primary transition-colors uppercase tracking-wider text-[11px]">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors uppercase tracking-wider text-[11px]">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors uppercase tracking-wider text-[11px]">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors uppercase tracking-wider text-[11px]">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-border pt-10 flex flex-col md:flex-row items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40">
          <p>&copy; {new Date().getFullYear()} FitNation. Engineered for Excellence.</p>
          <div className="flex gap-4 mt-6 md:mt-0">
            <span>Made with ❤️ by Krunal Sawarkar</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
