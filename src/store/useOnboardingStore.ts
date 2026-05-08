import { create } from 'zustand'

export type OnboardingData = {
  // Step 1
  name?: string;
  email?: string;
  password?: string;
  
  // Step 2
  dob?: Date;
  gender?: string;
  height?: number;
  weight?: number;
  unit?: 'metric' | 'imperial';
  
  // Step 3
  goals?: string[];
  
  // Step 4
  activityLevel?: string;
  
  // Step 5
  avatar?: string;
  username?: string;
  bio?: string;
  notifications?: boolean;
}

interface OnboardingState {
  currentStep: number;
  data: OnboardingData;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateData: (data: Partial<OnboardingData>) => void;
  reset: () => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  currentStep: 1,
  data: {
    unit: 'metric',
    goals: [],
    notifications: true,
  },
  setStep: (step) => set({ currentStep: step }),
  nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 5) })),
  prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),
  updateData: (newData) => set((state) => ({ data: { ...state.data, ...newData } })),
  reset: () => set({ currentStep: 1, data: { unit: 'metric', goals: [], notifications: true } }),
}))
