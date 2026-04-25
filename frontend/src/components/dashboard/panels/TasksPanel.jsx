import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  User,
  AlertCircle
} from "lucide-react";

export default function TasksPanel(){

  /*
  |--------------------------------------------------------------------------
  | DATA (Replace with API later)
  |--------------------------------------------------------------------------
  */

  const tasks = [
    {
      id:1,
      title:"Follow up with Rahul Sharma",
      due:"Today, 5:00 PM",
      user:"Rohit",
      status:"urgent"
    },
    {
      id:2,
      title:"Prepare quotation for client",
      due:"Tomorrow",
      user:"Amit",
      status:"pending"
    },
    {
      id:3,
      title:"Client meeting (Interior project)",
      due:"24 Apr, 11:30 AM",
      user:"Priya",
      status:"normal"
    },
    {
      id:4,
      title:"Send design approval mail",
      due:"25 Apr",
      user:"Neha",
      status:"normal"
    }
  ];

  /*
  |--------------------------------------------------------------------------
  | STATUS COLOR
  |--------------------------------------------------------------------------
  */

  const statusStyles = {
    urgent:"bg-red-100 text-red-600",
    pending:"bg-yellow-100 text-yellow-600",
    normal:"bg-emerald-100 text-emerald-600"
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
      bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400
      shadow-[0_10px_40px_rgba(251,191,36,0.15)]
      ">

        {/* INNER */}

        <div className="
        relative
        rounded-2xl
        bg-gradient-to-br from-white via-yellow-50/40 to-orange-50/40
        p-5 md:p-6
        space-y-6
        ">

          {/* GLOW */}

          <div className="absolute -top-20 -right-20 w-56 h-56 bg-yellow-300/20 blur-3xl rounded-full"></div>


          {/* ================= HEADER ================= */}

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-lg font-semibold text-gray-800">
                Tasks Due
              </h3>

              <p className="text-xs text-gray-500">
                Pending actions requiring attention
              </p>

            </div>

            <CheckCircle2 className="text-yellow-500" size={20} />

          </div>


          {/* ================= TASK LIST ================= */}

          <div className="space-y-3">

            {tasks.map((task,i)=>{

              const isUrgent = task.status === "urgent";

              return(

                <motion.div
                  key={task.id}
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

                    {/* STATUS ICON */}

                    <div className={`
                    p-2 rounded-lg
                    ${statusStyles[task.status]}
                    `}>

                      {isUrgent
                        ? <AlertCircle size={16}/>
                        : <Clock size={16}/>
                      }

                    </div>

                    {/* TEXT */}

                    <div>

                      <p className="text-sm font-medium text-gray-800">
                        {task.title}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">

                        <Clock size={12}/>
                        {task.due}

                      </div>

                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">

                        <User size={12}/>
                        {task.user}

                      </div>

                    </div>

                  </div>


                  {/* RIGHT BADGE */}

                  <span className={`
                  text-[10px] px-2 py-1 rounded-full font-medium
                  ${statusStyles[task.status]}
                  `}>
                    {task.status}
                  </span>

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
              {tasks.length} pending tasks
            </span>

            <span className="text-yellow-600 font-medium cursor-pointer hover:underline">
              View all →
            </span>

          </div>

        </div>

      </div>

    </motion.div>

  )

}