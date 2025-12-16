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
import { Calendar } from "lucide-react";

export default function VintageAnalysis() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          <span>Vintage Analysis</span>
        </CardTitle>
        <CardDescription className="text-base">
          Cumulative bad rates by booking quarter (vintage) over 5 quarters of
          performance
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                <TableHead className="font-bold text-white">
                  Open Date
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  1 Qtr
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  2 Qtr
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  3 Qtr
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  4 Qtr
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  5 Qtr
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Jan-03</TableCell>
                <TableCell className="text-center">0.00%</TableCell>
                <TableCell className="text-center">0.44%</TableCell>
                <TableCell className="text-center">0.87%</TableCell>
                <TableCell className="text-center">1.40%</TableCell>
                <TableCell className="text-center text-destructive">
                  2.40%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Feb-03</TableCell>
                <TableCell className="text-center">0.00%</TableCell>
                <TableCell className="text-center">0.37%</TableCell>
                <TableCell className="text-center">0.88%</TableCell>
                <TableCell className="text-center">1.70%</TableCell>
                <TableCell className="text-center text-destructive">
                  2.30%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Mar-03</TableCell>
                <TableCell className="text-center">0.00%</TableCell>
                <TableCell className="text-center">0.42%</TableCell>
                <TableCell className="text-center">0.92%</TableCell>
                <TableCell className="text-center text-destructive">
                  1.86%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  2.80%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Apr-03</TableCell>
                <TableCell className="text-center">0.00%</TableCell>
                <TableCell className="text-center text-destructive">
                  0.65%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  1.20%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  1.90%
                </TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">May-03</TableCell>
                <TableCell className="text-center">0.00%</TableCell>
                <TableCell className="text-center">0.10%</TableCell>
                <TableCell className="text-center">0.80%</TableCell>
                <TableCell className="text-center">1.20%</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Jun-03</TableCell>
                <TableCell className="text-center">0.00%</TableCell>
                <TableCell className="text-center">0.14%</TableCell>
                <TableCell className="text-center">0.79%</TableCell>
                <TableCell className="text-center">1.50%</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Jul-03</TableCell>
                <TableCell className="text-center">0.00%</TableCell>
                <TableCell className="text-center">0.23%</TableCell>
                <TableCell className="text-center">0.88%</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Aug-03</TableCell>
                <TableCell className="text-center">0.00%</TableCell>
                <TableCell className="text-center">0.16%</TableCell>
                <TableCell className="text-center">0.73%</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Sep-03</TableCell>
                <TableCell className="text-center">0.00%</TableCell>
                <TableCell className="text-center">0.13%</TableCell>
                <TableCell className="text-center">0.64%</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Oct-03</TableCell>
                <TableCell className="text-center">0.20%</TableCell>
                <TableCell className="text-center text-destructive">
                  0.54%
                </TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Nov-03</TableCell>
                <TableCell className="text-center">0.00%</TableCell>
                <TableCell className="text-center text-destructive">
                  0.46%
                </TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Dec-03</TableCell>
                <TableCell className="text-center">0.00%</TableCell>
                <TableCell className="text-center">0.38%</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Jan-04</TableCell>
                <TableCell className="text-center">0.00%</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Feb-04</TableCell>
                <TableCell className="text-center">0.00%</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Mar-04</TableCell>
                <TableCell className="text-center">0.00%</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
