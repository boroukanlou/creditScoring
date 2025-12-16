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
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <FileText className="w-7 h-7 text-primary" />
          <span>Characteristic Report</span>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 mt-2">
          Distribution, points allocated, and bad rate by age group, plus
          approval rates by score and age
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 space-y-12">
        {/* جدول اول: توزیع و بد ریت بر اساس سن */}
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {["Age", "Distr.", "Points", "Bad Rate"].map((title, idx) => (
                  <TableHead
                    key={idx}
                    className={`text-white font-semibold text-left py-3 px-5 whitespace-nowrap ${
                      idx === 0 ? "first:rounded-tl-lg" : ""
                    } ${idx === 3 ? "last:rounded-tr-lg" : ""}`}
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
                  className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200"
                >
                  <TableCell className="font-semibold text-primary py-3 px-5">
                    {row.age}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.distr}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.points}
                  </TableCell>
                  <TableCell className="text-red-600 font-medium py-3 px-5">
                    {row.bad}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* جدول دوم: نرخ تأیید بر اساس امتیاز و سن */}
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {[
                  "Score",
                  "Missing",
                  "18–22",
                  "23–26",
                  "27–29",
                  "30–35",
                  "35–44",
                  "44+",
                ].map((title, idx) => (
                  <TableHead
                    key={idx}
                    className={`text-white font-semibold text-left py-3 px-5 whitespace-nowrap ${
                      idx === 0 ? "first:rounded-tl-lg" : ""
                    } ${idx === 7 ? "last:rounded-tr-lg" : ""}`}
                  >
                    {title}
                  </TableHead>
                ))}
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
                  className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200"
                >
                  <TableCell className="font-semibold text-primary py-3 px-5">
                    {row.score}
                  </TableCell>
                  {row.rates.map((rate, i) => (
                    <TableCell
                      key={i}
                      className="text-gray-800 py-3 px-5 text-center"
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
