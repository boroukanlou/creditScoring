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
  BarChart3,
  TrendingUp,
  AlertTriangle,
  PieChart as PieChartIcon,
  FileText,
  Shield,
  Activity,
  CreditCard,
  Target,
  LineChart as LineChartIcon,
  DollarSign,
  CheckCircle,
  Clock,
  Zap,
  ChevronRight,
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
import ScorecardAccuracy from "./reports/ScorecardAccuracy";
import OverrideReport from "./reports/OverrideReport";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GainsTable from "./reports/GainsTeble";
import TradeoffChart from "./reports/tradeoffChart";
import CreditLineStrategy from "./reports/CreditLineStrategy";
import CharacteristicReport from "./reports/CharacteristicReport";
import CharacteristicAnalysis from "./reports/CharacteristicAnalysis";
import ScorecardCharacteristicAnalysis from "./reports/ScorecardCharacteristicAnalysis";
import FullScorecardCharacteristicAnalysis from "./reports/FullScorecardCharacteristicAnalysis";
import DelinquencyPerformance from "./reports/DeliquencyPerformance";
import ApprovalRateByWorstDelinquency from "./reports/ApprovalRateByWorstDelinquency";
import DelinquencyMigration from "./reports/DelinquencyMigration";
import RollRate from "./reports/RollRate";
import VintageAnalysis from "./reports/VintageAnalysis";
import AccountQuality from "./reports/AccountQuality";
import SystemStabilityReport from "./reports/systemStabilityReport";
import SystemStabilityTrend from "./reports/SystemStabilityTrend";

export default function Reports() {
  const navigate = useNavigate();
  const { customers, deleteCustomer, clearAll } = useCustomersStore();

  const [searchTerm, setSearchTerm] = useState("");
  const [tierFilter, setTierFilter] = useState<string>("all");
  const [decisionFilter, setDecisionFilter] = useState<string>("all");
  const [activeReport, setActiveReport] = useState<string>("applicant-history");

  const getField = (customer: CustomerRecord, key: string) =>
    // @ts-ignore
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

  const reportCategories = [
    {
      category: "Data",
      icon: <FileText className="w-6 h-6" />,
      reports: [
        {
          id: "applicant-history",
          title: "Applicant History",
        },
        {
          id: "gains-table",
          title: "Gains Table",
        },
      ],
    },
    {
      category: "Overview & Performance",
      icon: <BarChart3 className="w-6 h-6" />,
      reports: [
        {
          id: "final-score-report",
          title: "Final Score Report",
        },
        {
          id: "scorecard-accuracy",
          title: "Scorecard Accuracy",
        },
        {
          id: "tradeoff-chart",
          title: "Tradeoff Chart",
        },
        {
          id: "credit-line-strategy",
          title: "Credit Line Strategy",
        },
      ],
    },
    {
      category: "Scorecard & Characteristics",
      icon: <PieChartIcon className="w-6 h-6" />,
      reports: [
        {
          id: "characteristic-report",
          title: "Characteristic Report",
        },
        {
          id: "characteristic-analysis",
          title: "Characteristic Analysis",
        },
        {
          id: "scorecard-characteristic-analysis",
          title: "Scorecard Characteristic Analysis",
        },
        {
          id: "full-scorecard-characteristic-analysis",
          title: "Full Scorecard Characteristic Analysis",
        },
      ],
    },

    {
      category: "Risk & Delinquency",
      icon: <AlertTriangle className="w-6 h-6" />,
      reports: [
        {
          id: "delinquency-report",
          title: "Delinquency Performance",
        },
        {
          id: "approval-rate-by-worst-deliquency",
          title: "Approval Rate by Worst Delinquency",
        },
        {
          id: "deliquency-migration",
          title: "Delinquency Migration",
        },
        {
          id: "roll-rate",
          title: "Roll Rate",
        },
        {
          id: "vintage-analysis",
          title: "Vintage Analysis",
        },
      ],
    },

    {
      category: "Portfolio & Stability",
      icon: <Shield className="w-6 h-6" />,
      reports: [
        {
          id: "account-quality",
          title: "Account Quality",
        },
        {
          id: "system-stability-report",
          title: "System Stability Report",
        },
        {
          id: "system-stability-trend",
          title: "System Stability Trend",
        },
        {
          id: "override-report",
          title: "Override Report",
        },
      ],
    },
  ];

  const renderActiveReport = (activeReport: string) => {
    switch (activeReport) {
      case "gains-table":
        return <GainsTable />;

      case "final-score-report":
        return <FinalScoreReport customers={customers} />;

      case "scorecard-accuracy":
        return <ScorecardAccuracy />;

      case "tradeoff-chart":
        return <TradeoffChart />;

      case "credit-line-strategy":
        return <CreditLineStrategy />;

      case "characteristic-report":
        return <CharacteristicReport />;

      case "characteristic-analysis":
        return <CharacteristicAnalysis />;

      case "scorecard-characteristic-analysis":
        return <ScorecardCharacteristicAnalysis />;

      case "full-scorecard-characteristic-analysis":
        return <FullScorecardCharacteristicAnalysis />;

      case "delinquency-report":
        return <DelinquencyPerformance />;

      case "approval-rate-by-worst-deliquency":
        return <ApprovalRateByWorstDelinquency />;

      case "deliquency-migration":
        return <DelinquencyMigration />;

      case "roll-rate":
        return <RollRate />;

      case "vintage-analysis":
        return <VintageAnalysis />;

      case "account-quality":
        return <AccountQuality />;

      case "system-stability-report":
        return <SystemStabilityReport />;

      case "system-stability-trend":
        return <SystemStabilityTrend />;

      case "override-report":
        return <OverrideReport />;

      default:
        return <div>Please select a report</div>;
    }
  };

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
            <div className="flex items-center gap-3">
              <img
                src="logo.png"
                alt="dadeh kavan logo"
                className="w-12 h-12"
              />
              <h1 className="text-3xl font-bold text-gray-800">
                Credit Reports & Analytics
              </h1>
            </div>
            <p className="text-gray-600 mt-2">
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

        {/* Summary Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
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

          <Card>
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

          <Card>
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <div className="sticky top-8">
              <Card className="border border-gray-200/70 shadow-lg bg-white/95 backdrop-blur">
                <CardHeader className="pb-4 border-b border-gray-200/70 bg-primary">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-100 text-indigo-600">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold text-white">
                        Available Reports
                      </h2>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Select a report to view insights
                      </p>
                    </div>
                  </div>
                </CardHeader>

                {/* Content */}
                <CardContent className="px-3 py-4">
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue="Data"
                    className="space-y-2"
                  >
                    {reportCategories.map((cat) => (
                      <AccordionItem
                        key={cat.category}
                        value={cat.category}
                        className="border border-gray-200/70 rounded-xl overflow-hidden"
                      >
                        {/* Category Header */}
                        <AccordionTrigger className="px-3 py-2.5 text-sm hover:no-underline hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-lg bg-indigo-100 text-indigo-600">
                              {cat.icon}
                            </div>
                            <span className="font-medium text-gray-800">
                              {cat.category}
                            </span>
                          </div>
                        </AccordionTrigger>

                        {/* Reports */}
                        <AccordionContent className="pt-1 pb-2">
                          <div className="space-y-1">
                            {cat.reports.map((report) => {
                              const isActive = activeReport === report.id;

                              return (
                                <div
                                  key={report.id}
                                  onClick={() => setActiveReport(report.id)}
                                  className={`
                          group cursor-pointer rounded-lg px-3 py-2.5 border transition-all
                          ${
                            isActive
                              ? "bg-indigo-50 border-indigo-500 shadow-sm"
                              : "border-transparent hover:bg-gray-50"
                          }
                        `}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="flex-1">
                                      <h4
                                        className={`
                                text-sm font-medium ml-12
                                ${
                                  isActive ? "text-indigo-700" : "text-gray-800"
                                }
                              `}
                                      >
                                        {report.title}
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-9">
            {activeReport === "applicant-history" ? (
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />{" "}
                    <span>Applicant History</span>
                  </CardTitle>
                  <CardDescription>
                    List of all scored applicants with applied filters
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
                          <TableRow className="bg-gradient-to-r from-primary to-indigo-700 text-white">
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
              </Card>
            ) : (
              <Card className="mb-12">
                <CardContent>{renderActiveReport(activeReport)}</CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
