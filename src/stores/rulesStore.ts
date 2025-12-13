// src/stores/rulesStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ScoringRule {
  id: string;
  feature: string;
  description: string;
  type:
    | "age"
    | "income"
    | "dti"
    | "utilization"
    | "employment"
    | "networth"
    | "custom";
  points: {
    condition: string;
    value: number;
  }[];
}

interface RulesStore {
  rules: ScoringRule[];
  setRules: (rules: ScoringRule[]) => void;
  updateRule: (id: string, updates: Partial<ScoringRule>) => void;
  addRule: (rule: ScoringRule) => void;
  deleteRule: (id: string) => void;
  resetToDefault: () => void;
}

// قوانین پیش‌فرض (اولین بار که کاربر وارد میشه)
const defaultRules: ScoringRule[] = [
  {
    id: "1",
    feature: "Age",
    description: "Score adjustment based on age",
    type: "age",
    points: [
      { condition: "< 25 years", value: -40 },
      { condition: "25–34", value: 0 },
      { condition: "35–54", value: 30 },
      { condition: "55+", value: 50 },
    ],
  },
  {
    id: "2",
    feature: "Annual Income",
    description: "Higher income = higher score",
    type: "income",
    points: [
      { condition: "< $40k", value: -50 },
      { condition: "$40k–$70k", value: -10 },
      { condition: "$70k–$100k", value: 20 },
      { condition: "$100k–$150k", value: 50 },
      { condition: "$150k+", value: 80 },
    ],
  },
  {
    id: "3",
    feature: "DTI Ratio",
    description: "Debt-to-Income ratio impact",
    type: "dti",
    points: [
      { condition: "< 20%", value: 100 },
      { condition: "20%–35.9%", value: 60 },
      { condition: "36%–42.9%", value: 20 },
      { condition: "43%–50%", value: -30 },
      { condition: "> 50%", value: -100 },
    ],
  },
  {
    id: "4",
    feature: "Credit Utilization",
    description: "Credit card balance vs limit",
    type: "utilization",
    points: [
      { condition: "< 10%", value: 100 },
      { condition: "10%–29.9%", value: 80 },
      { condition: "30%–49.9%", value: 20 },
      { condition: "50%–69.9%", value: -50 },
      { condition: "70%+", value: -120 },
    ],
  },
  {
    id: "5",
    feature: "Employment Status",
    description: "Job stability factor",
    type: "employment",
    points: [
      { condition: "Full-time", value: 50 },
      { condition: "Part-time", value: 20 },
      { condition: "Self-employed", value: 30 },
      { condition: "Retired", value: 10 },
      { condition: "Unemployed / Student", value: -60 },
    ],
  },
  {
    id: "6",
    feature: "Net Worth",
    description: "Assets minus liabilities",
    type: "networth",
    points: [
      { condition: "> $500k", value: 60 },
      { condition: "$100k–$500k", value: 40 },
      { condition: "$0–$100k", value: 20 },
      { condition: "Negative", value: -40 },
    ],
  },
];

export const useRulesStore = create<RulesStore>()(
  persist(
    (set) => ({
      rules: defaultRules,

      setRules: (rules) => set({ rules }),

      updateRule: (id, updates) =>
        set((state) => ({
          rules: state.rules.map((r) =>
            r.id === id ? { ...r, ...updates } : r
          ),
        })),

      addRule: (rule) => set((state) => ({ rules: [...state.rules, rule] })),

      deleteRule: (id) =>
        set((state) => ({ rules: state.rules.filter((r) => r.id !== id) })),

      resetToDefault: () => set({ rules: defaultRules }),
    }),
    {
      name: "credit-scoring-rules", // ذخیره دائمی در localStorage
    }
  )
);
