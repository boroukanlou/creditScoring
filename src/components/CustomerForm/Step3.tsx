// src/components/CustomerForm/Step3.tsx
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import type { FormData } from "./CustomerForm";

export default function Step3() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Employment & Income
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current Employer */}
        <FormField
          control={control}
          name="currentEmployer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Employer *</FormLabel>
              <FormControl>
                <Input {...field} placeholder="ABC Corp" />
              </FormControl>
              <FormMessage>{errors.currentEmployer?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Job Title */}
        <FormField
          control={control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title *</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Software Engineer" />
              </FormControl>
              <FormMessage>{errors.jobTitle?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Work Address */}
        <FormField
          control={control}
          name="workAddress"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Work Address *</FormLabel>
              <FormControl>
                <Textarea {...field} rows={3} />
              </FormControl>
              <FormMessage>{errors.workAddress?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Work Phone */}
        <FormField
          control={control}
          name="workPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work Phone</FormLabel>
              <FormControl>
                <Input {...field} placeholder="(555) 123-9876" />
              </FormControl>
              <FormMessage>{errors.workPhone?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Employment Status */}
        <FormField
          control={control}
          name="employmentStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employment Status *</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Self-employed">Self-employed</SelectItem>
                    <SelectItem value="Unemployed">Unemployed</SelectItem>
                    <SelectItem value="Retired">Retired</SelectItem>
                    <SelectItem value="Student">Student</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage>{errors.employmentStatus?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Annual Income */}
        <FormField
          control={control}
          name="annualIncome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Annual Income (USD) *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder="75000"
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage>{errors.annualIncome?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Other Income */}
        <FormField
          control={control}
          name="otherIncome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Other Income (per year)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder="0"
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage>{errors.otherIncome?.message}</FormMessage>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
