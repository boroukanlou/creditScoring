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
import { Activity } from "lucide-react";

export default function SystemStabilityReport() {
  return (
    <>
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <Activity className="w-7 h-7 text-primary" />
          <span>System Stability Report</span>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 mt-2">
          Comparison of actual vs. expected bad rates across score ranges with
          stability index
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {[
                  "Score Range",
                  "Actual %",
                  "Expected %",
                  "(A-E)",
                  "A/E",
                  "ln(A/E)",
                  "Index",
                ].map((title, idx, arr) => (
                  <TableHead
                    key={title}
                    className={`text-white font-semibold text-left py-3 px-5 whitespace-nowrap ${
                      idx === 0 ? "rounded-tl-lg" : ""
                    } ${idx === arr.length - 1 ? "rounded-tr-lg" : ""}`}
                  >
                    {title}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {[
                ["0-169", "7%", "8%", "-1%", "0.8750", "-0.1335", "0.0013"],
                ["170-179", "8%", "10%", "-2%", "0.8000", "-0.2231", "0.0045"],
                ["180-189", "7%", "9%", "-2%", "0.7778", "-0.2515", "0.0050"],
                ["190-199", "9%", "13%", "-4%", "0.6923", "-0.3677", "0.0147"],
                ["200-209", "11%", "13%", "-2%", "0.8462", "-0.1671", "0.0033"],
                ["210-219", "11%", "10%", "1%", "1.1000", "0.0953", "0.0010"],
                ["220-229", "10%", "9%", "1%", "1.1111", "0.1054", "0.0011"],
                ["230-239", "12%", "10%", "2%", "1.2000", "0.1823", "0.0036"],
                ["240-249", "11%", "11%", "0%", "1.0000", "0.0000", "0.0000"],
                ["250+", "14%", "9%", "5%", "1.5556", "0.4418", "0.0221"],
              ].map((row) => (
                <TableRow
                  key={row[0]}
                  className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200"
                >
                  {/* Score Range */}
                  <TableCell className="font-semibold text-primary py-3 px-5">
                    {row[0]}
                  </TableCell>

                  {/* Other values */}
                  {row.slice(1).map((cell, i) => (
                    <TableCell
                      key={i}
                      className="py-3 px-5 text-left text-gray-900"
                    >
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}

              <TableRow className="border-t border-gray-300 hover:bg-primary/5 transition-colors">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Total
                </TableCell>
                <TableCell className="py-3 px-5 text-gray-900">-</TableCell>
                <TableCell className="py-3 px-5 text-gray-900">-</TableCell>
                <TableCell className="py-3 px-5 text-gray-900">-</TableCell>
                <TableCell className="py-3 px-5 text-gray-900">-</TableCell>
                <TableCell className="py-3 px-5 text-gray-900">-</TableCell>
                <TableCell className="py-3 px-5 font-semibold text-gray-900">
                  Index = 0.0537
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
