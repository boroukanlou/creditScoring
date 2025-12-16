import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

export default function ScorecardCharacteristicAnalysis() {
  return (
    <>
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <BarChart3 className="w-7 h-7 text-primary" />
          <span>Scorecard Characteristic Analysis</span>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 mt-2">
          Performance of the "Age" characteristic: expected vs. actual bad rates
          with allocated points and index
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {["Age", "Expected %", "Actual %", "Points", "Index"].map(
                  (title, idx) => (
                    <TableHead
                      key={idx}
                      className={`text-white font-semibold text-left py-3 px-5 whitespace-nowrap ${
                        idx === 0 ? "first:rounded-tl-lg" : ""
                      } ${idx === 4 ? "last:rounded-tr-lg" : ""}`}
                    >
                      {title.includes(" ")
                        ? title
                            .split(" ")
                            .map((t, i) => <span key={i}>{t}</span>)
                        : title}
                    </TableHead>
                  )
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  age: "18-24",
                  expected: "12%",
                  actual: "21%",
                  points: "10",
                  index: "0.9",
                },
                {
                  age: "25-29",
                  expected: "19%",
                  actual: "25%",
                  points: "15",
                  index: "0.9",
                },
                {
                  age: "30-37",
                  expected: "32%",
                  actual: "28%",
                  points: "25",
                  index: "-1",
                },
                {
                  age: "38-45",
                  expected: "12%",
                  actual: "6%",
                  points: "28",
                  index: "-1.68",
                },
                {
                  age: "46+",
                  expected: "25%",
                  actual: "20%",
                  points: "35",
                  index: "-1.75",
                },
              ].map((row) => (
                <TableRow
                  key={row.age}
                  className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200"
                >
                  <TableCell className="font-semibold text-primary py-3 px-5">
                    {row.age}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.expected}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.actual}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.points}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.index}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow className="font-bold bg-muted hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="py-3 px-5">Index</TableCell>
                <TableCell className="text-gray-800 py-3 px-5">-</TableCell>
                <TableCell className="text-gray-800 py-3 px-5">-</TableCell>
                <TableCell className="text-gray-800 py-3 px-5">-</TableCell>
                <TableCell className="text-gray-800 py-3 px-5">-2.63</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
