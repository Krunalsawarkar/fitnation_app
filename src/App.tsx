import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import OnboardingPage from "./pages/OnboardingPage"
import DashboardPage from "./features/dashboard/DashboardPage"

import { ThemeProvider } from "./components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="fittrack-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* Placeholder for sidebar routes */}
          <Route path="/workouts" element={<DashboardPage />} />
          <Route path="/nutrition" element={<DashboardPage />} />
          <Route path="/progress" element={<DashboardPage />} />
          <Route path="/settings" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
