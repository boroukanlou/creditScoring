// src/utils/scoringEngine.ts
import type { FormData } from "@/components/CustomerForm/CustomerForm";

export interface ScoreResult {
  score: number; // 0–900
  tier: 1 | 2 | 3 | 4;
  tierLabel: string;
  riskLevel: "Excellent" | "Good" | "Fair" | "Poor";
  decision: "Approve" | "Approve with Conditions" | "Refer" | "Decline";
  details: {
    feature: string;
    value: string | number;
    impact: "positive" | "negative" | "neutral";
    points: number;
  }[];
}

export const calculateScore = (data: FormData): ScoreResult => {
  let score = 450; // Base score
  const details: ScoreResult["details"] = [];

  // 1. Age calculation from DOB
  const birthDate = new Date(data.dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  // Age scoring
  let agePoints = 0;
  if (age < 25) agePoints = -40;
  else if (age < 35) agePoints = 0;
  else if (age < 55) agePoints = 30;
  else agePoints = 50;
  score += agePoints;
  details.push({
    feature: "Age",
    value: age,
    impact: agePoints > 0 ? "positive" : agePoints < 0 ? "negative" : "neutral",
    points: agePoints,
  });

  // 2. Annual Income
  const totalAnnualIncome = data.annualIncome + (data.otherIncome || 0);
  let incomePoints = 0;
  if (totalAnnualIncome >= 150000) incomePoints = 80;
  else if (totalAnnualIncome >= 100000) incomePoints = 50;
  else if (totalAnnualIncome >= 70000) incomePoints = 20;
  else if (totalAnnualIncome >= 40000) incomePoints = -10;
  else incomePoints = -50;
  score += incomePoints;
  details.push({
    feature: "Annual Income",
    value: `$${totalAnnualIncome.toLocaleString()}`,
    impact: incomePoints > 0 ? "positive" : "negative",
    points: incomePoints,
  });

  // 3. DTI (Debt-to-Income Ratio)
  const monthlyIncome = totalAnnualIncome / 12;
  const monthlyDebt = data.monthlyExpenses + (data.totalLiabilities / 12 || 0);
  const dti = monthlyIncome > 0 ? monthlyDebt / monthlyIncome : 999;

  let dtiPoints = 0;
  if (dti < 0.2) dtiPoints = 100;
  else if (dti < 0.36) dtiPoints = 60;
  else if (dti < 0.43) dtiPoints = 20;
  else if (dti < 0.5) dtiPoints = -30;
  else dtiPoints = -100;
  score += dtiPoints;
  details.push({
    feature: "DTI Ratio",
    value: dti.toFixed(2),
    impact: dtiPoints > 0 ? "positive" : "negative",
    points: dtiPoints,
  });

  // 4. Credit Utilization
  let utilization = 0;
  if (data.creditCardLimitsBalances) {
    const lines = data.creditCardLimitsBalances.trim().split("\n");
    let totalLimit = 0;
    let totalBalance = 0;
    lines.forEach((line) => {
      const [limit, balance] = line
        .split(":")
        .map((v) => parseFloat(v.trim()) || 0);
      totalLimit += limit;
      totalBalance += balance;
    });
    utilization = totalLimit > 0 ? totalBalance / totalLimit : 0;
  }

  let utilPoints = 0;
  if (utilization < 0.1) utilPoints = 100;
  else if (utilization < 0.3) utilPoints = 80;
  else if (utilization < 0.5) utilPoints = 20;
  else if (utilization < 0.7) utilPoints = -50;
  else utilPoints = -120;
  score += utilPoints;
  details.push({
    feature: "Credit Utilization",
    value: `${(utilization * 100).toFixed(1)}%`,
    impact: utilPoints > 0 ? "positive" : "negative",
    points: utilPoints,
  });

  // 5. Net Worth
  const netWorth = data.totalAssets - data.totalLiabilities;
  let netWorthPoints = 0;
  if (netWorth > 500000) netWorthPoints = 60;
  else if (netWorth > 100000) netWorthPoints = 40;
  else if (netWorth > 0) netWorthPoints = 20;
  else netWorthPoints = -40;
  score += netWorthPoints;
  details.push({
    feature: "Net Worth",
    value: `$${netWorth.toLocaleString()}`,
    impact: netWorthPoints > 0 ? "positive" : "negative",
    points: netWorthPoints,
  });

  // 6. Employment Status
  let empPoints = 0;
  switch (data.employmentStatus) {
    case "Full-time":
      empPoints = 50;
      break;
    case "Part-time":
      empPoints = 20;
      break;
    case "Self-employed":
      empPoints = 30;
      break;
    case "Retired":
      empPoints = 10;
      break;
    default:
      empPoints = -60;
  }
  score += empPoints;
  details.push({
    feature: "Employment Status",
    value: data.employmentStatus,
    impact: empPoints > 0 ? "positive" : "negative",
    points: empPoints,
  });

  // 7. Number of Dependents (negative impact)
  const depPoints = data.dependents > 3 ? -30 : data.dependents > 1 ? -10 : 0;
  score += depPoints;
  details.push({
    feature: "Dependents",
    value: data.dependents,
    impact: depPoints < 0 ? "negative" : "neutral",
    points: depPoints,
  });

  // Final score clamp
  score = Math.max(300, Math.min(900, Math.round(score)));

  // Tier & Decision Logic
  let tier: 1 | 2 | 3 | 4;
  let tierLabel: string;
  let riskLevel: ScoreResult["riskLevel"];
  let decision: ScoreResult["decision"];

  if (score >= 760) {
    tier = 1;
    tierLabel = "Tier 1";
    riskLevel = "Excellent";
    decision = "Approve";
  } else if (score >= 700) {
    tier = 2;
    tierLabel = "Tier 2";
    riskLevel = "Good";
    decision = "Approve with Conditions";
  } else if (score >= 620) {
    tier = 3;
    tierLabel = "Tier 3";
    riskLevel = "Fair";
    decision = "Refer";
  } else {
    tier = 4;
    tierLabel = "Tier 4";
    riskLevel = "Poor";
    decision = "Decline";
  }

  return {
    score,
    tier,
    tierLabel,
    riskLevel,
    decision,
    details,
  };
};
