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

  return (

    <MainLayout>

      <div className="space-y-8">

        {/* HEADER */}

        <h1 className="text-3xl font-bold text-gray-800">
          Leads Dashboard
        </h1>

        {/* TOP ANALYTICS */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* SALES FUNNEL */}

          <motion.div
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-indigo-900 text-white rounded-xl p-6 shadow-xl"
          >

            <h3 className="text-lg font-semibold mb-4">
              Sales Funnel Overview
            </h3>

            <ResponsiveContainer width="100%" height={300}>

              <FunnelChart>

                <Funnel
                  dataKey="value"
                  data={funnelData}
                  isAnimationActive
                >

                  <LabelList position="right" dataKey="name" fill="#fff"/>

                </Funnel>

              </FunnelChart>

            </ResponsiveContainer>

            <div className="mt-4 text-sm opacity-90">
              Conversion Rate
              <span className="font-semibold text-green-300 ml-2">
                65.8%
              </span>
            </div>

          </motion.div>

          {/* PIE CHART */}

          <motion.div
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white rounded-xl p-6 shadow-xl"
          >

            <h3 className="text-lg font-semibold mb-4">
              Lead Sources
            </h3>

            <ResponsiveContainer width="100%" height={260}>

              <PieChart>

                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={90}
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

          {/* AI SCORE */}

          <motion.div
            whileHover={{ scale:1.05 }}
            className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-6 rounded-xl shadow-lg"
          >

            <FaChartLine className="text-2xl mb-2"/>

            <p className="text-sm opacity-80">
              AI Lead Score
            </p>

            <h2 className="text-3xl font-bold">
              88
            </h2>

          </motion.div>

          {/* PROJECTS */}

          <motion.div
            whileHover={{ scale:1.05 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-xl shadow-lg"
          >

            <FaProjectDiagram className="text-2xl mb-2"/>

            <p className="text-sm opacity-80">
              Active Projects
            </p>

            <h2 className="text-3xl font-bold">
              15
            </h2>

          </motion.div>

          {/* TASKS */}

          <motion.div
            whileHover={{ scale:1.05 }}
            className="bg-gradient-to-r from-rose-500 to-pink-600 text-white p-6 rounded-xl shadow-lg"
          >

            <FaTasks className="text-2xl mb-2"/>

            <p className="text-sm opacity-80">
              Tasks Due
            </p>

            <h2 className="text-3xl font-bold">
              34
            </h2>

          </motion.div>

          {/* REVENUE */}

          <motion.div
            whileHover={{ scale:1.05 }}
            className="bg-gradient-to-r from-amber-400 to-orange-500 text-white p-6 rounded-xl shadow-lg"
          >

            <FaRupeeSign className="text-2xl mb-2"/>

            <p className="text-sm opacity-90">
              Monthly Revenue
            </p>

            <h2 className="text-3xl font-bold">
              ₹18.4L
            </h2>

          </motion.div>

        </div>

        {/* BOTTOM SECTION */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* TOP PERFORMER */}

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white rounded-xl shadow-lg p-6"
          >

            <h3 className="font-semibold mb-4 text-White">
              Top Performer
            </h3>

            <div className="flex items-center gap-4">

              <img
                src="https://i.pravatar.cc/100"
                className="w-14 h-14 rounded-full border"
              />

              <div>

                <p className="font-semibold text-White">
                  Amit Sharma
                </p>

                <p className="text-sm text-gray-300">
                  Senior Sales Rep
                </p>

              </div>

            </div>

            <div className="mt-4 text-sm text-white space-y-1">

              <p>
                Deals Closed:
                <span className="font-semibold"> 32</span>
              </p>

              <p>
                Revenue:
                <span className="font-semibold text-indigo-600">
                  ₹8.2L
                </span>
              </p>

            </div>

          </motion.div>

          {/* UPCOMING ACTIVITIES */}

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white rounded-xl shadow-lg p-6"
          >

            <h3 className="font-semibold mb-4 text-White">
              Upcoming Activities
            </h3>

            <div className="space-y-3 text-sm text-White">

              <p className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                Client Call with Rahul Sharma —
                <span className="text-indigo-600">
                  In 30 mins
                </span>
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                Follow-up with Neha Gupta — Tomorrow
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                Send Proposal to ABC Enterprises — Friday
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                Review Project "NextGen App" — Monday
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </MainLayout>

  );

};

export default Dashboard;