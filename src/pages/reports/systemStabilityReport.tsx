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

export default function SystemStabilityReport() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">
          System Stability Report
        </CardTitle>
        <CardDescription className="text-base">
          Comparison of actual vs. expected bad rates across score ranges with
          stability index
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                <TableHead className="font-bold text-white">
                  Score Range
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Actual %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Expected %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  (A-E)
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  A/E
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  ln(A/E)
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Index
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">0-169</TableCell>
                <TableCell className="text-center text-destructive">
                  7%
                </TableCell>
                <TableCell className="text-center">8%</TableCell>
                <TableCell className="text-center text-destructive">
                  -1%
                </TableCell>
                <TableCell className="text-center">0.8750</TableCell>
                <TableCell className="text-center">-0.1335</TableCell>
                <TableCell className="text-center">0.0013</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">170-179</TableCell>
                <TableCell className="text-center text-destructive">
                  8%
                </TableCell>
                <TableCell className="text-center">10%</TableCell>
                <TableCell className="text-center text-destructive">
                  -2%
                </TableCell>
                <TableCell className="text-center">0.8000</TableCell>
                <TableCell className="text-center">-0.2231</TableCell>
                <TableCell className="text-center">0.0045</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">180-189</TableCell>
                <TableCell className="text-center text-destructive">
                  7%
                </TableCell>
                <TableCell className="text-center">9%</TableCell>
                <TableCell className="text-center text-destructive">
                  -2%
                </TableCell>
                <TableCell className="text-center">0.7778</TableCell>
                <TableCell className="text-center">-0.2515</TableCell>
                <TableCell className="text-center">0.0050</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">190-199</TableCell>
                <TableCell className="text-center text-destructive">
                  9%
                </TableCell>
                <TableCell className="text-center">13%</TableCell>
                <TableCell className="text-center text-destructive">
                  -4%
                </TableCell>
                <TableCell className="text-center">0.6923</TableCell>
                <TableCell className="text-center">-0.3677</TableCell>
                <TableCell className="text-center">0.0147</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">200-209</TableCell>
                <TableCell className="text-center text-destructive">
                  11%
                </TableCell>
                <TableCell className="text-center">13%</TableCell>
                <TableCell className="text-center text-destructive">
                  -2%
                </TableCell>
                <TableCell className="text-center">0.8462</TableCell>
                <TableCell className="text-center">-0.1671</TableCell>
                <TableCell className="text-center">0.0033</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">210-219</TableCell>
                <TableCell className="text-center text-destructive">
                  11%
                </TableCell>
                <TableCell className="text-center">10%</TableCell>
                <TableCell className="text-center text-primary">1%</TableCell>
                <TableCell className="text-center">1.1000</TableCell>
                <TableCell className="text-center">0.0953</TableCell>
                <TableCell className="text-center">0.0010</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">220-229</TableCell>
                <TableCell className="text-center text-destructive">
                  10%
                </TableCell>
                <TableCell className="text-center">9%</TableCell>
                <TableCell className="text-center text-primary">1%</TableCell>
                <TableCell className="text-center">1.1111</TableCell>
                <TableCell className="text-center">0.1054</TableCell>
                <TableCell className="text-center">0.0011</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">230-239</TableCell>
                <TableCell className="text-center text-destructive">
                  12%
                </TableCell>
                <TableCell className="text-center">10%</TableCell>
                <TableCell className="text-center text-primary">2%</TableCell>
                <TableCell className="text-center">1.2000</TableCell>
                <TableCell className="text-center">0.1823</TableCell>
                <TableCell className="text-center">0.0036</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">240-249</TableCell>
                <TableCell className="text-center text-destructive">
                  11%
                </TableCell>
                <TableCell className="text-center">11%</TableCell>
                <TableCell className="text-center">0%</TableCell>
                <TableCell className="text-center">1.0000</TableCell>
                <TableCell className="text-center">0.0000</TableCell>
                <TableCell className="text-center">0.0000</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">250+</TableCell>
                <TableCell className="text-center text-destructive">
                  14%
                </TableCell>
                <TableCell className="text-center">9%</TableCell>
                <TableCell className="text-center text-primary">5%</TableCell>
                <TableCell className="text-center">1.5556</TableCell>
                <TableCell className="text-center">0.4418</TableCell>
                <TableCell className="text-center">0.0221</TableCell>
              </TableRow>

              <TableRow className="font-bold bg-muted hover:bg-indigo-50 transition-colors">
                <TableCell>Total</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center text-primary font-semibold">
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
