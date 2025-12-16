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
import { Shield } from "lucide-react";

export default function OverrideReport() {
  return (
    <>
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <Shield className="w-7 h-7 text-primary" />
          <span>Override Report</span>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 mt-2">
          Summary of policy and manual overrides: number of cases and
          distribution by system vs. manual decision (Decline/Approve)
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {[
                  "Override Reason",
                  "Number",
                  "System 'D'",
                  "System 'A'",
                  "Manual 'D'",
                  "Manual 'A'",
                ].map((title, idx, arr) => (
                  <TableHead
                    key={title}
                    className={`text-white font-semibold py-3 px-5 text-left whitespace-nowrap ${
                      idx === 0 ? "rounded-tl-lg" : ""
                    } ${idx === arr.length - 1 ? "rounded-tr-lg" : ""}`}
                  >
                    {title}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {/* Lowside */}
              <TableRow className="border-b border-gray-200 bg-gray-50">
                <TableCell
                  colSpan={6}
                  className="py-3 px-5 font-bold text-primary"
                >
                  Lowside
                </TableCell>
              </TableRow>

              {[
                ["Local Knowledge", "34", "34", "0", "-", "34"],
                ["Justifiable Delq", "96", "96", "0", "-", "96"],
                ["VIP", "12", "12", "0", "-", "12"],
                ["VP Override", "8", "8", "0", "-", "8"],
              ].map((row) => (
                <TableRow
                  key={row[0]}
                  className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200"
                >
                  <TableCell className="py-3 px-5 pl-8 font-medium text-gray-900">
                    {row[0]}
                  </TableCell>
                  {row.slice(1).map((cell, i) => (
                    <TableCell
                      key={i}
                      className="py-3 px-5 text-gray-900 text-left"
                    >
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}

              <TableRow className="border-b border-gray-300 hover:bg-primary/5 font-semibold">
                <TableCell className="py-3 px-5 pl-8 text-gray-900">
                  Lowside Total
                </TableCell>
                <TableCell className="py-3 px-5 text-gray-900">150</TableCell>
                <TableCell className="py-3 px-5 text-gray-900">150</TableCell>
                <TableCell className="py-3 px-5 text-gray-900">0</TableCell>
                <TableCell className="py-3 px-5 text-gray-900">-</TableCell>
                <TableCell className="py-3 px-5 text-gray-900">150</TableCell>
              </TableRow>

              {/* Highside */}
              <TableRow className="border-b border-gray-200 bg-gray-50">
                <TableCell
                  colSpan={6}
                  className="py-5 px-5  font-bold text-primary"
                >
                  Highside
                </TableCell>
              </TableRow>

              {[
                ["Bankruptcy", "125", "120", "0", "-", "5"],
                ["Local Knowledge", "102", "0", "102", "102", "-"],
                ["Derogatory", "200", "0", "200", "185", "15"],
                ["Policy 1", "55", "55", "0", "-", "-"],
                ["Policy 2", "73", "73", "0", "-", "-"],
                ["Policy 3", "92", "92", "0", "-", "0"],
              ].map((row) => (
                <TableRow
                  key={row[0]}
                  className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200"
                >
                  <TableCell className="py-3 px-5 pl-8 font-medium text-gray-900">
                    {row[0]}
                  </TableCell>
                  {row.slice(1).map((cell, i) => (
                    <TableCell
                      key={i}
                      className="py-3 px-5 text-gray-900 text-left"
                    >
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}

              <TableRow className="border-t border-gray-300 hover:bg-primary/5 font-semibold">
                <TableCell className="py-3 px-5 pl-8 text-gray-900">
                  Highside Total
                </TableCell>
                <TableCell className="py-3 px-5 text-gray-900">647</TableCell>
                <TableCell className="py-3 px-5 text-gray-900">340</TableCell>
                <TableCell className="py-3 px-5 text-gray-900">302</TableCell>
                <TableCell className="py-3 px-5 text-gray-900">287</TableCell>
                <TableCell className="py-3 px-5 text-gray-900">20</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
