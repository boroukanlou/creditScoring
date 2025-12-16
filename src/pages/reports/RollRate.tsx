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
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <Activity className="w-7 h-7 text-primary" />
          <span>Roll Rate</span>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 mt-2">
          Monthly roll rate analysis showing total receivables, current
          accounts, and 1-29 days delinquency by month
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                <TableHead
                  rowSpan={2}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap rounded-tl-lg"
                >
                  Month
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center"
                >
                  Total Receivable
                </TableHead>
                <TableHead
                  colSpan={4}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center"
                >
                  Current
                </TableHead>
                <TableHead
                  colSpan={4}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center rounded-tr-lg"
                >
                  1-29 days
                </TableHead>
              </TableRow>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {[
                  "Accounts",
                  "Dollars",
                  "Accounts",
                  "%",
                  "Dollars",
                  "%",
                  "Accounts",
                  "%",
                  "Dollars",
                  "%",
                ].map((title, idx) => (
                  <TableHead
                    key={idx}
                    className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center"
                  >
                    {title.includes(" ")
                      ? title.split(" ").map((t, i) => (
                          <span key={i}>
                            {t} <br />
                          </span>
                        ))
                      : title}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5 whitespace-nowrap">
                  May-04
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  80,895
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $256,987
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  71,188
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  88.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $230,260
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  89.6%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  6,472
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  8.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $35,978
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  14.0%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5 whitespace-nowrap">
                  Jun-04
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  81,229
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $277,125
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  71,075
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  87.5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $245,533
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  88.6%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  6,986
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  8.6%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $36,026
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  13.0%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5 whitespace-nowrap">
                  Jul-04
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  86,985
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $289,541
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  75,851
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  87.2%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $251,901
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  87.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  6,872
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  7.9%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $41,115
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  14.2%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5 whitespace-nowrap">
                  Aug-04
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  89,524
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $298,654
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  77,796
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  86.9%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $261,322
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  87.5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  7,162
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  8.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $41,513
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  13.9%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5 whitespace-nowrap">
                  Sep-04
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  92,458
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $311,897
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  80,069
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  86.6%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $270,103
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  86.6%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  7,027
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  7.6%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $39,923
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  12.8%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5 whitespace-nowrap">
                  Oct-04
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  97,114
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $318,694
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  84,004
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  86.5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $276,626
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  86.8%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  7,478
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  7.7%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $40,155
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  12.6%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5 whitespace-nowrap">
                  Nov-04
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  99,365
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $322,145
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  85,851
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  86.4%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $283,488
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  88.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  7,651
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  7.7%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  $39,302
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
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
