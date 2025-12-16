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
import { LineChartIcon } from "lucide-react";

export default function GainsTable() {
  return (
    <>
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <LineChartIcon className="w-7 h-7 text-primary" />
          <span>Gains Table</span>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 mt-2">
          Gains table showing cumulative goods, bads, and rates by score
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {[
                  "Score",
                  "Count",
                  "Cumulative Count",
                  "Goods",
                  "Bads",
                  "Cumulative Goods",
                  "Cumulative Bads",
                  "Interval Bad Rate",
                  "Cumulative Bad Rate",
                  "Approval Rate",
                ].map((title, idx) => (
                  <TableHead
                    key={idx}
                    className={`text-white font-semibold text-left py-3 px-5 whitespace-nowrap ${
                      idx === 0 ? "first:rounded-tl-lg" : ""
                    } ${idx === 9 ? "last:rounded-tr-lg" : ""}`}
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
                  score: 210,
                  count: 345,
                  cumCount: "6,965",
                  goods: 311,
                  bads: 34,
                  cumGoods: "6,538",
                  cumBads: 427,
                  intBad: "9.86%",
                  cumBad: "6.13%",
                  approval: "69.50%",
                },
                {
                  score: 211,
                  count: 500,
                  cumCount: "6,620",
                  goods: 462,
                  bads: 38,
                  cumGoods: "6,227",
                  cumBads: 393,
                  intBad: "7.60%",
                  cumBad: "5.94%",
                  approval: "66.20%",
                },
                {
                  score: 212,
                  count: 450,
                  cumCount: "6,120",
                  goods: 418,
                  bads: 32,
                  cumGoods: "5,765",
                  cumBads: 355,
                  intBad: "7.11%",
                  cumBad: "5.80%",
                  approval: "61.20%",
                },
                {
                  score: 213,
                  count: 345,
                  cumCount: "5,670",
                  goods: 323,
                  bads: 22,
                  cumGoods: "5,347",
                  cumBads: 323,
                  intBad: "6.38%",
                  cumBad: "5.70%",
                  approval: "56.70%",
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
                    {row.count}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.cumCount}
                  </TableCell>
                  <TableCell className="text-green-600 font-medium py-3 px-5">
                    {row.goods}
                  </TableCell>
                  <TableCell className="text-red-600 font-medium py-3 px-5">
                    {row.bads}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.cumGoods}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.cumBads}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.intBad}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.cumBad}
                  </TableCell>
                  <TableCell className="text-gray-800 font-medium py-3 px-5">
                    {row.approval}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
