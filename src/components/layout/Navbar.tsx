import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Flame, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isDashboard = location.pathname.startsWith("/dashboard")

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isDashboard) return null

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b-2 border-primary/20 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1 rounded-none">
            <Flame className="h-6 w-6 text-primary-foreground fill-current" />
          </div>
          <span className="font-black text-2xl tracking-[0.2em] uppercase text-foreground">
            Fit<span className="text-primary">Nation</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Testimonials", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-black uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="h-4 w-[1px] bg-foreground/20" />
          <ThemeToggle />
          <Link to="/onboarding">
            <Button variant="outline" className="border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground">
              Sign In
            </Button>
          </Link>
          <Link to="/onboarding">
            <Button>Join Now</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground hover:text-primary"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b-2 border-primary p-6 space-y-6"
          >
            <div className="flex flex-col gap-6">
              {["Features", "Testimonials", "Pricing"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-black uppercase tracking-widest text-foreground hover:text-primary"
                >
                  {item}
                </a>
              ))}
              <hr className="border-foreground/10" />
              <div className="flex flex-col gap-4">
                <Link to="/onboarding" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full h-14 border-primary/20 text-foreground">Sign In</Button>
                </Link>
                <Link to="/onboarding" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full h-14">Join Now</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
