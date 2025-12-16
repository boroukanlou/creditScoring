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
import { Clock } from "lucide-react";

export default function DelinquencyPerformance() {
  return (
    <>
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <Clock className="w-7 h-7 text-primary" />
          <span>Delinquency Performance Report</span>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 mt-2">
          Performance by score range
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
                  "Current",
                  "%",
                  "1-29 days",
                  "%",
                  "30-59",
                  "%",
                  "60-89",
                  "%",
                  "90+",
                  "%",
                  "Writeoff",
                  "%",
                  "Bankrupt",
                  "%",
                ].map((title, idx) => (
                  <TableHead
                    key={idx}
                    className={`text-white font-semibold text-left py-3 px-5 whitespace-nowrap text-center ${
                      idx === 0 ? "rounded-tl-lg" : ""
                    } ${idx === 17 ? "rounded-tr-lg" : ""}`}
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
                  0-169
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  200
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  198
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  99%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  127
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  64%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  32
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  10.9%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  15
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  7.5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  12
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  6.1%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  9
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  4.5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  6
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  8
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  4.0%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  170-179
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  348
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  300
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  86%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  207
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  69%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  36
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  12.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  20
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  6.8%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  9
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  9
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3.1%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  9
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3.1%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  9
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3.0%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  180-189
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  435
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  367
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  84%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  264
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  72%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  48
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  13.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  15
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  4.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  12
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3.2%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  10
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.8%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  8
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.2%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  10
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.8%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  190-199
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  466
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  387
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  83%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  286
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  72%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  43
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  11.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  21
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  5.5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  11
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.8%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  7
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.9%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  10
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.6%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  8
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.2%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  200-209
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2,456
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1,876
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  76%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1,482
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  79%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  225
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  12.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  43
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.3%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  45
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.4%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  17
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.9%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  39
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.1%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  30
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.6%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  210-219
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  4,563
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3,600
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  79%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2,952
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  82%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  342
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  9.5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  90
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  83
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.3%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  22
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.6%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  58
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.6%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  40
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.1%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  220-229
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  5,678
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  4,325
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  76%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3,676
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  85%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  389
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  9.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  91
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.1%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  65
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  13
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.3%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  47
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.1%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  34
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.8%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  230-239
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  7,658
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  4,598
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  60%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  4,046
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  88%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  359
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  7.8%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  87
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.9%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  41
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.9%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  18
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.4%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  28
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.6%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  18
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.4%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  240-249
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  5,787
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3,176
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  55%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  3,049
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  96%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  64
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  25
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.8%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  13
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.4%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  6
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.2%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  6
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.2%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  250+
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  4,987
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2,176
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  44%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2,090
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  96%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  43
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  17
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.8%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  9
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.4%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  4
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.2%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  4
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.2%
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-semibold text-primary py-3 px-5">
                  Total
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  32,577
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  21,373
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  66%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  18,463
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  86%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1,648
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  7.7%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  441
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  2.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  307
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.4%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  118
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.5%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  230
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  1.0%
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  165
                </TableCell>
                <TableCell className="text-gray-900 py-3 px-5 text-center">
                  0.7%
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
