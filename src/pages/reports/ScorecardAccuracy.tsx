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
import { Target } from "lucide-react";

export default function ScorecardAccuracy() {
  return (
    <>
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <Target className="w-7 h-7 text-primary" />
          <span>Scorecard Accuracy</span>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 mt-2">
          Observed bad rates vs. expected bad rates by score range,
          demonstrating the accuracy of the final scorecard
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {[
                  "Score",
                  "Accounts",
                  "Active",
                  "%",
                  "Bad",
                  "%",
                  "Exp Bad %",
                ].map((title, idx) => (
                  <TableHead
                    key={idx}
                    className={`text-white font-semibold text-left py-3 px-5 whitespace-nowrap ${
                      idx === 0 ? "first:rounded-tl-lg" : ""
                    } ${idx === 6 ? "last:rounded-tr-lg" : ""}`}
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
              {[
                {
                  score: "0-169",
                  accounts: 200,
                  active: 198,
                  percent: "99%",
                  bad: 35,
                  badPercent: "18%",
                  expBad: "23.0%",
                },
                {
                  score: "170-179",
                  accounts: 348,
                  active: 300,
                  percent: "86%",
                  bad: 37,
                  badPercent: "12%",
                  expBad: "18.0%",
                },
                {
                  score: "180-189",
                  accounts: 435,
                  active: 367,
                  percent: "84%",
                  bad: 40,
                  badPercent: "11%",
                  expBad: "14.0%",
                },
                {
                  score: "190-199",
                  accounts: 466,
                  active: 387,
                  percent: "83%",
                  bad: 37,
                  badPercent: "10%",
                  expBad: "10.0%",
                },
                {
                  score: "200-209",
                  accounts: "2,456",
                  active: "1,876",
                  percent: "76%",
                  bad: 126,
                  badPercent: "7%",
                  expBad: "8.0%",
                },
                {
                  score: "210-219",
                  accounts: "4,563",
                  active: "3,600",
                  percent: "79%",
                  bad: 213,
                  badPercent: "6%",
                  expBad: "5.0%",
                },
                {
                  score: "220-229",
                  accounts: "5,678",
                  active: "4,325",
                  percent: "76%",
                  bad: 166,
                  badPercent: "4%",
                  expBad: "4.0%",
                },
                {
                  score: "230-239",
                  accounts: "7,658",
                  active: "4,598",
                  percent: "60%",
                  bad: 106,
                  badPercent: "2%",
                  expBad: "2.0%",
                },
                {
                  score: "240-249",
                  accounts: "5,786",
                  active: "3,546",
                  percent: "61%",
                  bad: 35,
                  badPercent: "1%",
                  expBad: "0.8%",
                },
                {
                  score: "250+",
                  accounts: "4,987",
                  active: "2,176",
                  percent: "44%",
                  bad: 26,
                  badPercent: "1%",
                  expBad: "0.5%",
                },
              ].map((row) => (
                <TableRow
                  key={row.score}
                  className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200"
                >
                  <TableCell className="font-semibold text-primary py-3 px-5">
                    {row.score}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.accounts}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.active}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.percent}
                  </TableCell>
                  <TableCell className="text-red-600 font-medium py-3 px-5">
                    {row.bad}
                  </TableCell>
                  <TableCell className="text-red-600 font-medium py-3 px-5">
                    {row.badPercent}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.expBad}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow className="font-bold bg-muted hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="py-3 px-5">Total</TableCell>
                <TableCell className="text-gray-800 py-3 px-5">
                  32,577
                </TableCell>
                <TableCell className="text-gray-800 py-3 px-5">
                  21,373
                </TableCell>
                <TableCell className="text-gray-800 py-3 px-5">66%</TableCell>
                <TableCell className="text-red-600 font-medium py-3 px-5">
                  821
                </TableCell>
                <TableCell className="text-red-600 font-medium py-3 px-5">
                  4%
                </TableCell>
                <TableCell className="text-gray-800 py-3 px-5">-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
