import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  { score: 202, approval: 72, bad: 7.0 },
  { score: 203, approval: 70, bad: 6.8 },
  { score: 204, approval: 69, bad: 6.6 },
  { score: 205, approval: 67, bad: 6.3 },
  { score: 206, approval: 65, bad: 6.0 },
  { score: 207, approval: 64, bad: 5.7 },
  { score: 208, approval: 62, bad: 5.4 },
  { score: 209, approval: 61, bad: 5.1 },
  { score: 210, approval: 59, bad: 4.8 },
  { score: 211, approval: 58, bad: 4.5 },
  { score: 212, approval: 56, bad: 4.1 },
  { score: 213, approval: 54, bad: 3.7 },
  { score: 214, approval: 52, bad: 3.2 },
  { score: 215, approval: 51, bad: 2.7 },
  { score: 216, approval: 49, bad: 2.2 },
  { score: 217, approval: 47, bad: 1.8 },
  { score: 218, approval: 46, bad: 1.4 },
  { score: 219, approval: 45, bad: 1.0 },
];

export default function TradeoffChart() {
  return (
    <>
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-slate-900">
          Tradeoff Chart
        </CardTitle>
        <CardDescription className="text-sm text-slate-600 max-w-2xl">
          Relationship between approval rate and credit risk (bad rate) across
          score cutoffs
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="w-full h-[520px] rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 shadow-sm">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 24, right: 64, left: 64, bottom: 72 }}
            >
              <CartesianGrid
                strokeDasharray="4 6"
                stroke="#e5e7eb"
                strokeOpacity={0.7}
              />

              <XAxis
                dataKey="score"
                tick={{ fontSize: 12, fill: "#475569", fontWeight: 500 }}
                axisLine={{ stroke: "#cbd5f5" }}
                tickLine={false}
                label={{
                  value: "Score",
                  position: "insideBottom",
                  offset: -20,
                  style: {
                    fontSize: 14,
                    fontWeight: 600,
                    fill: "#334155",
                  },
                }}
              />

              <YAxis
                yAxisId="approval"
                orientation="left"
                domain={[0, 80]}
                ticks={[0, 20, 40, 60, 80]}
                tick={{ fontSize: 12, fill: "#475569" }}
                axisLine={{ stroke: "#2A4491", strokeWidth: 2 }}
                tickLine={false}
                label={{
                  value: "Approval Rate (%)",
                  angle: -90,
                  position: "insideLeft",
                  offset: -12,
                  style: {
                    fontSize: 14,
                    fontWeight: 600,
                    fill: "#2A4491",
                  },
                }}
              />

              <YAxis
                yAxisId="bad"
                orientation="right"
                domain={[0, 8]}
                ticks={[0, 2, 4, 6, 8]}
                tick={{ fontSize: 12, fill: "#475569" }}
                axisLine={{ stroke: "#64748b", strokeWidth: 2 }}
                tickLine={false}
                label={{
                  value: "Bad Rate (%)",
                  angle: 90,
                  position: "insideRight",
                  offset: -12,
                  style: {
                    fontSize: 14,
                    fontWeight: 600,
                    fill: "#475569",
                  },
                }}
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "10px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  fontSize: "13px",
                }}
                labelStyle={{
                  fontWeight: 600,
                  color: "#0f172a",
                }}
                formatter={(value: number) => `${value}%`}
              />

              <Legend
                verticalAlign="bottom"
                height={56}
                iconType="circle"
                wrapperStyle={{
                  paddingTop: "28px",
                  fontSize: "13px",
                  color: "#334155",
                }}
              />

              <Line
                yAxisId="approval"
                type="monotone"
                dataKey="approval"
                stroke="#2A4491"
                strokeWidth={3.5}
                dot={{ r: 6, fill: "#2A4491" }}
                activeDot={{ r: 8 }}
                name="Approval Rate"
              />

              <Line
                yAxisId="bad"
                type="monotone"
                dataKey="bad"
                stroke="#64748b"
                strokeWidth={2.5}
                dot={{ r: 5, fill: "#64748b" }}
                name="Bad Rate"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </>
  );
}
