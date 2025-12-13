// src/pages/NewCustomer.tsx
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomerForm from "@/components/CustomerForm/CustomerForm";
import { useNavigate } from "react-router-dom";

export default function NewCustomer() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Button>
          <div className="text-right">
            <div className="flex items-center">
              <img
                src="logo.png"
                alt="dadeh kavan logo"
                className="w-10 h-10 mt-1"
              />
              <h1 className="text-3xl font-bold text-gray-800">
                Credit Score Application
              </h1>
            </div>
            <p className="text-gray-600">6-Step Member Credit Evaluation</p>
          </div>
        </div>

        {/* Main Form Card */}
        <Card className="shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-t-lg">
            <CardTitle className="text-2xl">
              New Member Credit Scoring
            </CardTitle>
            <CardDescription className="text-blue-100">
              Please complete all 6 steps to generate a credit score (0–900
              scale)
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8 pb-12">
            <CustomerForm />
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            All information is processed locally • Score calculated using
            rule-based engine • No data leaves your browser
          </p>
        </div>
      </div>
    </div>
  );
}
