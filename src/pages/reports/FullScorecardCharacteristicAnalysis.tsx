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

export default function FullScorecardCharacteristicAnalysis() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">
          Full Scorecard Characteristic Analysis
        </CardTitle>
        <CardDescription className="text-base">
          Detailed performance of all characteristics in the final scorecard:
          expected vs. actual bad rates, points allocated, and index
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-12">
        <div className="overflow-x-auto">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Age & Number of Delinquencies
          </h3>
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                <TableHead
                  rowSpan={2}
                  className="font-bold text-white align-bottom"
                >
                  Age
                </TableHead>
                <TableHead
                  colSpan={4}
                  className="font-bold text-white text-center"
                >
                  Age Characteristic
                </TableHead>
                <TableHead
                  colSpan={5}
                  className="font-bold text-white text-center"
                >
                  # Delq Characteristic
                </TableHead>
              </TableRow>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white">
                <TableHead className="font-bold text-white text-center">
                  Expected %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Actual %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Points
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Index
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  # Delq
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Expected %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Actual %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Points
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Index
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">18-24</TableCell>
                <TableCell className="text-center">12%</TableCell>
                <TableCell className="text-center text-destructive">
                  21%
                </TableCell>
                <TableCell className="text-center font-bold text-primary">
                  10
                </TableCell>
                <TableCell className="text-center text-destructive">
                  0.9
                </TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">80%</TableCell>
                <TableCell className="text-center text-primary">65%</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  45
                </TableCell>
                <TableCell className="text-center text-primary">
                  -6.75
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">25-29</TableCell>
                <TableCell className="text-center">19%</TableCell>
                <TableCell className="text-center text-destructive">
                  25%
                </TableCell>
                <TableCell className="text-center font-bold text-primary">
                  15
                </TableCell>
                <TableCell className="text-center text-destructive">
                  0.9
                </TableCell>
                <TableCell className="text-center">1-2</TableCell>
                <TableCell className="text-center">12%</TableCell>
                <TableCell className="text-center text-destructive">
                  21%
                </TableCell>
                <TableCell className="text-center font-bold text-primary">
                  20
                </TableCell>
                <TableCell className="text-center text-destructive">
                  1.8
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">30-37</TableCell>
                <TableCell className="text-center">32%</TableCell>
                <TableCell className="text-center text-primary">28%</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  25
                </TableCell>
                <TableCell className="text-center text-primary">-1</TableCell>
                <TableCell className="text-center">3-5</TableCell>
                <TableCell className="text-center">5%</TableCell>
                <TableCell className="text-center text-destructive">
                  8%
                </TableCell>
                <TableCell className="text-center font-bold text-primary">
                  12
                </TableCell>
                <TableCell className="text-center text-destructive">
                  0.36
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">38-45</TableCell>
                <TableCell className="text-center">12%</TableCell>
                <TableCell className="text-center text-primary">6%</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  28
                </TableCell>
                <TableCell className="text-center text-primary">
                  -1.68
                </TableCell>
                <TableCell className="text-center">6+</TableCell>
                <TableCell className="text-center">3%</TableCell>
                <TableCell className="text-center text-destructive">
                  6%
                </TableCell>
                <TableCell className="text-center font-bold text-primary">
                  5
                </TableCell>
                <TableCell className="text-center text-destructive">
                  0.15
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">46+</TableCell>
                <TableCell className="text-center">25%</TableCell>
                <TableCell className="text-center text-primary">20%</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  35
                </TableCell>
                <TableCell className="text-center text-primary">
                  -1.75
                </TableCell>
                <TableCell className="text-center"></TableCell>
                <TableCell className="text-center"></TableCell>
                <TableCell className="text-center"></TableCell>
                <TableCell className="text-center"></TableCell>
                <TableCell className="text-center text-primary font-semibold">
                  -4.44
                </TableCell>
              </TableRow>
              <TableRow className="font-bold bg-muted hover:bg-indigo-50 transition-colors">
                <TableCell>Index</TableCell>

                <TableCell
                  colSpan={7}
                  className="text-center text-primary font-semibold"
                >
                  -2.63
                </TableCell>
                <TableCell colSpan={5}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Time at Residence */}
        <div className="overflow-x-auto">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Time at Residence
          </h3>
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                <TableHead className="font-bold text-white">
                  Time at Res
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Expected %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Actual %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Points
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Index
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">0-6</TableCell>
                <TableCell className="text-center">18%</TableCell>
                <TableCell className="text-center text-destructive">
                  29%
                </TableCell>
                <TableCell className="text-center font-bold text-primary">
                  12
                </TableCell>
                <TableCell className="text-center text-destructive">
                  1.32
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">7-18</TableCell>
                <TableCell className="text-center">32%</TableCell>
                <TableCell className="text-center">32%</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  25
                </TableCell>
                <TableCell className="text-center">0</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">19-36</TableCell>
                <TableCell className="text-center">26%</TableCell>
                <TableCell className="text-center text-primary">22%</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  28
                </TableCell>
                <TableCell className="text-center text-primary">
                  -1.12
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">37+</TableCell>
                <TableCell className="text-center">24%</TableCell>
                <TableCell className="text-center text-primary">17%</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  40
                </TableCell>
                <TableCell className="text-center text-primary">-2.8</TableCell>
              </TableRow>
              <TableRow className="font-bold bg-muted hover:bg-indigo-50 transition-colors">
                <TableCell>Index</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>

                <TableCell
                  colSpan={4}
                  className="text-center text-primary font-semibold"
                >
                  -2.6
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Region */}
        <div className="overflow-x-auto">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Region</h3>
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                <TableHead className="font-bold text-white">Region</TableHead>
                <TableHead className="font-bold text-white text-center">
                  Expected %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Actual %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Points
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Index
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Major Urban</TableCell>
                <TableCell className="text-center">55%</TableCell>
                <TableCell className="text-center text-destructive">
                  58%
                </TableCell>
                <TableCell className="text-center font-bold text-primary">
                  20
                </TableCell>
                <TableCell className="text-center text-destructive">
                  0.6
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Minor Urban</TableCell>
                <TableCell className="text-center">26%</TableCell>
                <TableCell className="text-center text-primary">24%</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  25
                </TableCell>
                <TableCell className="text-center text-primary">-0.5</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">Rural</TableCell>
                <TableCell className="text-center">19%</TableCell>
                <TableCell className="text-center text-primary">18%</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  15
                </TableCell>
                <TableCell className="text-center text-primary">
                  -0.15
                </TableCell>
              </TableRow>
              <TableRow className="font-bold bg-muted hover:bg-indigo-50 transition-colors">
                <TableCell>Index</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell
                  colSpan={4}
                  className="text-center text-primary font-semibold"
                >
                  -0.05
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Inquiries in Last 6 Months & Utilization at Bureau */}
        <div className="overflow-x-auto">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Inquiries in Last 6 Months & Utilization at Bureau
          </h3>
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                <TableHead
                  rowSpan={2}
                  className="font-bold text-white align-bottom"
                >
                  Inq 6 mth
                </TableHead>
                <TableHead
                  colSpan={4}
                  className="font-bold text-white text-center"
                >
                  Inq 6 mth Characteristic
                </TableHead>
                <TableHead
                  rowSpan={2}
                  className="font-bold text-white align-bottom"
                >
                  Utilization
                </TableHead>
                <TableHead
                  colSpan={4}
                  className="font-bold text-white text-center"
                >
                  Utilization at Bureau Characteristic
                </TableHead>
              </TableRow>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white">
                <TableHead className="font-bold text-white text-center">
                  Expected %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Actual %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Points
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Index
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Expected %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Actual %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Points
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Index
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">0</TableCell>
                <TableCell className="text-center">63%</TableCell>
                <TableCell className="text-center text-primary">34%</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  40
                </TableCell>
                <TableCell className="text-center text-primary">
                  -11.6
                </TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">12%</TableCell>
                <TableCell className="text-center text-primary">8%</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  15
                </TableCell>
                <TableCell className="text-center text-primary">-0.6</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">1-3</TableCell>
                <TableCell className="text-center">19%</TableCell>
                <TableCell className="text-center text-destructive">
                  31%
                </TableCell>
                <TableCell className="text-center font-bold text-primary">
                  30
                </TableCell>
                <TableCell className="text-center text-destructive">
                  3.6
                </TableCell>
                <TableCell className="text-center">1-9</TableCell>
                <TableCell className="text-center">10%</TableCell>
                <TableCell className="text-center text-destructive">
                  19%
                </TableCell>
                <TableCell className="text-center font-bold text-primary">
                  40
                </TableCell>
                <TableCell className="text-center text-destructive">
                  3.6
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">4-5</TableCell>
                <TableCell className="text-center">10%</TableCell>
                <TableCell className="text-center text-destructive">
                  16%
                </TableCell>
                <TableCell className="text-center font-bold text-primary">
                  15
                </TableCell>
                <TableCell className="text-center text-destructive">
                  0.9
                </TableCell>
                <TableCell className="text-center">10-25</TableCell>
                <TableCell className="text-center">14%</TableCell>
                <TableCell className="text-center text-destructive">
                  20%
                </TableCell>
                <TableCell className="text-center font-bold text-primary">
                  30
                </TableCell>
                <TableCell className="text-center text-destructive">
                  1.8
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">6+</TableCell>
                <TableCell className="text-center">8%</TableCell>
                <TableCell className="text-center text-destructive">
                  19%
                </TableCell>
                <TableCell className="text-center font-bold text-primary">
                  10
                </TableCell>
                <TableCell className="text-center text-destructive">
                  1.1
                </TableCell>
                <TableCell className="text-center">26-50</TableCell>
                <TableCell className="text-center">22%</TableCell>
                <TableCell className="text-center text-destructive">
                  25%
                </TableCell>
                <TableCell className="text-center font-bold text-primary">
                  25
                </TableCell>
                <TableCell className="text-center text-destructive">
                  0.75
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium"></TableCell>
                <TableCell colSpan={4}></TableCell>
                <TableCell className="text-center">50-69</TableCell>
                <TableCell className="text-center">11%</TableCell>
                <TableCell className="text-center text-primary">6%</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  20
                </TableCell>
                <TableCell className="text-center text-primary">-1</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium"></TableCell>
                <TableCell colSpan={4}></TableCell>
                <TableCell className="text-center">70-85</TableCell>
                <TableCell className="text-center">13%</TableCell>
                <TableCell className="text-center text-primary">9%</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  15
                </TableCell>
                <TableCell className="text-center text-primary">-0.6</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium"></TableCell>
                <TableCell colSpan={4}></TableCell>
                <TableCell className="text-center">86-99</TableCell>
                <TableCell className="text-center">14%</TableCell>
                <TableCell className="text-center text-primary">8%</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  10
                </TableCell>
                <TableCell className="text-center text-primary">-0.6</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium"></TableCell>
                <TableCell colSpan={4}></TableCell>
                <TableCell className="text-center">100+</TableCell>
                <TableCell className="text-center">4%</TableCell>
                <TableCell className="text-center text-destructive">
                  5%
                </TableCell>
                <TableCell className="text-center font-bold text-primary">
                  5
                </TableCell>
                <TableCell className="text-center text-destructive">
                  0.05
                </TableCell>
              </TableRow>
              <TableRow className="font-bold bg-muted hover:bg-indigo-50 transition-colors">
                <TableCell>Index</TableCell>
                <TableCell
                  colSpan={7}
                  className="text-center text-primary font-semibold"
                >
                  -6
                </TableCell>
                <TableCell>-</TableCell>
                <TableCell
                  colSpan={5}
                  className="text-center text-primary font-semibold"
                >
                  3.4
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
