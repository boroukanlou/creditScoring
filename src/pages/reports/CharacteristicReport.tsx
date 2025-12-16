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
import { FileText } from "lucide-react";

export default function CharacteristicReport() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          <span>Characteristic Report</span>
        </CardTitle>
        <CardDescription className="text-base">
          Distribution, points allocated, and bad rate by age group, plus
          approval rates by score and age
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-12">
        <div className="overflow-x-auto">
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                <TableHead className="font-bold text-white">Age</TableHead>
                <TableHead className="font-bold text-white text-center">
                  Distr.
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Points
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Bad Rate
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { age: "Missing", distr: "8%", points: "16", bad: "16%" },
                { age: "18-22", distr: "9%", points: "12", bad: "24%" },
                { age: "23-26", distr: "15%", points: "18", bad: "18%" },
                { age: "27-29", distr: "26%", points: "26", bad: "10%" },
                { age: "30-35", distr: "20%", points: "35", bad: "5%" },
                { age: "35-44", distr: "10%", points: "45", bad: "3%" },
                { age: "44+", distr: "12%", points: "51", bad: "2%" },
              ].map((row) => (
                <TableRow
                  key={row.age}
                  className="hover:bg-indigo-50 transition-colors"
                >
                  <TableCell className="font-semibold text-gray-800">
                    {row.age}
                  </TableCell>
                  <TableCell className="text-center font-medium">
                    {row.distr}
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary">
                    {row.points}
                  </TableCell>
                  <TableCell className="text-center font-medium text-destructive">
                    {row.bad}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="overflow-x-auto">
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-secondary-foreground to-emerald-700 text-white">
                <TableHead className="font-bold text-white">Score</TableHead>
                <TableHead className="font-bold text-white text-center">
                  Missing
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  18–22
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  23–26
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  27–29
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  30–35
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  35–44
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  44+
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  score: 210,
                  rates: ["74%", "70%", "78%", "80%", "83%", "91%", "97%"],
                },
                {
                  score: 211,
                  rates: ["67%", "64%", "75%", "77%", "80%", "88%", "95%"],
                },
                {
                  score: 212,
                  rates: ["62%", "58%", "70%", "73%", "77%", "85%", "93%"],
                },
                {
                  score: 213,
                  rates: ["56%", "50%", "61%", "67%", "72%", "80%", "87%"],
                },
              ].map((row) => (
                <TableRow
                  key={row.score}
                  className="hover:bg-emerald-50 transition-colors"
                >
                  <TableCell className="font-bold text-secondary-foreground text-sm">
                    {row.score}
                  </TableCell>
                  {row.rates.map((rate, i) => (
                    <TableCell
                      key={i}
                      className="text-center font-semibold text-gray-800"
                    >
                      {rate}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
