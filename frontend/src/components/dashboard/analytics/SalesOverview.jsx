import { motion } from "framer-motion";
import { useState } from "react";
import {
  CalendarDays,
  Download,
  BarChart3
} from "lucide-react";

export default function SalesOverview() {

  const [period, setPeriod] = useState("MTD");
  const [view, setView] = useState("value");

  const periods = ["MTD", "Last Month", "Last 3 Months", "Custom"];
  const views = ["value", "percentage", "both"];

  return (

    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative"
    >

      {/* 🌈 OUTER GRADIENT BORDER */}

      <div className="
      p-[1.5px]
      rounded-2xl
      bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400
      shadow-[0_10px_40px_rgba(99,102,241,0.15)]
      ">

        {/* 🌟 INNER CONTAINER */}

        <div className="
        relative
        rounded-2xl
        bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40
        backdrop-blur
        p-5 md:p-6
        space-y-6
        ">

          {/* ✨ GLOW EFFECT */}

          <div className="absolute -top-20 -right-20 w-56 h-56 bg-indigo-300/20 blur-3xl rounded-full"></div>


          {/* ================= HEADER ================= */}

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            {/* TITLE */}

            <div>

              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                Sales Overview
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Analyze revenue trends and performance over time
              </p>

            </div>


            {/* CONTROLS */}

            <div className="flex flex-wrap items-center gap-3">

              {/* 📅 PERIOD FILTER */}

              <div className="flex items-center gap-2 bg-white/80 border rounded-lg px-3 py-2">

                <CalendarDays size={16} className="text-indigo-500" />

                <select
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="bg-transparent outline-none text-sm"
                >
                  {periods.map(p => (
                    <option key={p}>{p}</option>
                  ))}
                </select>

              </div>


              {/* 📤 EXPORT */}

              <div className="flex items-center gap-2">

                <button className="
                flex items-center gap-2
                px-3 py-2
                text-sm
                rounded-lg
                bg-gradient-to-r from-indigo-500 to-purple-500
                text-white
                shadow hover:shadow-md
                transition
                ">
                  <Download size={14} />
                  Chart
                </button>

                <button className="
                flex items-center gap-2
                px-3 py-2
                text-sm
                rounded-lg
                bg-white border border-gray-200
                hover:bg-gray-50
                transition
                ">
                  <Download size={14} />
                  Data
                </button>

              </div>


              {/* 🔁 TOGGLE */}

              <div className="flex items-center bg-gray-100 rounded-lg p-1">

                {views.map(v => (

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
                    {v === "value" ? "Value" :
                     v === "percentage" ? "%" : "Both"}
                  </button>

                ))}

              </div>

            </div>

          </div>


          {/* ================= CHART SECTION ================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="
            rounded-xl
            border border-gray-200
            bg-white/80 backdrop-blur
            p-6
            shadow-sm
            "
          >

            <div className="flex items-center justify-between mb-4">

              <h4 className="text-sm font-semibold text-gray-700">
                Revenue Trend
              </h4>

              <BarChart3 size={18} className="text-indigo-500" />

            </div>

            {/* 📊 CHART PLACEHOLDER */}

            <div className="
            h-52 md:h-64
            flex items-center justify-center
            border border-dashed rounded-lg
            bg-gradient-to-br from-indigo-50 to-purple-50
            text-gray-400 text-sm
            ">

              Chart will render here (Recharts / Chart.js)

            </div>

          </motion.div>

        </div>

      </div>

    </motion.div>

  );
}