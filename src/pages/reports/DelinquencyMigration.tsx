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
import { TrendingUp } from "lucide-react";

export default function DelinquencyMigration() {
  return (
    <>
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <TrendingUp className="w-7 h-7 text-primary" />
          <span>Delinquency Migration</span>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 mt-2">
          Roll-rate analysis showing how accounts migrate between delinquency
          buckets from previous month to current month
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                <TableHead
                  rowSpan={3}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap rounded-tl-lg"
                >
                  Previous Month
                </TableHead>
                <TableHead
                  colSpan={18}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center rounded-tr-lg"
                >
                  This Month
                </TableHead>
              </TableRow>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                <TableHead
                  colSpan={2}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center"
                >
                  Previous Month
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center"
                >
                  Current
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center"
                >
                  1-29 days
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center"
                >
                  30-59 days
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center"
                >
                  60-89 days
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center"
                >
                  90-119 days
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center"
                >
                  120-179 days
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center"
                >
                  180+
                </TableHead>
                <TableHead
                  colSpan={2}
                  className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center"
                >
                  Bankrupt
                </TableHead>
              </TableRow>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {[
                  "#",
                  "%",
                  "#",
                  "%",
                  "#",
                  "%",
                  "#",
                  "%",
                  "#",
                  "%",
                  "#",
                  "%",
                  "#",
                  "%",
                  "#",
                  "%",
                  "#",
                  "%",
                ].map((title, idx) => (
                  <TableHead
                    key={idx}
                    className="text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center"
                  >
                    {title}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Current
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  54,782
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  72%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  52,591
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  96.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2,082
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3.8%
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
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  210
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.2%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  1-29 days
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  12,640
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  17%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  10,112
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  80.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  632
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  5.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1,871
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  14.8%
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
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  85
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.2%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  30-59 days
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3,254
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  4%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1,302
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  40.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  325
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  10.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  472
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  14.5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1,139
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  35.0%
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
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  59
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.5%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  60-89 days
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2,271
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  182
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  8.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  204
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  9.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  227
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  10.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  227
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  10.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1,413
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  62.2%
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
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  39
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.8%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  90-119 days
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1,449
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  55
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3.8%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  65
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  4.5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  80
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  5.5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  87
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  6.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  72
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  5.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1,065
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  73.1%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  -
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  42
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.1%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  120-179
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  887
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.2%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  16
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.8%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  12
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.4%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  19
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.1%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  20
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.2%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  27
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  64
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  4.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  550
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  78.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  150
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  7.5%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  180+
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  632
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.8%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.2%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  8
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.2%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  11
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.8%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  16
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  13
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  371
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  60.3%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  210
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  29.0%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Total
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  75,915
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  100%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  64,258
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  85%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3,329
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  4%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2,679
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3.5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1,488
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1,524
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1,132
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  921
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.2%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  585
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.8%
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
