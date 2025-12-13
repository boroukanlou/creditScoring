// src/components/CustomerForm/Step4.tsx
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import type { FormData } from "./CustomerForm";

const accountTypes = ["Checking", "Savings", "Investment", "Other"] as const;
const loanTypes = [
  "Mortgage",
  "Auto Loan",
  "Personal Loan",
  "Student Loan",
  "Credit Card",
  "Other",
] as const;

export default function Step4() {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<FormData>();

  const bankAccounts = watch("bankAccountTypes") || [];
  const loans = watch("currentLoans") || [];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Financial Information
        </h2>
      </div>

      {/* Bank Account Types */}
      <FormField
        control={control}
        name="bankAccountTypes"
        render={() => (
          <FormItem>
            <FormLabel>Bank Account Types *</FormLabel>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {accountTypes.map((type) => (
                <div key={type} className="flex items-center space-x-3">
                  <Checkbox
                    checked={bankAccounts.includes(type)}
                    onCheckedChange={(checked) => {
                      const updated = checked
                        ? [...bankAccounts, type]
                        : bankAccounts.filter((v) => v !== type);
                      setValue("bankAccountTypes", updated);
                    }}
                  />
                  <label className="text-sm font-medium">{type}</label>
                </div>
              ))}
            </div>
            <FormMessage>{errors.bankAccountTypes?.message}</FormMessage>
          </FormItem>
        )}
      />

      {/* Account Numbers */}
      <FormField
        control={control}
        name="accountNumbers"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Account Numbers (optional)</FormLabel>
            <FormControl>
              <Textarea {...field} rows={2} />
            </FormControl>
          </FormItem>
        )}
      />

      {/* Current Loans */}
      <FormField
        control={control}
        name="currentLoans"
        render={() => (
          <FormItem>
            <FormLabel>Current Loans</FormLabel>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {loanTypes.map((loan) => (
                <div key={loan} className="flex items-center space-x-3">
                  <Checkbox
                    checked={loans.includes(loan)}
                    onCheckedChange={(checked) => {
                      const updated = checked
                        ? [...loans, loan]
                        : loans.filter((v) => v !== loan);
                      setValue("currentLoans", updated);
                    }}
                  />
                  <label className="text-sm font-medium">{loan}</label>
                </div>
              ))}
            </div>
          </FormItem>
        )}
      />

      {/* Credit Card Limits & Balances */}
      <FormField
        control={control}
        name="creditCardLimitsBalances"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Credit Card Limits & Balances (limit:balance, one per line)
            </FormLabel>
            <FormControl>
              <Textarea
                {...field}
                rows={5}
                placeholder="5000:1200\n10000:8500"
              />
            </FormControl>
            <p className="text-xs text-gray-500 mt-1">
              Example: 5000:1200 → $5,000 limit, $1,200 balance
            </p>
          </FormItem>
        )}
      />

      {/* Monthly Expenses, Assets, Liabilities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormField
          control={control}
          name="monthlyExpenses"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Monthly Expenses</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="totalAssets"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Assets</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="totalLiabilities"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Liabilities</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
