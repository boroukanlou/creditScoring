// rollRate.tsx
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

export default function RollRate() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary" />
          <span>Roll Rate</span>
        </CardTitle>
        <CardDescription className="text-base">
          Monthly roll rate analysis showing total receivables, current
          accounts, and 1-29 days delinquency by month
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white text-sm">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                <TableHead
                  rowSpan={2}
                  className="font-bold text-white align-bottom"
                >
                  Month
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="font-bold text-white text-center"
                >
                  Total Receivable
                </TableHead>
                <TableHead
                  colSpan={4}
                  className="font-bold text-white text-center"
                >
                  Current
                </TableHead>
                <TableHead
                  colSpan={4}
                  className="font-bold text-white text-center"
                >
                  1-29 days
                </TableHead>
              </TableRow>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white">
                <TableHead className="font-bold text-white text-center">
                  Accounts
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Dollars
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Accounts
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Dollars
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Accounts
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Dollars
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">May-04</TableCell>
                <TableCell className="text-center">80,895</TableCell>
                <TableCell className="text-center">$256,987</TableCell>
                <TableCell className="text-center">71,188</TableCell>
                <TableCell className="text-center text-primary">
                  88.0%
                </TableCell>
                <TableCell className="text-center">$230,260</TableCell>
                <TableCell className="text-center text-primary">
                  89.6%
                </TableCell>
                <TableCell className="text-center">6,472</TableCell>
                <TableCell className="text-center text-destructive">
                  8.0%
                </TableCell>
                <TableCell className="text-center">$35,978</TableCell>
                <TableCell className="text-center text-destructive">
                  14.0%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Jun-04</TableCell>
                <TableCell className="text-center">81,229</TableCell>
                <TableCell className="text-center">$277,125</TableCell>
                <TableCell className="text-center">71,075</TableCell>
                <TableCell className="text-center text-primary">
                  87.5%
                </TableCell>
                <TableCell className="text-center">$245,533</TableCell>
                <TableCell className="text-center text-primary">
                  88.6%
                </TableCell>
                <TableCell className="text-center">6,986</TableCell>
                <TableCell className="text-center text-destructive">
                  8.6%
                </TableCell>
                <TableCell className="text-center">$36,026</TableCell>
                <TableCell className="text-center text-destructive">
                  13.0%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Jul-04</TableCell>
                <TableCell className="text-center">86,985</TableCell>
                <TableCell className="text-center">$289,541</TableCell>
                <TableCell className="text-center">75,851</TableCell>
                <TableCell className="text-center text-primary">
                  87.2%
                </TableCell>
                <TableCell className="text-center">$251,901</TableCell>
                <TableCell className="text-center text-primary">
                  87.0%
                </TableCell>
                <TableCell className="text-center">6,872</TableCell>
                <TableCell className="text-center text-destructive">
                  7.9%
                </TableCell>
                <TableCell className="text-center">$41,115</TableCell>
                <TableCell className="text-center text-destructive">
                  14.2%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Aug-04</TableCell>
                <TableCell className="text-center">89,524</TableCell>
                <TableCell className="text-center">$298,654</TableCell>
                <TableCell className="text-center">77,796</TableCell>
                <TableCell className="text-center text-primary">
                  86.9%
                </TableCell>
                <TableCell className="text-center">$261,322</TableCell>
                <TableCell className="text-center text-primary">
                  87.5%
                </TableCell>
                <TableCell className="text-center">7,162</TableCell>
                <TableCell className="text-center text-destructive">
                  8.0%
                </TableCell>
                <TableCell className="text-center">$41,513</TableCell>
                <TableCell className="text-center text-destructive">
                  13.9%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Sep-04</TableCell>
                <TableCell className="text-center">92,458</TableCell>
                <TableCell className="text-center">$311,897</TableCell>
                <TableCell className="text-center">80,069</TableCell>
                <TableCell className="text-center text-primary">
                  86.6%
                </TableCell>
                <TableCell className="text-center">$270,103</TableCell>
                <TableCell className="text-center text-primary">
                  86.6%
                </TableCell>
                <TableCell className="text-center">7,027</TableCell>
                <TableCell className="text-center text-destructive">
                  7.6%
                </TableCell>
                <TableCell className="text-center">$39,923</TableCell>
                <TableCell className="text-center text-destructive">
                  12.8%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Oct-04</TableCell>
                <TableCell className="text-center">97,114</TableCell>
                <TableCell className="text-center">$318,694</TableCell>
                <TableCell className="text-center">84,004</TableCell>
                <TableCell className="text-center text-primary">
                  86.5%
                </TableCell>
                <TableCell className="text-center">$276,626</TableCell>
                <TableCell className="text-center text-primary">
                  86.8%
                </TableCell>
                <TableCell className="text-center">7,478</TableCell>
                <TableCell className="text-center text-destructive">
                  7.7%
                </TableCell>
                <TableCell className="text-center">$40,155</TableCell>
                <TableCell className="text-center text-destructive">
                  12.6%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Nov-04</TableCell>
                <TableCell className="text-center">99,365</TableCell>
                <TableCell className="text-center">$322,145</TableCell>
                <TableCell className="text-center">85,851</TableCell>
                <TableCell className="text-center text-primary">
                  86.4%
                </TableCell>
                <TableCell className="text-center">$283,488</TableCell>
                <TableCell className="text-center text-primary">
                  88.0%
                </TableCell>
                <TableCell className="text-center">7,651</TableCell>
                <TableCell className="text-center text-destructive">
                  7.7%
                </TableCell>
                <TableCell className="text-center">$39,302</TableCell>
                <TableCell className="text-center text-destructive">
                  12.2%
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
