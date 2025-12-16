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

export default function ApprovalRateByWorstDelinquency() {
  return (
    <>
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <CheckCircle className="w-7 h-7 text-primary" />
          <span>Approval Rate by Score – Worst Delinquency at Bureau</span>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 mt-2">
          Approval rates and observed delinquency/bankruptcy rates by score for
          applicants with worst bureau delinquency status
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {[
                  "Score",
                  "Nvr Delq",
                  "30 days",
                  "60 days",
                  "90 days",
                  "120 days",
                  "Bankrupt",
                ].map((title, idx) => (
                  <TableHead
                    key={idx}
                    className={`text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center ${
                      idx === 0 ? "rounded-tl-lg" : ""
                    } ${idx === 6 ? "rounded-tr-lg" : ""}`}
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
                <TableCell className="font-semibold text-primary py-3 px-5">
                  210
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  97%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  70%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  56%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  50%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  41%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  22%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  211
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  95%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  62%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  48%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  41%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  36%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  18%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  212
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  92%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  58%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  41%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  38%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  31%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  12%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  213
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  87%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  50%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  37%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  31%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  25%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  8%
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
