// gainsTable.tsx
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

export default function GainsTable() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">
          Section of a Gains Table (Exhibit 7.1)
        </CardTitle>
        <CardDescription className="text-base">
          Gains table showing cumulative goods, bads, and rates by score
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                <TableHead className="font-bold text-white">Score</TableHead>
                <TableHead className="font-bold text-white text-center">
                  Count
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Cumulative Count
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Goods
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Bads
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Cumulative Goods
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Cumulative Bads
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Interval Bad Rate
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Cumulative Bad Rate
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Approval Rate
                </TableHead>
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
                  className="hover:bg-indigo-50 transition-colors"
                >
                  <TableCell className="font-bold text-primary">
                    {row.score}
                  </TableCell>
                  <TableCell className="text-center">{row.count}</TableCell>
                  <TableCell className="text-center">{row.cumCount}</TableCell>
                  <TableCell className="text-center">{row.goods}</TableCell>
                  <TableCell className="text-center text-destructive">
                    {row.bads}
                  </TableCell>
                  <TableCell className="text-center">{row.cumGoods}</TableCell>
                  <TableCell className="text-center text-destructive">
                    {row.cumBads}
                  </TableCell>
                  <TableCell className="text-center text-destructive">
                    {row.intBad}
                  </TableCell>
                  <TableCell className="text-center text-destructive">
                    {row.cumBad}
                  </TableCell>
                  <TableCell className="text-center text-primary font-semibold">
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
