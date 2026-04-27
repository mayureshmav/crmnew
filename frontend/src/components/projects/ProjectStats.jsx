import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaCheckCircle,
  FaClock,
  FaRupeeSign
} from "react-icons/fa";

export default function ProjectStats({ projects }) {

  /*
  |--------------------------------------------------------------------------
  | CALCULATIONS
  |--------------------------------------------------------------------------
  */

  const total = projects.length;

  const completed = projects.filter(p => p.status === "Completed").length;

  const active = projects.filter(
    p => p.status === "In Progress" || p.status === "Preconstruction"
  ).length;

  const totalValue = projects.reduce((acc, p) => {
    const val = Number(p.value?.replace(/[^\d]/g, "")) || 0;
    return acc + val;
  }, 0);

  /*
  |--------------------------------------------------------------------------
  | CARD CONFIG
  |--------------------------------------------------------------------------
  */

  const cards = [
    {
      title: "Total Projects",
      value: total,
      icon: FaProjectDiagram,
      gradient: "from-indigo-500 to-purple-500",
      bg: "from-indigo-50 to-purple-50",
      border: "border-indigo-200"
    },
    {
      title: "Active Projects",
      value: active,
      icon: FaClock,
      gradient: "from-yellow-500 to-amber-500",
      bg: "from-yellow-50 to-amber-50",
      border: "border-yellow-200"
    },
    {
      title: "Completed",
      value: completed,
      icon: FaCheckCircle,
      gradient: "from-emerald-500 to-green-500",
      bg: "from-emerald-50 to-green-50",
      border: "border-emerald-200"
    },
    {
      title: "Project Value",
      value: `₹${totalValue.toLocaleString()}`,
      icon: FaRupeeSign,
      gradient: "from-blue-500 to-indigo-500",
      bg: "from-blue-50 to-indigo-50",
      border: "border-blue-200"
    }
  ];

  /*
  |--------------------------------------------------------------------------
  | UI
  |--------------------------------------------------------------------------
  */

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

      {cards.map((card, i) => {

        const Icon = card.icon;

        return (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative"
          >

            {/* 🌈 BORDER */}

            <div className={`
            p-[1.5px]
            rounded-2xl
            bg-gradient-to-r ${card.gradient}
            shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            `}>

              {/* CARD */}

              <div className={`
              relative
              rounded-2xl
              bg-gradient-to-br ${card.bg}
              border ${card.border}
              p-5
              flex items-center gap-4
              `}>

                {/* GLOW */}

                <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/30 blur-2xl rounded-full"></div>

                {/* ICON */}

                <div className={`
                p-3 rounded-xl
                bg-gradient-to-br ${card.gradient}
                text-white shadow-md
                `}>

                  <Icon size={18} />

                </div>

                {/* TEXT */}

                <div>

                  <p className="text-xs text-gray-500">
                    {card.title}
                  </p>

                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    {card.value}
                  </h3>

                </div>

              </div>

            </div>

          </motion.div>

        );

      })}

    </div>

  );

}