import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Activity, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <Activity className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl tracking-tight">FitTrack</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/onboarding">
            <Button variant="ghost" className="font-medium">Log In</Button>
          </Link>
          <Link to="/onboarding">
            <Button className="font-medium shadow-lg shadow-primary/20">Get Started Free</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-4 md:hidden flex flex-col gap-4"
          >
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium p-2 hover:bg-accent rounded-md">Features</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium p-2 hover:bg-accent rounded-md">How it Works</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium p-2 hover:bg-accent rounded-md">Testimonials</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium p-2 hover:bg-accent rounded-md">Pricing</a>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Link to="/onboarding" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">Log In</Button>
              </Link>
              <Link to="/onboarding" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Get Started Free</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
