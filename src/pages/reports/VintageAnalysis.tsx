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
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <Calendar className="w-7 h-7 text-primary" />
          <span>Vintage Analysis</span>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 mt-2">
          Cumulative bad rates by booking quarter (vintage) over 5 quarters of
          performance
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {["Open Date", "1 Qtr", "2 Qtr", "3 Qtr", "4 Qtr", "5 Qtr"].map(
                  (title, idx) => (
                    <TableHead
                      key={idx}
                      className={`text-white font-semibold text-left py-3 px-5 whitespace-nowrap ${
                        idx === 0 ? "rounded-tl-lg" : ""
                      } ${idx === 5 ? "rounded-tr-lg" : ""}`}
                    >
                      {title.includes(" ")
                        ? title.split(" ").map((t, i) => (
                            <span key={i}>
                              {t} <br />
                            </span>
                          ))
                        : title}
                    </TableHead>
                  )
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Jan-03
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.00%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.44%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.87%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.40%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.40%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Feb-03
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.00%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.37%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.88%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.70%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.30%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Mar-03
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.00%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.42%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.92%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.86%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.80%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Apr-03
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.00%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.65%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.20%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.90%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  May-03
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.00%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.10%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.80%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.20%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Jun-03
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.00%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.14%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.79%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.50%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Jul-03
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.00%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.23%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.88%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Aug-03
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.00%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.16%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.73%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Sep-03
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.00%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.13%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.64%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Oct-03
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.20%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.54%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Nov-03
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.00%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.46%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Dec-03
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.00%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.38%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Jan-04
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.00%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Feb-04
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.00%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Mar-04
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.00%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
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
