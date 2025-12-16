// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Zap } from "lucide-react";

// export default function CharacteristicAnalysis() {
//   return (
//     <>
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
//           <Zap className="w-5 h-5 text-primary" />
//           <span>Characteristic Analysis</span>
//         </CardTitle>
//         <CardDescription className="text-base">
//           Comparison of expected vs. actual bad rates by age group with
//           allocated points and index
//         </CardDescription>
//       </CardHeader>

//       <CardContent>
//         <div className="overflow-x-auto">
//           <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
//             <TableHeader>
//               <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
//                 <TableHead className="font-bold text-white">Age</TableHead>
//                 <TableHead className="font-bold text-white text-center">
//                   Expected %
//                 </TableHead>
//                 <TableHead className="font-bold text-white text-center">
//                   Actual %
//                 </TableHead>
//                 <TableHead className="font-bold text-white text-center">
//                   Points
//                 </TableHead>
//                 <TableHead className="font-bold text-white text-center">
//                   Index
//                 </TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow className="hover:bg-indigo-50 transition-colors">
//                 <TableCell className="font-medium">18-24</TableCell>
//                 <TableCell className="text-center">12%</TableCell>
//                 <TableCell className="text-center text-destructive">
//                   21%
//                 </TableCell>
//                 <TableCell className="text-center font-bold text-primary">
//                   10
//                 </TableCell>
//                 <TableCell className="text-center text-destructive">
//                   0.9
//                 </TableCell>
//               </TableRow>
//               <TableRow className="hover:bg-indigo-50 transition-colors">
//                 <TableCell className="font-medium">25-29</TableCell>
//                 <TableCell className="text-center">19%</TableCell>
//                 <TableCell className="text-center text-destructive">
//                   25%
//                 </TableCell>
//                 <TableCell className="text-center font-bold text-primary">
//                   15
//                 </TableCell>
//                 <TableCell className="text-center text-destructive">
//                   0.9
//                 </TableCell>
//               </TableRow>
//               <TableRow className="hover:bg-indigo-50 transition-colors">
//                 <TableCell className="font-medium">30-37</TableCell>
//                 <TableCell className="text-center">32%</TableCell>
//                 <TableCell className="text-center text-destructive">
//                   28%
//                 </TableCell>
//                 <TableCell className="text-center font-bold text-primary">
//                   25
//                 </TableCell>
//                 <TableCell className="text-center text-primary">-1</TableCell>
//               </TableRow>
//               <TableRow className="hover:bg-indigo-50 transition-colors">
//                 <TableCell className="font-medium">38-45</TableCell>
//                 <TableCell className="text-center">12%</TableCell>
//                 <TableCell className="text-center text-primary">6%</TableCell>
//                 <TableCell className="text-center font-bold text-primary">
//                   28
//                 </TableCell>
//                 <TableCell className="text-center text-primary">
//                   -1.68
//                 </TableCell>
//               </TableRow>
//               <TableRow className="hover:bg-indigo-50 transition-colors">
//                 <TableCell className="font-medium">46+</TableCell>
//                 <TableCell className="text-center">25%</TableCell>
//                 <TableCell className="text-center text-primary">20%</TableCell>
//                 <TableCell className="text-center font-bold text-primary">
//                   35
//                 </TableCell>
//                 <TableCell className="text-center text-primary">
//                   -1.75
//                 </TableCell>
//               </TableRow>

//               <TableRow className="font-bold bg-muted hover:bg-indigo-50 transition-colors">
//                 <TableCell>Total</TableCell>
//                 <TableCell className="text-center">-</TableCell>
//                 <TableCell className="text-center">-</TableCell>
//                 <TableCell className="text-center">-</TableCell>
//                 <TableCell className="text-center text-primary font-semibold">
//                   -2.63
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </div>
//       </CardContent>
//     </>
//   );
// }

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
import { Zap } from "lucide-react";

export default function CharacteristicAnalysis() {
  return (
    <>
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
          <Zap className="w-7 h-7 text-primary" />
          <span>Characteristic Analysis</span>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 mt-2">
          Comparison of expected vs. actual bad rates by age group with
          allocated points and index
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-primary/90 hover:bg-primary/80 transition-all">
                {["Age", "Expected %", "Actual %", "Points", "Index"].map(
                  (title, idx) => (
                    <TableHead
                      key={idx}
                      className={`text-white font-semibold text-left py-3 px-5 whitespace-nowrap ${
                        idx === 0 ? "first:rounded-tl-lg" : ""
                      } ${idx === 4 ? "last:rounded-tr-lg" : ""}`}
                    >
                      {title.includes(" ")
                        ? title
                            .split(" ")
                            .map((t, i) => <span key={i}>{t}</span>)
                        : title}
                    </TableHead>
                  )
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  age: "18-24",
                  expected: "12%",
                  actual: "21%",
                  points: "10",
                  index: "0.9",
                },
                {
                  age: "25-29",
                  expected: "19%",
                  actual: "25%",
                  points: "15",
                  index: "0.9",
                },
                {
                  age: "30-37",
                  expected: "32%",
                  actual: "28%",
                  points: "25",
                  index: "-1",
                },
                {
                  age: "38-45",
                  expected: "12%",
                  actual: "6%",
                  points: "28",
                  index: "-1.68",
                },
                {
                  age: "46+",
                  expected: "25%",
                  actual: "20%",
                  points: "35",
                  index: "-1.75",
                },
              ].map((row) => (
                <TableRow
                  key={row.age}
                  className="border-b border-gray-200 hover:bg-primary/5 transition-colors duration-200"
                >
                  <TableCell className="font-semibold text-primary py-3 px-5">
                    {row.age}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.expected}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.actual}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.points}
                  </TableCell>
                  <TableCell className="text-gray-800 py-3 px-5">
                    {row.index}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow className="font-bold bg-muted hover:bg-primary/5 transition-colors duration-200">
                <TableCell className="py-3 px-5">Total</TableCell>
                <TableCell className="text-gray-800 py-3 px-5">-</TableCell>
                <TableCell className="text-gray-800 py-3 px-5">-</TableCell>
                <TableCell className="text-gray-800 py-3 px-5">-</TableCell>
                <TableCell className="text-gray-800 py-3 px-5">-2.63</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
