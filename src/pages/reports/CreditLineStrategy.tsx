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
import { CreditCard } from "lucide-react";

export default function CreditLineStrategy() {
  return (
    <>
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <CreditCard className="w-7 h-7 text-primary" />
          <span>Credit Line Strategy</span>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 mt-2">
          Assigned initial credit line amounts by score range and debt service
          ratio (DSR)
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                <TableHead
                  rowSpan={2}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap first:rounded-tl-lg align-bottom"
                >
                  Score
                </TableHead>
                <TableHead
                  colSpan={5}
                  className="text-white font-semibold text-center py-3 px-5 last:rounded-tr-lg"
                >
                  Debt Service Ratio
                </TableHead>
              </TableRow>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {["0-10%", "11-15%", "16-24%", "25-35%", "36%+"].map(
                  (dsr, idx) => (
                    <TableHead
                      key={idx}
                      className="text-white font-semibold text-center py-3 px-5 whitespace-nowrap"
                    >
                      {dsr}
                    </TableHead>
                  )
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  score: "230-234",
                  cols: ["$3,500", "$3,500", "$2,500", "$2,500", "$2,000"],
                },
                {
                  score: "235-239",
                  cols: ["$4,000", "$3,500", "$3,000", "$2,500", "$2,000"],
                },
                {
                  score: "240-244",
                  cols: ["$4,500", "$4,000", "$3,500", "$3,000", "$2,500"],
                },
                {
                  score: "245-249",
                  cols: ["$5,000", "$4,500", "$4,000", "$3,500", "$3,000"],
                },
                {
                  score: "250+",
                  cols: ["$7,500", "$5,000", "$4,500", "$4,000", "$3,500"],
                },
              ].map((row) => (
                <TableRow
                  key={row.score}
                  className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200"
                >
                  <TableCell className="font-semibold text-primary py-3 px-5">
                    {row.score}
                  </TableCell>
                  {row.cols.map((value, idx) => (
                    <TableCell
                      key={idx}
                      className="text-gray-800 font-medium py-3 px-5 text-center"
                    >
                      {value}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
