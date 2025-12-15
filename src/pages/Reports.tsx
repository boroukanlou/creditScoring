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
import FinalScoreReport from "./reports/FinalScoreReports";
import DelinquencyPerformance from "./reports/DeliquencyPerformance";
import GainsTable from "./reports/GainsTeble";
import CharacteristicReport from "./reports/characteristicReport";
import SystemStabilityReport from "./reports/systemStabilityReport";
import CharacteristicAnalysis from "./reports/CharacteristicAnalysis";

export default function Reports() {
  const navigate = useNavigate();
  const { customers, deleteCustomer, clearAll } = useCustomersStore();

  const [searchTerm, setSearchTerm] = useState("");
  const [tierFilter, setTierFilter] = useState<string>("all");
  const [decisionFilter, setDecisionFilter] = useState<string>("all");
  const [activeTab, setActiveTab] = useState("applicant-history");

  const getField = (customer: CustomerRecord, key: string) =>
    // @ts-ignore allow both shapes
    (customer as any)[key] ?? customer.data?.[key] ?? "";

  const getScoreObj = (customer: CustomerRecord) =>
    // @ts-ignore
    customer.score ?? customer.data?.score ?? null;

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

  const PIE_COLORS = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
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

        <Card className="mb-8">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="applicant-history">
                Applicant History
              </TabsTrigger>
              <TabsTrigger value="final-score-report">
                Final Score Report
              </TabsTrigger>
              <TabsTrigger value="delinquency-report">
                Delinquency Performance
              </TabsTrigger>
              <TabsTrigger value="gains-table">Gains Table</TabsTrigger>
              <TabsTrigger value="characteristic-report">
                Characteristic Report
              </TabsTrigger>
              <TabsTrigger value="system-stability-report">
                System Stability Report
              </TabsTrigger>
              <TabsTrigger value="characteristic-analsis">
                Characteristic Analysis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="final-score-report">
              <FinalScoreReport customers={customers} />
            </TabsContent>
            <TabsContent value="delinquency-report">
              <DelinquencyPerformance />
            </TabsContent>
            <TabsContent value="gains-table">
              <GainsTable />
            </TabsContent>
            <TabsContent value="characteristic-report">
              <CharacteristicReport />
            </TabsContent>
            <TabsContent value="system-stability-report">
              <SystemStabilityReport />
            </TabsContent>
            <TabsContent value="characteristic-analsis">
              <CharacteristicAnalysis />
            </TabsContent>

            <TabsContent value="applicant-history">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Applicant History
                </CardTitle>
                <CardDescription className="text-base">
                  List of all scored applicants with filters applied
                </CardDescription>
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
                    <Table className="border-2 border-gray-300 rounded-xl shadow-lg bg-white">
                      <TableHeader>
                        <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white hover:bg-indigo-800">
                          <TableHead className="font-bold text-white">
                            Date
                          </TableHead>
                          <TableHead className="font-bold text-white">
                            Applicant
                          </TableHead>
                          <TableHead className="font-bold text-white">
                            National ID
                          </TableHead>
                          <TableHead className="font-bold text-white text-center">
                            Score
                          </TableHead>
                          <TableHead className="font-bold text-white text-center">
                            Tier
                          </TableHead>
                          <TableHead className="font-bold text-white text-center">
                            Decision
                          </TableHead>
                          <TableHead className="font-bold text-white text-right">
                            Actions
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredCustomers.map((customer) => {
                          const scoreObj = getScoreObj(customer);
                          return (
                            <TableRow
                              key={customer.id}
                              className="hover:bg-indigo-50 transition-colors"
                            >
                              <TableCell className="font-medium text-gray-700">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4 text-gray-500" />
                                  {format(
                                    new Date(customer.date),
                                    "MMM dd, yyyy"
                                  )}
                                </div>
                              </TableCell>
                              <TableCell className="font-semibold text-gray-800">
                                {getField(customer, "fullName") || "—"}
                              </TableCell>
                              <TableCell className="font-mono text-sm text-gray-600">
                                {getField(customer, "nationalId") || "—"}
                              </TableCell>
                              <TableCell className="text-center">
                                <div className="text-3xl font-bold text-primary">
                                  {scoreObj ? scoreObj.score : "—"}
                                </div>
                                <div className="text-xs text-gray-500">
                                  / 900
                                </div>
                              </TableCell>
                              <TableCell className="text-center">
                                {scoreObj ? getTierBadge(scoreObj.tier) : "—"}
                              </TableCell>
                              <TableCell className="text-center">
                                {scoreObj
                                  ? getDecisionBadge(scoreObj.decision)
                                  : "—"}
                              </TableCell>
                              <TableCell className="text-right">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => deleteCustomer(customer.id)}
                                  className="text-red-600 hover:text-red-800 hover:bg-red-50"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
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
