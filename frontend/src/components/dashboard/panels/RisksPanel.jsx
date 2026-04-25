import { motion } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  User,
  TrendingDown
} from "lucide-react";

export default function RisksPanel(){

  /*
  |--------------------------------------------------------------------------
  | DATA (Replace with API later)
  |--------------------------------------------------------------------------
  */

  const risks = [
    {
      id:1,
      name:"Rahul Sharma",
      project:"Luxury Villa",
      score:20,
      lastContact:"15 days ago"
    },
    {
      id:2,
      name:"Anita Verma",
      project:"Office Interior",
      score:35,
      lastContact:"10 days ago"
    },
    {
      id:3,
      name:"Vikas Singh",
      project:"2BHK Design",
      score:40,
      lastContact:"7 days ago"
    }
  ];

  /*
  |--------------------------------------------------------------------------
  | SCORE COLOR
  |--------------------------------------------------------------------------
  */

  const getRiskColor = (score)=>{
    if(score < 30) return "text-red-600 bg-red-100";
    if(score < 50) return "text-orange-600 bg-orange-100";
    return "text-yellow-600 bg-yellow-100";
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
      bg-gradient-to-r from-red-400 via-orange-400 to-amber-400
      shadow-[0_10px_40px_rgba(239,68,68,0.15)]
      ">

        {/* INNER */}

        <div className="
        relative
        rounded-2xl
        bg-gradient-to-br from-white via-red-50/40 to-orange-50/40
        p-5 md:p-6
        space-y-5
        ">

          {/* GLOW */}

          <div className="absolute -top-20 -right-20 w-56 h-56 bg-red-300/20 blur-3xl rounded-full"></div>


          {/* ================= HEADER ================= */}

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-lg font-semibold text-gray-800">
                Risk Alerts
              </h3>

              <p className="text-xs text-gray-500">
                Leads at risk of conversion loss
              </p>

            </div>

            <AlertTriangle className="text-red-500" size={20} />

          </div>


          {/* ================= RISK LIST ================= */}

          <div className="space-y-3 flex-1">
            {risks.map((r,i)=>{

              const isCritical = r.score < 30;

              return(

                <motion.div
                  key={r.id}
                  initial={{opacity:0,x:-10}}
                  animate={{opacity:1,x:0}}
                  transition={{delay:i * 0.05}}
                  whileHover={{scale:1.02}}
                  className="
                  flex items-start justify-between gap-3
                  p-3 rounded-xl
                  bg-white/80 backdrop-blur
                  border border-gray-200
                  shadow-sm
                  hover:shadow-md
                  transition
                  "
                >

                  {/* LEFT */}

                  <div className="flex items-start gap-3">

                    {/* ICON */}

                    <div className={`
                    p-2 rounded-lg
                    ${getRiskColor(r.score)}
                    `}>

                      <TrendingDown size={16}/>

                    </div>

                    {/* TEXT */}

                    <div>

                      <p className="text-sm font-medium text-gray-800">
                        {r.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        {r.project}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">

                        <Clock size={12}/>
                        Last contact: {r.lastContact}

                      </div>

                    </div>

                  </div>


                  {/* RIGHT */}

                  <div className="text-right">

                    <p className={`
                    text-sm font-semibold
                    ${r.score < 30 ? "text-red-600" :
                      r.score < 50 ? "text-orange-600" :
                      "text-yellow-600"}
                    `}>
                      {r.score}
                    </p>

                    <p className="text-[10px] text-gray-400">
                      score
                    </p>

                  </div>

                </motion.div>

              )

            })}

          </div>


          {/* ================= FOOTER ================= */}

          <div className="
          flex items-center justify-between
          text-xs text-gray-500 pt-2 border-t
          ">

            <span>
              {risks.length} risky leads
            </span>

            <span className="text-red-600 font-medium cursor-pointer hover:underline">
              Take action →
            </span>

          </div>

        </div>

      </div>

    </motion.div>

  )

}