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

export default function DelinquencyPerformance() {
  return (
    <>
      <CardHeader>
        <CardTitle>Delinquency Performance Report</CardTitle>
        <CardDescription>
          Performance by score range (sample data - Exhibit 9.8)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Score</TableHead>
                <TableHead>Accounts</TableHead>
                <TableHead>Active</TableHead>
                <TableHead>% Active</TableHead>
                <TableHead>Current %</TableHead>
                <TableHead>1-29 days %</TableHead>
                <TableHead>30-59 %</TableHead>
                <TableHead>60-89 %</TableHead>
                <TableHead>90+ %</TableHead>
                <TableHead>Writeoff %</TableHead>
                <TableHead>Bankrupt %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">0-169</TableCell>
                <TableCell>200</TableCell>
                <TableCell>198</TableCell>
                <TableCell>99%</TableCell>
                <TableCell>64%</TableCell>
                <TableCell>10.9%</TableCell>
                <TableCell>7.5%</TableCell>
                <TableCell>6.1%</TableCell>
                <TableCell>4.5%</TableCell>
                <TableCell>3.0%</TableCell>
                <TableCell>4.0%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">170-179</TableCell>
                <TableCell>348</TableCell>
                <TableCell>300</TableCell>
                <TableCell>86%</TableCell>
                <TableCell>69%</TableCell>
                <TableCell>12.0%</TableCell>
                <TableCell>6.8%</TableCell>
                <TableCell>3.0%</TableCell>
                <TableCell>3.1%</TableCell>
                <TableCell>3.1%</TableCell>
                <TableCell>3.0%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">180-189</TableCell>
                <TableCell>435</TableCell>
                <TableCell>367</TableCell>
                <TableCell>84%</TableCell>
                <TableCell>72%</TableCell>
                <TableCell>13.0%</TableCell>
                <TableCell>4.0%</TableCell>
                <TableCell>3.2%</TableCell>
                <TableCell>2.8%</TableCell>
                <TableCell>2.2%</TableCell>
                <TableCell>2.8%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">190-199</TableCell>
                <TableCell>666</TableCell>
                <TableCell>387</TableCell>
                <TableCell>83%</TableCell>
                <TableCell>72%</TableCell>
                <TableCell>11.0%</TableCell>
                <TableCell>5.5%</TableCell>
                <TableCell>2.8%</TableCell>
                <TableCell>1.9%</TableCell>
                <TableCell>2.6%</TableCell>
                <TableCell>2.2%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">200-209</TableCell>
                <TableCell>2,456</TableCell>
                <TableCell>1,876</TableCell>
                <TableCell>76%</TableCell>
                <TableCell>79%</TableCell>
                <TableCell>12.0%</TableCell>
                <TableCell>2.3%</TableCell>
                <TableCell>2.4%</TableCell>
                <TableCell>0.9%</TableCell>
                <TableCell>2.1%</TableCell>
                <TableCell>1.6%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">210-219</TableCell>
                <TableCell>4,563</TableCell>
                <TableCell>3,600</TableCell>
                <TableCell>79%</TableCell>
                <TableCell>82%</TableCell>
                <TableCell>9.5%</TableCell>
                <TableCell>2.5%</TableCell>
                <TableCell>2.3%</TableCell>
                <TableCell>0.6%</TableCell>
                <TableCell>1.6%</TableCell>
                <TableCell>1.1%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">220-229</TableCell>
                <TableCell>5,678</TableCell>
                <TableCell>4,325</TableCell>
                <TableCell>76%</TableCell>
                <TableCell>85%</TableCell>
                <TableCell>9.0%</TableCell>
                <TableCell>2.1%</TableCell>
                <TableCell>1.5%</TableCell>
                <TableCell>0.3%</TableCell>
                <TableCell>1.1%</TableCell>
                <TableCell>0.8%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">230-239</TableCell>
                <TableCell>7,658</TableCell>
                <TableCell>4,598</TableCell>
                <TableCell>60%</TableCell>
                <TableCell>88%</TableCell>
                <TableCell>7.8%</TableCell>
                <TableCell>1.9%</TableCell>
                <TableCell>0.9%</TableCell>
                <TableCell>0.4%</TableCell>
                <TableCell>0.6%</TableCell>
                <TableCell>0.4%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">240-249</TableCell>
                <TableCell>5,786</TableCell>
                <TableCell>3,546</TableCell>
                <TableCell>61%</TableCell>
                <TableCell>94%</TableCell>
                <TableCell>4.0%</TableCell>
                <TableCell>1.0%</TableCell>
                <TableCell>0.5%</TableCell>
                <TableCell>0.0%</TableCell>
                <TableCell>0.2%</TableCell>
                <TableCell>0.3%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">250+</TableCell>
                <TableCell>4,987</TableCell>
                <TableCell>2,176</TableCell>
                <TableCell>44%</TableCell>
                <TableCell>96%</TableCell>
                <TableCell>2.0%</TableCell>
                <TableCell>0.8%</TableCell>
                <TableCell>0.4%</TableCell>
                <TableCell>0.0%</TableCell>
                <TableCell>0.2%</TableCell>
                <TableCell>0.2%</TableCell>
              </TableRow>
              <TableRow className="font-bold bg-muted">
                <TableCell>Total</TableCell>
                <TableCell>32,577</TableCell>
                <TableCell>21,373</TableCell>
                <TableCell>66%</TableCell>
                <TableCell>86%</TableCell>
                <TableCell>7.7%</TableCell>
                <TableCell>2.0%</TableCell>
                <TableCell>1.4%</TableCell>
                <TableCell>0.5%</TableCell>
                <TableCell>1.0%</TableCell>
                <TableCell>0.7%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          * This is sample/mock data from the original credit scorecard
          whitepaper (Exhibit 9.8). It demonstrates strong risk separation:
          higher scores show significantly lower delinquency, write-off, and
          bankruptcy rates.
        </p>
      </CardContent>
    </>
  );
}
