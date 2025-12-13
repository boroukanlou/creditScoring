// src/components/CustomerForm/Step5.tsx
import { Input } from "@/components/ui/input";
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

export default function Step5() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Emergency Contact</h2>
      </div>

      <div className="max-w-2xl mx-auto bg-amber-50 border border-amber-200 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <FormField
            control={control}
            name="emergencyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Jane Smith" />
                </FormControl>
                <FormMessage>{errors.emergencyName?.message}</FormMessage>
              </FormItem>
            )}
          />

          {/* Relationship */}
          <FormField
            control={control}
            name="emergencyRelationship"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Relationship *</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Spouse">Spouse</SelectItem>
                      <SelectItem value="Parent">Parent</SelectItem>
                      <SelectItem value="Child">Child</SelectItem>
                      <SelectItem value="Friend">Friend</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage>
                  {errors.emergencyRelationship?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={control}
            name="emergencyPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone *</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="+1 (555) 123-4567" />
                </FormControl>
                <FormMessage>{errors.emergencyPhone?.message}</FormMessage>
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={control}
            name="emergencyEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email (optional)</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormMessage>{errors.emergencyEmail?.message}</FormMessage>
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
