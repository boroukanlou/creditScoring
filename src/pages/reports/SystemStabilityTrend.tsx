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
import { TrendingUp } from "lucide-react";

const data = [
  { score: "0-169", actual: 9, expected: 10, actual3m: 8.5, actual6m: 9 },
  { score: "170-179", actual: 7, expected: 10, actual3m: 7.5, actual6m: 8 },
  { score: "180-189", actual: 6.5, expected: 9, actual3m: 6, actual6m: 7 },
  { score: "190-199", actual: 7, expected: 9, actual3m: 6.5, actual6m: 7.5 },
  {
    score: "200-209",
    actual: 11,
    expected: 11,
    actual3m: 10.5,
    actual6m: 11.5,
  },
  {
    score: "210-219",
    actual: 12,
    expected: 11,
    actual3m: 11.5,
    actual6m: 12.5,
  },
  { score: "220-229", actual: 11, expected: 10, actual3m: 11, actual6m: 11.5 },
  { score: "230-239", actual: 10, expected: 9, actual3m: 9.5, actual6m: 10 },
  { score: "240-249", actual: 9, expected: 9, actual3m: 8.5, actual6m: 9 },
  { score: "250+", actual: 14, expected: 9, actual3m: 13, actual6m: 14 },
];

const SquareDot = (props: any) => {
  const { cx, cy, stroke, fill } = props;
  return (
    <rect
      x={cx - 5}
      y={cy - 5}
      width={10}
      height={10}
      fill={fill}
      stroke={stroke}
      strokeWidth={2}
    />
  );
};

const CrossDot = (props: any) => {
  const { cx, cy, stroke } = props;
  return (
    <g>
      <line
        x1={cx - 6}
        y1={cy - 6}
        x2={cx + 6}
        y2={cy + 6}
        stroke={stroke}
        strokeWidth={3}
      />
      <line
        x1={cx - 6}
        y1={cy + 6}
        x2={cx + 6}
        y2={cy - 6}
        stroke={stroke}
        strokeWidth={3}
      />
    </g>
  );
};

export default function SystemStabilityTrend() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <span>System Stability Trend</span>
        </CardTitle>
        <CardDescription className="text-base">
          Actual vs. expected bad rates over time (current, 3 months, 6 months)
          by score range
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="w-full h-[520px] p-6 bg-white border-2 border-gray-300 rounded-xl shadow-lg">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 40, left: 40, bottom: 80 }}
            >
              <CartesianGrid
                strokeDasharray="4 4"
                stroke="#e5e7eb"
                strokeOpacity={0.7}
              />

              <XAxis
                dataKey="score"
                angle={-45}
                textAnchor="end"
                height={100}
                tick={{ fontSize: 13, fill: "#374151", fontWeight: 600 }}
                axisLine={{ stroke: "#6b7280", strokeWidth: 1 }}
                tickLine={{ stroke: "#d1d5db" }}
              />

              <YAxis
                domain={[0, 16]}
                ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16]}
                label={{
                  value: "%",
                  angle: -90,
                  position: "insideLeft",
                  style: { fontSize: 16, fontWeight: 600, fill: "#374151" },
                }}
                tick={{ fontSize: 13, fill: "#374151", fontWeight: 500 }}
                axisLine={{ stroke: "#6b7280", strokeWidth: 1 }}
                tickLine={{ stroke: "#d1d5db" }}
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
                labelStyle={{ fontWeight: "bold", color: "#111827" }}
                formatter={(value: number) => `${value}%`}
              />

              <Legend
                verticalAlign="bottom"
                height={60}
                wrapperStyle={{ paddingTop: "20px" }}
                iconSize={16}
              />

              <Line
                type="monotone"
                dataKey="actual"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ fill: "#10b981", r: 6 }}
                name="Actual %"
              />

              <Line
                type="monotone"
                dataKey="expected"
                stroke="#3b82f6"
                strokeWidth={3}
                strokeDasharray="6 6"
                dot={<SquareDot fill="#ffffff" stroke="#3b82f6" />}
                name="Expected %"
              />

              <Line
                type="monotone"
                dataKey="actual3m"
                stroke="#e31809"
                strokeWidth={3}
                dot={{ fill: "#e31809", r: 6 }}
                name="Actual - 3 mth"
              />

              <Line
                type="monotone"
                dataKey="actual6m"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={<CrossDot stroke="#8b5cf6" />}
                name="Actual - 6 Mths"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </>
  );
}
