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
        <CardTitle>Section of a Gains Table (Exhibit 7.1)</CardTitle>
        <CardDescription>
          Gains table showing cumulative goods, bads, and rates by score
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Score</TableHead>
                <TableHead>Count</TableHead>
                <TableHead>Cumulative Count</TableHead>
                <TableHead>Goods</TableHead>
                <TableHead>Bads</TableHead>
                <TableHead>Cumulative Goods</TableHead>
                <TableHead>Cumulative Bads</TableHead>
                <TableHead>Interval Bad Rate</TableHead>
                <TableHead>Cumulative Bad Rate</TableHead>
                <TableHead>Approval Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">210</TableCell>
                <TableCell>345</TableCell>
                <TableCell>6,965</TableCell>
                <TableCell>311</TableCell>
                <TableCell>34</TableCell>
                <TableCell>6,538</TableCell>
                <TableCell>427</TableCell>
                <TableCell>9.86%</TableCell>
                <TableCell>6.13%</TableCell>
                <TableCell>69.50%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">211</TableCell>
                <TableCell>500</TableCell>
                <TableCell>6,620</TableCell>
                <TableCell>462</TableCell>
                <TableCell>38</TableCell>
                <TableCell>6,227</TableCell>
                <TableCell>393</TableCell>
                <TableCell>7.60%</TableCell>
                <TableCell>5.94%</TableCell>
                <TableCell>66.20%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">212</TableCell>
                <TableCell>450</TableCell>
                <TableCell>6,120</TableCell>
                <TableCell>418</TableCell>
                <TableCell>32</TableCell>
                <TableCell>5,765</TableCell>
                <TableCell>355</TableCell>
                <TableCell>7.11%</TableCell>
                <TableCell>5.80%</TableCell>
                <TableCell>61.20%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">213</TableCell>
                <TableCell>345</TableCell>
                <TableCell>5,670</TableCell>
                <TableCell>323</TableCell>
                <TableCell>22</TableCell>
                <TableCell>5,347</TableCell>
                <TableCell>323</TableCell>
                <TableCell>6.38%</TableCell>
                <TableCell>5.70%</TableCell>
                <TableCell>56.70%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          * This is sample data from Exhibit 7.1, showing a section of the gains
          table for credit scorecard validation.
        </p>
      </CardContent>
    </>
  );
}
