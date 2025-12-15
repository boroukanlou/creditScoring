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

export default function ScorecardAccuracy() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">
          Scorecard Accuracy
        </CardTitle>
        <CardDescription className="text-base">
          Observed bad rates vs. expected bad rates by score range,
          demonstrating the accuracy of the final scorecard
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                <TableHead className="font-bold text-white">Score</TableHead>
                <TableHead className="font-bold text-white text-center">
                  Accounts
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Active
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Bad
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Exp Bad %
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">0-169</TableCell>
                <TableCell className="text-center">200</TableCell>
                <TableCell className="text-center">198</TableCell>
                <TableCell className="text-center">99%</TableCell>
                <TableCell className="text-center text-destructive">
                  35
                </TableCell>
                <TableCell className="text-center text-destructive">
                  18%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  23.0%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">170-179</TableCell>
                <TableCell className="text-center">348</TableCell>
                <TableCell className="text-center">300</TableCell>
                <TableCell className="text-center">86%</TableCell>
                <TableCell className="text-center text-destructive">
                  37
                </TableCell>
                <TableCell className="text-center text-destructive">
                  12%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  18.0%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">180-189</TableCell>
                <TableCell className="text-center">435</TableCell>
                <TableCell className="text-center">367</TableCell>
                <TableCell className="text-center">84%</TableCell>
                <TableCell className="text-center text-destructive">
                  40
                </TableCell>
                <TableCell className="text-center text-destructive">
                  11%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  14.0%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">190-199</TableCell>
                <TableCell className="text-center">466</TableCell>
                <TableCell className="text-center">387</TableCell>
                <TableCell className="text-center">83%</TableCell>
                <TableCell className="text-center text-destructive">
                  37
                </TableCell>
                <TableCell className="text-center text-destructive">
                  10%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  10.0%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">200-209</TableCell>
                <TableCell className="text-center">2,456</TableCell>
                <TableCell className="text-center">1,876</TableCell>
                <TableCell className="text-center">76%</TableCell>
                <TableCell className="text-center text-destructive">
                  126
                </TableCell>
                <TableCell className="text-center text-destructive">
                  7%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  8.0%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">210-219</TableCell>
                <TableCell className="text-center">4,563</TableCell>
                <TableCell className="text-center">3,600</TableCell>
                <TableCell className="text-center">79%</TableCell>
                <TableCell className="text-center text-destructive">
                  213
                </TableCell>
                <TableCell className="text-center text-destructive">
                  6%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  5.0%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">220-229</TableCell>
                <TableCell className="text-center">5,678</TableCell>
                <TableCell className="text-center">4,325</TableCell>
                <TableCell className="text-center">76%</TableCell>
                <TableCell className="text-center text-destructive">
                  166
                </TableCell>
                <TableCell className="text-center text-destructive">
                  4%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  4.0%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">230-239</TableCell>
                <TableCell className="text-center">7,658</TableCell>
                <TableCell className="text-center">4,598</TableCell>
                <TableCell className="text-center">60%</TableCell>
                <TableCell className="text-center text-destructive">
                  106
                </TableCell>
                <TableCell className="text-center text-destructive">
                  2%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  2.0%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">240-249</TableCell>
                <TableCell className="text-center">5,786</TableCell>
                <TableCell className="text-center">3,546</TableCell>
                <TableCell className="text-center">61%</TableCell>
                <TableCell className="text-center text-destructive">
                  35
                </TableCell>
                <TableCell className="text-center text-destructive">
                  1%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  0.8%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">250+</TableCell>
                <TableCell className="text-center">4,987</TableCell>
                <TableCell className="text-center">2,176</TableCell>
                <TableCell className="text-center">44%</TableCell>
                <TableCell className="text-center text-destructive">
                  26
                </TableCell>
                <TableCell className="text-center text-destructive">
                  1%
                </TableCell>
                <TableCell className="text-center text-destructive">
                  0.5%
                </TableCell>
              </TableRow>

              <TableRow className="font-bold bg-muted hover:bg-indigo-50 transition-colors">
                <TableCell>Total</TableCell>
                <TableCell className="text-center">32,577</TableCell>
                <TableCell className="text-center">21,373</TableCell>
                <TableCell className="text-center">66%</TableCell>
                <TableCell className="text-center text-destructive">
                  821
                </TableCell>
                <TableCell className="text-center text-destructive">
                  4%
                </TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
