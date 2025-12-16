import { useMemo } from "react";
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
import { type CustomerRecord } from "@/stores/customersStore";
import { BarChart3 } from "lucide-react";

interface FinalScoreReportProps {
  customers: CustomerRecord[];
}

const getScoreObj = (customer: CustomerRecord) =>
  // @ts-ignore
  customer.score ?? customer.data?.score ?? null;

export default function FinalScoreReport({ customers }: FinalScoreReportProps) {
  const finalScoreReport = useMemo(() => {
    const ranges = [
      { min: 300, max: 399, label: "300-399" },
      { min: 400, max: 499, label: "400-499" },
      { min: 500, max: 599, label: "500-599" },
      { min: 600, max: 619, label: "600-619" },
      { min: 620, max: 699, label: "620-699" },
      { min: 700, max: 759, label: "700-759" },
      { min: 760, max: 900, label: "760-900" },
    ];

    const CUTOFF = 620;

    const reportRows = ranges
      .map((range) => {
        const inRange = customers.filter((c) => {
          const score = getScoreObj(c)?.score ?? 0;
          return score >= range.min && score <= range.max;
        });

        const applicants = inRange.length;
        const approved = inRange.filter((c) =>
          ["Approve", "Approve with Conditions"].includes(
            getScoreObj(c)?.decision ?? ""
          )
        ).length;

        const percentApproved =
          applicants > 0
            ? ((approved / applicants) * 100).toFixed(1) + "%"
            : "0%";

        const isBelowCutoff = range.max < CUTOFF;
        const lowside = isBelowCutoff ? approved : null;
        const highside = !isBelowCutoff ? applicants - approved : null;

        return {
          range: range.label,
          applicants,
          approved,
          percentApproved,
          lowside,
          highside,
        };
      })
      .filter((row) => row.applicants > 0); // Hide empty ranges

    const totalApplicants = customers.length;
    const totalApproved = customers.filter((c) =>
      ["Approve", "Approve with Conditions"].includes(
        getScoreObj(c)?.decision ?? ""
      )
    ).length;
    const totalPercent =
      totalApplicants > 0
        ? ((totalApproved / totalApplicants) * 100).toFixed(1) + "%"
        : "0%";

    const aboveCutoffApplicants = customers.filter(
      (c) => (getScoreObj(c)?.score ?? 0) >= CUTOFF
    ).length;
    const aboveCutoffApproved = customers.filter((c) => {
      const score = getScoreObj(c)?.score ?? 0;
      return (
        score >= CUTOFF &&
        ["Approve", "Approve with Conditions"].includes(
          getScoreObj(c)?.decision ?? ""
        )
      );
    }).length;

    const belowCutoffApplicants = totalApplicants - aboveCutoffApplicants;
    const belowCutoffApproved = totalApproved - aboveCutoffApproved;

    const cumulativeLowside = reportRows.reduce(
      (sum, row) => sum + (row.lowside ?? 0),
      0
    );
    const cumulativeHighside = reportRows.reduce(
      (sum, row) => sum + (row.highside ?? 0),
      0
    );

    return {
      rows: reportRows,
      total: {
        applicants: totalApplicants,
        approved: totalApproved,
        percent: totalPercent,
      },
      above: {
        applicants: aboveCutoffApplicants,
        approved: aboveCutoffApproved,
      },
      below: {
        applicants: belowCutoffApplicants,
        approved: belowCutoffApproved,
      },
      cumulative: {
        lowside: cumulativeLowside,
        highside: cumulativeHighside,
      },
    };
  }, [customers]);

  return (
    <>
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <BarChart3 className="w-7 h-7 text-primary" />
          <span>Final Score Report</span>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 mt-2">
          Approval rates by score range (dynamic based on historical scored
          applicants)
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {[
                  "Score Range",
                  "Applicants",
                  "Approved",
                  "% Approved",
                  "Lowside",
                  "Highside",
                ].map((title, idx) => (
                  <TableHead
                    key={idx}
                    className={`text-white font-semibold text-left py-3 px-5 whitespace-nowrap ${
                      idx === 0 ? "first:rounded-tl-lg" : ""
                    } ${idx === 5 ? "last:rounded-tr-lg" : ""}`}
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
              {finalScoreReport.rows.map((row, index) => (
                <TableRow
                  key={index}
                  className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200"
                >
                  <TableCell className="font-semibold text-primary py-3 px-5">
                    {row.range}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.applicants}
                  </TableCell>
                  <TableCell className="text-green-600 font-medium py-3 px-5">
                    {row.approved}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.percentApproved}
                  </TableCell>
                  <TableCell className="text-red-600 font-medium py-3 px-5">
                    {row.lowside ?? "-"}
                  </TableCell>
                  <TableCell className="text-red-600 font-medium py-3 px-5">
                    {row.highside ?? "-"}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow className="font-bold bg-muted hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="py-3 px-5">Total</TableCell>
                <TableCell className="text-gray-800 py-3 px-5">
                  {finalScoreReport.total.applicants}
                </TableCell>
                <TableCell className="text-green-600 font-medium py-3 px-5">
                  {finalScoreReport.total.approved}
                </TableCell>
                <TableCell className="text-gray-800 py-3 px-5">
                  {finalScoreReport.total.percent}
                </TableCell>
                <TableCell className="text-red-600 font-medium py-3 px-5">
                  {finalScoreReport.cumulative.lowside}
                </TableCell>
                <TableCell className="text-red-600 font-medium py-3 px-5">
                  {finalScoreReport.cumulative.highside}
                </TableCell>
              </TableRow>

              <TableRow className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-medium py-3 px-5">
                  Above Cutoff (≥620)
                </TableCell>
                <TableCell className="text-gray-800 py-3 px-5">
                  {finalScoreReport.above.applicants}
                </TableCell>
                <TableCell className="text-green-600 font-medium py-3 px-5">
                  {finalScoreReport.above.approved}
                </TableCell>
                <TableCell className="text-gray-800 py-3 px-5">-</TableCell>
                <TableCell className="text-gray-800 py-3 px-5">-</TableCell>
                <TableCell className="text-red-600 font-medium py-3 px-5">
                  {finalScoreReport.above.applicants -
                    finalScoreReport.above.approved}
                </TableCell>
              </TableRow>

              <TableRow className="hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="font-medium py-3 px-5">
                  Below Cutoff (&lt;620)
                </TableCell>
                <TableCell className="text-gray-800 py-3 px-5">
                  {finalScoreReport.below.applicants}
                </TableCell>
                <TableCell className="text-red-600 font-medium py-3 px-5">
                  {finalScoreReport.below.approved}
                </TableCell>
                <TableCell className="text-gray-800 py-3 px-5">-</TableCell>
                <TableCell className="text-red-600 font-medium py-3 px-5">
                  {finalScoreReport.below.approved}
                </TableCell>
                <TableCell className="text-gray-800 py-3 px-5">-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-sm text-gray-500 italic mt-6">
          * Lowside: Approved applicants below cutoff (potential bad loans).
          <br />
          * Highside: Rejected applicants above cutoff (lost good business).
          <br />
          Data is calculated dynamically from all scored applicants in the
          system.
        </p>
      </CardContent>
    </>
  );
}
