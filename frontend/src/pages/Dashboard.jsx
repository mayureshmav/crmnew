import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import {
  FunnelChart,
  Funnel,
  LabelList,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import {
  FaChartLine,
  FaProjectDiagram,
  FaTasks,
  FaRupeeSign
} from "react-icons/fa";

const funnelData = [
  { name: "New Leads", value: 120, fill: "#3B82F6" },
  { name: "Contacted", value: 80, fill: "#10B981" },
  { name: "Qualified", value: 50, fill: "#F59E0B" },
  { name: "Proposal", value: 30, fill: "#FB923C" },
  { name: "Closed", value: 15, fill: "#EF4444" }
];

const pieData = [
  { name: "IndiaMart", value: 40 },
  { name: "MagicBricks", value: 30 },
  { name: "Referral", value: 20 },
  { name: "Website", value: 10 }
];

const COLORS = ["#2563EB", "#10B981", "#F59E0B", "#EF4444"];

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="space-y-8">

        {/* HEADER */}

        <h1 className="text-2xl font-semibold text-gray-800">
          Leads Dashboard
        </h1>

        {/* FUNNEL + PIE */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* SALES FUNNEL */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white border rounded-xl p-6 shadow-sm"
          >

            <h3 className="font-medium mb-4">
              Sales Funnel
            </h3>

            <ResponsiveContainer width="100%" height={300}>
              <FunnelChart>

                <Funnel
                  dataKey="value"
                  data={funnelData}
                  isAnimationActive
                >

                  <LabelList
                    position="right"
                    dataKey="name"
                  />

                </Funnel>

              </FunnelChart>
            </ResponsiveContainer>

          </motion.div>

          {/* PIE CHART */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border rounded-xl p-6 shadow-sm"
          >

            <h3 className="font-medium mb-4">
              Lead Sources
            </h3>

            <ResponsiveContainer width="100%" height={300}>

              <PieChart>

                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={100}
                  label
                >

                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </motion.div>

        </div>

        {/* KPI CARDS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 border border-blue-200 p-6 rounded-xl flex items-center gap-4"
          >
            <FaChartLine className="text-blue-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                Conversion Rate
              </p>

              <h2 className="text-2xl font-bold">
                28%
              </h2>
            </div>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 border border-green-200 p-6 rounded-xl flex items-center gap-4"
          >
            <FaProjectDiagram className="text-green-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                Active Projects
              </p>

              <h2 className="text-2xl font-bold">
                12
              </h2>
            </div>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-red-50 border border-red-200 p-6 rounded-xl flex items-center gap-4"
          >
            <FaTasks className="text-red-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                Tasks Due
              </p>

              <h2 className="text-2xl font-bold">
                52
              </h2>
            </div>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl flex items-center gap-4"
          >
            <FaRupeeSign className="text-yellow-600 text-2xl" />

            <div>
              <p className="text-sm text-gray-600">
                Revenue
              </p>

              <h2 className="text-2xl font-bold">
                ₹12.6L
              </h2>
            </div>

          </motion.div>

        </div>

        {/* BOTTOM SECTION */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* REVENUE SUMMARY */}

          <div className="bg-white border rounded-xl p-6 shadow-sm">

            <h3 className="font-medium mb-4">
              Revenue This Month
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex justify-between">
                <span>Top Sales Rep</span>
                <span className="font-medium">
                  Amit Sharma
                </span>
              </div>

              <div className="flex justify-between">
                <span>Total Deals</span>
                <span className="font-medium">
                  24
                </span>
              </div>

              <div className="flex justify-between">
                <span>Closed Deals</span>
                <span className="font-medium text-green-600">
                  12
                </span>
              </div>

            </div>

          </div>

          {/* RECENT ACTIVITY */}

          <div className="bg-white border rounded-xl p-6 shadow-sm">

            <h3 className="font-medium mb-4">
              Recent Activity
            </h3>

            <div className="space-y-3 text-sm text-gray-600">

              <p>📞 Call completed with Rahul Sharma</p>

              <p>📅 Meeting scheduled for Neha Gupta</p>

              <p>📄 Quotation sent to ABC Enterprises</p>

              <p>🏗 Project "Modern Villa" started</p>

            </div>

          </div>

        </div>

      </div>
    </MainLayout>
  );
};

export default Dashboard;