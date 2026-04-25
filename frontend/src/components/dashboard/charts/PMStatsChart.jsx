import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell
} from "recharts";
import { Users } from "lucide-react";

export default function PMStatsChart(){

  /*
  |--------------------------------------------------------------------------
  | DATA (Replace with API later)
  |--------------------------------------------------------------------------
  */

  const data = [
    { name:"Rohit", projects:8 },
    { name:"Amit", projects:5 },
    { name:"Priya", projects:6 },
    { name:"Neha", projects:4 },
    { name:"Karan", projects:7 }
  ];

  /*
  |--------------------------------------------------------------------------
  | COLORS (GRADIENT STYLE)
  |--------------------------------------------------------------------------
  */

  const colors = [
    "#6366F1",
    "#8B5CF6",
    "#22C55E",
    "#F59E0B",
    "#06B6D4"
  ];

  /*
  |--------------------------------------------------------------------------
  | CALCULATIONS
  |--------------------------------------------------------------------------
  */

  const totalProjects = data.reduce((a,d)=>a+d.projects,0);
  const topPerformer = data.reduce((max,cur)=>
    cur.projects > max.projects ? cur : max
  );

  /*
  |--------------------------------------------------------------------------
  | TOOLTIP
  |--------------------------------------------------------------------------
  */

  const CustomTooltip = ({active,payload,label})=>{

    if(active && payload && payload.length){

      return(
        <div className="bg-white border border-gray-200 shadow-md rounded-lg px-3 py-2 text-sm">
          <p className="text-gray-500">{label}</p>
          <p className="font-semibold text-gray-800">
            {payload[0].value} active projects
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
      bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400
      shadow-[0_10px_40px_rgba(99,102,241,0.15)]
      ">

        {/* INNER */}

        <div className="
        relative
        rounded-2xl
        bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40
        p-5 md:p-6
        space-y-6
        ">

          {/* GLOW */}

          <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-300/20 blur-3xl rounded-full"></div>


          {/* ================= HEADER ================= */}

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-lg font-semibold text-gray-800">
                Project Manager Performance
              </h3>

              <p className="text-xs text-gray-500">
                Active projects per manager
              </p>

            </div>

            <Users className="text-indigo-500" size={20} />

          </div>


          {/* ================= CHART ================= */}

          <div className="h-[260px] md:h-[300px]">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={data}>

                <CartesianGrid strokeDasharray="3 3" opacity={0.2}/>

                <XAxis dataKey="name" tick={{fontSize:12}}/>

                <YAxis tick={{fontSize:12}}/>

                <Tooltip content={<CustomTooltip/>}/>

                <Bar
                  dataKey="projects"
                  radius={[6,6,0,0]}
                >
                  {data.map((entry,index)=>(
                    <Cell
                      key={index}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Bar>

              </BarChart>

            </ResponsiveContainer>

          </div>


          {/* ================= INSIGHTS ================= */}

          <div className="
          flex flex-wrap items-center justify-between gap-2
          text-xs text-gray-500 pt-2 border-t
          ">

            <span>
              Total active projects:{" "}
              <span className="text-indigo-600 font-medium">
                {totalProjects}
              </span>
            </span>

            <span>
              Top performer:{" "}
              <span className="text-emerald-600 font-medium">
                {topPerformer.name} ({topPerformer.projects})
              </span>
            </span>

          </div>

        </div>

      </div>

    </motion.div>

  );

}