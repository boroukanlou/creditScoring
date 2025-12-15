// src/components/CustomerForm/Step2.tsx
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

export default function Step2() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Contact Information
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Residential Address */}
        <FormField
          control={control}
          name="residentialAddress"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Residential Address *</FormLabel>
              <FormControl>
                <Textarea {...field} rows={3} />
              </FormControl>
              <FormMessage>{errors.residentialAddress?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* City */}
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City *</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>{errors.city?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* State / Province */}
        <FormField
          control={control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State / Province *</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>{errors.state?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* ZIP / Postal Code */}
        <FormField
          control={control}
          name="zip"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ZIP / Postal Code *</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>{errors.zip?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Mailing Address */}
        <FormField
          control={control}
          name="mailingAddress"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Mailing Address (if different)</FormLabel>
              <FormControl>
                <Textarea {...field} rows={3} />
              </FormControl>
              <FormMessage>{errors.mailingAddress?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Home Phone */}
        <FormField
          control={control}
          name="homePhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Home Phone</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>{errors.homePhone?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Mobile Phone */}
        <FormField
          control={control}
          name="mobilePhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Phone *</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage>{errors.mobilePhone?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Email Address */}
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input {...field} type="email" />
              </FormControl>
              <FormMessage>{errors.email?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Preferred Contact Method */}
        <FormField
          control={control}
          name="preferredContact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Contact Method</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Email">Email</SelectItem>
                    <SelectItem value="Mobile">Mobile</SelectItem>
                    <SelectItem value="Home Phone">Home Phone</SelectItem>
                    <SelectItem value="Mail">Mail</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage>{errors.preferredContact?.message}</FormMessage>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
