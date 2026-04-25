import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { MapPin } from "lucide-react";

export default function RegionChart(){

  /*
  |--------------------------------------------------------------------------
  | DATA (Replace with API later)
  |--------------------------------------------------------------------------
  */

  const data = [
    { name:"Delhi NCR", value:120 },
    { name:"Mumbai", value:90 },
    { name:"Bangalore", value:70 },
    { name:"Hyderabad", value:50 },
    { name:"Pune", value:40 }
  ];

  const total = data.reduce((a,d)=>a+d.value,0);

  /*
  |--------------------------------------------------------------------------
  | COLORS
  |--------------------------------------------------------------------------
  */

  const COLORS = [
    "#6366F1",
    "#8B5CF6",
    "#22C55E",
    "#F59E0B",
    "#06B6D4"
  ];

  /*
  |--------------------------------------------------------------------------
  | TOOLTIP
  |--------------------------------------------------------------------------
  */

  const CustomTooltip = ({active,payload})=>{

    if(active && payload && payload.length){

      const item = payload[0];
      const percent = ((item.value/total)*100).toFixed(1);

      return(
        <div className="bg-white border border-gray-200 shadow-md rounded-lg px-3 py-2 text-sm">
          <p className="text-gray-500">{item.name}</p>
          <p className="font-semibold text-gray-800">
            {item.value} leads ({percent}%)
          </p>
        </div>
      );
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

      {/* 🌈 BORDER */}

      <div className="
      p-[1.5px]
      rounded-2xl
      bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400
      shadow-[0_10px_40px_rgba(6,182,212,0.15)]
      ">

        {/* INNER */}

        <div className="
        relative
        rounded-2xl
        bg-gradient-to-br from-white via-cyan-50/40 to-blue-50/40
        p-5 md:p-6
        space-y-6
        ">

          {/* GLOW */}

          <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-300/20 blur-3xl rounded-full"></div>


          {/* ================= HEADER ================= */}

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-lg font-semibold text-gray-800">
                Region-wise Performance
              </h3>

              <p className="text-xs text-gray-500">
                Lead distribution by region
              </p>

            </div>

            <MapPin className="text-cyan-500" size={20} />

          </div>


          {/* ================= CHART + LEGEND ================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

            {/* PIE */}

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
                    {data.map((entry,index)=>(
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>

                  <Tooltip content={<CustomTooltip/>}/>

                </PieChart>

              </ResponsiveContainer>

            </div>


            {/* LEGEND */}

            <div className="space-y-3">

              {data.map((item,i)=>{

                const percent = ((item.value/total)*100).toFixed(1);

                return(

                  <motion.div
                    key={i}
                    whileHover={{scale:1.02}}
                    className="
                    flex items-center justify-between
                    p-3 rounded-lg
                    bg-white/70 backdrop-blur
                    border border-gray-200
                    shadow-sm
                    "
                  >

                    <div className="flex items-center gap-3">

                      <span
                        className="w-3 h-3 rounded-full"
                        style={{background:COLORS[i]}}
                      />

                      <span className="text-sm text-gray-700">
                        {item.name}
                      </span>

                    </div>

                    <div className="text-sm font-medium text-gray-700">
                      {item.value} ({percent}%)
                    </div>

                  </motion.div>

                )

              })}

            </div>

          </div>


          {/* ================= INSIGHTS ================= */}

          <div className="
          flex flex-wrap items-center justify-between gap-2
          text-xs text-gray-500 pt-2 border-t
          ">

            <span>
              Total leads:{" "}
              <span className="text-blue-600 font-medium">
                {total}
              </span>
            </span>

            <span>
              Top region:{" "}
              <span className="text-emerald-600 font-medium">
                {data[0].name}
              </span>
            </span>

          </div>

        </div>

      </div>

    </motion.div>

  );

}