import { motion } from "framer-motion";
import { FaPlus, FaProjectDiagram } from "react-icons/fa";

export default function ProjectHeader({ onCreate }) {

  // 🔐 ROLE (later from auth context)
  const role = "Admin"; // change dynamically later

  const canCreate = role === "Admin" || role === "Senior PM";

  return (

    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
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
        p-5 md:p-6
        flex flex-col lg:flex-row lg:items-center lg:justify-between
        gap-5
        ">

          {/* ✨ GLOW */}

          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-300/20 blur-3xl rounded-full"></div>


          {/* ================= LEFT CONTENT ================= */}

          <div className="flex items-start gap-4">

            {/* ICON */}

            <div className="
            p-3 rounded-xl
            bg-gradient-to-br from-indigo-500 to-purple-500
            text-white shadow-md
            ">

              <FaProjectDiagram size={20} />

            </div>


            {/* TEXT */}

            <div>

              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                Project & Task Management
              </h2>

              <p className="text-sm text-gray-500 mt-1 max-w-xl">
                Manage project lifecycle from initiation to completion with structured
                tasks, schedules, expenses and audit tracking.
              </p>

            </div>

          </div>


          {/* ================= RIGHT ACTION ================= */}

          <div className="flex items-center gap-3">

            {canCreate ? (

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCreate}
                className="
                flex items-center gap-2
                px-4 py-2.5
                rounded-xl
                text-sm font-medium
                text-white
                bg-gradient-to-r from-indigo-500 to-purple-500
                shadow-md hover:shadow-lg
                transition
                "
              >

                <FaPlus />

                Create Project

              </motion.button>

            ) : (

              <span className="
              text-xs text-gray-400
              bg-gray-100 px-3 py-2 rounded-lg
              ">
                Only Admin / Senior PM can create projects
              </span>

            )}

          </div>

        </div>

      </div>

    </motion.div>

  );

}