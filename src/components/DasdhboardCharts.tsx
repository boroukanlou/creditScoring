// src/components/DashboardCharts.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as BarTooltip,
  Legend as BarLegend,
} from "recharts";
import { useCustomersStore } from "@/stores/customersStore";

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"];

export default function DashboardCharts() {
  const customers = useCustomersStore((state) => state.customers);

  // داده‌های Pie Chart — توزیع Tier
  const tierData = [
    {
      name: "Tier 1 (Excellent)",
      value: customers.filter((c) => c.score.tier === 1).length,
    },
    {
      name: "Tier 2 (Good)",
      value: customers.filter((c) => c.score.tier === 2).length,
    },
    {
      name: "Tier 3 (Fair)",
      value: customers.filter((c) => c.score.tier === 3).length,
    },
    {
      name: "Tier 4 (Poor)",
      value: customers.filter((c) => c.score.tier === 4).length,
    },
  ].filter((item) => item.value > 0);

  // داده‌های Bar Chart — توزیع تصمیم
  const decisionData = [
    {
      decision: "Approved",
      count: customers.filter((c) => c.score.decision === "Approve").length,
    },
    {
      decision: "Conditional",
      count: customers.filter(
        (c) => c.score.decision === "Approve with Conditions"
      ).length,
    },
    {
      decision: "Referred",
      count: customers.filter((c) => c.score.decision === "Refer").length,
    },
    {
      decision: "Declined",
      count: customers.filter((c) => c.score.decision === "Decline").length,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      {/* Pie Chart - Risk Tier Distribution */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Risk Tier Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          {tierData.length === 0 ? (
            <p className="text-center text-gray-500 py-10">No data yet</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={tierData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {tierData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

      {/* Bar Chart - Decision Distribution */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Decision Outcomes</CardTitle>
        </CardHeader>
        <CardContent>
          {decisionData.every((d) => d.count === 0) ? (
            <p className="text-center text-gray-500 py-10">No decisions yet</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={decisionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="decision" />
                <YAxis />
                <BarTooltip />
                <BarLegend />
                <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
