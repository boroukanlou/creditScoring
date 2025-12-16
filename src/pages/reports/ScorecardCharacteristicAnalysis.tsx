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
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary" />
          <span>Scorecard Characteristic Analysis</span>
        </CardTitle>
        <CardDescription className="text-base">
          Performance of the "Age" characteristic: expected vs. actual bad rates
          with allocated points and index
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                <TableHead className="font-bold text-white">Age</TableHead>
                <TableHead className="font-bold text-white text-center">
                  Expected %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Actual %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Points
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Index
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">18-24</TableCell>
                <TableCell className="text-center">12%</TableCell>
                <TableCell className="text-center text-destructive">
                  21%
                </TableCell>
                <TableCell className="text-center font-bold text-primary">
                  10
                </TableCell>
                <TableCell className="text-center text-destructive">
                  0.9
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">25-29</TableCell>
                <TableCell className="text-center">19%</TableCell>
                <TableCell className="text-center text-destructive">
                  25%
                </TableCell>
                <TableCell className="text-center font-bold text-primary">
                  15
                </TableCell>
                <TableCell className="text-center text-destructive">
                  0.9
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">30-37</TableCell>
                <TableCell className="text-center">32%</TableCell>
                <TableCell className="text-center text-primary">28%</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  25
                </TableCell>
                <TableCell className="text-center text-primary">-1</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">38-45</TableCell>
                <TableCell className="text-center">12%</TableCell>
                <TableCell className="text-center text-primary">6%</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  28
                </TableCell>
                <TableCell className="text-center text-primary">
                  -1.68
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">46+</TableCell>
                <TableCell className="text-center">25%</TableCell>
                <TableCell className="text-center text-primary">20%</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  35
                </TableCell>
                <TableCell className="text-center text-primary">
                  -1.75
                </TableCell>
              </TableRow>

              <TableRow className="font-bold bg-muted hover:bg-indigo-50 transition-colors">
                <TableCell>Index</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center text-primary font-semibold">
                  -2.63
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
