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
      .filter((row) => row.applicants > 0);

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
      cumulative: { lowside: cumulativeLowside, highside: cumulativeHighside },
    };
  }, [customers]);

  return (
    <>
      <CardHeader>
        <CardTitle>Final Score Report</CardTitle>
        <CardDescription>
          Approval rates by score range (dynamic based on historical data)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Score Range</TableHead>
                <TableHead>Applicants</TableHead>
                <TableHead>Approved</TableHead>
                <TableHead>% Approved</TableHead>
                <TableHead>Lowside</TableHead>
                <TableHead>Highside</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {finalScoreReport.rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.range}</TableCell>
                  <TableCell>{row.applicants}</TableCell>
                  <TableCell>{row.approved}</TableCell>
                  <TableCell>{row.percentApproved}</TableCell>
                  <TableCell>{row.lowside ?? "-"}</TableCell>
                  <TableCell>{row.highside ?? "-"}</TableCell>
                </TableRow>
              ))}
              <TableRow className="font-bold">
                <TableCell>Total</TableCell>
                <TableCell>{finalScoreReport.total.applicants}</TableCell>
                <TableCell>{finalScoreReport.total.approved}</TableCell>
                <TableCell>{finalScoreReport.total.percent}</TableCell>
                <TableCell>{finalScoreReport.cumulative.lowside}</TableCell>
                <TableCell>{finalScoreReport.cumulative.highside}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Above Cutoff</TableCell>
                <TableCell>{finalScoreReport.above.applicants}</TableCell>
                <TableCell>{finalScoreReport.above.approved}</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Below Cutoff</TableCell>
                <TableCell>{finalScoreReport.below.applicants}</TableCell>
                <TableCell>{finalScoreReport.below.approved}</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
