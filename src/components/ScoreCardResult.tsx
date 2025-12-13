// src/components/ScoreCardResult.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  Info,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import type { ScoreResult } from "@/utils/scoringEngine";
import { useNavigate } from "react-router-dom";

interface ScoreCardResultProps {
  result: ScoreResult;
}

const getTierColor = (tier: number) => {
  switch (tier) {
    case 1:
      return "bg-green-500 text-white";
    case 2:
      return "bg-blue-500 text-white";
    case 3:
      return "bg-amber-500 text-white";
    case 4:
      return "bg-red-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

const getDecisionIcon = (decision: string) => {
  switch (decision) {
    case "Approve":
      return <CheckCircle2 className="w-12 h-12 text-green-600" />;
    case "Approve with Conditions":
      return <AlertCircle className="w-12 h-12 text-blue-600" />;
    case "Refer":
      return <Info className="w-12 h-12 text-amber-600" />;
    case "Decline":
      return <XCircle className="w-12 h-12 text-red-600" />;
    default:
      return null;
  }
};

export default function ScoreCardResult({ result }: ScoreCardResultProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main Score Card */}
        <Card className="shadow-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
            <CardTitle className="text-3xl flex items-center justify-between">
              <span>Credit Score Result</span>
              {getDecisionIcon(result.decision)}
            </CardTitle>
            <CardDescription className="text-blue-100 text-lg">
              Evaluation completed on{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-10 pb-8">
            <div className="text-center space-y-6">
              {/* Score Display */}
              <div>
                <div className="text-8xl font-bold text-gray-800">
                  {result.score}
                  <span className="text-4xl text-gray-500"> / 900</span>
                </div>
                <p className="text-xl text-gray-600 mt-2">
                  Credit Standard Score
                </p>
              </div>

              {/* Tier Badge */}
              <div className="flex justify-center">
                <Badge
                  className={`text-2xl px-8 py-4 ${getTierColor(result.tier)}`}
                >
                  {result.tierLabel} — {result.riskLevel} Risk
                </Badge>
              </div>

              {/* Decision */}
              <div className="bg-gray-50 rounded-xl p-6 mt-8">
                <p className="text-sm text-gray-600 uppercase tracking-wider">
                  Underwriting Decision
                </p>
                <p className="text-4xl font-bold mt-2">
                  {result.decision === "Approve" && (
                    <span className="text-green-600">Approved</span>
                  )}
                  {result.decision === "Approve with Conditions" && (
                    <span className="text-blue-600">
                      Approved with Conditions
                    </span>
                  )}
                  {result.decision === "Refer" && (
                    <span className="text-amber-600">
                      Referred to Underwriting
                    </span>
                  )}
                  {result.decision === "Decline" && (
                    <span className="text-red-600">Declined</span>
                  )}
                </p>
              </div>
            </div>

            {/* Top Reasons */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Key Factors Affecting Your Score
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {result.details
                  .sort((a, b) => Math.abs(b.points) - Math.abs(a.points))
                  .slice(0, 6)
                  .map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-5 rounded-lg border-2 ${
                        item.impact === "positive"
                          ? "border-green-200 bg-green-50"
                          : item.impact === "negative"
                          ? "border-red-200 bg-red-50"
                          : "border-gray-200 bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {item.impact === "positive" && (
                          <TrendingUp className="w-6 h-6 text-green-600" />
                        )}
                        {item.impact === "negative" && (
                          <TrendingDown className="w-6 h-6 text-red-600" />
                        )}
                        {item.impact === "neutral" && (
                          <div className="w-6 h-6 rounded-full bg-gray-400" />
                        )}
                        <div>
                          <p className="font-semibold text-lg">
                            {item.feature}
                          </p>
                          <p className="text-sm text-gray-600">
                            Value: {item.value}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`text-2xl font-bold ${
                            item.points > 0
                              ? "text-green-600"
                              : item.points < 0
                              ? "text-red-600"
                              : "text-gray-600"
                          }`}
                        >
                          {item.points > 0 ? "+" : ""}
                          {item.points}
                        </p>
                        <p className="text-xs text-gray-500">points</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-6 mt-12">
              <Button size="lg" onClick={() => navigate("/reports")}>
                View All Reports
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/")}>
                Back to Dashboard
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.print()}
              >
                Print Report
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-12">
          <p>
            Credit Scoring System • Rule-based Engine v1.0 • All calculations
            performed locally
          </p>
          <p className="mt-1">For questions, contact underwriting department</p>
        </div>
      </div>
    </div>
  );
}
