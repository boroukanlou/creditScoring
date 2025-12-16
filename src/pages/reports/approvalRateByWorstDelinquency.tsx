// approvalRateByWorstDelinquency.tsx
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
import { CheckCircle } from "lucide-react";

export default function ApprovalRateByWorstDelinquency() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          <span>Approval Rate by Score – Worst Delinquency at Bureau</span>
        </CardTitle>
        <CardDescription className="text-base">
          Approval rates and observed delinquency/bankruptcy rates by score for
          applicants with worst bureau delinquency status
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                <TableHead className="font-bold text-white">Score</TableHead>
                <TableHead className="font-bold text-white text-center">
                  Nvr Delq
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  30 days
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  60 days
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  90 days
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  120 days
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Bankrupt
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">210</TableCell>
                <TableCell className="text-center text-primary font-semibold">
                  97%
                </TableCell>
                <TableCell className="text-center text-primary">70%</TableCell>
                <TableCell className="text-center text-primary">56%</TableCell>
                <TableCell className="text-center text-primary">50%</TableCell>
                <TableCell className="text-center text-destructive">
                  41%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  22%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">211</TableCell>
                <TableCell className="text-center text-primary font-semibold">
                  95%
                </TableCell>
                <TableCell className="text-center text-primary">62%</TableCell>
                <TableCell className="text-center text-primary">48%</TableCell>
                <TableCell className="text-center text-primary">41%</TableCell>
                <TableCell className="text-center text-destructive">
                  36%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  18%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">212</TableCell>
                <TableCell className="text-center text-primary font-semibold">
                  92%
                </TableCell>
                <TableCell className="text-center text-primary">58%</TableCell>
                <TableCell className="text-center text-primary">41%</TableCell>
                <TableCell className="text-center text-primary">38%</TableCell>
                <TableCell className="text-center text-destructive">
                  31%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  12%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">213</TableCell>
                <TableCell className="text-center text-primary font-semibold">
                  87%
                </TableCell>
                <TableCell className="text-center text-primary">50%</TableCell>
                <TableCell className="text-center text-primary">37%</TableCell>
                <TableCell className="text-center text-primary">31%</TableCell>
                <TableCell className="text-center text-destructive">
                  25%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  8%
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
