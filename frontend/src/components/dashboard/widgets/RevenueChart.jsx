import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend
} from "recharts";

import { useState } from "react";

export default function RevenueChart(){

  /*
  |--------------------------------------------------------------------------
  | STATE
  |--------------------------------------------------------------------------
  */

  const [view,setView] = useState("value");

  /*
  |--------------------------------------------------------------------------
  | DATA (Monthly Comparison - CLIENT REQUIREMENT)
  |--------------------------------------------------------------------------
  */

  const data = [
    { month:"Jan", realized:40000, anticipated:50000 },
    { month:"Feb", realized:45000, anticipated:52000 },
    { month:"Mar", realized:47000, anticipated:55000 },
    { month:"Apr", realized:52000, anticipated:60000 },
    { month:"May", realized:58000, anticipated:65000 },
    { month:"Jun", realized:61000, anticipated:70000 }
  ];

  /*
  |--------------------------------------------------------------------------
  | CALCULATIONS
  |--------------------------------------------------------------------------
  */

  const avgRealization = Math.round(
    data.reduce((a,d)=>a+d.realized,0) /
    data.reduce((a,d)=>a+d.anticipated,0) * 100
  );

  /*
  |--------------------------------------------------------------------------
  | TOOLTIP
  |--------------------------------------------------------------------------
  */

  const CustomTooltip = ({active,payload,label})=>{

    if(active && payload && payload.length){

      const r = payload[0].value;
      const a = payload[1].value;
      const percent = ((r/a)*100).toFixed(1);

      return(

        <div className="bg-white border border-gray-200 shadow-md rounded-lg px-3 py-2 text-sm">

          <p className="text-gray-500 mb-1">{label}</p>

          <p className="text-emerald-600 font-medium">
            Realized: ₹{r.toLocaleString()}
          </p>

          <p className="text-indigo-600 font-medium">
            Anticipated: ₹{a.toLocaleString()}
          </p>

          {view !== "value" && (
            <p className="text-xs text-gray-500 mt-1">
              {percent}% achieved
            </p>
          )}

        </div>

      )

    }

    return null;

  };

  /*
  |--------------------------------------------------------------------------
  | UI
  |--------------------------------------------------------------------------
  */

  return(

    <motion.div
      initial={{opacity:0,y:12}}
      animate={{opacity:1,y:0}}
      className="relative"
    >

      {/* 🌈 PREMIUM BORDER */}

      <div className="
      p-[1.5px]
      rounded-2xl
      bg-gradient-to-r from-emerald-400 via-blue-400 to-indigo-400
      shadow-[0_10px_40px_rgba(59,130,246,0.15)]
      ">

        {/* INNER CARD */}

        <div className="
        relative
        rounded-2xl
        bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/40
        p-5 md:p-6
        space-y-6
        ">

          {/* GLOW */}

          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-300/20 blur-3xl rounded-full"></div>

          {/* ================= HEADER ================= */}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div className="flex items-center gap-3">

              <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                <TrendingUp size={18}/>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  Revenue Comparison
                </h3>
                <p className="text-xs text-gray-500">
                  Realized vs Anticipated (Monthly)
                </p>
              </div>

            </div>

            {/* TOGGLE */}

            <div className="flex items-center bg-gray-100 rounded-lg p-1">

              {["value","percentage","both"].map(v=>(
                <button
                  key={v}
                  onClick={()=>setView(v)}
                  className={`
                  px-3 py-1 text-xs rounded-md transition
                  ${view===v
                    ? "bg-white shadow text-blue-600"
                    : "text-gray-500"}
                  `}
                >
                  {v==="value"?"Value":v==="percentage"?"%":"Both"}
                </button>
              ))}

            </div>

          </div>


          {/* ================= CHART ================= */}

          <div className="h-[260px] md:h-[320px]">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={data}>

                <CartesianGrid strokeDasharray="3 3" opacity={0.2}/>

                <XAxis dataKey="month" tick={{fontSize:12}}/>

                <YAxis tick={{fontSize:12}}/>

                <Tooltip content={<CustomTooltip/>}/>

                <Legend />

                {/* REALIZED */}

                <Bar
                  dataKey="realized"
                  name="Realized"
                  radius={[6,6,0,0]}
                  fill="url(#realizedGradient)"
                />

                {/* ANTICIPATED */}

                <Bar
                  dataKey="anticipated"
                  name="Anticipated"
                  radius={[6,6,0,0]}
                  fill="url(#anticipatedGradient)"
                />

                {/* GRADIENTS */}

                <defs>

                  <linearGradient id="realizedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e"/>
                    <stop offset="100%" stopColor="#16a34a"/>
                  </linearGradient>

                  <linearGradient id="anticipatedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1"/>
                    <stop offset="100%" stopColor="#4f46e5"/>
                  </linearGradient>

                </defs>

              </BarChart>

            </ResponsiveContainer>

          </div>


          {/* ================= INSIGHT ================= */}

          <div className="
          flex flex-wrap items-center justify-between gap-2
          text-xs text-gray-500 pt-2 border-t
          ">

            <span>
              Avg realization: <span className="text-blue-600 font-medium">{avgRealization}%</span>
            </span>

            <span className="text-emerald-600 font-medium">
              Performance gap indicates revenue opportunity
            </span>

          </div>

        </div>

      </div>

    </motion.div>

  )

}