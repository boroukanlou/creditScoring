// import { useAuthStore } from "@/stores/AuthStores";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Dashboard() {
//   const logout = useAuthStore((s) => s.logout);
//   const user = useAuthStore((s) => s.user);
//   const navigate = useNavigate();

//   const stats = [
//     { title: "Total Applications", value: 12 },
//     { title: "Approved", value: 5 },
//     { title: "Rejected", value: 4 },
//     { title: "Pending Review", value: 3 },
//   ];

//   const cards = [
//     { title: "New Application", action: () => navigate("/new-application") },
//     { title: "Scorecard Editor", action: () => navigate("/scorecard-editor") },
//     { title: "Reports", action: () => navigate("/reports") },
//   ];

//   return (
//     <div className="p-6 space-y-6">
//       <div className="flex items-center justify-between">
//         <h1 className="text-3xl font-bold">Welcome, {user}</h1>
//         <Button variant="destructive" onClick={logout}>
//           Logout
//         </Button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {stats.map((stat, idx) => (
//           <Card key={idx} className="shadow-lg">
//             <CardHeader>
//               <CardTitle className="text-sm text-gray-500">
//                 {stat.title}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-2xl font-semibold">{stat.value}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {cards.map((card, idx) => (
//           <motion.div
//             key={idx}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Card
//               className="cursor-pointer shadow-xl hover:shadow-2xl transition"
//               onClick={card.action}
//             >
//               <CardContent className="flex items-center justify-center h-24">
//                 <h2 className="text-lg font-medium">{card.title}</h2>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// src/pages/Dashboard.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LogOut, UserPlus, Settings, FileText } from "lucide-react";
import { useAuthStore } from "@/stores/AuthStores";
import { useNavigate } from "react-router-dom";
import DashboardCharts from "@/components/DasdhboardCharts";

export default function Dashboard() {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <div className="flex items-center justify-center gap-2">
              <img
                src="logo.png"
                alt="dadeh kavan logo"
                className="w-10 h-10 mt-1"
              />
              <h1 className="text-4xl font-bold text-gray-800">
                Credit Scoring System
              </h1>
            </div>
            <p className="text-gray-600 mt-2 ml-14">
              Credit Score Range: 0 - 900 | Rule-based Decision Engine
            </p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* New Customer Scoring */}
          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate("/new-customer")}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <UserPlus className="w-8 h-8 text-blue-600" />
                New Applicant
              </CardTitle>
              <CardDescription>
                Start credit scoring for a new member
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" size="lg">
                Score New Customer
              </Button>
            </CardContent>
          </Card>

          {/* Edit Scoring Rules */}
          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate("/edit-rules")}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Settings className="w-8 h-8 text-green-600" />
                Scoring Rules
              </CardTitle>
              <CardDescription>
                Customize point allocation and thresholds
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full" size="lg">
                Edit Rules Engine
              </Button>
            </CardContent>
          </Card>

          {/* View Reports */}
          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate("/reports")}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-purple-600" />
                Reports & History
              </CardTitle>
              <CardDescription>
                View all scored members and decisions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" size="lg">
                Open Reports
              </Button>
            </CardContent>
          </Card>
        </div>

        <DashboardCharts />

        {/* Footer Info */}
        <div className="mt-16 text-center text-sm text-gray-500">
          <p>
            Demo Version • Rule-based Credit Score (0-900) • Tier 1-4 Risk
            Classification
          </p>
          <p className="mt-1">All data stored locally • No backend required</p>
        </div>
      </div>
    </div>
  );
}
