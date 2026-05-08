# FitNation — Architectural Fitness & Wellness Platform

FitNation is a premium, high-performance fitness platform engineered for surgical precision. It features a cinematic user interface, organic motion effects, and a robust biometric design system.

[![FitNation Live Demo](https://img.shields.io/badge/Live_Demo-Visit_FitNation-FF4D00?style=for-the-badge&logo=netlify)](https://fitnationapp.netlify.app/)

---

## 📸 Visual Gallery

### 1. Cinematic Landing Page
The landing page features a motion-driven hero section with "Masked Heading" emergence and organic light trails that react to the current theme.
- **Dynamic Theming**: Seamless switching between High-Contrast Dark and Pure Light modes.
- **Motion Backgrounds**: Interactive SVG trails that provide depth and cinematic energy.

### 2. Biometric Onboarding Flow
A multi-step, strictly validated flow built with **React Hook Form** and **Zod**.
- **Account Creation**: Secure credentials setup with real-time complexity tracking.
- **Biometric Calibration**: Precision sliders for height and weight calibration.
- **Protocol Selection**: Goal-oriented selection (Weight Loss, Muscle Build, Flexibility) with architectural cards.
- **Activity Profiling**: Comprehensive assessment from Sedentary to Athlete levels.

### 3. Protocol Command Center (Dashboard)
A high-fidelity interface for biometric monitoring and activity orchestration.
- **Metabolic Burn Tracking**: Real-time caloric output visualization.
- **Biometric Flow**: 7-cycle metabolic output analytics.
- **Active Protocol**: Direct management of structural integrity workouts.

---

## 🛠 Tech Stack
- **Frontend**: React 18, Vite, TypeScript
- **Styling**: Tailwind CSS (Custom Design System)
- **Animations**: Framer Motion (Organic motion & transitions)
- **State Management**: Zustand (Biometric persistence & Theme control)
- **Form Handling**: React Hook Form + Zod (Strict schema validation)
- **Icons**: Lucide React
- **Deployment**: Netlify (with SPA routing optimization)

---

## 🎨 Design Decisions
- **Architectural Aesthetic**: "Elite Performance" vibe. Uses pure `#000000` black and `#FFFFFF` white backgrounds with vibrant `#FF4D00` (Safety Orange) accents to convey urgency and energy.
- **Geometry**: Sharp architectural edges (`border-radius: 0`) across all cards and buttons to represent structural integrity and precision.
- **Motion System**: Organic, fluid light trails in the background that adapt to theme changes, providing a "living" UI that feels reactive and alive.
- **Theme Engine**: A robust CSS-variable-based system with `color-scheme: dark` support, ensuring native-feeling UI controls (like the calendar picker).

---

## 🏗 Component Architecture
- **Feature-Based Domain Isolation**: Components are organized by feature domain (`src/features/auth`, `src/features/dashboard`, `src/features/landing`) to ensure high cohesion and low coupling.
- **Atomic UI Layer**: A foundation of base components in `src/components/ui` (Button, Card, Input) that follow strict design tokens.
- **Strategic Context**: Custom `ThemeProvider` with defensive `localStorage` handling to ensure reliability across all browser environments.
- **Validation Protocols**: Every biometric data point is strictly validated using Zod schemas to ensure system-wide data integrity.

---

## 🚀 Local Development

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

---
**Engineered with Precision by [Krunal Sawarkar](https://github.com/Krunalsawarkar)**
