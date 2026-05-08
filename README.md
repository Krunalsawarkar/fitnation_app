# FitNation — Architectural Fitness & Wellness Platform

FitNation is a premium, high-performance fitness platform designed with surgical precision. It features a cinematic user interface, organic motion effects, and a robust theme-aware design system.

![Landing Page Placeholder](https://via.placeholder.com/1200x600?text=FitNation+Landing+Page)

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:Krunalsawarkar/fitnation_app.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🛠 Tech Stack
- **Frontend**: React 18, Vite, TypeScript
- **Styling**: Tailwind CSS (Custom Design System)
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod (Strict Validation)
- **Icons**: Lucide React

## 🎨 Design Decisions
- **Aesthetic**: "Elite Performance" vibe. Uses high-contrast black/white backgrounds with vibrant `#FF4D00` orange accents.
- **Geometry**: Sharp architectural edges (`border-radius: 0`) to convey precision and structural integrity.
- **Motion**: organic, fluid light trails in the background that react to theme changes, and "masked" heading emergence for a cinematic feel.
- **Theming**: Full CSS-variable-based theme system allowing seamless switching between Dark and Light modes while maintaining brand identity.

## 🏗 Component Architecture
- **Feature-Based Structure**: Components are organized by feature domain (auth, dashboard, landing) to ensure scalability.
- **Atomic UI**: A robust set of base components (`Button`, `Card`, `Input`) that follow strict design tokens.
- **Theme-Aware Logic**: Custom `ThemeProvider` and `useTheme` hook to manage global UI state.
- **Validation Protocols**: Every input is strictly validated using Zod schemas to ensure biometric data integrity.

## 📸 Screenshots
- **Landing Page**: Cinematic hero section with interactive motion.
- **Onboarding Flow**: multi-step biometric setup with real-time validation.
- **Dashboard**: High-fidelity command center with metabolic tracking and activity visualization.

## 🔗 Live Demo
[View Live Demo](https://fitnation-app-demo.vercel.app) *(Placeholder)*

---
Designed and Built by **Krunal Sawarkar**
