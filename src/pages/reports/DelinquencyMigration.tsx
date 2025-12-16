// delinquencyMigration.tsx (فایل کامل و نهایی)
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
import { TrendingUp } from "lucide-react";

export default function DelinquencyMigration() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <span>Delinquency Migration</span>
        </CardTitle>
        <CardDescription className="text-base">
          Roll-rate analysis showing how accounts migrate between delinquency
          buckets from previous month to current month
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white text-sm">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                <TableHead
                  rowSpan={3}
                  className="font-bold text-white align-bottom"
                >
                  Previous Month
                </TableHead>

                <TableHead
                  colSpan={18}
                  className="font-bold text-white text-center"
                >
                  This Month
                </TableHead>
              </TableRow>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white">
                <TableHead
                  colSpan={2}
                  className="font-bold text-white text-center"
                >
                  Previous Month
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="font-bold text-white text-center"
                >
                  Current
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="font-bold text-white text-center"
                >
                  1-29 days
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="font-bold text-white text-center"
                >
                  30-59 days
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="font-bold text-white text-center"
                >
                  60-89 days
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="font-bold text-white text-center"
                >
                  90-119 days
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="font-bold text-white text-center"
                >
                  120-179 days
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="font-bold text-white text-center"
                >
                  180+
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="font-bold text-white text-center"
                >
                  Bankrupt
                </TableHead>
              </TableRow>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white">
                <TableHead className="font-bold text-white text-center">
                  #
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  #
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  #
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  #
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  #
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  #
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  #
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  #
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  #
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Current</TableCell>
                <TableCell className="text-center">54,782</TableCell>
                <TableCell className="text-center text-primary">72%</TableCell>
                <TableCell className="text-center">52,591</TableCell>
                <TableCell className="text-center text-primary">
                  96.0%
                </TableCell>
                <TableCell className="text-center">2,082</TableCell>
                <TableCell className="text-center">3.8%</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">210</TableCell>
                <TableCell className="text-center text-destructive">
                  0.2%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">1-29 days</TableCell>
                <TableCell className="text-center">12,640</TableCell>
                <TableCell className="text-center">17%</TableCell>
                <TableCell className="text-center">10,112</TableCell>
                <TableCell className="text-center text-primary">
                  80.0%
                </TableCell>
                <TableCell className="text-center">632</TableCell>
                <TableCell className="text-center">5.0%</TableCell>
                <TableCell className="text-center">1,871</TableCell>
                <TableCell className="text-center text-destructive">
                  14.8%
                </TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">85</TableCell>
                <TableCell className="text-center text-destructive">
                  0.2%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">30-59 days</TableCell>
                <TableCell className="text-center">3,254</TableCell>
                <TableCell className="text-center">4%</TableCell>
                <TableCell className="text-center">1,302</TableCell>
                <TableCell className="text-center text-primary">
                  40.0%
                </TableCell>
                <TableCell className="text-center">325</TableCell>
                <TableCell className="text-center">10.0%</TableCell>
                <TableCell className="text-center">472</TableCell>
                <TableCell className="text-center text-destructive">
                  14.5%
                </TableCell>
                <TableCell className="text-center">1,139</TableCell>
                <TableCell className="text-center text-destructive">
                  35.0%
                </TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">59</TableCell>
                <TableCell className="text-center text-destructive">
                  0.5%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">60-89 days</TableCell>
                <TableCell className="text-center">2,271</TableCell>
                <TableCell className="text-center">3%</TableCell>
                <TableCell className="text-center">182</TableCell>
                <TableCell className="text-center text-primary">8.0%</TableCell>
                <TableCell className="text-center">204</TableCell>
                <TableCell className="text-center">9.0%</TableCell>
                <TableCell className="text-center">227</TableCell>
                <TableCell className="text-center text-destructive">
                  10.0%
                </TableCell>
                <TableCell className="text-center">227</TableCell>
                <TableCell className="text-center text-destructive">
                  10.0%
                </TableCell>
                <TableCell className="text-center">1,413</TableCell>
                <TableCell className="text-center text-destructive">
                  62.2%
                </TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">39</TableCell>
                <TableCell className="text-center text-destructive">
                  0.8%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">90-119 days</TableCell>
                <TableCell className="text-center">1,449</TableCell>
                <TableCell className="text-center">2%</TableCell>
                <TableCell className="text-center">55</TableCell>
                <TableCell className="text-center text-primary">3.8%</TableCell>
                <TableCell className="text-center">65</TableCell>
                <TableCell className="text-center">4.5%</TableCell>
                <TableCell className="text-center">80</TableCell>
                <TableCell className="text-center text-destructive">
                  5.5%
                </TableCell>
                <TableCell className="text-center">87</TableCell>
                <TableCell className="text-center text-destructive">
                  6.0%
                </TableCell>
                <TableCell className="text-center">72</TableCell>
                <TableCell className="text-center text-destructive">
                  5.0%
                </TableCell>
                <TableCell className="text-center">1,065</TableCell>
                <TableCell className="text-center text-destructive">
                  73.1%
                </TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">42</TableCell>
                <TableCell className="text-center text-destructive">
                  2.1%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">120-179</TableCell>
                <TableCell className="text-center">887</TableCell>
                <TableCell className="text-center">1.2%</TableCell>
                <TableCell className="text-center">16</TableCell>
                <TableCell className="text-center text-primary">1.8%</TableCell>
                <TableCell className="text-center">12</TableCell>
                <TableCell className="text-center">1.4%</TableCell>
                <TableCell className="text-center">19</TableCell>
                <TableCell className="text-center text-destructive">
                  2.1%
                </TableCell>
                <TableCell className="text-center">20</TableCell>
                <TableCell className="text-center text-destructive">
                  2.2%
                </TableCell>
                <TableCell className="text-center">27</TableCell>
                <TableCell className="text-center text-destructive">
                  3.0%
                </TableCell>
                <TableCell className="text-center">64</TableCell>
                <TableCell className="text-center text-destructive">
                  4.0%
                </TableCell>
                <TableCell className="text-center">550</TableCell>
                <TableCell className="text-center text-destructive">
                  78.0%
                </TableCell>
                <TableCell className="text-center">150</TableCell>
                <TableCell className="text-center text-destructive">
                  7.5%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">180+</TableCell>
                <TableCell className="text-center">632</TableCell>
                <TableCell className="text-center">0.8%</TableCell>
                <TableCell className="text-center">1</TableCell>
                <TableCell className="text-center text-primary">0.2%</TableCell>
                <TableCell className="text-center">8</TableCell>
                <TableCell className="text-center">1.2%</TableCell>
                <TableCell className="text-center">11</TableCell>
                <TableCell className="text-center text-destructive">
                  1.8%
                </TableCell>
                <TableCell className="text-center">16</TableCell>
                <TableCell className="text-center text-destructive">
                  2.5%
                </TableCell>
                <TableCell className="text-center">13</TableCell>
                <TableCell className="text-center text-destructive">
                  2.0%
                </TableCell>
                <TableCell className="text-center">3</TableCell>
                <TableCell className="text-center text-destructive">
                  3.0%
                </TableCell>
                <TableCell className="text-center">371</TableCell>
                <TableCell className="text-center text-destructive">
                  60.3%
                </TableCell>
                <TableCell className="text-center">210</TableCell>
                <TableCell className="text-center text-destructive">
                  29.0%
                </TableCell>
              </TableRow>

              <TableRow className="font-bold bg-muted hover:bg-indigo-50 transition-colors">
                <TableCell>Total</TableCell>
                <TableCell className="text-center">75,915</TableCell>
                <TableCell className="text-center">100%</TableCell>
                <TableCell className="text-center">64,258</TableCell>
                <TableCell className="text-center text-primary">85%</TableCell>
                <TableCell className="text-center">3,329</TableCell>
                <TableCell className="text-center text-destructive">
                  4%
                </TableCell>
                <TableCell className="text-center">2,679</TableCell>
                <TableCell className="text-center text-destructive">
                  3.5%
                </TableCell>
                <TableCell className="text-center">1,488</TableCell>
                <TableCell className="text-center text-destructive">
                  2.0%
                </TableCell>
                <TableCell className="text-center">1,524</TableCell>
                <TableCell className="text-center text-destructive">
                  2.0%
                </TableCell>
                <TableCell className="text-center">1,132</TableCell>
                <TableCell className="text-center text-destructive">
                  1.5%
                </TableCell>
                <TableCell className="text-center">921</TableCell>
                <TableCell className="text-center text-destructive">
                  1.2%
                </TableCell>
                <TableCell className="text-center">585</TableCell>
                <TableCell className="text-center text-destructive">
                  0.8%
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
