import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Flame, LayoutDashboard, Dumbbell, Utensils, LineChart, Settings, LogOut, Bell, Search, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useOnboardingStore } from "@/store/useOnboardingStore"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Dumbbell, label: "Workouts", path: "/workouts" },
  { icon: Utensils, label: "Nutrition", path: "/nutrition" },
  { icon: LineChart, label: "Progress", path: "/progress" },
  { icon: Settings, label: "Settings", path: "/settings" },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data } = useOnboardingStore()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground flex overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r-2 border-border bg-background/50 backdrop-blur-xl fixed inset-y-0 z-20">
        <Link to="/" className="p-8 flex items-center gap-3 group">
          <div className="bg-primary p-2 rounded-none">
            <Flame className="h-6 w-6 text-primary-foreground fill-current" />
          </div>
          <span className="font-black text-xl tracking-[0.2em] uppercase">Fit<span className="text-primary">Nation</span></span>
        </Link>

        <nav className="flex-1 px-4 py-8 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link key={item.label} to={item.path} className={cn(
                "flex items-center gap-4 px-4 py-3.5 rounded-none transition-all text-xs font-black uppercase tracking-widest relative group",
                isActive ? "text-primary" : "text-foreground/40 hover:text-foreground hover:bg-foreground/5"
              )}>
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute left-0 w-1 h-full bg-primary"
                  />
                )}
                <item.icon className={cn("w-5 h-5 transition-transform group-hover:scale-110", isActive ? "text-primary" : "text-current")} />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="p-6 border-t-2 border-border">
          <div className="border-2 border-primary/20 p-6 mb-6 group hover:border-primary transition-colors">
            <h4 className="text-xs font-black uppercase tracking-widest mb-2">Protocol Elite</h4>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-4 leading-relaxed">System-wide biometric optimization active.</p>
            <Button size="sm" className="w-full h-10">Access Full Stack</Button>
          </div>
          <Link to="/" className="flex items-center gap-4 px-4 py-3 rounded-none text-muted-foreground hover:text-primary transition-all text-xs font-black uppercase tracking-widest w-full group">
            <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Terminate
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 flex flex-col h-screen relative">
        {/* Header */}
        <header className="h-20 border-b-2 border-border bg-background/50 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-8">
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)} className="rounded-none">
              <Menu className="w-6 h-6" />
            </Button>
            <Link to="/">
              <Flame className="w-6 h-6 text-primary fill-current" />
            </Link>
          </div>

          <div className="hidden md:flex items-center relative max-w-md w-full group">
            <Search className="w-4 h-4 absolute left-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              placeholder="SCAN FOR PROTOCOLS..."
              className="pl-12 bg-foreground/5 border-0 border-b-2 border-transparent focus-visible:border-primary focus-visible:bg-foreground/10 h-11 uppercase text-[10px] tracking-widest font-black transition-all"
            />
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="relative group hover:bg-primary/10 transition-colors rounded-none w-10 h-10"
            >
              <Bell className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-none animate-pulse" />
            </Button>

            <div className="h-8 w-[2px] bg-border mx-2 hidden sm:block" />

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">{data.username || "ATHLETE"}</p>
                <p className="text-[9px] text-primary font-bold uppercase tracking-tighter">Status: Active</p>
              </div>
              <Avatar className="w-10 h-10 rounded-none border-2 border-border group-hover:border-primary transition-all p-0.5">
                <AvatarImage src={data.avatar} className="rounded-none object-cover" />
                <AvatarFallback className="rounded-none bg-background font-black text-xs">
                  {data.username ? data.username.substring(0, 2).toUpperCase() : "AT"}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-8 scrollbar-thin scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/40 transition-all">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-xl border-t-2 border-border flex items-center justify-around z-20 px-4 pb-safe">
        {navItems.slice(0, 4).map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link key={item.label} to={item.path} className={cn(
              "flex flex-col items-center justify-center w-full h-full gap-2 transition-all",
              isActive ? "text-primary border-t-4 border-primary mt-[-4px]" : "text-muted-foreground hover:text-foreground"
            )}>
              <item.icon className="w-6 h-6" />
              <span className="text-[8px] font-black uppercase tracking-widest">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-30 md:hidden backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-72 bg-background z-40 md:hidden flex flex-col border-r-4 border-primary shadow-[20px_0px_60px_rgba(0,0,0,0.8)]"
            >
              <div className="p-8 flex items-center justify-between border-b-2 border-border">
                <Link to="/" className="flex items-center gap-3 group">
                  <Flame className="h-6 w-6 text-primary fill-current" />
                  <span className="font-black text-xl tracking-widest uppercase">Fit<span className="text-primary">Nation</span></span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="rounded-none">
                  <X className="w-6 h-6" />
                </Button>
              </div>
              <nav className="flex-1 px-4 py-8 space-y-4">
                {navItems.map((item) => (
                  <Link key={item.label} to={item.path} onClick={() => setSidebarOpen(false)} className={cn(
                    "flex items-center gap-6 px-6 py-4 transition-all text-xs font-black uppercase tracking-[0.2em]",
                    location.pathname === item.path ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-foreground/5"
                  )}>
                    <item.icon className="w-6 h-6" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
