import { motion } from "framer-motion";
import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { PieChart as PieIcon } from "lucide-react";

export default function LeadSourceChart() {

  const [view, setView] = useState("count");

  // 🔥 SAMPLE DATA (replace with API later)
  const data = [
    { name: "Website", value: 120 },
    { name: "Referral", value: 80 },
    { name: "Ads", value: 60 },
    { name: "Social Media", value: 40 }
  ];

  const total = data.reduce((acc, d) => acc + d.value, 0);

  const COLORS = [
    "#6366F1",
    "#8B5CF6",
    "#22C55E",
    "#F59E0B"
  ];

  return (

    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >

      {/* 🌈 GRADIENT BORDER */}

      <div className="
      p-[1.5px]
      rounded-2xl
      bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400
      shadow-[0_10px_40px_rgba(99,102,241,0.15)]
      ">

        {/* 🌟 INNER CARD */}

        <div className="
        relative
        rounded-2xl
        bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40
        p-5 md:p-6
        space-y-6
        ">

          {/* ✨ GLOW */}

          <div className="absolute -top-16 -right-16 w-48 h-48 bg-purple-300/20 blur-3xl rounded-full"></div>


          {/* ================= HEADER ================= */}

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-lg font-semibold text-gray-800">
                Lead Sources
              </h3>

              <p className="text-xs text-gray-500">
                Analyze where your leads are coming from
              </p>

            </div>

            <PieIcon className="text-indigo-500" size={20} />

          </div>


          {/* ================= TOGGLE ================= */}

          <div className="flex items-center bg-gray-100 rounded-lg p-1 w-fit">

            {["count", "percentage", "both"].map(v => (

              <button
                key={v}
                onClick={() => setView(v)}
                className={`
                px-3 py-1 text-xs rounded-md transition
                ${view === v
                  ? "bg-white shadow text-indigo-600"
                  : "text-gray-500"}
                `}
              >
                {v === "count" ? "Count" :
                 v === "percentage" ? "%" : "Both"}
              </button>

            ))}

          </div>


          {/* ================= CHART ================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

            {/* PIE CHART */}

            <div className="h-64">

              <ResponsiveContainer width="100%" height="100%">

                <PieChart>

                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={3}
                  >
                    {data.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>


            {/* ================= LEGENDS ================= */}

            <div className="space-y-3">

              {data.map((item, i) => {

                const percent = ((item.value / total) * 100).toFixed(1);

                return (

                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="
                    flex items-center justify-between
                    p-3 rounded-lg
                    bg-white/70 backdrop-blur
                    border border-gray-200
                    shadow-sm
                    "
                  >

                    {/* LEFT */}

                    <div className="flex items-center gap-3">

                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ background: COLORS[i] }}
                      />

                      <span className="text-sm text-gray-700">
                        {item.name}
                      </span>

                    </div>


                    {/* RIGHT */}

                    <div className="text-sm font-medium text-gray-700">

                      {view === "count" && item.value}

                      {view === "percentage" && `${percent}%`}

                      {view === "both" && (
                        `${item.value} (${percent}%)`
                      )}

                    </div>

                  </motion.div>

                );

              })}

            </div>

          </div>

        </div>

      </div>

    </motion.div>

  );
}