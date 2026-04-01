import React, { useState } from "react";
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
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from "recharts";

import {
  FaChartLine,
  FaProjectDiagram,
  FaTasks,
  FaRupeeSign
} from "react-icons/fa";

const funnelData = [
  { name: "New Leads", value: 120, fill: "#3B82F6" },
  { name: "Contacted", value: 80, fill: "#22C55E" },
  { name: "Qualified", value: 50, fill: "#F59E0B" },
  { name: "Proposal", value: 30, fill: "#FB923C" },
  { name: "Closed", value: 15, fill: "#EF4444" }
];

const pieData = [
  { name: "Website", value: 40 },
  { name: "Referral", value: 25 },
  { name: "Email Campaign", value: 20 },
  { name: "Social Media", value: 15 }
];

const COLORS = ["#6366F1", "#22C55E", "#F97316", "#EF4444"];

const Dashboard = () => {
  // --- STATE FOR CHART TOGGLES ---
  const [primaryChartType, setPrimaryChartType] = useState("funnel");
  const [secondaryChartType, setSecondaryChartType] = useState("pie");

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* HEADER */}
        <h1 className="text-3xl font-bold text-gray-800">
          Leads Dashboard
        </h1>

        {/* TOP ANALYTICS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* SALES FUNNEL / MULTI-CHART (Primary) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-indigo-900 text-white rounded-xl p-6 shadow-xl"
          >
            {/* Header with Dropdown (Scroll-down button) */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Sales Overview</h3>
              <select
                value={primaryChartType}
                onChange={(e) => setPrimaryChartType(e.target.value)}
                className="bg-slate-800 text-white text-sm border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer"
              >
                <option value="funnel">Funnel Chart</option>
                <option value="bar">Bar / Histogram</option>
                <option value="line">Line Graph</option>
                <option value="scatter">Scatter Plot</option>
              </select>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              {/* Conditional Rendering for Primary Chart */}
              {primaryChartType === "funnel" && (
                <FunnelChart>
                  <Tooltip cursor={{ fill: "transparent" }} />
                  <Funnel dataKey="value" data={funnelData} isAnimationActive>
                    <LabelList position="right" dataKey="name" fill="#fff" />
                  </Funnel>
                </FunnelChart>
              )}

              {primaryChartType === "bar" && (
                <BarChart data={funnelData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                  <XAxis dataKey="name" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" />
                  <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155" }} />
                  <Bar dataKey="value" fill="#6366F1" radius={[4, 4, 0, 0]} />
                </BarChart>
              )}

              {primaryChartType === "line" && (
                <LineChart data={funnelData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                  <XAxis dataKey="name" stroke="#cbd5e1" />
                  <YAxis stroke="#cbd5e1" />
                  <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155" }} />
                  <Line type="monotone" dataKey="value" stroke="#22C55E" strokeWidth={3} dot={{ r: 6 }} />
                </LineChart>
              )}

              {primaryChartType === "scatter" && (
                <ScatterChart margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                  <XAxis type="category" dataKey="name" name="Stage" stroke="#cbd5e1" />
                  <YAxis type="number" dataKey="value" name="Count" stroke="#cbd5e1" />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155" }} />
                  <Scatter name="Leads" data={funnelData} fill="#F97316" />
                </ScatterChart>
              )}
            </ResponsiveContainer>

            <div className="mt-4 text-sm opacity-90">
              Conversion Rate
              <span className="font-semibold text-green-300 ml-2">65.8%</span>
            </div>
          </motion.div>

          {/* LEAD SOURCES / MULTI-CHART (Secondary) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white rounded-xl p-6 shadow-xl"
          >
            {/* Header with Dropdown (Scroll-down button) */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Lead Sources</h3>
              <select
                value={secondaryChartType}
                onChange={(e) => setSecondaryChartType(e.target.value)}
                className="bg-slate-800 text-white text-sm border border-slate-600 rounded-md p-1.5 focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer"
              >
                <option value="pie">Pie Chart</option>
                <option value="bar">Bar Chart</option>
                <option value="line">Line Graph</option>
              </select>
            </div>

            <ResponsiveContainer width="100%" height={260}>
              {/* Conditional Rendering for Secondary Chart */}
              {secondaryChartType === "pie" && (
                <PieChart>
                  <Pie data={pieData} dataKey="value" outerRadius={90} label>
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderRadius: "8px", border: "none" }} />
                </PieChart>
              )}

              {secondaryChartType === "bar" && (
                <BarChart data={pieData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                  <XAxis dataKey="name" stroke="#cbd5e1" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#cbd5e1" tick={{ fontSize: 12 }} />
                  <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155" }} />
                  <Bar dataKey="value" fill="#F97316" radius={[4, 4, 0, 0]} />
                </BarChart>
              )}

              {secondaryChartType === "line" && (
                <LineChart data={pieData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                  <XAxis dataKey="name" stroke="#cbd5e1" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#cbd5e1" tick={{ fontSize: 12 }} />
                  <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155" }} />
                  <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={3} dot={{ r: 5 }} />
                </LineChart>
              )}
            </ResponsiveContainer>
          </motion.div>

        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* AI SCORE */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-6 rounded-xl shadow-lg">
            <FaChartLine className="text-2xl mb-2" />
            <p className="text-sm opacity-80">AI Lead Score</p>
            <h2 className="text-3xl font-bold">88</h2>
          </motion.div>

          {/* PROJECTS */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-xl shadow-lg">
            <FaProjectDiagram className="text-2xl mb-2" />
            <p className="text-sm opacity-80">Active Projects</p>
            <h2 className="text-3xl font-bold">15</h2>
          </motion.div>

          {/* TASKS */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-rose-500 to-pink-600 text-white p-6 rounded-xl shadow-lg">
            <FaTasks className="text-2xl mb-2" />
            <p className="text-sm opacity-80">Tasks Due</p>
            <h2 className="text-3xl font-bold">34</h2>
          </motion.div>

          {/* REVENUE */}
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-amber-400 to-orange-500 text-white p-6 rounded-xl shadow-lg">
            <FaRupeeSign className="text-2xl mb-2" />
            <p className="text-sm opacity-90">Monthly Revenue</p>
            <h2 className="text-3xl font-bold">₹18.4L</h2>
          </motion.div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* TOP PERFORMER */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white rounded-xl shadow-lg p-6">
            <h3 className="font-semibold mb-4 text-white">Top Performer</h3>
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/100" alt="Avatar" className="w-14 h-14 rounded-full border" />
              <div>
                <p className="font-semibold text-white">Amit Sharma</p>
                <p className="text-sm text-gray-300">Senior Sales Rep</p>
              </div>
            </div>
            <div className="mt-4 text-sm text-white space-y-1">
              <p>Deals Closed:<span className="font-semibold"> 32</span></p>
              <p>Revenue:<span className="font-semibold text-indigo-400"> ₹8.2L</span></p>
            </div>
          </motion.div>

          {/* UPCOMING ACTIVITIES */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white rounded-xl shadow-lg p-6">
            <h3 className="font-semibold mb-4 text-white">Upcoming Activities</h3>
            <div className="space-y-3 text-sm text-white">
              <p className="flex items-center gap-2"><span className="text-green-500">✔</span> Client Call with Rahul Sharma — <span className="text-indigo-400">In 30 mins</span></p>
              <p className="flex items-center gap-2"><span className="text-green-500">✔</span> Follow-up with Neha Gupta — Tomorrow</p>
              <p className="flex items-center gap-2"><span className="text-green-500">✔</span> Send Proposal to ABC Enterprises — Friday</p>
              <p className="flex items-center gap-2"><span className="text-green-500">✔</span> Review Project "NextGen App" — Monday</p>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;