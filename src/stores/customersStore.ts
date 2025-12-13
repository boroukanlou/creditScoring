import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { FormData } from "@/components/CustomerForm/CustomerForm";
import type { ScoreResult } from "@/utils/scoringEngine";

export interface CustomerRecord {
  id: string;
  fullName: string;
  nationalId: string;
  date: string;
  data: FormData;
  score: ScoreResult;
}

interface CustomersStore {
  customers: CustomerRecord[];
  addCustomer: (payload: { data: FormData; score: ScoreResult }) => void;
  getCustomerById: (id: string) => CustomerRecord | undefined;
  deleteCustomer: (id: string) => void;
  clearAll: () => void;
}

export const useCustomersStore = create<CustomersStore>()(
  persist(
    (set, get) => ({
      customers: [],

      addCustomer: ({ data, score }) => {
        const newRecord: CustomerRecord = {
          id: Date.now().toString(),
          fullName: data.fullName.trim(),
          nationalId: data.nationalId.trim(),
          date: new Date().toISOString(),
          data,
          score,
        };

        set((state) => ({
          customers: [...state.customers, newRecord],
        }));
      },

      getCustomerById: (id: string) => {
        return get().customers.find((c) => c.id === id);
      },

      deleteCustomer: (id: string) => {
        set((state) => ({
          customers: state.customers.filter((c) => c.id !== id),
        }));
      },

      clearAll: () => {
        set({ customers: [] });
      },
    }),
    {
      name: "credit-customers-v1",
      version: 1,
    }
  )
);
