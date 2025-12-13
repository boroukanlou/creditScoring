// // src/pages/Reports.tsx
// import { useState, useMemo } from "react";
// import {
//   useCustomersStore,
//   type CustomerRecord,
// } from "@/stores/customersStore";
// import { format } from "date-fns";
// import {
//   ArrowLeft,
//   Search,
//   Filter,
//   Download,
//   Trash2,
//   User,
//   Calendar,
//   TrendingUp,
//   FileSearchCorner,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useNavigate } from "react-router-dom";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   LineChart,
//   Line,
//   Legend,
// } from "recharts";

// export default function Reports() {
//   const navigate = useNavigate();
//   const { customers, deleteCustomer, clearAll } = useCustomersStore();

//   const [searchTerm, setSearchTerm] = useState("");
//   const [tierFilter, setTierFilter] = useState<string>("all");
//   const [decisionFilter, setDecisionFilter] = useState<string>("all");

//   // Helper: safe field getter (handles customer.fullName or customer.data.fullName)
//   const getField = (customer: CustomerRecord, key: string) =>
//     // @ts-ignore allow both shapes
//     (customer as any)[key] ?? customer.data?.[key] ?? "";

//   // Safely get stored score object (prefer stored score; DO NOT recalc)
//   const getScoreObj = (customer: CustomerRecord) =>
//     // @ts-ignore
//     customer.score ?? customer.data?.score ?? null;

//   // Filter & sort (unchanged logic)
//   const filteredCustomers = customers
//     .filter((c) => {
//       const matchesSearch =
//         getField(c, "fullName")
//           .toString()
//           .toLowerCase()
//           .includes(searchTerm.toLowerCase()) ||
//         (getField(c, "nationalId") + "").includes(searchTerm);
//       const scoreObj = getScoreObj(c);
//       const matchesTier =
//         tierFilter === "all" ||
//         (scoreObj && scoreObj.tier === Number(tierFilter));
//       const matchesDecision =
//         decisionFilter === "all" ||
//         (scoreObj && scoreObj.decision === decisionFilter);
//       return matchesSearch && matchesTier && matchesDecision;
//     })
//     .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

//   const getTierBadge = (tier: number) => {
//     const variants: Record<number, { label: string; class: string }> = {
//       1: { label: "Tier 1 - Excellent", class: "bg-green-500 text-white" },
//       2: { label: "Tier 2 - Good", class: "bg-blue-500 text-white" },
//       3: { label: "Tier 3 - Fair", class: "bg-amber-500 text-white" },
//       4: { label: "Tier 4 - Poor", class: "bg-red-500 text-white" },
//     };
//     const info = variants[tier] || variants[4];
//     return <Badge className={info.class}>{info.label}</Badge>;
//   };

//   const getDecisionBadge = (decision: string) => {
//     const map: Record<string, { label: string; class: string }> = {
//       Approve: { label: "Approved", class: "bg-green-100 text-green-800" },
//       "Approve with Conditions": {
//         label: "Conditional",
//         class: "bg-blue-100 text-blue-800",
//       },
//       Refer: { label: "Referred", class: "bg-amber-100 text-amber-800" },
//       Decline: { label: "Declined", class: "bg-red-100 text-red-800" },
//     };
//     const info = map[decision] || map.Decline;
//     return (
//       <Badge variant="outline" className={info.class}>
//         {info.label}
//       </Badge>
//     );
//   };

//   // Export CSV uses safe getters and stored score (no recalculation)
//   const exportToCSV = () => {
//     const headers = [
//       "Date",
//       "Name",
//       "National ID",
//       "Score",
//       "Tier",
//       "Decision",
//     ];
//     const rows = filteredCustomers.map((c) => {
//       const scoreObj = getScoreObj(c);
//       return [
//         format(new Date(c.date), "yyyy-MM-dd"),
//         getField(c, "fullName"),
//         getField(c, "nationalId"),
//         scoreObj ? scoreObj.score : "",
//         scoreObj ? scoreObj.tierLabel : "",
//         scoreObj ? scoreObj.decision : "",
//       ];
//     });

//     const csv = [headers, ...rows.map((r) => r.join(","))].join("\n");
//     const blob = new Blob([csv], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `credit-reports-${format(new Date(), "yyyy-MM-dd")}.csv`;
//     a.click();
//   };

//   // Score distribution (buckets) — same as original but use safe score access
//   const scoreDistribution = [
//     {
//       range: "300–399",
//       count: customers.filter((c) => (getScoreObj(c)?.score ?? 0) < 400).length,
//     },
//     {
//       range: "400–499",
//       count: customers.filter(
//         (c) =>
//           (getScoreObj(c)?.score ?? 0) >= 400 &&
//           (getScoreObj(c)?.score ?? 0) < 500
//       ).length,
//     },
//     {
//       range: "500–599",
//       count: customers.filter(
//         (c) =>
//           (getScoreObj(c)?.score ?? 0) >= 500 &&
//           (getScoreObj(c)?.score ?? 0) < 600
//       ).length,
//     },
//     {
//       range: "600–699",
//       count: customers.filter(
//         (c) =>
//           (getScoreObj(c)?.score ?? 0) >= 600 &&
//           (getScoreObj(c)?.score ?? 0) < 700
//       ).length,
//     },
//     {
//       range: "700–799",
//       count: customers.filter(
//         (c) =>
//           (getScoreObj(c)?.score ?? 0) >= 700 &&
//           (getScoreObj(c)?.score ?? 0) < 800
//       ).length,
//     },
//     {
//       range: "800–900",
//       count: customers.filter((c) => (getScoreObj(c)?.score ?? 0) >= 800)
//         .length,
//     },
//   ].filter((item) => item.count > 0);

//   // New: Tier distribution for Pie chart (1..4)
//   const tierDistribution = useMemo(() => {
//     const counts = { "Tier 1": 0, "Tier 2": 0, "Tier 3": 0, "Tier 4": 0 };
//     customers.forEach((c) => {
//       const t = getScoreObj(c)?.tier;
//       if (t === 1) counts["Tier 1"]++;
//       else if (t === 2) counts["Tier 2"]++;
//       else if (t === 3) counts["Tier 3"]++;
//       else counts["Tier 4"]++;
//     });
//     return Object.entries(counts)
//       .map(([name, value]) => ({ name, value }))
//       .filter((d) => d.value > 0);
//   }, [customers]);

//   // New: Recent scores trend (last 12 records by date)
//   const recentScores = useMemo(() => {
//     return customers
//       .slice()
//       .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
//       .slice(-12)
//       .map((c) => ({
//         date: format(new Date(c.date), "MM/dd"),
//         score: getScoreObj(c)?.score ?? null,
//       }));
//   }, [customers]);

//   // Colors for Pie
//   const PIE_COLORS = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444"];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={() => navigate("/")}
//             className="gap-2"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             Back to Dashboard
//           </Button>
//           <div>
//             <div className="flex items-center gap-1">
//               <img
//                 src="logo.png"
//                 alt="dadeh kavan logo"
//                 className="w-10 h-10 mt-1"
//               />
//               <h1 className="text-3xl font-bold text-gray-800">
//                 Credit Reports & History
//               </h1>
//             </div>
//             <p className="text-gray-600 ml-12">
//               Total Records: {customers.length} • Filtered:{" "}
//               {filteredCustomers.length}
//             </p>
//           </div>
//           <Button onClick={exportToCSV} className="gap-2">
//             <Download className="w-4 h-4" />
//             Export CSV
//           </Button>
//         </div>

//         {/* Filters */}
//         <Card className="mb-8">
//           <CardContent className="pt-6">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <Input
//                   placeholder="Search by name or ID..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10"
//                 />
//               </div>

//               <Select value={tierFilter} onValueChange={setTierFilter}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="All Tiers" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Tiers</SelectItem>
//                   <SelectItem value="1">Tier 1 - Excellent</SelectItem>
//                   <SelectItem value="2">Tier 2 - Good</SelectItem>
//                   <SelectItem value="3">Tier 3 - Fair</SelectItem>
//                   <SelectItem value="4">Tier 4 - Poor</SelectItem>
//                 </SelectContent>
//               </Select>

//               <Select value={decisionFilter} onValueChange={setDecisionFilter}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="All Decisions" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Decisions</SelectItem>
//                   <SelectItem value="Approve">Approved</SelectItem>
//                   <SelectItem value="Approve with Conditions">
//                     Conditional
//                   </SelectItem>
//                   <SelectItem value="Refer">Referred</SelectItem>
//                   <SelectItem value="Decline">Declined</SelectItem>
//                 </SelectContent>
//               </Select>

//               <Button
//                 variant="destructive"
//                 onClick={clearAll}
//                 disabled={customers.length === 0}
//               >
//                 <Trash2 className="w-4 h-4 mr-2" />
//                 Clear All
//               </Button>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Charts Row: Bucket Bar + Tier Pie + Recent Trend */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//           {/* Bucket Bar (existing, kept) */}
//           <Card className="col-span-1 lg:col-span-1">
//             <CardHeader>
//               <CardTitle>Score Distribution (by 100-point buckets)</CardTitle>
//               <CardDescription>
//                 Overview of how applicants score across buckets
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div style={{ width: "100%", height: 240 }}>
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart data={scoreDistribution}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="range" />
//                     <YAxis />
//                     <Tooltip />
//                     <Bar dataKey="count" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Tier Pie */}
//           <Card className="col-span-1">
//             <CardHeader>
//               <CardTitle>Tier Distribution</CardTitle>
//               <CardDescription>Share of applicants per tier</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div style={{ width: "100%", height: 240 }}>
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={tierDistribution}
//                       dataKey="value"
//                       nameKey="name"
//                       outerRadius={80}
//                       innerRadius={36}
//                       paddingAngle={4}
//                       label
//                     >
//                       {tierDistribution.map((_, i) => (
//                         <Cell
//                           key={i}
//                           fill={PIE_COLORS[i % PIE_COLORS.length]}
//                         />
//                       ))}
//                     </Pie>
//                     <Tooltip />
//                     <Legend />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Recent Trend Line */}
//           <Card className="col-span-1">
//             <CardHeader>
//               <CardTitle>Recent Scores Trend</CardTitle>
//               <CardDescription>
//                 Last 12 scored applicants (chronological)
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div style={{ width: "100%", height: 240 }}>
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={recentScores}>
//                     <XAxis dataKey="date" />
//                     <YAxis domain={[300, 900]} />
//                     <Tooltip />
//                     <Line
//                       type="monotone"
//                       dataKey="score"
//                       stroke="#06b6d4"
//                       strokeWidth={3}
//                       dot
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Table */}
//         {filteredCustomers.length === 0 ? (
//           <Card className="text-center py-16">
//             <CardContent>
//               <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//               <p className="text-xl text-gray-600">No records found</p>
//               <Button
//                 className="mt-6"
//                 onClick={() => navigate("/new-customer")}
//               >
//                 Score First Applicant
//               </Button>
//             </CardContent>
//           </Card>
//         ) : (
//           <Card>
//             <CardHeader>
//               <CardTitle>Applicant History</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="overflow-x-auto">
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Date</TableHead>
//                       <TableHead>Applicant</TableHead>
//                       <TableHead>National ID</TableHead>
//                       <TableHead className="text-center">Score</TableHead>
//                       <TableHead>Tier</TableHead>
//                       <TableHead>Decision</TableHead>
//                       <TableHead className="text-right">Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {filteredCustomers.map((customer) => {
//                       const scoreObj = getScoreObj(customer);
//                       return (
//                         <TableRow
//                           key={customer.id}
//                           className="hover:bg-gray-50"
//                         >
//                           <TableCell className="font-medium">
//                             <div className="flex items-center gap-2">
//                               <Calendar className="w-4 h-4 text-gray-500" />
//                               {format(new Date(customer.date), "MMM dd, yyyy")}
//                             </div>
//                           </TableCell>
//                           <TableCell className="font-semibold">
//                             {getField(customer, "fullName") || "—"}
//                           </TableCell>
//                           <TableCell className="font-mono text-sm">
//                             {getField(customer, "nationalId") || "—"}
//                           </TableCell>
//                           <TableCell className="text-center">
//                             <div className="text-2xl font-bold">
//                               {scoreObj ? scoreObj.score : "—"}
//                             </div>
//                             <div className="text-xs text-gray-500">/ 900</div>
//                           </TableCell>
//                           <TableCell>
//                             {scoreObj ? getTierBadge(scoreObj.tier) : "—"}
//                           </TableCell>
//                           <TableCell>
//                             {scoreObj
//                               ? getDecisionBadge(scoreObj.decision)
//                               : "—"}
//                           </TableCell>
//                           <TableCell className="text-right">
//                             <div className="flex items-center justify-end gap-2">
//                               {/* Delete Button */}
//                               <Button
//                                 variant="ghost"
//                                 size="sm"
//                                 onClick={() => deleteCustomer(customer.id)}
//                                 className="text-red-600 hover:text-red-800"
//                               >
//                                 <Trash2 className="w-4 h-4" />
//                               </Button>
//                             </div>
//                           </TableCell>
//                         </TableRow>
//                       );
//                     })}
//                   </TableBody>
//                 </Table>
//               </div>
//             </CardContent>
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// }

// src/pages/Reports.tsx
import { useState, useMemo } from "react";
import {
  useCustomersStore,
  type CustomerRecord,
} from "@/stores/customersStore";
import { format } from "date-fns";
import {
  ArrowLeft,
  Search,
  Download,
  Trash2,
  User,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";

export default function Reports() {
  const navigate = useNavigate();
  const { customers, deleteCustomer, clearAll } = useCustomersStore();

  const [searchTerm, setSearchTerm] = useState("");
  const [tierFilter, setTierFilter] = useState<string>("all");
  const [decisionFilter, setDecisionFilter] = useState<string>("all");
  const [activeTab, setActiveTab] = useState("applicant-history");

  // Helper: safe field getter (handles customer.fullName or customer.data.fullName)
  const getField = (customer: CustomerRecord, key: string) =>
    // @ts-ignore allow both shapes
    (customer as any)[key] ?? customer.data?.[key] ?? "";

  // Safely get stored score object (prefer stored score; DO NOT recalc)
  const getScoreObj = (customer: CustomerRecord) =>
    // @ts-ignore
    customer.score ?? customer.data?.score ?? null;

  // Filter & sort (unchanged logic)
  const filteredCustomers = customers
    .filter((c) => {
      const matchesSearch =
        getField(c, "fullName")
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        (getField(c, "nationalId") + "").includes(searchTerm);
      const scoreObj = getScoreObj(c);
      const matchesTier =
        tierFilter === "all" ||
        (scoreObj && scoreObj.tier === Number(tierFilter));
      const matchesDecision =
        decisionFilter === "all" ||
        (scoreObj && scoreObj.decision === decisionFilter);
      return matchesSearch && matchesTier && matchesDecision;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const getTierBadge = (tier: number) => {
    const variants: Record<number, { label: string; class: string }> = {
      1: { label: "Tier 1 - Excellent", class: "bg-green-500 text-white" },
      2: { label: "Tier 2 - Good", class: "bg-blue-500 text-white" },
      3: { label: "Tier 3 - Fair", class: "bg-amber-500 text-white" },
      4: { label: "Tier 4 - Poor", class: "bg-red-500 text-white" },
    };
    const info = variants[tier] || variants[4];
    return <Badge className={info.class}>{info.label}</Badge>;
  };

  const getDecisionBadge = (decision: string) => {
    const map: Record<string, { label: string; class: string }> = {
      Approve: { label: "Approved", class: "bg-green-100 text-green-800" },
      "Approve with Conditions": {
        label: "Conditional",
        class: "bg-blue-100 text-blue-800",
      },
      Refer: { label: "Referred", class: "bg-amber-100 text-amber-800" },
      Decline: { label: "Declined", class: "bg-red-100 text-red-800" },
    };
    const info = map[decision] || map.Decline;
    return (
      <Badge variant="outline" className={info.class}>
        {info.label}
      </Badge>
    );
  };

  // Export CSV uses safe getters and stored score (no recalculation)
  const exportToCSV = () => {
    const headers = [
      "Date",
      "Name",
      "National ID",
      "Score",
      "Tier",
      "Decision",
    ];
    const rows = filteredCustomers.map((c) => {
      const scoreObj = getScoreObj(c);
      return [
        format(new Date(c.date), "yyyy-MM-dd"),
        getField(c, "fullName"),
        getField(c, "nationalId"),
        scoreObj ? scoreObj.score : "",
        scoreObj ? scoreObj.tierLabel : "",
        scoreObj ? scoreObj.decision : "",
      ];
    });

    const csv = [headers, ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `credit-reports-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
  };

  // Score distribution (buckets) — same as original but use safe score access
  const scoreDistribution = [
    {
      range: "300–399",
      count: customers.filter((c) => (getScoreObj(c)?.score ?? 0) < 400).length,
    },
    {
      range: "400–499",
      count: customers.filter(
        (c) =>
          (getScoreObj(c)?.score ?? 0) >= 400 &&
          (getScoreObj(c)?.score ?? 0) < 500
      ).length,
    },
    {
      range: "500–599",
      count: customers.filter(
        (c) =>
          (getScoreObj(c)?.score ?? 0) >= 500 &&
          (getScoreObj(c)?.score ?? 0) < 600
      ).length,
    },
    {
      range: "600–699",
      count: customers.filter(
        (c) =>
          (getScoreObj(c)?.score ?? 0) >= 600 &&
          (getScoreObj(c)?.score ?? 0) < 700
      ).length,
    },
    {
      range: "700–799",
      count: customers.filter(
        (c) =>
          (getScoreObj(c)?.score ?? 0) >= 700 &&
          (getScoreObj(c)?.score ?? 0) < 800
      ).length,
    },
    {
      range: "800–900",
      count: customers.filter((c) => (getScoreObj(c)?.score ?? 0) >= 800)
        .length,
    },
  ].filter((item) => item.count > 0);

  // Tier distribution for Pie chart (1..4)
  const tierDistribution = useMemo(() => {
    const counts = { "Tier 1": 0, "Tier 2": 0, "Tier 3": 0, "Tier 4": 0 };
    customers.forEach((c) => {
      const t = getScoreObj(c)?.tier;
      if (t === 1) counts["Tier 1"]++;
      else if (t === 2) counts["Tier 2"]++;
      else if (t === 3) counts["Tier 3"]++;
      else counts["Tier 4"]++;
    });
    return Object.entries(counts)
      .map(([name, value]) => ({ name, value }))
      .filter((d) => d.value > 0);
  }, [customers]);

  // Recent scores trend (last 12 records by date)
  const recentScores = useMemo(() => {
    return customers
      .slice()
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(-12)
      .map((c) => ({
        date: format(new Date(c.date), "MM/dd"),
        score: getScoreObj(c)?.score ?? null,
      }));
  }, [customers]);

  // Final Score Report data (dynamic based on customers and scoring logic)
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

    const CUTOFF = 620; // Based on scoringEngine: below = Decline/Refer, above = Approve*

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
      .filter((row) => row.applicants > 0); // Hide empty ranges

    // Totals
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

    // Above/Below Cutoff
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

    // Cumulative lowside/highside
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

  // Colors for Pie
  const PIE_COLORS = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Button>
          <div>
            <div className="flex items-center gap-1">
              <img
                src="logo.png"
                alt="dadeh kavan logo"
                className="w-10 h-10 mt-1"
              />
              <h1 className="text-3xl font-bold text-gray-800">
                Credit Reports & History
              </h1>
            </div>
            <p className="text-gray-600 ml-12">
              Total Records: {customers.length} • Filtered:{" "}
              {filteredCustomers.length}
            </p>
          </div>
          <Button onClick={exportToCSV} className="gap-2">
            <Download className="w-4 h-4" />
            Export CSV
          </Button>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search by name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={tierFilter} onValueChange={setTierFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Tiers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tiers</SelectItem>
                  <SelectItem value="1">Tier 1 - Excellent</SelectItem>
                  <SelectItem value="2">Tier 2 - Good</SelectItem>
                  <SelectItem value="3">Tier 3 - Fair</SelectItem>
                  <SelectItem value="4">Tier 4 - Poor</SelectItem>
                </SelectContent>
              </Select>

              <Select value={decisionFilter} onValueChange={setDecisionFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Decisions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Decisions</SelectItem>
                  <SelectItem value="Approve">Approved</SelectItem>
                  <SelectItem value="Approve with Conditions">
                    Conditional
                  </SelectItem>
                  <SelectItem value="Refer">Referred</SelectItem>
                  <SelectItem value="Decline">Declined</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="destructive"
                onClick={clearAll}
                disabled={customers.length === 0}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Charts Row: Bucket Bar + Tier Pie + Recent Trend */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Bucket Bar */}
          <Card className="col-span-1 lg:col-span-1">
            <CardHeader>
              <CardTitle>Score Distribution (by 100-point buckets)</CardTitle>
              <CardDescription>
                Overview of how applicants score across buckets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ width: "100%", height: 240 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={scoreDistribution}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="range" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Tier Pie */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Tier Distribution</CardTitle>
              <CardDescription>Share of applicants per tier</CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ width: "100%", height: 240 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={tierDistribution}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={80}
                      innerRadius={36}
                      paddingAngle={4}
                      label
                    >
                      {tierDistribution.map((_, i) => (
                        <Cell
                          key={i}
                          fill={PIE_COLORS[i % PIE_COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Recent Trend Line */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Recent Scores Trend</CardTitle>
              <CardDescription>
                Last 12 scored applicants (chronological)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ width: "100%", height: 240 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={recentScores}>
                    <XAxis dataKey="date" />
                    <YAxis domain={[300, 900]} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#06b6d4"
                      strokeWidth={3}
                      dot
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for Tables */}
        <Card className="mb-8">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="applicant-history">
                Applicant History
              </TabsTrigger>
              <TabsTrigger value="final-score-report">
                Final Score Report
              </TabsTrigger>
              <TabsTrigger value="delinquency-report">
                Delinquency Performance
              </TabsTrigger>
            </TabsList>
            <TabsContent value="final-score-report">
              <CardHeader>
                <CardTitle>Final Score Report</CardTitle>
                <CardDescription>
                  Approval rates by score range (dynamic based on historical
                  data)
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
                        <TableCell>
                          {finalScoreReport.total.applicants}
                        </TableCell>
                        <TableCell>{finalScoreReport.total.approved}</TableCell>
                        <TableCell>{finalScoreReport.total.percent}</TableCell>
                        <TableCell>
                          {finalScoreReport.cumulative.lowside}
                        </TableCell>
                        <TableCell>
                          {finalScoreReport.cumulative.highside}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Above Cutoff</TableCell>
                        <TableCell>
                          {finalScoreReport.above.applicants}
                        </TableCell>
                        <TableCell>{finalScoreReport.above.approved}</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Below Cutoff</TableCell>
                        <TableCell>
                          {finalScoreReport.below.applicants}
                        </TableCell>
                        <TableCell>{finalScoreReport.below.approved}</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </TabsContent>
            <TabsContent value="delinquency-report">
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
                  whitepaper (Exhibit 9.8). It demonstrates strong risk
                  separation: higher scores show significantly lower
                  delinquency, write-off, and bankruptcy rates.
                </p>
              </CardContent>
            </TabsContent>
            <TabsContent value="applicant-history">
              <CardHeader>
                <CardTitle>Applicant History</CardTitle>
              </CardHeader>
              <CardContent>
                {filteredCustomers.length === 0 ? (
                  <div className="text-center py-16">
                    <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-xl text-gray-600">No records found</p>
                    <Button
                      className="mt-6"
                      onClick={() => navigate("/new-customer")}
                    >
                      Score First Applicant
                    </Button>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Applicant</TableHead>
                          <TableHead>National ID</TableHead>
                          <TableHead className="text-center">Score</TableHead>
                          <TableHead>Tier</TableHead>
                          <TableHead>Decision</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredCustomers.map((customer) => {
                          const scoreObj = getScoreObj(customer);
                          return (
                            <TableRow
                              key={customer.id}
                              className="hover:bg-gray-50"
                            >
                              <TableCell className="font-medium">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4 text-gray-500" />
                                  {format(
                                    new Date(customer.date),
                                    "MMM dd, yyyy"
                                  )}
                                </div>
                              </TableCell>
                              <TableCell className="font-semibold">
                                {getField(customer, "fullName") || "—"}
                              </TableCell>
                              <TableCell className="font-mono text-sm">
                                {getField(customer, "nationalId") || "—"}
                              </TableCell>
                              <TableCell className="text-center">
                                <div className="text-2xl font-bold">
                                  {scoreObj ? scoreObj.score : "—"}
                                </div>
                                <div className="text-xs text-gray-500">
                                  / 900
                                </div>
                              </TableCell>
                              <TableCell>
                                {scoreObj ? getTierBadge(scoreObj.tier) : "—"}
                              </TableCell>
                              <TableCell>
                                {scoreObj
                                  ? getDecisionBadge(scoreObj.decision)
                                  : "—"}
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex items-center justify-end gap-2">
                                  {/* Delete Button */}
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => deleteCustomer(customer.id)}
                                    className="text-red-600 hover:text-red-800"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
