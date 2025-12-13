// // src/components/CustomerForm/CustomerForm.tsx

// import { useState } from "react";
// import { useForm, FormProvider } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { useToast } from "@/components/ui/use-toast";
// import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // Steps
// import Step1 from "./Step1";
// import Step2 from "./Step2";
// import Step3 from "./Step3";
// import Step4 from "./Step4";
// import Step5 from "./Step5";

// // Utils & Stores
// import { calculateScore } from "@/utils/scoringEngine";
// import { useCustomersStore } from "@/stores/customersStore";
// import ScoreCardResult from "@/components/ScoreCardResult";
// import { sanitizeData } from "@/utils/sanitize";
// import StepPreview from "./StepPreview";

// // ——————————————————————
// // Zod Schema
// // ——————————————————————
// export const formSchema = z.object({
//   fullName: z.string().min(1, "Full Name is required"),
//   nickname: z.string().optional().default(""),
//   dateOfBirth: z.string().min(1, "Date of Birth is required"),
//   nationalId: z.string().min(1, "National ID / SSN is required"),
//   gender: z
//     .enum(["Male", "Female", "Other", "Prefer not to say"])
//     .default("Other"),
//   maritalStatus: z
//     .enum(["Single", "Married", "Divorced", "Widowed", "Other"])
//     .default("Other"),
//   dependents: z.coerce.number().min(0).default(0),

//   residentialAddress: z.string().min(1),
//   city: z.string().min(1),
//   state: z.string().min(1),
//   zip: z.string().min(1),
//   mailingAddress: z.string().optional().default(""),
//   homePhone: z.string().optional().default(""),
//   mobilePhone: z.string().min(1),
//   email: z.string().email().or(z.literal("")),
//   preferredContact: z
//     .enum(["Email", "Mobile", "Home Phone", "Mail"])
//     .default("Mobile"),

//   currentEmployer: z.string().min(1),
//   jobTitle: z.string().min(1),
//   workAddress: z.string().min(1),
//   workPhone: z.string().optional().default(""),
//   employmentStatus: z
//     .enum([
//       "Full-time",
//       "Part-time",
//       "Self-employed",
//       "Unemployed",
//       "Retired",
//       "Student",
//     ])
//     .default("Full-time"),
//   annualIncome: z.coerce.number().min(0),
//   otherIncome: z.coerce.number().min(0),

//   bankAccountTypes: z.array(z.string()).min(1),
//   accountNumbers: z.string().optional().default(""),
//   currentLoans: z.array(z.string()).optional().default([""]),
//   creditCardLimitsBalances: z.string().optional().default(""),
//   monthlyExpenses: z.coerce.number().min(0),
//   totalAssets: z.coerce.number().min(0),
//   totalLiabilities: z.coerce.number().min(0),

//   emergencyName: z.string().min(1),
//   emergencyRelationship: z
//     .enum(["Spouse", "Parent", "Child", "Friend", "Other"])
//     .default("Other"),
//   emergencyPhone: z.string().min(1),
//   emergencyEmail: z.string().email().optional().or(z.literal("")),
// });

// export type FormData = z.infer<typeof formSchema>;

// const steps = [
//   "Personal Information",
//   "Contact Information",
//   "Employment & Income",
//   "Financial Information",
//   "Emergency Contact",
//   // "Review Information",
// ];

// export default function CustomerForm() {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const { toast } = useToast();
//   const navigate = useNavigate();
//   const addCustomer = useCustomersStore((state) => state.addCustomer);

//   const methods = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     mode: "onSubmit",
//     defaultValues: {
//       gender: "Prefer not to say",
//       maritalStatus: "Single",
//       employmentStatus: "Full-time",
//       preferredContact: "Mobile",
//       emergencyRelationship: "Other",
//       bankAccountTypes: [],
//       currentLoans: [],
//       annualIncome: 0,
//       otherIncome: 0,
//       monthlyExpenses: 0,
//       totalAssets: 0,
//       totalLiabilities: 0,
//       email: "",
//       mailingAddress: "",
//       homePhone: "",
//       workPhone: "",
//       accountNumbers: "",
//       creditCardLimitsBalances: "",
//       emergencyEmail: "",
//     },
//   });

//   // Handle Submit
//   const onSubmit = (data: FormData) => {
//     const cleanedData = sanitizeData(data);

//     const result = calculateScore(cleanedData);
//     addCustomer({ data: cleanedData, score: result });

//     toast({
//       title: "Score Calculated Successfully!",
//       description: `Credit Score: ${result.score}/900 • Tier ${result.tier} • ${result.decision}`,
//     });

//     setShowResult(true);
//   };

//   // Show Result
//   if (showResult) {
//     const cleaned = sanitizeData(methods.getValues());
//     const result = calculateScore(cleaned);

//     return (
//       <div className="max-w-5xl mx-auto space-y-8">
//         <ScoreCardResult result={result} />

//         <div className="flex justify-center gap-6">
//           <Button size="lg" onClick={() => navigate("/reports")}>
//             View All Reports
//           </Button>

//           <Button size="lg" variant="outline" onClick={() => navigate("/")}>
//             Back to Dashboard
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <FormProvider {...methods}>
//       <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-10">
//         {/* Progress Bar */}
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">
//               Step {currentStep + 1} of {steps.length}
//             </h2>
//             <span className="text-muted-foreground">{steps[currentStep]}</span>
//           </div>

//           <Progress
//             value={((currentStep + 1) / steps.length) * 100}
//             className="h-3"
//           />
//         </div>

//         {/* Step Content */}
//         <Card className="shadow-lg">
//           <CardContent className="pt-10 pb-12">
//             {currentStep === 0 && <Step1 />}
//             {currentStep === 1 && <Step2 />}
//             {currentStep === 2 && <Step3 />}
//             {currentStep === 3 && <Step4 />}
//             {currentStep === 4 && <Step5 />}
//             {/* {currentStep === 5 && <StepPreview />} */}

//             {/* Navigation */}
//             <div className="flex justify-between mt-12">
//               <Button
//                 type="button"
//                 variant="outline"
//                 size="lg"
//                 onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
//                 disabled={currentStep === 0}
//               >
//                 <ChevronLeft className="w-5 h-5 mr-2" />
//                 Previous
//               </Button>

//               {currentStep === steps.length - 1 ? (
//                 <Button type="submit" size="lg">
//                   <CheckCircle className="w-5 h-5 mr-2" />
//                   Calculate Credit Score
//                 </Button>
//               ) : (
//                 <Button
//                   type="button"
//                   size="lg"
//                   onClick={() => setCurrentStep((s) => s + 1)}
//                 >
//                   Next
//                   <ChevronRight className="w-5 h-5 ml-2" />
//                 </Button>
//               )}
//             </div>
//           </CardContent>
//         </Card>
//       </form>
//     </FormProvider>
//   );
// }

// src/components/CustomerForm/CustomerForm.tsx

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Steps
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

// Utils & Stores
import { calculateScore, type ScoreResult } from "@/utils/scoringEngine";
import { useCustomersStore } from "@/stores/customersStore";
import ScoreCardResult from "@/components/ScoreCardResult";
import { sanitizeData } from "@/utils/sanitize";
import StepPreview from "./StepPreview";

// ——————————————————————
// Zod Schema
// ——————————————————————
export const formSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  nickname: z.string().optional().default(""),
  dateOfBirth: z.string().min(1, "Date of Birth is required"),
  nationalId: z.string().min(1, "National ID / SSN is required"),
  gender: z
    .enum(["Male", "Female", "Other", "Prefer not to say"])
    .default("Other"),
  maritalStatus: z
    .enum(["Single", "Married", "Divorced", "Widowed", "Other"])
    .default("Other"),
  dependents: z.coerce.number().min(0).default(0),

  residentialAddress: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  zip: z.string().min(1),
  mailingAddress: z.string().optional().default(""),
  homePhone: z.string().optional().default(""),
  mobilePhone: z.string().min(1),
  email: z.string().email().or(z.literal("")),
  preferredContact: z
    .enum(["Email", "Mobile", "Home Phone", "Mail"])
    .default("Mobile"),

  currentEmployer: z.string().min(1),
  jobTitle: z.string().min(1),
  workAddress: z.string().min(1),
  workPhone: z.string().optional().default(""),
  employmentStatus: z
    .enum([
      "Full-time",
      "Part-time",
      "Self-employed",
      "Unemployed",
      "Retired",
      "Student",
    ])
    .default("Full-time"),
  annualIncome: z.coerce.number().min(0),
  otherIncome: z.coerce.number().min(0),

  bankAccountTypes: z.array(z.string()).min(1),
  accountNumbers: z.string().optional().default(""),
  currentLoans: z.array(z.string()).optional().default([""]),
  creditCardLimitsBalances: z.string().optional().default(""),
  monthlyExpenses: z.coerce.number().min(0),
  totalAssets: z.coerce.number().min(0),
  totalLiabilities: z.coerce.number().min(0),

  emergencyName: z.string().min(1),
  emergencyRelationship: z
    .enum(["Spouse", "Parent", "Child", "Friend", "Other"])
    .default("Other"),
  emergencyPhone: z.string().min(1),
  emergencyEmail: z.string().email().optional().or(z.literal("")),
});

export type FormData = z.infer<typeof formSchema>;

const steps = [
  "Personal Information",
  "Contact Information",
  "Employment & Income",
  "Financial Information",
  "Emergency Contact",
  // "Review Information",
];

export default function CustomerForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [savedResult, setSavedResult] = useState<ScoreResult | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const addCustomer = useCustomersStore((state) => state.addCustomer);

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      gender: "Prefer not to say",
      maritalStatus: "Single",
      employmentStatus: "Full-time",
      preferredContact: "Mobile",
      emergencyRelationship: "Other",
      bankAccountTypes: [],
      currentLoans: [],
      annualIncome: 0,
      otherIncome: 0,
      monthlyExpenses: 0,
      totalAssets: 0,
      totalLiabilities: 0,
      email: "",
      mailingAddress: "",
      homePhone: "",
      workPhone: "",
      accountNumbers: "",
      creditCardLimitsBalances: "",
      emergencyEmail: "",
    },
  });

  // Handle Submit
  const onSubmit = (data: FormData) => {
    const cleanedData = sanitizeData(data);

    const result = calculateScore(cleanedData);
    addCustomer({ data: cleanedData, score: result });

    // Save the exact result we stored to avoid re-calculation mismatches
    setSavedResult(result);

    toast({
      title: "Score Calculated Successfully!",
      description: `Credit Score: ${result.score}/900 • Tier ${result.tier} • ${result.decision}`,
    });

    setShowResult(true);
  };

  // Show Result
  if (showResult) {
    // Use savedResult (the same one we added to store) to ensure consistency.
    const resultToShow =
      savedResult ??
      calculateScore(sanitizeData(methods.getValues() as FormData));

    return (
      <div className="max-w-5xl mx-auto space-y-8">
        <ScoreCardResult result={resultToShow} />
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-7">
        {/* Progress Bar */}
        <div className="bg-white rounded-xl shadow-md p-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              Step {currentStep + 1} of {steps.length}
            </h2>
            <span className="text-muted-foreground">{steps[currentStep]}</span>
          </div>

          <Progress
            value={((currentStep + 1) / steps.length) * 100}
            className="h-3"
          />
        </div>

        {/* Step Content */}
        <Card className="shadow-lg">
          <CardContent className="pt-10 pb-12">
            {currentStep === 0 && <Step1 />}
            {currentStep === 1 && <Step2 />}
            {currentStep === 2 && <Step3 />}
            {currentStep === 3 && <Step4 />}
            {currentStep === 4 && <Step5 />}
            {/* {currentStep === 5 && <StepPreview />} */}

            {/* Navigation */}
            <div className="flex justify-between mt-12">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Previous
              </Button>

              {currentStep === steps.length - 1 ? (
                <Button type="submit" size="lg">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Calculate Credit Score
                </Button>
              ) : (
                <Button
                  type="button"
                  size="lg"
                  onClick={() => setCurrentStep((s) => s + 1)}
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </form>
    </FormProvider>
  );
}
