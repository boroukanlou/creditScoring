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
import { Clock } from "lucide-react";

export default function DelinquencyPerformance() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary" />
          <span>Delinquency Performance Report</span>
        </CardTitle>
        <CardDescription className="text-base">
          Performance by score range
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                <TableHead className="font-bold text-white">Score</TableHead>
                <TableHead className="font-bold text-white text-center">
                  Accounts
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Active
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Current
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  1-29 days
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  30-59
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  60-89
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  90+
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Writeoff
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  Bankrupt
                </TableHead>
                <TableHead className="font-bold text-white text-center">
                  %
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">0-169</TableCell>
                <TableCell className="text-center">200</TableCell>
                <TableCell className="text-center">198</TableCell>
                <TableCell className="text-center">99%</TableCell>
                <TableCell className="text-center">127</TableCell>
                <TableCell className="text-center text-primary">64%</TableCell>
                <TableCell className="text-center">32</TableCell>
                <TableCell className="text-center text-destructive">
                  10.9%
                </TableCell>
                <TableCell className="text-center">15</TableCell>
                <TableCell className="text-center text-destructive">
                  7.5%
                </TableCell>
                <TableCell className="text-center">12</TableCell>
                <TableCell className="text-center text-destructive">
                  6.1%
                </TableCell>
                <TableCell className="text-center">9</TableCell>
                <TableCell className="text-center text-destructive">
                  4.5%
                </TableCell>
                <TableCell className="text-center">6</TableCell>
                <TableCell className="text-center text-destructive">
                  3.0%
                </TableCell>
                <TableCell className="text-center">8</TableCell>
                <TableCell className="text-center text-destructive">
                  4.0%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">170-179</TableCell>
                <TableCell className="text-center">348</TableCell>
                <TableCell className="text-center">300</TableCell>
                <TableCell className="text-center">86%</TableCell>
                <TableCell className="text-center">207</TableCell>
                <TableCell className="text-center text-primary">69%</TableCell>
                <TableCell className="text-center">36</TableCell>
                <TableCell className="text-center text-destructive">
                  12.0%
                </TableCell>
                <TableCell className="text-center">20</TableCell>
                <TableCell className="text-center text-destructive">
                  6.8%
                </TableCell>
                <TableCell className="text-center">9</TableCell>
                <TableCell className="text-center text-destructive">
                  3.0%
                </TableCell>
                <TableCell className="text-center">9</TableCell>
                <TableCell className="text-center text-destructive">
                  3.1%
                </TableCell>
                <TableCell className="text-center">9</TableCell>
                <TableCell className="text-center text-destructive">
                  3.1%
                </TableCell>
                <TableCell className="text-center">9</TableCell>
                <TableCell className="text-center text-destructive">
                  3.0%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">180-189</TableCell>
                <TableCell className="text-center">435</TableCell>
                <TableCell className="text-center">367</TableCell>
                <TableCell className="text-center">84%</TableCell>
                <TableCell className="text-center">264</TableCell>
                <TableCell className="text-center text-primary">72%</TableCell>
                <TableCell className="text-center">48</TableCell>
                <TableCell className="text-center text-destructive">
                  13.0%
                </TableCell>
                <TableCell className="text-center">15</TableCell>
                <TableCell className="text-center text-destructive">
                  4.0%
                </TableCell>
                <TableCell className="text-center">12</TableCell>
                <TableCell className="text-center text-destructive">
                  3.2%
                </TableCell>
                <TableCell className="text-center">10</TableCell>
                <TableCell className="text-center text-destructive">
                  2.8%
                </TableCell>
                <TableCell className="text-center">8</TableCell>
                <TableCell className="text-center text-destructive">
                  2.2%
                </TableCell>
                <TableCell className="text-center">10</TableCell>
                <TableCell className="text-center text-destructive">
                  2.8%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">190-199</TableCell>
                <TableCell className="text-center">466</TableCell>
                <TableCell className="text-center">387</TableCell>
                <TableCell className="text-center">83%</TableCell>
                <TableCell className="text-center">286</TableCell>
                <TableCell className="text-center text-primary">72%</TableCell>
                <TableCell className="text-center">43</TableCell>
                <TableCell className="text-center text-destructive">
                  11.0%
                </TableCell>
                <TableCell className="text-center">21</TableCell>
                <TableCell className="text-center text-destructive">
                  5.5%
                </TableCell>
                <TableCell className="text-center">11</TableCell>
                <TableCell className="text-center text-destructive">
                  2.8%
                </TableCell>
                <TableCell className="text-center">7</TableCell>
                <TableCell className="text-center text-destructive">
                  1.9%
                </TableCell>
                <TableCell className="text-center">10</TableCell>
                <TableCell className="text-center text-destructive">
                  2.6%
                </TableCell>
                <TableCell className="text-center">8</TableCell>
                <TableCell className="text-center text-destructive">
                  2.2%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">200-209</TableCell>
                <TableCell className="text-center">2,456</TableCell>
                <TableCell className="text-center">1,876</TableCell>
                <TableCell className="text-center">76%</TableCell>
                <TableCell className="text-center">1,482</TableCell>
                <TableCell className="text-center text-primary">79%</TableCell>
                <TableCell className="text-center">225</TableCell>
                <TableCell className="text-center text-destructive">
                  12.0%
                </TableCell>
                <TableCell className="text-center">43</TableCell>
                <TableCell className="text-center text-destructive">
                  2.3%
                </TableCell>
                <TableCell className="text-center">45</TableCell>
                <TableCell className="text-center text-destructive">
                  2.4%
                </TableCell>
                <TableCell className="text-center">17</TableCell>
                <TableCell className="text-center text-destructive">
                  0.9%
                </TableCell>
                <TableCell className="text-center">39</TableCell>
                <TableCell className="text-center text-destructive">
                  2.1%
                </TableCell>
                <TableCell className="text-center">30</TableCell>
                <TableCell className="text-center text-destructive">
                  1.6%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">210-219</TableCell>
                <TableCell className="text-center">4,563</TableCell>
                <TableCell className="text-center">3,600</TableCell>
                <TableCell className="text-center">79%</TableCell>
                <TableCell className="text-center">2,952</TableCell>
                <TableCell className="text-center text-primary">82%</TableCell>
                <TableCell className="text-center">342</TableCell>
                <TableCell className="text-center text-destructive">
                  9.5%
                </TableCell>
                <TableCell className="text-center">90</TableCell>
                <TableCell className="text-center text-destructive">
                  2.5%
                </TableCell>
                <TableCell className="text-center">83</TableCell>
                <TableCell className="text-center text-destructive">
                  2.3%
                </TableCell>
                <TableCell className="text-center">22</TableCell>
                <TableCell className="text-center text-destructive">
                  0.6%
                </TableCell>
                <TableCell className="text-center">58</TableCell>
                <TableCell className="text-center text-destructive">
                  1.6%
                </TableCell>
                <TableCell className="text-center">40</TableCell>
                <TableCell className="text-center text-destructive">
                  1.1%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">220-229</TableCell>
                <TableCell className="text-center">5,678</TableCell>
                <TableCell className="text-center">4,325</TableCell>
                <TableCell className="text-center">76%</TableCell>
                <TableCell className="text-center">3,676</TableCell>
                <TableCell className="text-center text-primary">85%</TableCell>
                <TableCell className="text-center">389</TableCell>
                <TableCell className="text-center text-destructive">
                  9.0%
                </TableCell>
                <TableCell className="text-center">91</TableCell>
                <TableCell className="text-center text-destructive">
                  2.1%
                </TableCell>
                <TableCell className="text-center">65</TableCell>
                <TableCell className="text-center text-destructive">
                  1.5%
                </TableCell>
                <TableCell className="text-center">13</TableCell>
                <TableCell className="text-center text-destructive">
                  0.3%
                </TableCell>
                <TableCell className="text-center">47</TableCell>
                <TableCell className="text-center text-destructive">
                  1.1%
                </TableCell>
                <TableCell className="text-center">34</TableCell>
                <TableCell className="text-center text-destructive">
                  0.8%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">230-239</TableCell>
                <TableCell className="text-center">7,658</TableCell>
                <TableCell className="text-center">4,598</TableCell>
                <TableCell className="text-center">60%</TableCell>
                <TableCell className="text-center">4,046</TableCell>
                <TableCell className="text-center text-primary">88%</TableCell>
                <TableCell className="text-center">359</TableCell>
                <TableCell className="text-center text-destructive">
                  7.8%
                </TableCell>
                <TableCell className="text-center">87</TableCell>
                <TableCell className="text-center text-destructive">
                  1.9%
                </TableCell>
                <TableCell className="text-center">41</TableCell>
                <TableCell className="text-center text-destructive">
                  0.9%
                </TableCell>
                <TableCell className="text-center">18</TableCell>
                <TableCell className="text-center text-destructive">
                  0.4%
                </TableCell>
                <TableCell className="text-center">28</TableCell>
                <TableCell className="text-center text-destructive">
                  0.6%
                </TableCell>
                <TableCell className="text-center">18</TableCell>
                <TableCell className="text-center text-destructive">
                  0.4%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">240-249</TableCell>
                <TableCell className="text-center">5,787</TableCell>
                <TableCell className="text-center">3,176</TableCell>
                <TableCell className="text-center">55%</TableCell>
                <TableCell className="text-center">3,049</TableCell>
                <TableCell className="text-center text-primary">96%</TableCell>
                <TableCell className="text-center">64</TableCell>
                <TableCell className="text-center text-destructive">
                  2.0%
                </TableCell>
                <TableCell className="text-center">25</TableCell>
                <TableCell className="text-center text-destructive">
                  0.8%
                </TableCell>
                <TableCell className="text-center">13</TableCell>
                <TableCell className="text-center text-destructive">
                  0.4%
                </TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center text-destructive">
                  0.0%
                </TableCell>
                <TableCell className="text-center">6</TableCell>
                <TableCell className="text-center text-destructive">
                  0.2%
                </TableCell>
                <TableCell className="text-center">6</TableCell>
                <TableCell className="text-center text-destructive">
                  0.2%
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-indigo-50 transition-colors">
                <TableCell className="font-medium">250+</TableCell>
                <TableCell className="text-center">4,987</TableCell>
                <TableCell className="text-center">2,176</TableCell>
                <TableCell className="text-center">44%</TableCell>
                <TableCell className="text-center">2,090</TableCell>
                <TableCell className="text-center text-primary">96%</TableCell>
                <TableCell className="text-center">43</TableCell>
                <TableCell className="text-center text-destructive">
                  2.0%
                </TableCell>
                <TableCell className="text-center">17</TableCell>
                <TableCell className="text-center text-destructive">
                  0.8%
                </TableCell>
                <TableCell className="text-center">9</TableCell>
                <TableCell className="text-center text-destructive">
                  0.4%
                </TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center text-destructive">
                  0.0%
                </TableCell>
                <TableCell className="text-center">4</TableCell>
                <TableCell className="text-center text-destructive">
                  0.2%
                </TableCell>
                <TableCell className="text-center">4</TableCell>
                <TableCell className="text-center text-destructive">
                  0.2%
                </TableCell>
              </TableRow>
              <TableRow className="font-bold bg-muted hover:bg-indigo-50 transition-colors">
                <TableCell>Total</TableCell>
                <TableCell className="text-center">32,577</TableCell>
                <TableCell className="text-center">21,373</TableCell>
                <TableCell className="text-center">66%</TableCell>
                <TableCell className="text-center">18,463</TableCell>
                <TableCell className="text-center text-primary">86%</TableCell>
                <TableCell className="text-center">1,648</TableCell>
                <TableCell className="text-center text-destructive">
                  7.7%
                </TableCell>
                <TableCell className="text-center">441</TableCell>
                <TableCell className="text-center text-destructive">
                  2.0%
                </TableCell>
                <TableCell className="text-center">307</TableCell>
                <TableCell className="text-center text-destructive">
                  1.4%
                </TableCell>
                <TableCell className="text-center">118</TableCell>
                <TableCell className="text-center text-destructive">
                  0.5%
                </TableCell>
                <TableCell className="text-center">230</TableCell>
                <TableCell className="text-center text-destructive">
                  1.0%
                </TableCell>
                <TableCell className="text-center">165</TableCell>
                <TableCell className="text-center text-destructive">
                  0.7%
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}
