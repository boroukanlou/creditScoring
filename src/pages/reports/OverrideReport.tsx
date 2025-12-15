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

export default function OverrideReport() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">
          Override Report
        </CardTitle>
        <CardDescription className="text-base">
          Summary of policy and manual overrides: number of cases and
          distribution by system vs. manual decision (Decline/Approve)
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                <TableHead className="font-bold text-white">
                  Override Reason
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Number
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  System 'D'
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  System 'A'
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Manual 'D'
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Manual 'A'
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-indigo-50 font-semibold">
                <TableCell colSpan={6} className="text-left text-indigo-700">
                  Lowside
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium pl-8">
                  Local Knowledge
                </TableCell>
                <TableCell className="text-center">34</TableCell>
                <TableCell className="text-center text-destructive">
                  34
                </TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center text-primary">34</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium pl-8">
                  Justifiable Delq
                </TableCell>
                <TableCell className="text-center">96</TableCell>
                <TableCell className="text-center text-destructive">
                  96
                </TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center text-primary">96</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium pl-8">VIP</TableCell>
                <TableCell className="text-center">12</TableCell>
                <TableCell className="text-center text-destructive">
                  12
                </TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center text-primary">12</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium pl-8">VP Override</TableCell>
                <TableCell className="text-center">8</TableCell>
                <TableCell className="text-center text-destructive">
                  8
                </TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center text-primary">8</TableCell>
              </TableRow>
              <TableRow className="font-bold hover:bg-indigo-50 transition-colors">
                <TableCell className="pl-8">Lowside Total</TableCell>
                <TableCell className="text-center font-bold">150</TableCell>
                <TableCell className="text-center font-bold text-destructive">
                  150
                </TableCell>
                <TableCell className="text-center font-bold">0</TableCell>
                <TableCell className="text-center font-bold">-</TableCell>
                <TableCell className="text-center font-bold text-primary">
                  150
                </TableCell>
              </TableRow>

              <TableRow className="bg-amber-50 font-semibold">
                <TableCell colSpan={6} className="text-left text-amber-700">
                  Highside
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium pl-8">Bankruptcy</TableCell>
                <TableCell className="text-center">125</TableCell>
                <TableCell className="text-center">120</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center text-destructive">
                  5
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium pl-8">
                  Local Knowledge
                </TableCell>
                <TableCell className="text-center">102</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center text-primary">102</TableCell>
                <TableCell className="text-center text-destructive">
                  102
                </TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium pl-8">Derogatory</TableCell>
                <TableCell className="text-center">200</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center text-primary">200</TableCell>
                <TableCell className="text-center text-destructive">
                  185
                </TableCell>
                <TableCell className="text-center">15</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium pl-8">Policy 1</TableCell>
                <TableCell className="text-center">55</TableCell>
                <TableCell className="text-center text-destructive">
                  55
                </TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium pl-8">Policy 2</TableCell>
                <TableCell className="text-center">73</TableCell>
                <TableCell className="text-center text-destructive">
                  73
                </TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium pl-8">Policy 3</TableCell>
                <TableCell className="text-center">92</TableCell>
                <TableCell className="text-center text-destructive">
                  92
                </TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">0</TableCell>
              </TableRow>
              <TableRow className="font-bold hover:bg-indigo-50 transition-colors">
                <TableCell className="pl-8">Highside Total</TableCell>
                <TableCell className="text-center font-bold">647</TableCell>
                <TableCell className="text-center font-bold text-destructive">
                  340
                </TableCell>
                <TableCell className="text-center font-bold text-primary">
                  302
                </TableCell>
                <TableCell className="text-center font-bold text-destructive">
                  287
                </TableCell>
                <TableCell className="text-center font-bold">20</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
