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
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <CheckCircle className="w-7 h-7 text-primary" />
          <span>Account Quality</span>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 mt-2">
          Percentage of accounts reaching different quality levels by quarter
          after booking, segmented by score range
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {["Score", "Expected", "Q1 03", "Q2 03", "Q3 03", "Q4 03"].map(
                  (title, idx) => (
                    <TableHead
                      key={idx}
                      className={`text-white font-semibold text-left py-3 px-5 whitespace-nowrap ${
                        idx === 0 ? "rounded-tl-lg" : ""
                      } ${idx === 5 ? "rounded-tr-lg" : ""}`}
                    >
                      {title.includes(" ")
                        ? title
                            .split(" ")
                            .map((t, i) => <span key={i}>{t}</span>)
                        : title}
                    </TableHead>
                  )
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  0-169
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  1%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  1%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  170-179
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  1%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  3%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  4%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  180-189
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  2%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  3%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  190-199
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  2%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  4%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  200-209
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  20%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  26%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  28%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  26%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  210-219
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  15%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  19%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  20%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  20%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  220-229
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  20%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  22%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  22%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  20%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  230-239
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  16%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  15%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  12%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  11%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  240-249
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  18%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  4%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  3%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  250+
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  11%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  9%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  4%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  3%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Total
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  100%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  100%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  100%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  100%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-left">
                  -
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
