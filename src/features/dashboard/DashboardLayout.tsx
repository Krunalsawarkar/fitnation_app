import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Activity, LayoutDashboard, Dumbbell, Utensils, LineChart, Settings, LogOut, Bell, Search, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useOnboardingStore } from "@/store/useOnboardingStore"
import { cn } from "@/lib/utils"

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
    <div className="min-h-screen bg-muted/30 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-border bg-background fixed inset-y-0 z-20">
        <div className="p-6 flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <Activity className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl tracking-tight">FitTrack</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link key={item.label} to={item.path} className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium",
                isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}>
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-secondary/50 rounded-xl p-4 mb-4">
            <h4 className="text-sm font-semibold mb-1">Pro Plan</h4>
            <p className="text-xs text-muted-foreground mb-3">Unlock all premium features</p>
            <Button size="sm" className="w-full text-xs h-8">Upgrade</Button>
          </div>
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-destructive transition-colors text-sm font-medium w-full">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen pb-16 md:pb-0 relative max-w-[100vw]">
        {/* Header */}
        <header className="h-16 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </Button>
            <Activity className="w-6 h-6 text-primary" />
          </div>

          <div className="hidden md:flex items-center relative max-w-md w-full">
            <Search className="w-4 h-4 absolute left-3 text-muted-foreground" />
            <Input placeholder="Search workouts, meals..." className="pl-9 bg-secondary/50 border-0 h-9" />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
            </Button>
            <Avatar className="w-8 h-8 cursor-pointer border border-border">
              <AvatarImage src={data.avatar} />
              <AvatarFallback>{data.username ? data.username.substring(0, 2).toUpperCase() : "U"}</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 md:p-8 flex-1">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background border-t border-border flex items-center justify-around z-20 px-2 pb-safe">
        {navItems.slice(0, 4).map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link key={item.label} to={item.path} className={cn(
              "flex flex-col items-center justify-center w-full h-full gap-1",
              isActive ? "text-primary" : "text-muted-foreground"
            )}>
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 w-64 bg-background z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 flex items-center gap-2 border-b border-border">
          <Activity className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl tracking-tight">FitTrack</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
             <Link key={item.label} to={item.path} onClick={() => setSidebarOpen(false)} className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium",
              location.pathname === item.path ? "bg-primary/10 text-primary" : "text-muted-foreground"
            )}>
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
