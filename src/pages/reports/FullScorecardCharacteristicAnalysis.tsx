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
import { PieChartIcon } from "lucide-react";

export default function FullScorecardCharacteristicAnalysis() {
  return (
    <>
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <PieChartIcon className="w-7 h-7 text-primary" />
          <span>Full Scorecard Characteristic Analysis</span>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 mt-2">
          Detailed performance of all characteristics in the final scorecard:
          expected vs. actual bad rates, points allocated, and index
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 space-y-12">
        <div className="overflow-x-auto">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Age & Number of Delinquencies
          </h3>
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                <TableHead
                  rowSpan={2}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap rounded-tl-lg"
                >
                  Age
                </TableHead>
                <TableHead
                  colSpan={4}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center"
                >
                  Age Characteristic
                </TableHead>
                <TableHead
                  colSpan={5}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center rounded-tr-lg"
                >
                  # Delq Characteristic
                </TableHead>
              </TableRow>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {[
                  "Expected %",
                  "Actual %",
                  "Points",
                  "Index",
                  "# Delq",
                  "Expected %",
                  "Actual %",
                  "Points",
                  "Index",
                ].map((title, idx) => (
                  <TableHead
                    key={idx}
                    className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center"
                  >
                    {title}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  18-24
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  12%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  21%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  10
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.9
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  80%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  65%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  45
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -6.75
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  25-29
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  19%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  25%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  15
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.9
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1-2
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  12%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  21%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  20
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.8
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  30-37
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  32%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  28%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  25
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -1
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3-5
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  8%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  12
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.36
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  38-45
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  12%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  6%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  28
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -1.68
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  6+
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  6%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  5
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.15
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  46+
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  25%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  20%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  35
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -1.75
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center"></TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center"></TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center"></TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center"></TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -4.44
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Index
                </TableCell>
                <TableCell
                  colSpan={7}
                  className="text-gray-900 py-3 px-5 text-center"
                >
                  -2.63
                </TableCell>
                <TableCell colSpan={5} className="py-3 px-5"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Time at Residence */}
        <div className="overflow-x-auto">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Time at Residence
          </h3>
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {[
                  "Time at Res",
                  "Expected %",
                  "Actual %",
                  "Points",
                  "Index",
                ].map((title, idx) => (
                  <TableHead
                    key={idx}
                    className={`text-white font-semibold text-left py-3 px-5 whitespace-nowrap ${
                      idx === 0 ? "rounded-tl-lg" : ""
                    } ${idx === 4 ? "rounded-tr-lg" : ""}`}
                  >
                    {title}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  0-6
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  18%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  29%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  12
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  1.32
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  7-18
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  32%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  32%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  25
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  0
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  19-36
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  26%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  22%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  28
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -1.12
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  37+
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  24%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  17%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  40
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -2.8
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Index
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -
                </TableCell>
                <TableCell
                  colSpan={4}
                  className="text-gray-900 py-3 px-5 text-left"
                >
                  -2.6
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Region */}
        <div className="overflow-x-auto">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Region</h3>
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {["Region", "Expected %", "Actual %", "Points", "Index"].map(
                  (title, idx) => (
                    <TableHead
                      key={idx}
                      className={`text-white font-semibold text-left py-3 px-5 whitespace-nowrap ${
                        idx === 0 ? "rounded-tl-lg" : ""
                      } ${idx === 4 ? "rounded-tr-lg" : ""}`}
                    >
                      {title}
                    </TableHead>
                  )
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Major Urban
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  55%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  58%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  20
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  0.6
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Minor Urban
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  26%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  24%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  25
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -0.5
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Rural
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  19%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  18%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  15
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -0.15
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Index
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -
                </TableCell>
                <TableCell
                  colSpan={4}
                  className="text-gray-900 py-3 px-5 text-left"
                >
                  -0.05
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Inquiries in Last 6 Months & Utilization at Bureau */}
        <div className="overflow-x-auto">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Inquiries in Last 6 Months & Utilization at Bureau
          </h3>
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                <TableHead
                  rowSpan={2}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap rounded-tl-lg"
                >
                  Inq 6 mth
                </TableHead>
                <TableHead
                  colSpan={4}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center"
                >
                  Inq 6 mth Characteristic
                </TableHead>
                <TableHead
                  rowSpan={2}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap"
                >
                  Utilization
                </TableHead>
                <TableHead
                  colSpan={4}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center rounded-tr-lg"
                >
                  Utilization at Bureau Characteristic
                </TableHead>
              </TableRow>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {[
                  "Expected %",
                  "Actual %",
                  "Points",
                  "Index",
                  "Expected %",
                  "Actual %",
                  "Points",
                  "Index",
                ].map((title, idx) => (
                  <TableHead
                    key={idx}
                    className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center"
                  >
                    {title}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  0
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  63%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  34%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  40
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -11.6
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  12%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  8%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  15
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -0.6
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  1-3
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  19%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  31%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  30
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3.6
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1-9
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  10%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  19%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  40
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3.6
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  4-5
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  10%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  16%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  15
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.9
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  10-25
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  14%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  20%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  30
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.8
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  6+
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  8%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  19%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  10
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.1
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  26-50
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  22%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  25%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  25
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.75
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5"></TableCell>
                <TableCell colSpan={4} className="py-3 px-5"></TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  50-69
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  11%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  6%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  20
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -1
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5"></TableCell>
                <TableCell colSpan={4} className="py-3 px-5"></TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  70-85
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  13%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  9%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  15
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -0.6
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5"></TableCell>
                <TableCell colSpan={4} className="py-3 px-5"></TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  86-99
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  14%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  8%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  10
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -0.6
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5"></TableCell>
                <TableCell colSpan={4} className="py-3 px-5"></TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  100+
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  4%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  5
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.05
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Index
                </TableCell>
                <TableCell
                  colSpan={7}
                  className="text-gray-900 py-3 px-5 text-center"
                >
                  -6
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell
                  colSpan={5}
                  className="text-gray-900 py-3 px-5 text-center"
                >
                  3.4
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
