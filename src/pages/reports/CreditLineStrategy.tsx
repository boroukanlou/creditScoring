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

export default function CreditLineStrategy() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">
          Credit Line Strategy
        </CardTitle>
        <CardDescription className="text-base">
          Assigned initial credit line amounts by score range and debt service
          ratio (DSR)
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                <TableHead
                  rowSpan={2}
                  className="font-bold text-white align-bottom"
                >
                  Score
                </TableHead>
                <TableHead
                  colSpan={5}
                  className="font-bold text-white text-center"
                >
                  Debt Service Ratio
                </TableHead>
              </TableRow>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white">
                <TableHead className="font-bold text-white text-center">
                  0-10%
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  11-15%
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  16-24%
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  25-35%
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  36%+
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">230-234</TableCell>
                <TableCell className="text-center font-semibold text-primary">
                  $3,500
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $3,500
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $2,500
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $2,500
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $2,000
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">235-239</TableCell>
                <TableCell className="text-center font-semibold text-primary">
                  $4,000
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $3,500
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $3,000
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $2,500
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $2,000
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">240-244</TableCell>
                <TableCell className="text-center font-semibold text-primary">
                  $4,500
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $4,000
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $3,500
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $3,000
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $2,500
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">245-249</TableCell>
                <TableCell className="text-center font-semibold text-primary">
                  $5,000
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $4,500
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $4,000
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $3,500
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $3,000
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">250+</TableCell>
                <TableCell className="text-center font-semibold text-primary">
                  $7,500
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $5,000
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $4,500
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $4,000
                </TableCell>
                <TableCell className="text-center font-semibold">
                  $3,500
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
