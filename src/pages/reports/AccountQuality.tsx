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

export default function AccountQuality() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          <span>Account Quality</span>
        </CardTitle>
        <CardDescription className="text-base">
          Percentage of accounts reaching different quality levels by quarter
          after booking, segmented by score range
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                <TableHead className="font-bold text-white">Score</TableHead>
                <TableHead className="font-bold text-white text-center">
                  Expected
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Q1 03
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Q2 03
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Q3 03
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Q4 03
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">0-169</TableCell>
                <TableCell className="text-center">0%</TableCell>
                <TableCell className="text-center">0%</TableCell>
                <TableCell className="text-center text-destructive">
                  1%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  1%
                </TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">170-179</TableCell>
                <TableCell className="text-center">0%</TableCell>
                <TableCell className="text-center text-destructive">
                  1%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  3%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  4%
                </TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">180-189</TableCell>
                <TableCell className="text-center">0%</TableCell>
                <TableCell className="text-center text-destructive">
                  2%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  3%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  5%
                </TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">190-199</TableCell>
                <TableCell className="text-center">0%</TableCell>
                <TableCell className="text-center text-destructive">
                  2%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  4%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  5%
                </TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">200-209</TableCell>
                <TableCell className="text-center">20%</TableCell>
                <TableCell className="text-center text-primary">26%</TableCell>
                <TableCell className="text-center text-primary">28%</TableCell>
                <TableCell className="text-center text-primary">26%</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">210-219</TableCell>
                <TableCell className="text-center">15%</TableCell>
                <TableCell className="text-center text-primary">19%</TableCell>
                <TableCell className="text-center text-primary">20%</TableCell>
                <TableCell className="text-center text-primary">20%</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">220-229</TableCell>
                <TableCell className="text-center">20%</TableCell>
                <TableCell className="text-center text-primary">22%</TableCell>
                <TableCell className="text-center text-primary">22%</TableCell>
                <TableCell className="text-center text-primary">20%</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">230-239</TableCell>
                <TableCell className="text-center">16%</TableCell>
                <TableCell className="text-center text-primary">15%</TableCell>
                <TableCell className="text-center text-primary">12%</TableCell>
                <TableCell className="text-center text-primary">11%</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">240-249</TableCell>
                <TableCell className="text-center">18%</TableCell>
                <TableCell className="text-center text-primary">4%</TableCell>
                <TableCell className="text-center text-primary">3%</TableCell>
                <TableCell className="text-center text-primary">5%</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">250+</TableCell>
                <TableCell className="text-center">11%</TableCell>
                <TableCell className="text-center text-primary">9%</TableCell>
                <TableCell className="text-center text-primary">4%</TableCell>
                <TableCell className="text-center text-primary">3%</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>

              <TableRow className="font-bold bg-muted hover:bg-indigo-50 transition-colors">
                <TableCell>Total</TableCell>
                <TableCell className="text-center">100%</TableCell>
                <TableCell className="text-center">100%</TableCell>
                <TableCell className="text-center">100%</TableCell>
                <TableCell className="text-center">100%</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
