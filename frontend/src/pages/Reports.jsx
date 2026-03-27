import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

import {
  FaUsers,
  FaProjectDiagram,
  FaCalendarCheck,
  FaRupeeSign
} from "react-icons/fa";

const revenueData = [
  { month: "Jan", revenue: 400000 },
  { month: "Feb", revenue: 300000 },
  { month: "Mar", revenue: 500000 },
  { month: "Apr", revenue: 700000 },
  { month: "May", revenue: 600000 },
  { month: "Jun", revenue: 800000 },
];

const leadsData = [
  { month: "Jan", leads: 20 },
  { month: "Feb", leads: 35 },
  { month: "Mar", leads: 30 },
  { month: "Apr", leads: 50 },
  { month: "May", leads: 40 },
  { month: "Jun", leads: 55 },
];

const leadSourceData = [
  { name: "IndiaMart", value: 40 },
  { name: "MagicBricks", value: 25 },
  { name: "Website", value: 20 },
  { name: "Referral", value: 15 },
];

const COLORS = ["#6366F1", "#10B981", "#F59E0B", "#EF4444"];

const Reports = () => {
  return (
    <MainLayout>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >

        {/* PAGE HEADER */}

        <h1 className="text-2xl font-semibold text-gray-800">
          Reports & Analytics
        </h1>

        {/* STATS CARDS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 border border-blue-200 p-5 rounded-xl flex items-center gap-4"
          >
            <FaUsers className="text-blue-600 text-2xl" />
            <div>
              <p className="text-sm text-gray-600">Total Leads</p>
              <h2 className="text-xl font-bold">125</h2>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 border border-green-200 p-5 rounded-xl flex items-center gap-4"
          >
            <FaProjectDiagram className="text-green-600 text-2xl" />
            <div>
              <p className="text-sm text-gray-600">Active Projects</p>
              <h2 className="text-xl font-bold">12</h2>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl flex items-center gap-4"
          >
            <FaCalendarCheck className="text-yellow-600 text-2xl" />
            <div>
              <p className="text-sm text-gray-600">Meetings This Month</p>
              <h2 className="text-xl font-bold">28</h2>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-purple-50 border border-purple-200 p-5 rounded-xl flex items-center gap-4"
          >
            <FaRupeeSign className="text-purple-600 text-2xl" />
            <div>
              <p className="text-sm text-gray-600">Revenue</p>
              <h2 className="text-xl font-bold">₹32L</h2>
            </div>
          </motion.div>

        </div>

        {/* CHARTS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* REVENUE CHART */}

          <div className="bg-white border rounded-xl p-5 shadow-sm">

            <h3 className="font-medium mb-4">
              Monthly Revenue
            </h3>

            <ResponsiveContainer width="100%" height={300}>

              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#6366F1" radius={[4,4,0,0]} />
              </BarChart>

            </ResponsiveContainer>

          </div>

          {/* LEADS CHART */}

          <div className="bg-white border rounded-xl p-5 shadow-sm">

            <h3 className="font-medium mb-4">
              Leads Generated
            </h3>

            <ResponsiveContainer width="100%" height={300}>

              <LineChart data={leadsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="leads"
                  stroke="#10B981"
                  strokeWidth={3}
                />
              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* PIE CHART */}

        <div className="bg-white border rounded-xl p-5 shadow-sm">

          <h3 className="font-medium mb-4">
            Lead Sources
          </h3>

          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={leadSourceData}
                dataKey="value"
                outerRadius={120}
                label
              >
                {leadSourceData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </motion.div>

    </MainLayout>
  );
};

export default Reports;